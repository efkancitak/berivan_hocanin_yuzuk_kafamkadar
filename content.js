/* Bu dosya kullanıcının sağladığı ders slaytları ve el yazısı notlarından derlenmiştir. */
window.STUDY_DATA = {
  topics: [
    {
      id:"plevra", no:"01", icon:"◒", title:"Plevra sıvıları ve pnömotoraks", source:"6•PLEVRA SIVILARI 2.pdf", pages:87, priority:1, accent:"#48d7c8",
      summary:"Transüda–eksüda ayrımı, Light kriterleri, sıvı analizi, TB plörezi ve pnömotoraksın sınav odaklı yaklaşımı.",
      exam:"En sık plevral efüzyon nedeni KKY; en sık eksüda parapnömonik efüzyondur.",
      stars:[
        ["Light kriterleri: sıvı/serum protein >0,5; sıvı/serum LDH >0,6; sıvı LDH > serum LDH üst normal sınırının 2/3’ü. Birinin pozitifliği eksüda lehine.","slide"],
        ["Diüretik alan kalp yetersizliğinde yalancı eksüda olabilir: serum–plevra albümin gradiyenti >1,2 g/dL transüdayı destekler.","slide"],
        ["Plevra sıvısında ADA >40 U/L TB lehine; >70 U/L güçlü destek. Lenfosit baskınlığı özgüllüğü artırır.","slide"],
        ["El yazısı vaka notu: KOAH ayırıcı tanılarıyla birlikte Light kriterlerini bil.","handwritten"],
        ["Tansiyon pnömotoraks klinik tanıdır ve acil dekompresyon gerektirir; görüntüleme için beklenmez.","slide"]
      ],
      blocks:[
        {h:"Fizyoloji ve mekanizma",items:["Visseral plevra ağrı duyusu taşımaz; pulmoner dolaşımla beslenir. Pariyetal plevra somatik innervasyonlu ve sistemik dolaşımla beslenir.","Normal plevral basınç yaklaşık −5 cmH₂O’dur. Sıvı oluşumu yaklaşık 0,01 mL/kg/saat, lenfatik drenaj kapasitesi yaklaşık 0,20 mL/kg/saattir.","Hidrostatik basınç artışı: KKY. Onkotik basınç azalması: nefrotik sendrom/siroz. Geçirgenlik artışı: enfeksiyon/malignite. Lenfatik tıkanma: malignite. Negatif plevral basınç artışı: atelektazi."]},
        {h:"Klinik ve görüntüleme",items:["İnspeksiyonda ekspansiyon azalır; palpasyonda taktil fremitus azalır; perküsyonda matite; oskültasyonda solunum sesleri azalır.","PA akciğer grafisinde kostofrenik sinüsün kapanması için yaklaşık 175 mL; lateral dekübit grafide daha küçük miktarlar gösterilebilir. USG 50–100 mL sıvıyı saptayabilir ve torasentezi güvenli kılar.","Yeni, nedeni açıklanamayan veya atipik efüzyonda torasentez düşün. İlk ayrım transüda–eksüda; sonra hücre, pH, glukoz, LDH, kültür/sitoloji ve hedefli testler."]},
        {h:"Sıvı analizi",items:["Nötrofil baskınlığı: akut parapnömonik süreç, pankreatit, pulmoner emboli. Lenfosit baskınlığı: TB, malignite, lenfoma, kollajen doku hastalığı, sarkoidoz.","Eozinofil >%10: plevrada hava/kan, parazit/mantar, ilaç, tekrarlayan girişim, PE, asbest maruziyeti gibi nedenler.","Plevra/kan hematokrit oranı >%50 hemotoraks. Çok düşük glukoz romatoid plörezi, ampiyem; düşük glukoz TB ve malignitede de olabilir.","LDH >1000 U/L komplike parapnömonik efüzyon/ampiyem, malignite veya PE düşündürür. Kötü kokulu sıvı anaerob; siyah sıvı Aspergillus; sarı-yeşil sıvı romatoid plöreziyi düşündürebilir."]},
        {h:"TB, parapnömonik efüzyon ve pnömotoraks",items:["TB plörezi çoğunlukla unilateral, lenfosit baskın eksüdadır. Direkt basil gösterme duyarlılığı düşüktür; kültür ve plevra biyopsisi tanı katkısı sağlar.","Komplike parapnömonik efüzyonda düşük pH/glukoz, yüksek LDH ve lokülasyon drenaj lehinedir; ampiyemde püy veya pozitif kültür vardır.","Pnömotoraksta ekspansiyon, fremitus ve solunum sesleri azalır; perküsyon hipersonordur. Primer spontan pnömotoraks nüks edebilir; tansiyon pnömotoraksta hipotansiyon, JVD, trakeal deviasyon gibi bulgular beklenebilir."]}
      ],
      memory:"Light = üç kapıdan biri açılırsa eksüda: Protein 0,5 • LDH oranı 0,6 • LDH üst sınır 2/3.",
      pitfalls:["Diüretik sonrası KKY eksüda gibi görünebilir.","Pulmoner emboli hem transüda hem eksüda yapabilir.","TB tedavisini yalnız sıvı rengine göre başlatma; klinik ve mikrobiyolojiyle birleştir."]
    },
    {
      id:"abse", no:"02", icon:"◉", title:"Akciğer absesi ve ampiyem", source:"Abse-ampiyem.pdf + note.np 2", pages:28, priority:4, accent:"#ff9e70",
      summary:"Kaviteleşen enfeksiyonun kaynakları, aspirasyon yerleşimi, ayırıcı tanı, antibiyotik-drenaj-cerrahi kararları.",
      exam:"Akciğer absesinde aspirasyon bölgeleri pozisyona bağlı; ampiyemde antibiyotik tek başına çoğu zaman yetmez.",
      stars:[
        ["El yazısıyla ateş vurgulanmış: absenin temel kliniği ateş, prodüktif/kötü kokulu balgam, plöritik ağrı ve kilo kaybıdır.","handwritten"],
        ["Kavite ayırıcı tanısına TB, skuamöz hücreli karsinom ve GPA/Wegener mutlaka girer.","handwritten"],
        ["Toplum kökenli ampiyemde gram pozitifler + anaeroblar; hastane kökenlide gram pozitif ve gram negatifler birlikte düşünülür.","handwritten"],
        ["Aminoglikozidler düşük pH’lı ampiyem boşluğunda inaktive olabilir.","slide"],
        ["Persistan sepsis/lokülasyon: tüp drenaj → intraplevral tedavi seçeneği → VATS/cerrahi değerlendirme.","handwritten"]
      ],
      blocks:[
        {h:"Tanım ve patogenez",items:["Akciğer absesi; parankimde nekroz ve pürülan materyalle oluşan lokal kavitedir. Akut 4–6 haftaya kadar, kronik >6 hafta kabul edilir.","Mekanizmalar: aspirasyon, hematolojik yayılım, travma, enfekte pulmoner infarkt, transdiyafragmatik yayılım veya bronş distalinde obstrüksiyon.","Aspirasyon bağımlı segmentleri tutar: sırtüstü üst lob posterior ve alt lob superior; dik pozisyonda alt lob bazal segmentleri. Sağ akciğer daha sık etkilenir."]},
        {h:"Klinik, görüntü ve ayırıcı tanı",items:["Ateş, prodüktif ve bazen kötü kokulu balgam, plöritik ağrı, kilo kaybı, hemoptizi. Ağız hijyeni ve aspirasyon riskini sorgula.","Hava-sıvı seviyesi olan kalın duvarlı kavite tipiktir. Tümör/obstrüksiyon şüphesinde bronkoskopi; periferik/komplike olguda BT yardımcıdır.","Kavite: piyojenik enfeksiyon, TB/mantar; skuamöz kanser/metastaz; septik emboli/infarkt; GPA; romatoid nodül; bül-kist, sekestrasyon, yabancı cisim."]},
        {h:"Tedavi",items:["Uzun süreli antibiyotik gerekir; aspirasyon anaeroblarını kapsa. Klinik/radyolojik yanıta göre sıklıkla 6–8 hafta tedavi edilir.","Akut cerrahi nedenleri: masif/devam eden kanama, piyotoraks, bronkoplevral fistül; kronikte persistan/tekrarlayan hastalık, malignite şüphesi, büyük-kalın duvarlı kavite.","Ampiyemde evreler: eksüdatif → fibrinopürülan/loküle → organize. BT’de split-pleura işareti ampiyemi destekler. Kaynak kontrolü için uygun drenaj esastır."]},
        {h:"RAPID ve mikrobiyoloji",items:["RAPID: Renal (üre/BUN), Age, Purulence, Infection source, Dietary (albumin). Prognoz sınıflamasıdır.","Toplum kökenli: streptokoklar ve anaeroblar. Hastane kökenli: S. aureus/MRSA ve gram negatifler dahil geniş spektrum. Diyabette Klebsiella akılda olsun.","Candida ampiyemi nadir fakat yüksek mortalitelidir. Antibiyotiği kültür, edinim yeri ve aspirasyon riskine göre daralt."]}
      ], memory:"ABSE: Aspirasyon • Bağımlı segment • Süre 6–8 hafta • Engelleyen obstrüksiyonu ara.", pitfalls:["Kaviteyi otomatik olarak enfeksiyon sayma.","Ampiyemde yalnız antibiyotikle kaynak kontrolünü geciktirme.","RAPID’de püy varlığı kaynak slaytta düşük puandır; ezber tuzağıdır."]
    },
    {
      id:"anamnez", no:"03", icon:"⌁", title:"Anamnez ve solunum semptomları", source:"Anamnez Semptomlar.pdf", pages:67, priority:9, accent:"#72b7ff",
      summary:"Öksürük, balgam, dispne, hemoptizi, göğüs ağrısı ve sistematik göğüs anamnezi.", exam:"Öksürüğü süreyle sınıflandır; hemoptiziyi hematemezden ayır; dispnenin başlangıç hızını tanıya çevir.",
      stars:[["Öksürük: akut <3 hafta, subakut 3–8 hafta, kronik >8 hafta.","slide"],["Masif hemoptizide asıl ölüm mekanizması kan kaybından çok asfiksidir.","slide"],["Akut dispne ayırıcı tanısı: astım/KOAH alevlenmesi, akciğer ödemi, pnömotoraks, PE, pnömoni.","slide"],["Sigara maruziyeti paket-yıl = günlük paket × yıl.","slide"]],
      blocks:[
        {h:"Sistematik anamnez",items:["Yakınmanın başlangıcı, süresi, seyri, tetikleyicisi, gece-gündüz farkı ve eşlik eden bulguları sor. Doğum/yaşam yeri, seyahat, ev koşulları, gebelik, meslek ve çevresel maruziyet önemlidir.","Sigara: başlangıç yaşı, ürün, miktar, paket-yıl, bırakma zamanı; pasif maruziyet. İlaçlarda özellikle ACE inhibitörü; ailede astım, TB, kanser, tromboz.","Slayta göre iyi anamnez + fizik muayene tanının yaklaşık %50–60’ını yönlendirebilir."]},
        {h:"Öksürük ve balgam",items:["Akut öksürük çoğunlukla viral üst/alt solunum yolu enfeksiyonudur. Subakutta postinfeksiyöz öksürük; kronikte üst hava yolu sendromu, astım, GÖRH, ACE inhibitörü sık nedenlerdir.","Sigara içende kronik bronşit, mesleksel maruziyet, eozinofilik bronşit, bronşektazi, TB ve maligniteyi ekle.","Balgamın miktarı, rengi, kokusu, katmanlaşması ve kan içermesi önemlidir. Kötü kokulu balgam anaerob enfeksiyon/abse; üç tabaka bronşektazi için ipucudur."]},
        {h:"Dispne, ağrı ve hemoptizi",items:["İnspiratuvar dispne/stridor üst hava yolu; ekspiratuvar dispne/wheezing alt hava yolu obstrüksiyonunu düşündürür. Ortopne, PND, platipne ve trepopneyi sorgula.","Plöritik ağrı nefes/öksürükle artar; pariyetal plevra kaynaklıdır. Visseral plevra ve akciğer parankimi ağrı duymaz.","Hemoptizi alt solunum yollarından köpüklü, parlak kırmızı kan; hematemez bulantı-kusma ile koyu/asidik olabilir. Ağır hemoptizide hava yolunu koru, kanayan taraf aşağı, bronkoskopik/lokal kontrol planla."]}
      ], memory:"Öksürük 3–8 kuralı: <3 akut • 3–8 subakut • >8 kronik.", pitfalls:["Bir aydır yeni öksürüğü olan riskli hastada görüntülemeyi atlama.","Hemoptizi şiddetini yalnız hacimle değil hava yolu etkisiyle değerlendir."]
    },
    {
      id:"pe", no:"04", icon:"↯", title:"Pulmoner emboli", source:"aydın pulmoner emboli.pdf + note.np 2", pages:45, priority:2, accent:"#ff7d7d",
      summary:"Risk, Wells, D-dimer, BT anjiyografi, V/Q, ekokardiyografi ve risk tabanlı tedavi.", exam:"Önce klinik olasılık, sonra doğru dışlama/doğrulama testi; şokta reperfüzyon düşün.",
      stars:[["El yazısıyla Virchow triadı/risk faktörleri işaretli: staz, endotel hasarı, hiperkoagülabilite.","handwritten"],["S1Q3T3 el yazısıyla çemberlenmiş; klasik ama duyarlılığı düşük EKG bulgusudur.","handwritten"],["Wells PE: DVT bulgusu 3, PE daha olası 3, nabız >100 1,5, immobilizasyon/cerrahi 1,5, önceki VTE 1,5, hemoptizi 1, malignite 1.","handwritten"],["A–a oksijen gradiyenti artabilir; normal olması PE’yi güvenle dışlamaz.","handwritten"],["Hemodinamik instabil/yüksek risk PE’de trombolitik reperfüzyon; stabil hastada antikoagülasyon temelidir.","handwritten"]],
      blocks:[
        {h:"Patofizyoloji ve klinik",items:["VTE spektrumunda çoğu PE alt ekstremite DVT’sinden gelir. Ani pulmoner vasküler direnç artışı sağ ventrikül yüklenmesi ve yetmezliği yapar.","Ani dispne, plöritik ağrı, taşikardi, takipne, senkop, hemoptizi olabilir. Distal infarkt ateş/infiltratla pnömoniyi taklit edebilir.","Riskler: yakın cerrahi/immobilizasyon, aktif kanser, gebelik/östrojen, önceki VTE, trombofili, kalp-akciğer hastalığı."]},
        {h:"Tanısal akış",items:["Klinik olasılığı Wells/Geneva ile belirle. Düşük-orta olasılıkta yaşa uyarlanmış D-dimer stratejileri kullanılabilir; yüksek olasılıkta doğrudan görüntüleme.","Stabil hastada BT pulmoner anjiyografi temel doğrulama testidir. Kontrast engeli/gebelik gibi seçilmiş durumlarda V/Q; normal V/Q PE’yi güçlü biçimde dışlar, uyumsuz perfüzyon defekti destekler.","Akciğer grafisi sıkça nonspesif, bazen normaldir; Westermark ve Hampton hump seyrektir. EKG’de sinüs taşikardisi, sağ yük; S1Q3T3 klasik ama seyrek.","Ekokardiyografi stabil hastada PE’yi dışlamaz; şokta sağ ventrikül yüklenmesi ve alternatif nedenleri göstermek için kritik olabilir."]},
        {h:"Risk ve tedavi",items:["Şok/kalıcı hipotansiyon yüksek risk: hızlı hemodinamik değerlendirme, kontrendikasyon yoksa sistemik tromboliz; uygun değilse kateter/cerrahi seçenek.","Stabil hastada antikoagülasyon: klinik bağlama göre LMWH, UFH veya DOAK. UFH kısa yarı ömür/geri çevrilebilirlik nedeniyle instabilite veya girişim beklentisinde avantajlıdır.","Warfarin seçilirse parenteral antikoagülanla uygun örtüşme gerekir. Tedavi süresi provoke/provoke olmayan olay ve kalıcı risklere göre belirlenir."]}
      ], memory:"Wells 3–3–1,5–1,5–1,5–1–1. >4 = PE olası (iki düzeyli model).", pitfalls:["D-dimeri yüksek klinik olasılıkta doğrulama testi gibi kullanma.","Normal akciğer grafisi veya normal A–a gradiyenti PE’yi dışlamaz.","Stabil hastada negatif ekoyu dışlama testi sayma."]
    },
    {
      id:"bronkiektazi", no:"05", icon:"Ψ", title:"Bronşektazi ve kistik fibrozis", source:"BRONŞEKTAZİ.pdf + note.np 2", pages:16, priority:6, accent:"#b8a1ff",
      summary:"Morfoloji, tipik HRCT bulguları, dağılıma göre neden, tedavi ve KF tanısı.", exam:"Signet-ring + bronşun incelmeden devamı; clubbing sık ekstrapulmoner bulgu.",
      stars:[["El yazısıyla clubbing işaretli: bronşektazide en sık ekstrapulmoner bulgu olarak vurgulanmış.","handwritten"],["HRCT: bronş çapının eşlik eden arterden büyük olması = signet-ring; perifere doğru incelme kaybı.","slide"],["Kistik fibroziste ter kloru >60 mmol/L tanıyı destekleyen altın standart test olarak verilmiş.","slide"],["Dağılım ipucu: ABPA santral; TB üst lob; klasik postinfeksiyöz bronşektazi alt loblarda.","slide"]],
      blocks:[
        {h:"Tanım ve morfoloji",items:["Bronş duvarının kronik enfeksiyon-inflamasyon döngüsüyle geri dönüşsüz dilatasyonudur.","Reid: silindirik hafif; variköz düzensiz; kistik/sakküler en ağır form. Radyografide tram-track; HRCT tanı yöntemidir.","HRCT’de signet-ring, bronşun plevraya yakın görülmesi, perifere doğru incelmeme ve mukus tıkaçları."]},
        {h:"Klinik ve neden",items:["Kronik bol pürülan balgam, tekrarlayan enfeksiyon, hemoptizi; bekleyince üç tabakalı balgam. İleri hastalıkta clubbing.","Nedenler: postinfeksiyöz/TB, immün yetmezlik, yabancı cisim-obstrüksiyon, primer siliyer diskinezi, ABPA, kistik fibrozis.","Lokal hastalık obstrüksiyon/yabancı cisim; yaygın hastalık sistemik/genetik nedenleri düşündürür."]},
        {h:"Tedavi ve KF",items:["Hava yolu temizliği, postural drenaj/fizyoterapi, hidrasyon; obstrüksiyonda bronkodilatör. Alevlenmede balgam kültürüyle, Pseudomonas öyküsünü kapsayacak antibiyotik.","Lokal, medikal tedaviye dirençli ve tekrarlayan kanama/enfeksiyonda cerrahi düşünülebilir.","KF otozomal resesif CFTR hastalığıdır; akciğer, pankreas, GIS ve infertilite bulguları olabilir. Ter testi, genetik ve klinik fenotip birlikte değerlendirilir."]}
      ], memory:"Bronş > arter = yüzük taşı (signet-ring).", pitfalls:["Bronşektazi yalnız balgam hastalığı değildir; hemoptizi ve kolonizasyonu izle.","Tek lobla sınırlı olguda bronş içi obstrüksiyonu ara."]
    },
    {
      id:"fizik", no:"06", icon:"✣", title:"Solunum sistemi fizik muayenesi", source:"FİZİK MUAYENE.pdf", pages:32, priority:7, accent:"#61d49d",
      summary:"İnspeksiyon, palpasyon, perküsyon ve oskültasyon bulgularını hastalık paternlerine çevirme.", exam:"Konsolidasyon fremitusu artırır; plevral sıvı ve pnömotoraks azaltır. Perküsyonu sesle eşleştir.",
      stars:[["Taktil fremitus ↑: konsolidasyon/fibrozis; ↓: plevral efüzyon, pnömotoraks, kalınlaşma, amfizem/obezite.","slide"],["Hipersonor perküsyon: hava artışı (PTX, amfizem, astım). Matite: sıvı, konsolidasyon, kitle, fibrozis, atelektazi.","slide"],["Horner: ipsilateral pitozis, miyozis, enoftalmi ve anhidroz; apikal/Pancoast tümörünü düşün.","slide"],["Normal erişkin solunum sayısı slaytta 16–18/dk; >20 takipne, <12 bradipne.","slide"]],
      blocks:[
        {h:"İnspeksiyon",items:["Genel durum, bilinç, konuşma, solunum sayısı/ritmi, yardımcı kas, siyanoz, göğüs şekli ve simetri. Santral siyanoz dil-mukozada; periferik siyanoz ekstremitede belirgin.","Fıçı göğüs amfizem; kifoskolyoz restriksiyon; tek taraflı hacim kaybı atelektazi/fibrozis; tek taraflı genişleme büyük efüzyon veya tansiyon PTX.","Clubbing: bronşektazi, akciğer kanseri, abse, interstisyel hastalık ve siyanotik kalp hastalığı gibi nedenler."]},
        {h:"Palpasyon ve perküsyon",items:["Trakea, göğüs ekspansiyonu, hassasiyet, subkutan amfizem, taktil fremitus. Konsolidasyon sesi iletir; hava veya sıvı tabakası iletimi azaltır.","Sonor normal; hipersonor hava artışı; matite doku/sıvı artışı. Diyafram hareketi ve bilateral karşılaştırma önemlidir."]},
        {h:"Oskültasyon",items:["Veziküler normal periferik sestir; bronşiyal ses periferde duyulursa konsolidasyon/kavite düşün. Solunum seslerinin azalması efüzyon, PTX, obstrüksiyon, amfizem.","İnce geç inspiratuvar raller interstisyel fibrozis/ödem; kaba raller sekresyon; wheeze daralmış küçük hava yolu; stridor üst hava yolu.","Plevral frotman yüzeyel, gıcırtılı ve inspiryum-ekspiryumda; öksürükle kaybolmaz. Ses iletimi: bronkofoni, egofoni ve fısıltılı pektoriloki konsolidasyonu destekler."]}
      ], memory:"Konsolidasyon iletir: fremitus ↑, bronşiyal ses ↑, perküsyon mat. Efüzyon ayırır: hepsi ↓, perküsyon mat.", pitfalls:["Fremitusu simetrik noktalarda karşılaştır.","Wheeze yokluğu ağır obstrüksiyonda hava akımı çok az olduğu için yalancı güven verebilir."]
    },
    {
      id:"koah", no:"07", icon:"∞", title:"KOAH", source:"KOAH son 2.pdf", pages:68, priority:3, accent:"#ffd56b",
      summary:"Tanı, A–B–E değerlendirmesi, stabil tedavi, alevlenme, NIV ve uzun süreli oksijen.", exam:"Semptom + maruziyet + post-bronkodilatör FEV₁/FVC <0,70; ilaç başlangıcı A/B/E ile.",
      stars:[["Tanı: uygun klinik/maruziyet bağlamında post-bronkodilatör FEV₁/FVC <0,70.","slide"],["Başlangıç: A bronkodilatör; B LABA+LAMA; E LABA+LAMA. Eozinofil ≥300/µL ve alevlenme yükünde üçlü tedavi düşünülebilir.","slide"],["ICS monoterapi verilmez; astım eşliği/eozinofil ve alevlenme öyküsü seçimi yönlendirir.","slide"],["LTOT: stabil dönemde PaO₂ ≤55 mmHg veya SaO₂ ≤%88; 55–59’da PH/sağ KY/polisitemi varsa.","slide"],["Alevlenmede NIV: respiratuvar asidoz (pH ≤7,35 ve PaCO₂ >45) ve artmış solunum işi temel endikasyon.","slide"]],
      blocks:[
        {h:"Tanı ve değerlendirme",items:["Persistan dispne, öksürük/balgam ve risk maruziyeti olan hastada spirometri yap. Sabit obstrüksiyon post-BD FEV₁/FVC <0,70.","Semptom: mMRC ve CAT. Alevlenme: son yıldaki orta/ağır atak ve yatış. Spirometrik FEV₁ evresi prognoz/izlem için ayrıca kaydedilir.","Ayırıcı tanı: astım, bronşektazi, TB sekeli, bronşiolit, kalp yetersizliği. Alfa-1 antitripsin eksikliğini genç/bazal amfizem/aile öyküsünde düşün."]},
        {h:"Stabil tedavi",items:["En etkili müdahale sigara bırakmadır. Aşı, fiziksel aktivite, pulmoner rehabilitasyon, inhaler tekniği ve komorbidite yönetimi.","A: bronkodilatör. B: LABA+LAMA. E: LABA+LAMA; belirgin eozinofili/astım özelliği veya devam eden alevlenmede ICS eklenebilir.","ICS pnömoni riskini artırabilir; gereksiz kullanım ve monoterapiden kaçın. Uzun süreli makrolid/roflumilast seçilmiş sık alevlenen fenotipte."]},
        {h:"Alevlenme",items:["Son 14 gün içinde dispne ve/veya öksürük-balgamın kötüleşmesi. Tetikleyici enfeksiyon ve hava kirliliği; PE, pnömoni, pnömotoraks, KY’yi dışla.","Kısa etkili bronkodilatörler, sistemik kortikosteroid; pürülan balgam ve klinik gerekte antibiyotik. Kontrollü O₂ hedefi çoğu CO₂ retansiyon riskinde %88–92.","NIV asidoz/hiperkapni ve solunum işi artışında mortalite ve entübasyonu azaltır. Hemodinamik instabilite, bilinç bozukluğu/hava yolu koruyamama veya NIV başarısızlığında invaziv ventilasyon."]},
        {h:"LTOT",items:["Stabil, optimal tedavi altında ölçümü doğrula. PaO₂ ≤55 veya SaO₂ ≤%88; PaO₂ 55–59/SaO₂ ~%89 ve kor pulmonale/PH/polisitemi varsa.","Günde uzun süre (klasik kanıt ≥15 saat) kullanım sağkalım avantajı sağlar. Akut alevlenmede verilen oksijen gereksinimini stabil dönemde yeniden değerlendir."]}
      ], memory:"A-B-E: A = tek bronkodilatör; B = çift uzun etkili; E = çift, eozinofil yüksekse üçlü düşün.", pitfalls:["FEV₁/FVC düşüklüğünü klinik bağlam olmadan KOAH etiketi yapma.","Alevlenmede kontrolsüz yüksek O₂ hiperkapniyi kötüleştirebilir.","ICS’yi LABA/LAMA yerine tek başına verme."]
    },
    {
      id:"mesleksel", no:"08", icon:"⌬", title:"Mesleksel akciğer hastalıkları", source:"Mesleksel AC hast.pdf + note.np 2", pages:66, priority:8, accent:"#dc9dff",
      summary:"Mesleksel astım, RADS, pnömokonyozlar, asbest, silika, hipersensitivite pnömonisi ve inhalasyon hasarı.", exam:"En sık mesleksel akciğer hastalığı mesleksel astım; pnömokonyozlar çoğunlukla restriktiftir.",
      stars:[["Slaytta ‘kesin soru’: mesleksel astım en sık, pnömokonyozlar ikinci sırada.","slide"],["Pnömokonyozlarda SFT çoğunlukla restriktif; obstrüksiyon da eşlik edebilir.","handwritten"],["Mesleksel astımda özgül inhalasyon provokasyonu altın standart; işte/tatilde seri PEF pratik kanıt sağlar.","slide"],["Silikozis üst lob, yumurta kabuğu nod kalsifikasyonu ve TB risk artışıyla ilişkilidir.","slide"],["Asbestte en sık bulgu plevral plak; akciğer kanserinde sigarayla sinerji, mezotelyoma riski sigaradan bağımsız.","slide"]],
      blocks:[
        {h:"Mesleksel anamnez ve astım",items:["Tüm işleri, süreyi, maddeyi, korunmayı, iş arkadaşlarını ve semptomun hafta sonu/tatil ilişkisini sor. Semptomlar maruziyetten sonra da sürebilir.","Önce astımı kanıtla; sonra işle ilişkisini seri PEF, bronş hiperreaktivite değişimi ve seçilmiş merkezde özgül inhalasyon testiyle göster.","RADS: daha önce astım yokken tek, yüksek düzey irritan maruziyetten sonraki 24 saat içinde başlayan ve ≥3 ay süren hiperreaktivite."]},
        {h:"Pnömokonyozlar",items:["Silikozis: kuvars; üst lob nodülleri, konglomere fibrozis, egg-shell lenf nodu. TB ve akciğer kanseri riski. Slaytta siliko-TB için 9 ay tedavi vurgusu.","Kömür işçisi pnömokonyozu: basit küçük nodüller veya progresif masif fibrozis. Berilyum granülomatöz hastalık/sarkoidoz benzeri.","Asbestozis alt lob-subplevral interstisyel fibrozis; plevral plak maruziyet göstergesidir. Mezotelyoma uzun latent döneme sahiptir."]},
        {h:"Hipersensitivite ve inhalasyon hasarı",items:["HP antijenle tekrarlayan inhalasyon sonrası immün akciğer hastalığıdır. Akut form maruziyetten 4–6 saat sonra ateş, öksürük, dispne; kronik form fibrozis.","Tanı maruziyet, HRCT, BAL lenfositoz, fizyoloji ve gerektiğinde patolojinin bütünüdür; presipitan antikor maruziyeti gösterir, tek başına hastalık değil.","İnhalasyon hasarında semptomlar 24–48 saat gecikebilir; maruziyetten uzaklaştırma, oksijen/hava yolu, göz-cilt dekontaminasyonu ve izlem."]}
      ], memory:"İş astımı: İşte kötü • Tatilde iyi • PEF ile göster • Özgül provokasyon altın standart.", pitfalls:["Meslek adını sormak yetmez; ajan ve görev ayrıntısı gerekir.","Plevral plak asbest maruziyetidir; tek başına asbestozis demek değildir."]
    },
    {
      id:"ph", no:"09", icon:"≈", title:"Pulmoner hipertansiyon", source:"pulmoner hipertansiyon.pdf + note.np 2", pages:30, priority:10, accent:"#65c8ff",
      summary:"Hemodinamik tanım, klinik gruplar, ekokardiyografi, V/Q, sağ kalp kateteri ve hedefe yönelik tedaviler.", exam:"EKO tarar; sağ kalp kateteri doğrular. CTEPH için V/Q’yu unutma.",
      stars:[["Ders slaytı eski eşik: mPAP ≥25 mmHg. PAH: wedge ≤15 mmHg ve PVR >3 WU ile prekapiller patern.","handwritten"],["Pulmoner hipertansiyonda altın standart sağ kalp kateterizasyonudur.","handwritten"],["CTEPH taramasında V/Q sintigrafisi; bilateral segmental/subsegmental uyumsuz defektler.","slide"],["Vazoreaktivite: mPAP ≥10 mmHg düşüp <40 mmHg olması ve debinin korunması; pozitif seçilmiş hastada yüksek doz KKB.","slide"],["PA akciğer grafisinde santral pulmoner arter genişliği/periferik budanma el yazısıyla yıldızlanmış.","handwritten"]],
      blocks:[
        {h:"Tanım ve sınıflama",items:["Not: slayt eski mPAP ≥25 eşiğini kullanıyor. Güncel hemodinamik tanımlar değişmiş olabilir; sınavda ders kaynağının ifadesini tanı.","Grup 1 PAH; grup 2 sol kalp hastalığı; grup 3 akciğer hastalığı/hipoksi; grup 4 kronik tromboembolik; grup 5 belirsiz/çok faktörlü.","Prekapiller patern düşük/normal wedge; postkapiller patern yükselmiş wedge ile ayrılır."]},
        {h:"Klinik ve tanı",items:["Efor dispnesi, halsizlik, göğüs ağrısı, senkop; ileri evrede sağ KY. Muayene: güçlü P2, sağ ventrikül hevesi, JVD, hepatomegali, ödem.","EKO olasılığı ve sağ kalp etkisini gösterir; kesin hemodinamik tanı sağ kalp kateterizasyonu. RHC’de PAP, wedge, debi ve PVR.","V/Q grup 4 için duyarlı tarama. BT parankim/damar; SFT ve DLCO grup 3; seroloji/HIV/karaciğer testleri hedefli neden arar."]},
        {h:"Tedavi",items:["Önce altta yatan grup/nedeni tedavi et. Oksijen, diüretik ve seçilmiş destek tedavileri; gebelik/risk danışmanlığı.","Grup 1’de endotelin reseptör antagonistleri, PDE-5 inhibitörleri, prostasiklin yolu ilaçları, sGC uyarıcısı (riociguat) risk tabanlı kombinasyon.","Vazoreaktivite pozitif idiyopatik/herediter/ilaç PAH’da yüksek doz kalsiyum kanal blokeri; yanıt yoksa verilmez. CTEPH’de operabilite için pulmoner endarterektomi, BPA/riociguat seçenekleri."]}
      ], memory:"PH: EKO = şüphe/olasılık, V/Q = CTEPH, RHC = kesin tanı.", pitfalls:["Slayttaki ≥25 mmHg eşiğinin eski sınıflama olduğunu bil.","PAH ilacını grup 2/3 hastaya otomatik taşıma.","Pozitif vazoreaktivite olmadan KKB başlama."]
    },
    {
      id:"sigara", no:"10", icon:"≋", title:"Sigara ve tütün bağımlılığı", source:"SİGARA ve HASTALIKLARI.pdf", pages:60, priority:12, accent:"#9ab0bd",
      summary:"Bağımlılık döngüsü, zararlar, 5A yaklaşımı, nikotin replasmanı, bupropion ve vareniklin.", exam:"Tütün bağımlılığı kronik, yineleyici ve tedavi edilebilir; davranışsal destek + farmakoterapi başarıyı artırır.",
      stars:[["Nikotin beyine yaklaşık 7 saniyede ulaşır; hızlı ödül bağımlılığı pekiştirir.","slide"],["Paket-yıl maruziyeti sorgula; light/filtreli sigara riski ortadan kaldırmaz.","slide"],["5A: Ask, Advise, Assess, Assist, Arrange — sor, öner, değerlendir, yardım et, izlem ayarla.","slide"],["Kayma tek sigara/olay; nüks düzenli kullanıma dönüştür. Yargılamadan yeniden planla.","slide"]],
      blocks:[
        {h:"Bağımlılık ve zarar",items:["Nikotin nörobiyolojik bağımlılık; davranışsal tetikleyicilerle kronik relaps döngüsü. Fagerström ve sabah ilk sigara zamanı bağımlılığı değerlendirir.","Aktif/pasif duman KOAH, akciğer ve diğer kanserler, KV hastalık, gebelik/çocuk sağlığına zarar verir. Sigara larinks, akciğer ve mesane kanseriyle ilişkilidir.","Bırakmanın yararı her yaşta başlar; risk zamanla azalır fakat hemen sıfırlanmaz."]},
        {h:"Kısa müdahale",items:["5A: kullanım durumunu her vizitte sor; açık ve kişisel bırakma önerisi; isteği değerlendir; tarih/plan/ilaç desteği; erken ve tekrarlı izlem.","Bırakmaya hazır değilse 5R: relevance, risks, rewards, roadblocks, repetition. Tetikleyiciyi kaldır, destek ağı ve baş etme planı kur."]},
        {h:"Farmakoterapi",items:["Nikotin replasmanı: bant bazal, sakız/pastil hızlı kriz kontrolü; kombinasyon etkili olabilir. Doz bağımlılık düzeyine göre.","Bupropion bırakma tarihinden önce başlanır; nöbet/yeme bozukluğu ve MAO inhibitörü gibi kontrendikasyonları sorgula.","Vareniklin parsiyel nikotinik agonist; kademeli titre edilir. Bulantı/canlı rüyalar olabilir; böbrek işlevine göre ayarla. İlaçları klinik öyküyle seç."]}
      ], memory:"5A = Ask • Advise • Assess • Assist • Arrange.", pitfalls:["‘Light’ sigarayı güvenli sayma.","Bir kaymayı tam başarısızlık sayıp tedaviyi bırakma.","Farmakoterapiyi davranışsal desteksiz ve kontrendikasyon sorgulamadan verme."]
    },
    {
      id:"solunum-yetmezligi", no:"11", icon:"∆", title:"Solunum yetersizliği ve ARDS", source:"solunum yetersizliği.pdf + note.np 2", pages:22, priority:5, accent:"#ff8a9a",
      summary:"Tip I–II, A–a gradiyenti, hipoksemi mekanizmaları, oksijen, NIV, ARDS ve LTOT.", exam:"Tip I PaO₂ <60; Tip II PaCO₂ >45. Şant oksijene en dirençli hipoksemi mekanizmasıdır.",
      stars:[["Tip I: PaO₂ <60 mmHg. Tip II: PaCO₂ >45 mmHg; çoğunlukla hipoksemi eşlik eder.","slide"],["A–a gradiyenti = (150 − 1,25×PaCO₂) − PaO₂; el yazısıyla yıldızlanmış.","handwritten"],["V/Q uyumsuzluğu hipokseminin en sık mekanizması; gerçek şant oksijene en az yanıt veren.","slide"],["ARDS: 1 hafta içinde, bilateral opasiteler, kardiyak/sıvı yüküyle açıklanamama, P/F ≤300 ve PEEP/CPAP koşulu.","handwritten"],["LTOT eşiği el yazısıyla yıldızlı: PaO₂ ≤55/SaO₂ ≤%88; 55–59’da kor pulmonale/PH/polisitemi.","handwritten"]],
      blocks:[
        {h:"Tipler ve mekanizmalar",items:["Hipoksemik Tip I: PaO₂ <60. Hiperkapnik Tip II: PaCO₂ >45. Akut saatler-günler; kronikte renal bikarbonat kompansasyonu.","Hipoksemi: düşük FiO₂, hipoventilasyon, difüzyon bozukluğu, V/Q uyumsuzluğu, sağ-sol şant. V/Q en sık; şant O₂’ye en dirençli.","Normal A–a yaklaşık 15 mmHg; 30 yaştan sonra her dekatta yaklaşık 3 artabilir. Saf hipoventilasyonda A–a normal kalır."]},
        {h:"Tip II nedenleri ve yaklaşım",items:["Artmış yük: KOAH/astım, göğüs duvarı; azalmış kapasite: nöromüsküler; azalmış dürtü: sedatif/SSS; artmış üretim/ölü boşluk katkısı.","ABC, hedefli oksijen, altta yatan nedeni düzelt. ABG’yi pH/PaCO₂/HCO₃ ile akut-kronik değerlendir.","NIV uygun bilinç ve korunmuş hava yolunda hiperkapnik asidoz/kardiyojenik ödemde; şok, solunum arresti, hava yolu koruyamama, kontrolsüz sekresyonda entübasyon."]},
        {h:"ARDS",items:["Tetikleyici 1 hafta içinde; bilateral opasiteler; kalp yetersizliği/sıvı yüküyle tam açıklanmaz. P/F: hafif 200–300, orta 100–200, ağır ≤100 (yeterli PEEP koşuluyla).", "Akciğer koruyucu ventilasyon: düşük tidal volüm, plato basınç kısıtlaması, uygun PEEP; ağır ARDS’de pron. Nedeni/sepsisi tedavi et, konservatif sıvı stratejisi."]}
      ], memory:"A–a = 150 − 1,25×CO₂ − O₂. P/F: 300–200–100 basamakları.", pitfalls:["SpO₂’yi ventilasyon göstergesi sayma; CO₂ için ABG gerekir.","Şant ile V/Q uyumsuzluğunu oksijen yanıtıyla ayır.","Kronik hiperkapnide HCO₃ kompansasyonunu görmeden akut deme."]
    },
    {
      id:"enfeksiyon", no:"12", icon:"✦", title:"Solunum yolu enfeksiyonları", source:"solunum yolu enfeksiyonları.pdf + note.np 2", pages:14, priority:11, accent:"#70dc83",
      summary:"Akut bronşitte viral etiyoloji, pnömoniden ayırma, görüntüleme ve antibiyotik yönetimi.", exam:"Akut bronşit çoğunlukla viral ve 1–3 hafta; antibiyotik rutin değildir.",
      stars:[["El yazısı: akut bronşitte temel görev pnömoniyi dışlamak; tanı anamnez ve fizik muayenedir.","handwritten"],["Akciğer grafisi düşün: nabız >100, solunum >24, ateş >38°C, SpO₂ <%95, fokal konsolidasyon veya yaşlıda mental değişiklik.","slide"],["Pürülan balgam tek başına bakteriyel enfeksiyon/antibiyotik endikasyonu değildir.","slide"]],
      blocks:[
        {h:"Akut bronşit",items:["İmmünkompetan erişkinde alt hava yollarının çoğunlukla viral, kendini sınırlayan inflamasyonudur. Öksürük 1–3 hafta sürebilir.","Virüsler başta; boğmaca gibi seçilmiş etkenler. Pürülan balgam nötrofil/miyeloperoksidazla renklenebilir.","Semptomatik tedavi, sıvı ve güvenlik ağı. Rutin antibiyotik yararsızdır; bakteriyel özel durum/boğmaca şüphesinde hedefli yaklaş."]},
        {h:"Pnömoniyi dışlama",items:["Yaşamsal bulgular ve akciğer muayenesi. Taşikardi, takipne, ateş, düşük satürasyon, fokal raller/bronşiyal solunum veya mental değişiklik görüntüleme eşiğini düşürür.","Riskli/yaşlı/komorbid hastada atipik sunum olabilir. Dispne, plöritik ağrı, hipoksemi veya uzayan/kötüleşen seyir yeniden değerlendirme gerektirir."]}
      ], memory:"Bronşit = öksürük + normal/dağınık muayene; pnömoni = vital bozukluk veya fokal konsolidasyon bulgusu.", pitfalls:["Balgam rengini antibiyotik reçetesine çevirmek.","Normal ateşle gelen yaşlıda pnömoniyi kaçırmak."]
    },
    {
      id:"tani", no:"13", icon:"⌕", title:"Göğüs hastalıklarında tanı yöntemleri", source:"tanı yöntemleri.pdf", pages:43, priority:13, accent:"#6bb8e8",
      summary:"Grafi, BT/HRCT, MR, USG, V/Q, PET ve bronkoskopinin doğru endikasyonları.", exam:"Yöntemi klinik soruya göre seç: parankim HRCT, plevra USG, CTEPH V/Q, apikal invazyon MR.",
      stars:[["Rijit bronkoskopinin en sık endikasyonu yabancı cisim çıkarılmasıdır.","slide"],["HRCT interstisyel hastalık ve bronşektazi; kontrastlı BT kitle/damar/mediasten değerlendirmesi.","slide"],["USG plevral sıvı ve girişim rehberliği; MR superior sulkus/yumuşak doku ve damar invazyonunda.","slide"],["PET metabolik evreleme sağlar ama beyin ve <1 cm lezyonda sınırlı; enfeksiyon/inflamasyonda yalancı pozitif.","slide"]],
      blocks:[
        {h:"Görüntüleme",items:["PA/lateral grafi ilk basamak; önceki filmlerle karşılaştır. BT kesitsel anatomiyi, kontrast damar/mediasteni; HRCT ince parankim ve hava yolu ayrıntısını gösterir.","MR radyasyon içermez, yumuşak doku/nörovasküler invazyon ve Pancoast için üstündür. USG plevral sıvı, diyafram, periferik lezyon ve işlem rehberliği.","V/Q PE/CTEPH; PET/BT malignite evreleme ve biyopsi hedefi. Gallium/inflamatuvar nükleer yöntemler daha özel endikasyonlarda."]},
        {h:"Bronkoskopi ve girişim",items:["Fleksibl bronkoskopi: santral lezyon biyopsisi, BAL, hemoptizi, atelektazi/obstrüksiyon, örnekleme ve bazı tedaviler.","Rijit bronkoskopi: yabancı cisim, masif hemoptizi kontrolü, büyük hava yolu tümörü/debulking-stent gibi işlemler; genel anestezi.","Periferik lezyonda BT/US eşliğinde transtorasik biyopsi; plevrada torakoskopi; mediastinal lenf nodunda EBUS/EUS veya mediastinoskopi."]},
        {h:"Testi seçme mantığı",items:["Her testten önce klinik soru, kontrendikasyon, böbrek işlevi/kontrast alerjisi, radyasyon ve komplikasyonu düşün.","Bronkoskopi/transtorasik biyopsi öncesi kanama riski; transtorasik biyopside pnömotoraks olasılığını anlat.","PET pozitif lenf nodu histolojik doğrulama gerektirebilir; görüntüleme doku tanısının yerine geçmez."]}
      ], memory:"Plevra USG • Parankim HRCT • Pancoast MR • CTEPH V/Q • Evre PET • Santral biyopsi bronkoskopi.", pitfalls:["PET pozitifliğini otomatik malignite sayma.","Kontrast öncesi böbrek işlevi/alerjiyi atlama.","Periferik lezyona bronkoskopiyi tek yol sanma."]
    },
    {
      id:"akciger-ca", no:"14", icon:"◇", title:"Akciğer kanseri ve SPN", source:"note.np 2 — Akciğer kanserleri", pages:32, priority:14, accent:"#ff86c3",
      summary:"Semptom kümeleri, santral/periferik biyopsi, mediastinal evreleme, KHAK/KHDAK tedavisi ve soliter nodül.", exam:"Doku tanısı şart; PET pozitif mediasteni örnekle. Pancoast’ta MR, beyin için kraniyal MR.",
      stars:[["Pancoast/superior sulkus tümöründe yumuşak doku ve sinir invazyonu için MR’ı unutma.","handwritten"],["PET/BT beyin dışı uzak metastaz ve biyopsi hedefi; pozitif lenf nodu doku ile doğrulanır.","handwritten"],["Santral kitle: çoğu skuamöz/küçük hücreli → bronkoskopi. Periferik: adeno/büyük hücreli → BT/US eşliğinde biyopsi.","handwritten"],["Soliter pulmoner nodül <3 cm, çevresi normal parankim, atelektazi/LAP/efüzyon eşliği olmayan tek yuvarlak lezyon.","handwritten"],["PET <1 cm nodülde ve karsinoid/lepidik tümörde yalancı negatif; TB/sarkoidoz/romatoid nodülde yalancı pozitif olabilir.","handwritten"],["El yazısı vaka vurgusu: kanser VTE riskini bası, hiperkoagülabilite, endotel hasarı, immobilizasyon ve tedaviyle artırır.","handwritten"]],
      blocks:[
        {h:"Risk ve semptom kümeleri",items:["Olguların büyük çoğunluğu sigarayla ilişkilidir; süre, başlama yaşı ve miktar önemlidir. Asbest + sigara akciğer kanserinde sinerjiktir; silikozis/fibrotik akciğer ve radon/metal maruziyeti de risk.","Semptomlar: tümörün kendisi (öksürük, hemoptizi); lokal bası/invazyon (VCS, ses kısıklığı, Horner); metastaz (kemik, beyin, karaciğer, adrenal, karşı akciğer); paraneoplastik.","Pancoast: omuz-kol ağrısı, brakiyal pleksus ve Horner. Frenik sinir: diyafram paralizisi; rekürren laringeal: ses kısıklığı."]},
        {h:"Tanı ve evreleme",items:["Grafide kitle → kontrastlı toraks BT. Apikal invazyonda MR. Uzak evreleme için PET/BT (beyin dışı) ve endikasyonda kraniyal MR.","Doku yöntemi yerleşime göre: santral bronkoskopi; periferik transtorasik biyopsi. Tanısızsa VATS/cerrahi. Biyopsi öncesi PET canlı/hedef bölgeyi seçmeye yardım eder.","TNM: tümör boyutu/komşuluk (T), lenf istasyonu (N), metastaz (M). PET pozitif mediastinal nodu EBUS/mediastinoskopi ile doğrula; N2 cerrahi kararını değiştirir."]},
        {h:"Histoloji ve tedavi mantığı",items:["KHAK hızlı, erken yayılır ve kemoterapiye duyarlı: sınırlıda kemoterapi + RT; yaygında sistemik tedavi. KHDAK evre/moleküler belirteç/performance göre cerrahi, KT, RT, hedef/immünoterapi.","Ders şeması: KHDAK evre I cerrahi; II cerrahi + adjuvan; III multimodal; IV sistemik/palyatif. Beyin metastazında antiödem + lokal tedavi; kemikte analjezi/RT; malign efüzyonda drenaj/plöredez."]},
        {h:"Soliter pulmoner nodül",items:["<3 cm, tek, yuvarlak, normal parankimle çevrili ve eşlik eden atelektazi/LAP/plevral sıvı yok. ≥3 cm kitle olarak değerlendirilir.","Malignite: ileri yaş, sigara, üst lob, büyük boyut, düzensiz/spiküle kenar, büyüme, kalın kavite duvarı. Benign: klasik kalsifikasyon/yağ, solid nodülde ≥2 yıl stabilite.","Belirsiz nodülde ince kesit BT ve eski görüntüler. Yönetim boyut, solid/subsolid yapı ve hasta riskine göre Fleischner benzeri kılavuzla; PET küçük nodülde sınırlıdır."]}
      ], memory:"Santral → bronkoskopi. Periferik → transtorasik. Pancoast → MR. Evre → PET + beyin MR. Mediasten → EBUS.", pitfalls:["PET pozitif nodu biyopsisiz evre sayma.","<1 cm PET negatif nodülde rahatlama.","Pancoast’ta yalnız BT ile sinir/yumuşak doku invazyonunu bitirme."]
    }
  ],

  algorithms:[
    {title:"Light kriterleri",sub:"Bir tanesi pozitifse eksüda",rows:[["Protein oranı",">0,5"],["LDH oranı",">0,6"],["Sıvı LDH","> serum üst normal sınırının 2/3’ü"],["Diüretik tuzağı","Serum–plevra albümin gradiyenti >1,2 → transüda lehine"]]},
    {title:"Wells — pulmoner emboli",sub:"İki düzeyli modelde >4 PE olası",rows:[["3 puan","DVT bulgusu; PE alternatiften daha olası"],["1,5 puan","Nabız >100; cerrahi/immobilizasyon; önceki VTE"],["1 puan","Hemoptizi; aktif malignite"],["Akış","Olasılık → D-dimer veya doğrudan görüntüleme"]]},
    {title:"KOAH A–B–E",sub:"Semptom + alevlenme öyküsü",rows:[["A","Az semptom, düşük atak → bronkodilatör"],["B","Belirgin semptom, düşük atak → LABA+LAMA"],["E","Alevlenme riski → LABA+LAMA"],["E + eoz ≥300","Üçlü LABA+LAMA+ICS düşün"]]},
    {title:"Solunum yetersizliği",sub:"Gazı mekanizmaya bağla",rows:[["Tip I","PaO₂ <60"],["Tip II","PaCO₂ >45"],["A–a","150 − 1,25×PaCO₂ − PaO₂"],["O₂’ye direnç","Şant"],["En sık hipoksemi","V/Q uyumsuzluğu"]]},
    {title:"ARDS Berlin",sub:"PEEP/CPAP koşuluyla P/F",rows:[["Zaman","Bilinen olaydan sonraki 1 hafta"],["Görüntü","Bilateral opasiteler"],["Köken","Kardiyak/sıvı yüküyle açıklanmaz"],["Hafif / Orta / Ağır","P/F 200–300 / 100–200 / ≤100"]]},
    {title:"Fizik muayene paternleri",sub:"Ses iletimi + perküsyon",rows:[["Konsolidasyon","Fremitus ↑, bronşiyal ses ↑, mat"],["Efüzyon","Fremitus ↓, ses ↓, mat"],["Pnömotoraks","Fremitus ↓, ses ↓, hipersonor"],["Amfizem","Ses ↓, hipersonor, ekspiryum uzun"]]},
    {title:"Pulmoner hipertansiyon",sub:"Soruyu doğru teste bağla",rows:[["Şüphe/olasılık","Ekokardiyografi"],["CTEPH taraması","V/Q sintigrafisi"],["Kesin hemodinamik tanı","Sağ kalp kateteri"],["Apikal/yumuşak doku","MR"],["Vazoreaktivite +","Seçilmiş PAH’da yüksek doz KKB"]]},
    {title:"Akciğer kanseri tanı yolu",sub:"Yerleşim ve evre",rows:[["Santral kitle","Fleksibl bronkoskopi"],["Periferik kitle","BT/US eşliğinde transtorasik biyopsi"],["Mediastinal nod","EBUS/EUS veya mediastinoskopi"],["Uzak evre","PET/BT + endikasyonda beyin MR"],["Pancoast","Toraks BT + MR"]]},
    {title:"Öksürük süreleri",sub:"Süre ayırıcı tanıyı daraltır",rows:[["Akut","<3 hafta"],["Subakut","3–8 hafta"],["Kronik",">8 hafta"],["Kronik nonsmoker","ÜHYÖS, astım, GÖRH, ACEi"]]},
    {title:"LTOT ve NIV",sub:"Sık karışan eşikler",rows:[["LTOT kesin","PaO₂ ≤55 veya SaO₂ ≤%88"],["LTOT koşullu","PaO₂ 55–59 + PH/kor pulmonale/polisitemi"],["KOAH NIV","pH ≤7,35 + PaCO₂ >45, artmış solunum işi"],["O₂ hedefi","CO₂ retansiyon riski çoğunlukla %88–92"]]}
  ],

  sources:[
    ["6•PLEVRA SIVILARI  2.pdf",87,"Plevra sıvıları, TB plörezi, pnömotoraks"],["Abse-ampiyem.pdf",28,"Akciğer absesi ve ampiyem"],["Anamnez Semptomlar.pdf",67,"Anamnez ve semptomlar"],["aydın pulmoner emboli.pdf",45,"Pulmoner emboli"],["BRONŞEKTAZİ.pdf",16,"Bronşektazi ve kistik fibrozis"],["FİZİK MUAYENE .pdf",32,"Solunum fizik muayenesi"],["KOAH son 2.pdf",68,"KOAH"],["Mesleksel AC hast .pdf",66,"Mesleksel akciğer hastalıkları"],["pulmoner hipertansiyon.pdf",30,"Pulmoner hipertansiyon"],["SİGARA ve HASTALIKLARI.pdf",60,"Sigara ve tütün bağımlılığı"],["solunum yetersizliği.pdf",22,"Solunum yetersizliği ve ARDS"],["solunum yolu enfeksiyonları.pdf",14,"Akut bronşit/enfeksiyonlar"],["tanı yöntemleri.pdf",43,"Görüntüleme ve bronkoskopi"],["note.np 2",0,"8 defter katmanı; akciğer kanseri + el yazısı işaretleri"]
  ],

  cards:[
    ["plevra","Light kriterlerini say.","Sıvı/serum protein >0,5; sıvı/serum LDH >0,6; sıvı LDH > serum LDH üst normal sınırının 2/3’ü. Birinin olması eksüda."],
    ["plevra","Diüretik alan KKY hastasında yalancı eksüdayı nasıl ayırırsın?","Serum–plevra albümin gradiyenti >1,2 g/dL transüdayı destekler."],
    ["plevra","TB plörezide beklenen hücre ve biyobelirteç?","Lenfosit baskın eksüda; ADA >40 U/L TB lehine, >70 güçlü destek."],
    ["plevra","Hemotoraks için sıvı/kan hematokrit oranı?",">%50."],
    ["plevra","Tansiyon pnömotoraksta ilk ilke?","Klinik tanı; görüntüleme beklemeden acil dekompresyon."],
    ["abse","Aspirasyon absesi hangi segmentleri sever?","Pozisyona bağlı segmentler: sırtüstünde üst lob posterior/alt lob superior; dikte alt lob bazal, çoğu sağ."],
    ["abse","Kavite ayırıcı tanısında üç kritik isim?","TB, skuamöz hücreli karsinom ve GPA/Wegener (yanı sıra mantar/septik emboli)."],
    ["abse","Akciğer absesinde tipik tedavi süresi?","Klinik-radyolojik yanıta göre çoğunlukla 6–8 hafta."],
    ["abse","RAPID harfleri?","Renal, Age, Purulence, Infection source, Dietary/albumin."],
    ["anamnez","Öksürük süre sınıflaması?","Akut <3 hafta, subakut 3–8 hafta, kronik >8 hafta."],
    ["anamnez","Masif hemoptizide ölümün temel mekanizması?","Asfiksi/hava yolunun kanla tıkanması."],
    ["anamnez","İnspiratuvar stridor neyi düşündürür?","Üst hava yolu obstrüksiyonu."],
    ["pe","Wells’te iki adet 3 puanlık ölçüt?","Klinik DVT bulgusu ve PE’nin alternatif tanıdan daha olası olması."],
    ["pe","Düşük/orta olasılıkta negatif D-dimer ne işe yarar?","Uygun duyarlıklı testle PE’yi dışlamaya yardım eder; yüksek olasılıkta doğrulama testi değildir."],
    ["pe","Şokta PE ve sağ ventrikül yüklenmesi varsa tedavi yönü?","Kontrendikasyon yoksa acil reperfüzyon/sistemik tromboliz; uygun değilse kateter/cerrahi."],
    ["pe","S1Q3T3 için sınav cümlesi?","Klasik sağ yük bulgusudur ama duyarlılığı düşüktür; yokluğu PE’yi dışlamaz."],
    ["bronkiektazi","Signet-ring işareti nedir?","Dilate bronş çapının komşu pulmoner arterden büyük olması."],
    ["bronkiektazi","Bronşektazide sık ekstrapulmoner bulgu?","Clubbing/çomak parmak."],
    ["bronkiektazi","ABPA bronşektazisi nerede?","Santral bronşlarda."],
    ["bronkiektazi","KF’de ter kloru tanısal eşik?",">60 mmol/L tanıyı güçlü destekler; klinik/genetik bağlamla değerlendirilir."],
    ["fizik","Konsolidasyonda fremitus, perküsyon ve ses?","Fremitus artar, perküsyon mat, periferde bronşiyal solunum/ses iletimi artar."],
    ["fizik","Plevral efüzyonda klasik muayene?","Ekspansiyon ve fremitus azalır, matite, solunum sesleri azalır."],
    ["fizik","Pnömotoraksta perküsyon?","Hipersonor; fremitus ve solunum sesleri azalmış."],
    ["fizik","Horner dörtlüsü?","Pitozis, miyozis, enoftalmi, ipsilateral anhidroz."],
    ["koah","KOAH spirometrik tanı eşiği?","Uygun klinikte post-bronkodilatör FEV₁/FVC <0,70."],
    ["koah","B grubunda başlangıç inhaleri?","LABA + LAMA."],
    ["koah","ICS hangi ipuçlarında eklenir?","Astım özelliği, yüksek eozinofil (özellikle ≥300/µL) ve devam eden alevlenme."],
    ["koah","LTOT kesin eşikleri?","Stabil hastada PaO₂ ≤55 mmHg veya SaO₂ ≤%88."],
    ["koah","Alevlenmede kontrollü O₂ hedefi?","CO₂ retansiyon riski olan çoğu hastada %88–92."],
    ["mesleksel","Mesleksel astımda pratik iş ilişkisi testi?","İşte ve tatilde seri PEF izlemi; özgül inhalasyon provokasyonu altın standart."],
    ["mesleksel","RADS tanımı?","Önceden astım yokken tek yüksek irritan maruziyetinden sonraki 24 saatte başlayıp ≥3 ay süren hiperreaktivite."],
    ["mesleksel","Silikozisin üç klasiği?","Üst lob nodülleri, egg-shell lenf nodu kalsifikasyonu, TB risk artışı."],
    ["mesleksel","Asbest + sigara hangi riskte sinerjiktir?","Akciğer karsinomu; mezotelyoma riski sigarayla sinerjik kabul edilmez."],
    ["ph","PH’de kesin tanı yöntemi?","Sağ kalp kateterizasyonu."],
    ["ph","CTEPH taramasında hangi test?","V/Q sintigrafisi."],
    ["ph","Vazoreaktivite pozitifliği?","mPAP ≥10 mmHg düşerek <40’a iner ve kardiyak debi azalmaz."],
    ["ph","Ders slaytındaki eski PH eşiği?","İstirahatte mPAP ≥25 mmHg; güncel tanımın farklı olabileceğini bil."],
    ["sigara","5A’yı say.","Ask, Advise, Assess, Assist, Arrange."],
    ["sigara","Nikotin replasmanını nasıl kombinlersin?","Bantla bazal kontrol + sakız/pastille ani kriz kontrolü."],
    ["sigara","Kayma ile nüks farkı?","Kayma tek/çok kısa kullanım; nüks düzenli kullanıma dönüş."],
    ["solunum-yetmezligi","Tip I ve Tip II eşikleri?","Tip I PaO₂ <60; Tip II PaCO₂ >45 mmHg."],
    ["solunum-yetmezligi","A–a gradiyenti formülü?","(150 − 1,25×PaCO₂) − PaO₂."],
    ["solunum-yetmezligi","Oksijene en dirençli hipoksemi mekanizması?","Gerçek sağ-sol şant."],
    ["solunum-yetmezligi","ARDS P/F şiddet eşikleri?","Hafif 200–300; orta 100–200; ağır ≤100."],
    ["enfeksiyon","Akut bronşit çoğunlukla hangi etiyoloji ve süre?","Viral; öksürük genellikle 1–3 hafta."],
    ["enfeksiyon","Pürülan balgam antibiyotik göstergesi mi?","Tek başına hayır; nötrofil aktivitesi de renk verir."],
    ["enfeksiyon","Pnömoni için grafi eşiğini düşüren vital bulgular?","Nabız >100, solunum >24, ateş >38, SpO₂ <%95 ve/veya fokal konsolidasyon."],
    ["tani","Rijit bronkoskopinin en sık endikasyonu?","Yabancı cisim çıkarılması."],
    ["tani","Pancoast için neden MR?","Yumuşak doku, brakiyal pleksus ve nörovasküler invazyonu daha iyi gösterir."],
    ["tani","PET’in iki önemli sınırlılığı?","<1 cm/karsinoid-lepidik lezyonda yalancı negatif; enfeksiyon-inflamasyonda yalancı pozitif."],
    ["akciger-ca","Santral ve periferik kitlede biyopsi yolu?","Santral bronkoskopi; periferik BT/US eşliğinde transtorasik biyopsi."],
    ["akciger-ca","Akciğer kanserinin dört semptom kümesi?","Primer tümör, lokal bası/invazyon, metastaz, paraneoplastik."],
    ["akciger-ca","SPN tanımı?","<3 cm, tek, yuvarlak, normal parankimle çevrili; LAP/atelektazi/efüzyon yok."],
    ["akciger-ca","PET pozitif mediastinal nodda sonraki adım?","EBUS/EUS veya mediastinoskopiyle doku doğrulaması."],
    ["akciger-ca","KHAK sınırlı hastalık tedavi mantığı?","Kemoterapi + radyoterapi; hızlı seyir ama kemoterapiye dramatik yanıt." ]
  ],

  quiz:[
    ["plevra","Kalp yetersizliği nedeniyle diüretik kullanan hastada Light eksüda gösteriyor. Transüdayı destekleyen bulgu hangisi?",["Plevra/serum protein >0,5","Serum–plevra albümin gradiyenti >1,2","Plevral ADA >70","Plevra/kan Hct >%50"],1,"Diüretik sıvıyı konsantre edip yalancı eksüda yapabilir; albümin gradiyenti >1,2 g/dL transüda lehinedir."],
    ["plevra","Plevra sıvısı/kan hematokrit oranı %65 ise en uygun tanım?",["Şilotoraks","Hemotoraks","Ampiyem","Urinotoraks"],1,"Oranın >%50 olması hemotoraksı tanımlar."],
    ["plevra","Tansiyon pnömotoraks düşünülen instabil hastada ilk yaklaşım?",["Toraks BT","D-dimer","Acil dekompresyon","Spirometri"],2,"Tansiyon pnömotoraks klinik tanıdır; görüntüleme beklenmez."],
    ["abse","Akciğer absesi ile skuamöz kanser ayrımında hangi durum bronkoskopi ihtiyacını artırır?",["Genç yaş ve hızlı yanıt","Santral obstrüksiyon şüphesi","İki günlük ateş","İnce duvarlı bül"],1,"Bronş distalinde obstrüksiyon/tümör şüphesi bronkoskopi endikasyonudur."],
    ["abse","Ampiyemde kaynak kontrolünün temel yöntemi?",["Yalnız oral antibiyotik","Uygun plevral drenaj","İnhale steroid","Antitussif"],1,"Pürülan/loküle plevral enfeksiyonda antibiyotiğe ek drenaj gerekir."],
    ["anamnez","6 haftadır süren öksürük nasıl sınıflanır?",["Akut","Subakut","Kronik","Rekürren"],1,"3–8 hafta subakut öksürüktür."],
    ["anamnez","Masif hemoptizide en acil tehdit?",["Demir eksikliği","Hava yolu tıkanması/asfiksi","Sekonder hipertansiyon","Hiperkalsemi"],1,"Ölüm çoğunlukla asfiksi nedeniyle olur; hava yolu önceliklidir."],
    ["pe","Wells skoru yüksek klinik olasılık gösteren hastada en doğru strateji?",["Negatif grafiyle dışla","D-dimerle doğrula","Uygunsa doğrudan görüntüle","S1Q3T3 bekle"],2,"Yüksek olasılıkta D-dimer yerine doğrulayıcı görüntüleme tercih edilir."],
    ["pe","Şok tablosundaki PE hastasında, kontrendikasyon yoksa tedavi?",["Sadece aspirin","Sistemik tromboliz","İnhale steroid","Diüretik"],1,"Yüksek risk/hemodinamik instabil PE reperfüzyon gerektirir."],
    ["pe","PE için hangisi doğrudur?",["Normal A–a gradiyenti kesin dışlar","Normal grafi kesin dışlar","S1Q3T3 yokluğu dışlar","Hiçbiri tek başına dışlamaz"],3,"Bu bulguların duyarlılığı düşüktür; klinik olasılık ve uygun test gerekir."],
    ["bronkiektazi","HRCT’de bronş çapı komşu arterden büyük. Bulguyu adlandırın.",["Hampton hump","Signet-ring","Egg-shell","Westermark"],1,"Signet-ring bronşektazinin tipik HRCT bulgusudur."],
    ["bronkiektazi","Santral bronşektazi en çok hangisini düşündürür?",["ABPA","Post-TB","Yabancı cisim","Pnömotoraks"],0,"ABPA sıklıkla santral bronşektazi yapar."],
    ["fizik","Sağ alt lob konsolidasyonunda beklenen kombinasyon?",["Fremitus ↓, hipersonor","Fremitus ↑, matite, bronşiyal ses","Fremitus ↓, matite, ses yok","Normal fremitus, timpanizm"],1,"Konsolide doku sesi iyi iletir; fremitus artar ve perküsyon matlaşır."],
    ["fizik","Plevral efüzyonda hangisi beklenmez?",["Matite","Fremitus azalması","Solunum sesi azalması","Hipersonor perküsyon"],3,"Hipersonor perküsyon hava artışında; efüzyon matite yapar."],
    ["koah","Semptomatik sigara öykülü hastada post-BD FEV₁/FVC 0,64. Bu bulgu neyi destekler?",["KOAH’da sabit obstrüksiyon","Saf restriksiyon","Normal spirometri","Plevral efüzyon"],0,"Uygun klinikte <0,70 sabit hava akımı kısıtlanmasını destekler."],
    ["koah","Belirgin semptomu olan, sık alevlenmeyen B grubu hastada başlangıç?",["ICS tek başına","LABA+LAMA","Uzun süre antibiyotik","Sadece oksijen"],1,"B grubunda çift uzun etkili bronkodilatör önerilir."],
    ["koah","KOAH alevlenmesinde pH 7,29, PaCO₂ 62 ve yardımcı kas kullanımı var. İlk ventilatuvar destek?",["NIV","Evde oksijen","Göğüs tüpü","CPR"],0,"Hiperkapnik asidoz ve artmış solunum işi NIV için klasik endikasyondur; kontrendikasyon yoksa."],
    ["mesleksel","Silikoziste hangi eşleşme doğrudur?",["Alt lob–mezotelyoma","Üst lob–TB riski","Santral bronşektazi–ABPA","Plevral plak–RADS"],1,"Silikozis üst lob nodülleri/egg-shell ve artmış TB riskiyle ilişkilidir."],
    ["mesleksel","Önceden astımı olmayan işçide yoğun klor maruziyetinden saatler sonra kalıcı hiperreaktivite gelişiyor. Tanı?",["RADS","Asbestozis","Silikozis","Kömür işçisi pnömokonyozu"],0,"Tek yüksek irritan maruziyeti sonrası 24 saat içinde başlayan astım benzeri tablo RADS’tır."],
    ["ph","Pulmoner hipertansiyonda kesin hemodinamik tanı?",["Akciğer grafisi","Ekokardiyografi","Sağ kalp kateteri","Spirometri"],2,"EKO tarama/olasılık; RHC altın standarttır."],
    ["ph","Kronik tromboembolik PH taramasında en uygun test?",["V/Q sintigrafisi","PET/BT","Kraniyal MR","Ter testi"],0,"V/Q, CTEPH için duyarlı tarama testidir."],
    ["sigara","5A içinde ‘izlem ayarla’ hangi basamaktır?",["Ask","Assess","Assist","Arrange"],3,"Arrange, takip ve nüks önleme planıdır."],
    ["sigara","Nikotin bandına rağmen ani sigara isteği olan kişide rasyonel ekleme?",["Hızlı etkili sakız/pastil","Antibiyotik","İnhale steroid","Diüretik"],0,"Uzun etkili bant + kısa etkili NRT kombinasyonu krizleri karşılar."],
    ["solunum-yetmezligi","PaO₂ 54, PaCO₂ 38 olan hastanın yetersizlik tipi?",["Tip I","Tip II","Tip III","Solunum yetersizliği yok"],0,"PaO₂ <60 hipoksemik Tip I’dir."],
    ["solunum-yetmezligi","Hipoksemisi yüksek FiO₂’ye en az yanıt veren mekanizma?",["Düşük FiO₂","V/Q uyumsuzluğu","Gerçek şant","Difüzyon"],2,"Şantta kan ventile alveolle temas etmez; oksijen yanıtı sınırlıdır."],
    ["solunum-yetmezligi","P/F oranı 85 olan, Berlin ölçütlerini karşılayan hasta?",["Hafif ARDS","Orta ARDS","Ağır ARDS","ARDS değil"],2,"P/F ≤100 ağır ARDS’tir (uygun PEEP koşulunda)."],
    ["enfeksiyon","Akut bronşitte pürülan balgam için doğru ifade?",["Daima antibiyotik gerekir","Tek başına bakteriyel kanıt değildir","Daima TB’dir","Bronkoskopi şarttır"],1,"Balgam rengi nötrofil aktivitesiyle değişebilir; tek başına antibiyotik endikasyonu değildir."],
    ["enfeksiyon","Öksürük, ateş 38,5°C, solunum 28/dk ve fokal krepitan ral olan hastada?",["Grafi gerekmez","Pnömoni için akciğer grafisi","Yalnız antitussif","Spirometri"],1,"Vital bozukluk ve fokal bulgu pnömoni olasılığını yükseltir."],
    ["tani","Yabancı cisim çıkarılmasında tercih edilen bronkoskopi?",["Rijit","Yalnız sanal","Hiçbiri","Nazal endoskopi"],0,"Rijit bronkoskopinin en sık endikasyonu yabancı cisimdir."],
    ["tani","Superior sulkus tümöründe brakiyal pleksus invazyonunu en iyi değerlendiren?",["V/Q","MR","Direkt grafi","USG"],1,"MR yumuşak doku ve sinir invazyonunda üstündür."],
    ["akciger-ca","Periferik akciğer kitlesinde en uygun doku yolu?",["BT/US eşliğinde transtorasik biyopsi","Sadece balgam","V/Q","Ter testi"],0,"Periferik lezyon transtorasik görüntüleme eşliğinde örneklenir."],
    ["akciger-ca","PET pozitif mediastinal lenf nodunda doğru yaklaşım?",["Doğrudan evre IV say","Cerrahi öncesi doku doğrula","PET’i tamamen yok say","Yalnız grafi çek"],1,"Enfeksiyon/inflamasyon yalancı pozitif olabilir ve nodal evre tedaviyi değiştirir; EBUS/mediastinoskopiyle doğrula."],
    ["akciger-ca","Hangisi SPN tanımına uymaz?",["Çap <3 cm","Tek ve yuvarlak","Eşlik eden belirgin LAP","Normal parankimle çevrili"],2,"SPN tanımında eşlik eden LAP, atelektazi veya efüzyon yoktur."],
    ["akciger-ca","PET negatif 7 mm nodül için doğru yorum?",["Malignite kesin dışlandı","PET küçük nodülde sınırlı; risk/BT takibi gerekir","Hemen pnömonektomi","Daima benign hamartom"],1,"PET’in <1 cm lezyonlarda duyarlılığı düşer; klinik risk ve ince kesit BT yönetimi belirler."]
  ]
};
