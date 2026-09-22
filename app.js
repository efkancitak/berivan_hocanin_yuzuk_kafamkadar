(() => {
  const D = window.STUDY_DATA;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const storeKey = "gogus-kurul-kampi-v1";
  const saved = JSON.parse(localStorage.getItem(storeKey) || "{}");
  const state = {
    view:"dashboard", topic:null,
    known:new Set(saved.known || []), bookmarks:new Set(saved.bookmarks || []),
    quizCorrect:saved.quizCorrect || 0, quizAnswered:saved.quizAnswered || 0,
    cardIndex:0, cardFilter:"all", cardDeck:[],
    quizFilter:"all", quizDeck:[], quizIndex:0, quizSession:[],
    starFilter:"all"
  };

  const topicMap = Object.fromEntries(D.topics.map(t => [t.id,t]));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const persist = () => localStorage.setItem(storeKey, JSON.stringify({known:[...state.known],bookmarks:[...state.bookmarks],quizCorrect:state.quizCorrect,quizAnswered:state.quizAnswered}));
  const toast = msg => { const el=$("#toast"); el.textContent=msg; el.classList.add("show"); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove("show"),2200); };
  const shuffle = a => { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; };

  function nav(view, opts={}){
    state.view=view;
    $$(".view").forEach(v=>v.classList.remove("active"));
    const target=$("#view-"+view);
    if(target) target.classList.add("active");
    $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view || (view==="topic"&&b.dataset.view==="topics")));
    if(!opts.keepScroll) window.scrollTo({top:0,behavior:"smooth"});
    if(view==="cards") renderCard();
    if(view==="quiz" && !state.quizDeck.length) resetQuiz();
    history.replaceState(null,"",view==="dashboard"?location.pathname:`#${view}`);
  }

  function topicCard(t){
    return `<button class="topic-card" data-topic="${t.id}" style="--accent:${t.accent}"><span class="num">${t.no}</span><h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p><footer>★ ${t.stars.length} vurgu <span>•</span> ${t.pages||32} sayfa</footer></button>`;
  }

  function renderDashboard(){
    $("#dashboard-topics").innerHTML=D.topics.slice(0,8).map(topicCard).join("");
    updateProgress();
  }

  function renderStars(){
    const filters=[`<button class="filter-btn ${state.starFilter==='all'?'active':''}" data-star-filter="all">Tümü</button>`,...D.topics.filter(t=>t.stars.length).map(t=>`<button class="filter-btn ${state.starFilter===t.id?'active':''}" data-star-filter="${t.id}">${esc(t.title)}</button>`)];
    $("#star-filters").innerHTML=filters.join("");
    const topics=state.starFilter==="all"?D.topics:D.topics.filter(t=>t.id===state.starFilter);
    $("#starred-list").innerHTML=topics.map(t=>`<article class="star-group"><header><h2><span style="color:${t.accent}">★</span> ${esc(t.title)}</h2><button data-topic="${t.id}">Konuya git →</button></header><div class="star-list">${t.stars.map((s,i)=>`<div class="star-item"><b>${s[1]==='handwritten'?'✎':'★'}</b><p>${esc(s[0])}<small>${s[1]==='handwritten'?'El yazısı/işaret katmanı':'Slayt vurgusu'} • ${esc(t.source)}</small></p></div>`).join("")}</div></article>`).join("");
  }

  function renderTopicList(){
    let topics=[...D.topics]; const mode=$("#topic-sort")?.value || "priority";
    if(mode==="az") topics.sort((a,b)=>a.title.localeCompare(b.title,"tr"));
    if(mode==="priority") topics.sort((a,b)=>a.priority-b.priority);
    $("#topic-list").innerHTML=topics.map(t=>`<article class="topic-row"><div class="topic-icon" style="color:${t.accent}">${t.icon}</div><div><h2>${esc(t.title)}</h2><p>${esc(t.summary)}</p><div class="metrics"><span>★ ${t.stars.length} vurgu</span><span>▤ ${t.blocks.length} bölüm</span><span>${t.pages||32} sayfa</span></div></div><button class="open-topic" data-topic="${t.id}" aria-label="${esc(t.title)} konusunu aç">→</button></article>`).join("");
  }

  function openTopic(id){
    const t=topicMap[id]; if(!t) return;
    state.topic=id;
    const savedTopic=state.bookmarks.has(id);
    $("#topic-detail").innerHTML=`
      <div class="topic-hero"><button class="back-btn" data-view="topics">← Konu listesi</button><span class="kicker">${t.no} • ${esc(t.source)}</span><button class="bookmark ${savedTopic?'saved':''}" data-bookmark="${t.id}" aria-label="Konuyu işaretle">★</button><h1>${esc(t.title)}</h1><p>${esc(t.summary)}</p><div class="topic-tools"><button class="secondary" data-view="starred">★ Vurguları aç</button><button class="secondary" data-card-filter="${t.id}">▰ Bu konunun kartları</button><button class="secondary" data-quiz-filter="${t.id}">✓ Bu konudan sorular</button></div></div>
      <div class="detail-layout"><div>${t.blocks.map((b,i)=>`<section class="content-block"><button class="bookmark ${state.bookmarks.has(`${t.id}:${i}`)?'saved':''}" data-bookmark="${t.id}:${i}" aria-label="Bölümü işaretle">★</button><h2>${esc(b.h)}</h2><ul>${b.items.map(x=>`<li>${highlightThresholds(esc(x))}</li>`).join("")}</ul></section>`).join("")}</div><aside class="side-stack"><div class="callout"><h3>SINAV CÜMLESİ</h3><p>${esc(t.exam)}</p></div><div class="callout"><h3>HAFIZA ÇENGELİ</h3><p>${esc(t.memory)}</p></div><div class="callout"><h3>TUZAKLAR</h3><ul>${t.pitfalls.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div class="callout"><h3>KAYNAK</h3><p>${esc(t.source)} • ${t.pages||32} sayfa</p></div></aside></div>`;
    nav("topic");
  }

  function highlightThresholds(s){
    return s.replace(/(&gt;|&lt;|≤|≥|−|\bPaO₂\b|\bPaCO₂\b|\bFEV₁\/FVC\b|\bADA\b|\bLDH\b|\bRHC\b|\bV\/Q\b)/g,"<strong>$1</strong>");
  }

  function renderAlgorithms(){
    $("#algorithm-grid").innerHTML=D.algorithms.map(a=>`<article class="algorithm"><header><h2>${esc(a.title)}</h2><p>${esc(a.sub)}</p></header><div class="algo-body">${a.rows.map(r=>`<div class="algo-row"><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div>`).join("")}</div></article>`).join("");
  }

  function fillSelects(){
    const options=D.topics.map(t=>`<option value="${t.id}">${esc(t.title)}</option>`).join("");
    $("#card-topic").insertAdjacentHTML("beforeend",options);
    $("#quiz-topic").insertAdjacentHTML("beforeend",options);
  }

  function buildDeck(){
    state.cardDeck=D.cards.map((c,i)=>({c,i})).filter(x=>state.cardFilter==="all"||x.c[0]===state.cardFilter);
    state.cardIndex=Math.min(state.cardIndex,Math.max(0,state.cardDeck.length-1));
  }

  function renderCard(){
    buildDeck(); const entry=state.cardDeck[state.cardIndex]; if(!entry) return;
    const [topic,q,a]=entry.c, t=topicMap[topic];
    $("#flashcard").classList.remove("flipped");
    $("#card-topic-label").textContent=t.title.toUpperCase();
    $("#card-number").textContent=String(state.cardIndex+1).padStart(2,"0")+" / "+state.cardDeck.length;
    $("#card-question").textContent=q; $("#card-answer").textContent=a; $("#card-source").textContent=t.source;
    $("#deck-status").textContent=`Kart ${state.cardIndex+1} / ${state.cardDeck.length}`;
    const knownInDeck=state.cardDeck.filter(x=>state.known.has(x.i)).length;
    $("#known-status").textContent=`${knownInDeck} bilindi`;
    $("#deck-bar").style.width=(knownInDeck/state.cardDeck.length*100||0)+"%";
    $("#card-known").classList.toggle("active",state.known.has(entry.i));
  }

  function moveCard(step){ state.cardIndex=(state.cardIndex+step+state.cardDeck.length)%state.cardDeck.length; renderCard(); }

  function resetQuiz(){
    state.quizDeck=shuffle(D.quiz.map((q,i)=>({q,i})).filter(x=>state.quizFilter==="all"||x.q[0]===state.quizFilter));
    state.quizIndex=0; state.quizSession=[]; renderQuiz();
  }

  function renderQuiz(){
    const entry=state.quizDeck[state.quizIndex];
    if(!entry){ $("#quiz-question").textContent="Bu filtrede soru bulunamadı."; $("#quiz-options").innerHTML=""; return; }
    const [topic,q,opts]=entry.q, t=topicMap[topic];
    $("#quiz-topic-label").textContent=t.title.toUpperCase();
    $("#quiz-counter").textContent=`${state.quizIndex+1} / ${state.quizDeck.length}`;
    $("#quiz-question").textContent=q;
    $("#quiz-options").innerHTML=opts.map((o,i)=>`<button class="quiz-option" data-answer="${i}"><b>${String.fromCharCode(65+i)}.</b> ${esc(o)}</button>`).join("");
    $("#quiz-explanation").hidden=true; $("#quiz-next").hidden=true;
    renderScore();
  }

  function answerQuiz(choice){
    const entry=state.quizDeck[state.quizIndex]; if(!entry || state.quizSession[state.quizIndex]!==undefined) return;
    const correct=entry.q[3], ok=choice===correct; state.quizSession[state.quizIndex]=ok;
    state.quizAnswered++; if(ok) state.quizCorrect++;
    $$(".quiz-option").forEach((b,i)=>{ b.disabled=true; if(i===correct)b.classList.add("correct"); if(i===choice&&!ok)b.classList.add("wrong"); });
    const exp=$("#quiz-explanation"); exp.innerHTML=`<b>${ok?'Doğru.':'Doğru yanıt '+String.fromCharCode(65+correct)+'.'}</b> ${esc(entry.q[4])}`; exp.hidden=false; $("#quiz-next").hidden=false;
    persist(); updateProgress(); renderScore();
  }

  function renderScore(){
    const answered=state.quizSession.filter(x=>x!==undefined); const correct=answered.filter(Boolean).length;
    $("#quiz-score").textContent=`${correct} / ${answered.length}`;
    $("#score-dots").innerHTML=state.quizSession.map(x=>`<i class="${x?'good':'bad'}"></i>`).join("");
  }

  function nextQuiz(){
    if(state.quizIndex>=state.quizDeck.length-1){ toast("Tur tamamlandı — sorular yeniden karıştırıldı."); resetQuiz(); return; }
    state.quizIndex++; renderQuiz();
  }

  function renderSources(){
    $("#source-grid").innerHTML=D.sources.map((s,i)=>`<article class="source-card"><div class="file-icon">${s[0].endsWith('.pdf')?'PDF':'NOTE'}</div><div><b>${esc(s[0])}</b><small>${esc(s[2])}</small></div><em>${s[1]?s[1]+' sf.':'8 katman'}</em></article>`).join("");
  }

  function updateProgress(){
    const cardPart=state.known.size/D.cards.length;
    const quizPart=Math.min(state.quizAnswered/D.quiz.length,1);
    const markPart=Math.min(state.bookmarks.size/10,1);
    const pct=Math.round((cardPart*.5+quizPart*.4+markPart*.1)*100);
    $("#side-progress-value").textContent=pct+"%"; $("#side-progress-bar").style.width=pct+"%";
    $("#ring-percent").textContent=pct+"%"; $("#progress-ring").style.background=`conic-gradient(var(--mint) ${pct*3.6}deg,#1a3245 0)`;
    $("#stat-known").textContent=state.known.size; $("#stat-correct").textContent=state.quizCorrect; $("#stat-bookmarks").textContent=state.bookmarks.size;
  }

  function search(query){
    const q=query.trim().toLocaleLowerCase("tr"); if(q.length<2){ if(state.view==="search")nav("dashboard"); return; }
    const results=[];
    D.topics.forEach(t=>{
      const base=[t.title,t.summary,t.exam,t.memory,...t.stars.map(s=>s[0])].join(" ");
      if(base.toLocaleLowerCase("tr").includes(q)) results.push({type:"Konu",title:t.title,text:t.summary,id:t.id});
      t.blocks.forEach(b=>b.items.forEach(x=>{if(x.toLocaleLowerCase("tr").includes(q))results.push({type:t.title,title:b.h,text:x,id:t.id});}));
    });
    D.cards.forEach((c,i)=>{if((c[1]+" "+c[2]).toLocaleLowerCase("tr").includes(q))results.push({type:"Kart",title:c[1],text:c[2],id:c[0]});});
    $("#search-summary").textContent=`“${query}” için ${results.length} sonuç`;
    const mark=s=>esc(s).replace(new RegExp(esc(q).replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi"),m=>`<mark>${m}</mark>`);
    $("#search-results").innerHTML=results.slice(0,60).map(r=>`<button class="result" data-topic="${r.id}"><span>${esc(r.type)}</span><h2>${mark(r.title)}</h2><p>${mark(r.text)}</p></button>`).join("") || `<div class="source-note">Sonuç bulunamadı. Daha kısa bir tıbbi terim deneyin.</div>`;
    nav("search",{keepScroll:true});
  }

  function setupEvents(){
    document.addEventListener("click",e=>{
      const view=e.target.closest("[data-view]"); if(view){nav(view.dataset.view);return;}
      const topic=e.target.closest("[data-topic]"); if(topic){openTopic(topic.dataset.topic);return;}
      const sf=e.target.closest("[data-star-filter]"); if(sf){state.starFilter=sf.dataset.starFilter;renderStars();return;}
      const bm=e.target.closest("[data-bookmark]"); if(bm){const id=bm.dataset.bookmark;if(state.bookmarks.has(id))state.bookmarks.delete(id);else state.bookmarks.add(id);bm.classList.toggle("saved");persist();updateProgress();toast(state.bookmarks.has(id)?"Tekrar listesine eklendi":"İşaret kaldırıldı");return;}
      const cf=e.target.closest("[data-card-filter]"); if(cf){state.cardFilter=cf.dataset.cardFilter;$("#card-topic").value=state.cardFilter;state.cardIndex=0;nav("cards");return;}
      const qf=e.target.closest("[data-quiz-filter]"); if(qf){state.quizFilter=qf.dataset.quizFilter;$("#quiz-topic").value=state.quizFilter;nav("quiz");resetQuiz();return;}
      const ans=e.target.closest("[data-answer]"); if(ans){answerQuiz(Number(ans.dataset.answer));return;}
    });
    $("#topic-sort").addEventListener("change",renderTopicList);
    $("#global-search").addEventListener("input",e=>search(e.target.value));
    document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#global-search").focus();}if(e.key==="Escape"){$("#global-search").value="";nav("dashboard");}});
    $("#theme-toggle").addEventListener("click",()=>document.body.classList.toggle("light"));
    $("#random-pearl").addEventListener("click",()=>{const pearls=D.topics.flatMap(t=>t.stars.map(s=>`${t.title}: ${s[0]}`));$("#pearl-output").textContent=pearls[Math.floor(Math.random()*pearls.length)];});
    $("#flashcard").addEventListener("click",()=>$("#flashcard").classList.toggle("flipped"));
    $("#flashcard").addEventListener("keydown",e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();$("#flashcard").classList.toggle("flipped");}});
    $("#card-prev").addEventListener("click",()=>moveCard(-1)); $("#card-next").addEventListener("click",()=>moveCard(1));
    $("#card-again").addEventListener("click",()=>{const e=state.cardDeck[state.cardIndex];state.known.delete(e.i);persist();toast("Kart tekrar kuyruğunda");moveCard(1);updateProgress();});
    $("#card-known").addEventListener("click",()=>{const e=state.cardDeck[state.cardIndex];state.known.add(e.i);persist();toast("Kart öğrenildi olarak işaretlendi");moveCard(1);updateProgress();});
    $("#card-topic").addEventListener("change",e=>{state.cardFilter=e.target.value;state.cardIndex=0;renderCard();});
    $("#quiz-topic").addEventListener("change",e=>{state.quizFilter=e.target.value;resetQuiz();});
    $("#quiz-next").addEventListener("click",nextQuiz); $("#quiz-reset").addEventListener("click",resetQuiz);
  }

  function setupWebMCP(){
    const mc=navigator.modelContext;
    if(!mc?.registerTool) return;
    const register=(spec,fn)=>{try{mc.registerTool(spec,fn);}catch(_){/* progressive enhancement */}};
    register({name:"open_study_topic",description:"Göğüs hastalıkları çalışma kampında bir konu sayfasını açar.",inputSchema:{type:"object",properties:{topic:{type:"string",enum:D.topics.map(t=>t.id)}},required:["topic"]}},({topic})=>{openTopic(topic);return{content:[{type:"text",text:`${topicMap[topic].title} açıldı.`}]};});
    register({name:"start_quiz",description:"Tüm konulardan veya seçili konudan açıklamalı soru oturumu başlatır.",inputSchema:{type:"object",properties:{topic:{type:"string",enum:["all",...D.topics.map(t=>t.id)]}},required:["topic"]}},({topic})=>{state.quizFilter=topic;$("#quiz-topic").value=topic;nav("quiz");resetQuiz();return{content:[{type:"text",text:"Soru oturumu başlatıldı."}]};});
    register({name:"study_starred_points",description:"Kaynaklarda yıldızlanmış ve el yazısıyla işaretlenmiş yüksek verim noktalarını açar.",inputSchema:{type:"object",properties:{topic:{type:"string",enum:["all",...D.topics.map(t=>t.id)]}}}},({topic="all"})=>{state.starFilter=topic;renderStars();nav("starred");return{content:[{type:"text",text:"Yıldızlı kısımlar açıldı."}]};});
  }

  function init(){
    $("#star-count").textContent=D.topics.reduce((n,t)=>n+t.stars.length,0);
    renderDashboard(); renderStars(); renderTopicList(); renderAlgorithms(); renderSources(); fillSelects(); buildDeck(); setupEvents(); setupWebMCP();
    if(location.hash==="#starred")nav("starred",{keepScroll:true}); else if(location.hash==="#topics")nav("topics",{keepScroll:true});
  }
  init();
})();
