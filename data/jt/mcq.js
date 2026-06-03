var JT_MCQ = [
	{
		id: "analiza-sentimenta",
		name: "Analiza sentimenta",
		color: "#ff8a5b",
		questions: [
			{
				q: "Katera skupina izrazov se v gradivu uporablja kot poimenovanje za analizo sentimenta?",
				pages: [185],
				opts: [
					["Opinion analysis, affect detection, subjectivity scoring in emotion classification", false, "To so sorodna področja, a gradivo navaja drugačen nabor sopomenk."],
					["Sentiment analysis, opinion mining, opinion extraction, sentiment mining in analiza subjektivnosti", true, "To je nabor poimenovanj, ki ga gradivo eksplicitno navede."],
					["Text mining, corpus analysis, frequency profiling in discourse inference", false, "Text mining je nadpomenka, ostali izrazi niso sopomenke za analizo sentimenta."],
					["Opinion detection, polarity analysis, valence scoring in stance recognition", false, "Polarnost in valenca sta le dela naloge, ne celoten nabor sopomenk iz gradiva."],
				],
			},
			{
				q: "Kaj je osnovni cilj analize sentimenta po gradivu?",
				pages: [186, 189, 190],
				opts: [
					["Razvrščanje besedil v tematske kategorije glede na njihovo vsebino in ključne besede.", false, "To opisuje tematsko klasifikacijo, ne odkrivanje sentimentalnih odnosov."],
					["Odkrivanje odnosov, na primer nosilec, cilj in polarnost odnosa.", true, "Analiza sentimenta je opisana kot odkrivanje odnosov med nosilcem, ciljem in čustveno/polarnostno oceno."],
					["Pridobivanje strukturiranih dejstev iz besedila, kot so kdo, kaj, komu, kdaj in kje.", false, "To opisuje ekstrakcijo informacij, ki je ločena naloga od analize sentimenta."],
					["Prepoznavanje subjektivnih stavkov in njihovo ločevanje od objektivnih dejstvenih izjav.", false, "To je analiza subjektivnosti, ki je bližja, a ne enaka odkrivanju odnosov."],
				],
			},
			{
				q: "Katera naloga je v gradivu označena kot zahtevnejša od osnovne binarne klasifikacije sentimenta?",
				pages: [190],
				opts: [
					["Prepoznavanje, ali je stavek subjektiven ali objektiven.", false, "To je naloga analize subjektivnosti, ki je preprosta, ne zahtevnejša različica binarne klasifikacije."],
					["Rangiranje odnosa, na primer od 1 do 10.", true, "To je eksplicitno navedeno kot zahtevnejša naloga."],
					["Klasifikacija sentimenta na ravni aspektov znotraj istega dokumenta.", false, "Aspektna analiza je 'naprednejša', ne 'zahtevnejša' v smislu, kot ga opisuje ta diapozitiv."],
					["Razlikovanje med pozitivnim in negativnim sentimentom v filmskih kritikah.", false, "To je ravno osnovna naloga binarne klasifikacije, ki jo gradivo opisuje kot enostavno."],
				],
			},
			{
				q: "Kaj po gradivu pravilno velja za značilke pri osnovni analizi sentimenta?",
				pages: [193, 194, 210],
				opts: [
					["Samo pridevniki nosijo sentimentalno informacijo, zato jih izberemo kot edine značilke.", false, "Gradivo poudari, da je uporaba vseh besed pogosto boljša od omejitve na pridevnike."],
					["Uporaba vseh besed z Naïve Bayesom pogosto da boljše rezultate.", true, "To je ena izmed eksplicitnih ugotovitev na končnih diapozitivih poglavja."],
					["Negacija nima bistvenega vpliva, ker klasifikator to samodejno upošteva skozi frekvence.", false, "Negacija je eksplicitno označena kot POMEMBNA in zahteva posebno obravnavo (NOT_)."],
					["TF-IDF tehtanje vedno preseže enostavno štetje pri klasifikaciji sentimenta.", false, "Gradivo tega ne trdi – TF-IDF je ena možnost, ne vedno boljša."],
				],
			},
			{
				q: "Kaj je bistvo Turneyevega algoritma?",
				pages: [208, 209],
				opts: [
					["Razširi ročno označeno semensko množico pridevnikov z besedami, ki se pogosto pojavljajo skupaj z njimi.", false, "To opisuje Hatzivassiloglou in McKeown pristop, ne Turneyev algoritem."],
					["Uporablja fraze namesto posameznih besed in se uči na domensko specifičnih informacijah.", true, "To je ravno opis Turneyevega pristopa v gradivu."],
					["Klasificira posamezne besede glede na njihovo pogostost v pozitivnih in negativnih dokumentih iz učne množice.", false, "To opisuje Pang & Lee pristop z Naïve Bayesom, ne Turneyev nenadzorovani algoritem."],
					["Izračuna kosinusno podobnost med vektorjem besedila in referenčnimi vektorji pozitivnih kritik.", false, "Turney ne uporablja vektorske podobnosti – temelji na PMI in iskalnih zadetkih."],
				],
			},
			{
				q: "Kako gradivo opiše naprednejše metode analize sentimenta?",
				pages: [210],
				opts: [
					["Kot nenadzorovane metode gručenja, ki samodejno odkrijejo sentimentalne teme brez označenih podatkov.", false, "Naprednejše metode v gradivu so še vedno nadzorovane – klasifikacija ali regresija."],
					["Kot klasifikacijo ali regresijo z dodatnimi značilkami, kot sta negacija in iskanje podmnožic besed.", true, "To je natančen povzetek diapozitiva o naprednejših metodah."],
					["Kot sekvenčne modele, ki označijo vsako besedo z IOB oznakami za odkrivanje sentimentalnih fraz.", false, "IOB sekvenčno označevanje se uporablja pri NER, ne pri napredni analizi sentimenta."],
					["Kot čiste generativne modele, ki modelirajo skupno porazdelitev besed in sentimentalnih razredov.", false, "Naprednejše metode so diskriminatorne, ne generativne."],
				],
			},
			{
				q: "Katera tipologija razlikuje med emocijami, razpoloženjem, medosebnimi stališči, odnosi in osebnostnimi lastnostmi?",
				pages: [188],
				opts: [
					["Ekmanovih 6 osnovnih čustev (jeza, gnus, strah, veselje, žalost, presenečenje)", false, "Ekman opisuje 6 diskretnih čustev, ne hierarhično tipologijo s petimi kategorijami."],
					["Schererjeva tipologija čustev", true, "Gradivo eksplicitno navede Schererja kot vir te tipologije."],
					["Russell-ov krožni model z dimenzijama valence in vzburjenja (circumplex model)", false, "Russell-ov model je dvodimenzionalen, ne kategorizira na 5 vrst, ki jih navaja gradivo."],
					["Plutchikovo kolo z osmimi primarnimi emocijami in njihovimi kombinacijami", false, "Plutchik opisuje primarne emocije in njihove mešanice, ne teh petih kategorij."],
				],
			},
			{
				q: "Po Hatzivassiloglou in McKeown – pridevnika, ki sta v besedilu povezana z besedo 'and', imata...?",
				pages: [203],
				opts: [
					["Enako polariteto.", true, "To je jedro njune intuicije: 'corrupt and brutal' – oba negativna."],
					["Nasprotno polariteto, ker 'and' pogosto poveže kontrastne lastnosti.", false, "Nasprotna polariteta velja za veznik 'but', ne 'and'."],
					["Nujno pozitivno polariteto, ker 'and' izraža soglasje med govorcem in bralcem.", false, "Polariteta ni nujno pozitivna – 'corrupt and brutal' sta oba negativna."],
					["Nevtralno polariteto, ker veznik 'and' ne nosi sentimentalne informacije sam.", false, "Veznik sam je nevtralen, a vezana pridevnika sta sentimentalno enaka – to je jedro metode."],
				],
			},
			{
				q: "Kako metoda NOT_ obravnava negacijo v besedilu?",
				pages: [196],
				opts: [
					["Negirani stavek v celoti označi z negativnim razredom, ne glede na vsebino ostalih besed.", false, "NOT_ ne klasificira stavkov – doda predpono posameznim besedam, da ohrani kontekst."],
					["Vsaki besedi med negacijo in ločilom doda predpono NOT_.", true, "Gradivo eksplicitno navaja primer: 'didn't NOT_like NOT_this NOT_movie but I'."],
					["Vsaki besedi v dokumentu doda predpono NOT_, ki se nahaja za negacijskim glagolom.", false, "Predpona se doda samo besedam do naslednjega ločila, ne v celem dokumentu."],
					["Vsak pridevnik v negiranem stavku nadomesti z njegovo antonimiijo iz leksikona.", false, "NOT_ doda predpono, ne nadomešča besed z antonimi."],
				],
			},
			{
				q: "Kaj meri PMI (točkovna medsebojna informacija) pri analizi sentimenta?",
				pages: [206, 207],
				opts: [
					["Kolikokrat se beseda pojavi v pozitivnih dokumentih v primerjavi z negativnimi.", false, "To opisuje razmerje frekvenc po razredih, ne PMI med dvema besedama."],
					["Kako pogosto se dve besedi skupaj pojavita v primerjavi z njuno neodvisno pojavitvijo.", true, "To je definicija PMI: log2(P(x,y) / (P(x)·P(y)))."],
					["Kosinusno podobnost med vektorskima reprezentacijama dveh besed v korpusu.", false, "Kosinusna podobnost je mera za word2vec/GloVe, ne PMI."],
					["Verjetnost, da se beseda pojavi desno od druge besede v oknu velikosti 5.", false, "To opisuje kontekstno okno za word2vec, ne PMI."],
				],
			},
			{
				q: "Kako Turneyev algoritem s PMI izmeri polariteto fraze?",
				pages: [208, 209],
				opts: [
					["PMI(fraza, dobro) + PMI(fraza, slabo), kar kaže skupno intenzivnost sentimenta.", false, "Seštevanje ne loči pozitivnega od negativnega – potrebujemo odštevanje."],
					["PMI(fraza, dobro) – PMI(fraza, slabo)", true, "Pozitivna vrednost pomeni bližje k 'dobro', negativna k 'slabo'."],
					["PMI(dobro, slabo) / PMI(fraza, dobro), kar normalizira polariteto glede na referenco.", false, "To ni formula Turneyevega algoritma – PMI(dobro, slabo) ni relevanten."],
					["log2(zadetki(fraza) / zadetki(dobro)), kar meri relativno redkost fraze.", false, "To je le logaritem razmerja frekvenc, ne PMI razlika med pozitivnim in negativnim polom."],
				],
			},
			{
				q: "Kaj SentiWordNet dodeli vsem WordNet sinsetom?",
				pages: [201],
				opts: [
					["Binarno oznako pozitivno/negativno, ki jo pridobijo z glasovanjem anotatorjev.", false, "SentiWordNet dodeli tri stopnje (poz, neg, nevt), ne binarne oznake."],
					["Stopnjo pozitivnosti, negativnosti in nevtralnosti.", true, "To je eksplicitno navedeno v opisu SentiWordNeta v gradivu."],
					["Semantično kategorijo po Schererjevi tipologiji in njeno intenzivnost.", false, "SentiWordNet temelji na WordNetu, ne na Schererjevi tipologiji."],
					["Seznam pridevnikov, ki so v konjunkciji z danim sinsetom po metodi Hatzivassiloglou.", false, "SentiWordNet pridobi ocene iz WordNeta, ne iz konjunkcij pridevnikov."],
				],
			},
			{
				q: "Katera lastnost razlikuje binariziran Multinominalni Naïve Bayes od standardnega?",
				pages: [198, 199],
				opts: [
					["Vsaki besedi dodeli utež glede na njen prispevek k razlikovanju razredov.", false, "To opisuje TF-IDF ali diskriminatoren model, ne binariziran NB."],
					["Pred računanjem verjetnosti iz vsakega dokumenta odstrani podvojene besede.", true, "Binariziran NB temelji na pojavitvi (ali se beseda pojavi), ne frekvenci."],
					["Izračuna verjetnost razreda samo na podlagi pridevnikov, ne celotnega besedišča.", false, "Binariziran NB ni omejen na pridevnike – upošteva celoten slovar."],
					["Uporablja add-k glajenje namesto add-1, da zmanjša vpliv redkih besed.", false, "Glajenje je ločen parameter – binarizacija se nanaša na odstranitev podvojenj, ne na glajenje."],
				],
			},
			{
				q: "Katera klasifikatorja v gradivu pogosto dosegata boljše rezultate kot Naïve Bayes?",
				pages: [200],
				opts: [
					["Logistična regresija in odločitvena drevesa z regularizacijo.", false, "Gradivo eksplicitno navede MaxEnt in SVM, ne logistične regresije in dreves."],
					["MaxEnt in SVM.", true, "Gradivo eksplicitno navaja, da MaxEnt in SVM ponavadi dajeta boljše rezultate."],
					["Binariziran NB in Multinominalni NB z laplace glajnjem.", false, "To sta različici Naïve Bayesa, ne boljši alternativni klasifikatorji."],
					["Turneyev nenadzorovani klasifikator in Hatzivassiloglou leksikalni pristop.", false, "Ti pristopi niso klasifikatorja v smislu, ki ga gradivo primerja z NB."],
				],
			},
			{
				q: "Kaj je 'aspekt' (cilj) pri odkrivanju odnosov v analizi sentimenta?",
				pages: [189],
				opts: [
					["Polarnost celotnega dokumenta, ki jo model dodeli po klasifikaciji vsebine.", false, "Polarnost je rezultat klasifikacije, aspekt pa je tisto, o čemer se polarnost izraža."],
					["Specifičen vidik predmeta, npr. cena tiskalnika ali enostavnost uporabe.", true, "To je primer aspekta, ki ga gradivo eksplicitno navede."],
					["Čustvena kategorija po Schererjevi tipologiji, ki označuje vrsto odnosa.", false, "Aspekt (cilj) je predmet ocene, ne vrsta čustva."],
					["Носilec mnenja, torej oseba ali vir, ki izrazi oceno.", false, "Носilec je izvor odnosa, aspekt pa je tisto, na kar je odnos usmerjen – to sta dve različni vlogi."],
				],
			},
			{
				q: "Katera metoda za gradnjo leksikona sentimenta temelji na razširitvi semenske množice z besednimi zvezami?",
				pages: [202, 203],
				opts: [
					["Turneyev algoritem, ki razširi seme s PMI do besed 'dobro' in 'slabo'.", false, "Turney ne razširi semenski leksikon – izračuna polariteto fraz brez semenske množice besed."],
					["Hatzivassiloglou in McKeown: razširitev semen prek pogostih pridevniških konjunkcij.", true, "To je natančen opis postopka iz gradiva."],
					["Pang in Lee postopek, ki razširi seme z najbližjimi sosedi v vektorskem prostoru.", false, "Pang & Lee sta delala na klasifikaciji filmskih kritik, ne na gradnji leksikonov."],
					["SentiWordNet metoda, ki razširi seme prek sinonimnih setov v WordNetu.", false, "SentiWordNet ima lastno metodologijo – ne temelji na razširitvi semenske množice s konjunkcijami."],
				],
			},
			{
				q: "Kaj leksikalna analiza pri analizi sentimenta med drugim obravnava?",
				pages: [194],
				opts: [
					["Razreševanje koreferenc, elipse in pragmatičnih implikatur za boljše razumevanje konteksta.", false, "To so naloge semantike in pragmatike, ne leksikalne analize."],
					["HTML/XML operacije, Twitter posebnosti, čustvene simbole, datume in telefonske številke.", true, "Gradivo navaja ravno te primere na diapozitivu o leksikalni analizi."],
					["Gradnjo sintaktičnih odvisnostnih dreves in odkrivanje glave stavčnih fraz.", false, "To je sintaktična analiza (parsanje), ne leksikalna analiza."],
					["Morfološko normalizacijo z lematizacijo in stematizacijo za zmanjšanje besedišča.", false, "Lematizacija in stematizacija sta predprocesiranje, ki ga gradivo eksplicitno ne navede pri leksikalni analizi."],
				],
			},
			{
				q: "Kateri leksikon je po gradivu prosto dostopen za raziskovanje (brez plačila)?",
				pages: [201],
				opts: [
					["LIWC (Linguistic Inquiry and Word Count), ki klasificira besede po psiholoških kategorijah.", false, "LIWC je plačljiv (30 oz. 90 USD) – gradivo to eksplicitno navede."],
					["The General Inquirer", true, "Gradivo eksplicitno navede The General Inquirer kot prosto dostopen za raziskovanje."],
					["MPQA Subjectivity Cues Lexicon z licenco GNU GPL.", false, "MPQA je resda brezplačen (GNU GPL), a gradivo eksplicitno navede General Inquirer, ne MPQA, kot primer prostega dostopa za raziskovanje."],
					["SentiWordNet, ki WordNet sinsetom dodeli ocene pozitivnosti, negativnosti in nevtralnosti.", false, "SentiWordNet je sicer dostopen, a gradivo pri leksikonih posebej izpostavi General Inquirer za brezplačno uporabo."],
				],
			},
			{
				q: "Kakšna je formula za oceno PMI med dvema besedama s spletnim iskalnikom?",
				pages: [208],
				opts: [
					["log2(zadetki(beseda1 BLIZU beseda2) / (zadetki(beseda1) + zadetki(beseda2)))", false, "Imenovalec je produkt, ne vsota – in manjka normalizacijska konstanta N."],
					["log2(zadetki(beseda1 BLIZU beseda2) · N / (zadetki(beseda1) · zadetki(beseda2)))", true, "To je formula iz gradiva za oceno PMI z iskalnikom."],
					["log2(zadetki(beseda1) · zadetki(beseda2) / zadetki(beseda1 BLIZU beseda2))", false, "Razmerje je obrnjeno – PMI meri, koliko pogosteje se pojavita skupaj glede na neodvisnost."],
					["log2(zadetki(beseda1 BLIZU beseda2) / N^2)", false, "Manjka normalizacija z marginalnimi verjetnostmi vsake besede posebej."],
				],
			},
			{
				q: "Kateri korak pri Turneyevem algoritmu pride po učenju polaritete fraz?",
				pages: [204],
				opts: [
					["Razširitev slovarja s fraze na posamezne besede z uteženim povprečjem PMI.", false, "Turney ne razširi polaritet na besede – ostane pri frazah ves čas."],
					["Rangiranje kritik glede na povprečno polariteto fraz.", true, "Gradivo navede: pridobi fraze → nauči polariteto → rangiraj kritike."],
					["Binarizacija polaritet z mejno vrednostjo 0 za razdelitev na pozitivno in negativno.", false, "Binarizacija ni omenjena kot ločen korak v Turneyevem algoritmu."],
					["Iterativno posodabljanje polaritet s pomočjo kontekstnih oken sosednjih fraz.", false, "Turney ne iterira – polariteto izračuna enkrat s PMI za vsako frazo."],
				],
			},
		],
	},
	{
		id: "diskriminatorni-klasifikatorji",
		name: "Diskriminatorni klasifikatorji",
		color: "#4d9fff",
		questions: [
			{
				q: "Kaj diskriminatorni modeli v fazi sklepanja neposredno ocenjujejo?",
				pages: [213, 214],
				opts: [
					["P(d|c) skupaj s priorom P(c) in nato Bayesovo pravilo za P(c|d)", false, "To je postopek generativnih modelov, ki posredno pridejo do P(c|d)."],
					["P(c|d)", true, "Diskriminatorni modeli neposredno računajo posteriorno verjetnost razreda."],
					["P(d) – marginalno verjetnost dokumenta, neodvisno od razreda", false, "P(d) je normalizacijska konstanta, ki se upošteva v Bayesovem pravilu, ne neposredni cilj."],
					["P(c) – apriorno verjetnost razreda, ocenjeno iz razporeditve učnih primerov", false, "Prior P(c) je eden od vhodov v generativnem modelu, ne tisto, kar diskriminatorni model neposredno ocenjuje."],
				],
			},
			{
				q: "Katera trditev najbolje opiše razliko med generativnimi in diskriminatornimi modeli?",
				pages: [214],
				opts: [
					["Generativni modeli neposredno računajo P(c|d), diskriminatorni pa modelirajo P(d|c) in P(c).", false, "To je obrnjeno – generativni modelirajo P(d|c)·P(c), diskriminatorni pa P(c|d)."],
					["Generativni modeli uporabljajo P(d|c) in P(c) ter Bayesovo pravilo, diskriminatorni pa neposredno P(c|d).", true, "To je jedro razlike, ki jo prikazuje gradivo."],
					["Generativni modeli so bolj točni, ker modelirajo celotno porazdelitev podatkov.", false, "Gradivo navede, da so diskriminatorni pogosto bolj točni (+2.5% za NB→disk.)."],
					["Diskriminatorni modeli ne morejo vključiti jezikovno specifičnih značilk brez predznanja.", false, "Prav nasprotno – prednost diskriminatornih je enostavno vključevanje jezikovnih značilk."],
				],
			},
			{
				q: "Kaj je v gradivu posebnost značilk pri diskriminatornem modelu?",
				pages: [215, 216],
				opts: [
					["Značilke so vedno binarne (0/1) in ne morejo imeti negativnega učinka na klasifikacijo.", false, "Značilke vrnejo realno vrednost, uteži pa so lahko pozitivne ali negativne."],
					["Značilka lahko vrne realno vrednost in model ji dodeli pozitivno ali negativno utež.", true, "To je osrednja ideja funkcij f : CxD → R."],
					["Značilke so neodvisne druga od druge, kar je enaka predpostavka kot pri Naïve Bayesu.", false, "Diskriminatorni modeli prav zato ne predpostavljajo neodvisnosti – to je omejitev NB."],
					["Vsaka značilka enkapsulira celoten dokument in mu dodeli enotno realno vrednost.", false, "Značilka je odvisna od para (razred, dokument), ne le od dokumenta."],
				],
			},
			{
				q: "Kako linearni klasifikator izbere razred na podlagi značilk?",
				pages: [217, 218],
				opts: [
					["Izbere razred z najmanjšo vsoto absolutnih vrednosti uteži, da minimizira kompleksnost.", false, "Minimizacija uteži je regularizacija, ne kriterij za izbiro razreda."],
					["Izbere razred z največjo vrednostjo glasovanja Σλi fi(c,d).", true, "To je neposredno zapisano v diapozitivu o linearnem klasifikatorju."],
					["Izbere razred, katerega prior verjetnost P(c) je največja med vsemi razredi.", false, "Prior je del generativnih modelov – linearni klasifikator ne upošteva priorja eksplicitno."],
					["Izbere razred, pri katerem je vsota verjetnosti vseh značilk največja po Bayesovem pravilu.", false, "Linearni klasifikator ne uporablja Bayesovega pravila – sešteje utežene vrednosti značilk."],
				],
			},
			{
				q: "Kaj počne perceptron v tem okviru?",
				pages: [218],
				opts: [
					["Išče napačno klasificirane primere in uteži premakne proti pravilni klasifikaciji.", true, "To je natančen opis perceptronskega učenja v gradivu."],
					["Maksimizira razdaljo med razredi s pomočjo podpornih vektorjev na meji odločitve.", false, "To opisuje SVM, ne perceptron."],
					["Iterativno optimizira uteži z gradientnim spustom na skupni log-verjetnosti učnih podatkov.", false, "Gradientni spust na log-verjetnosti opisuje logistično regresijo/MaxEnt, ne perceptron."],
					["Vzorči vrednosti uteži iz posteriorne porazdelitve z MCMC metodo.", false, "To je Bayesov pristop, ki ni omenjen v kontekstu perceptrona."],
				],
			},
			{
				q: "Katera metoda je v gradivu navedena kot diskriminatorna?",
				pages: [213, 214, 218],
				opts: [
					["Naïve Bayes, ker neposredno oceni verjetnost razreda iz učnih podatkov.", false, "NB je generativen – modelira P(d|c) in P(c), ne P(c|d) neposredno."],
					["SVM", true, "SVM je izrecno naveden med diskriminatornimi metodami."],
					["Skriti Markovi model (HMM), ker modelira zaporedje razredov in opazovanj.", false, "HMM je generativen model, ki modelira skupno porazdelitev."],
					["Multinominalni Naïve Bayes z binarizacijo, ker upošteva samo pojavitev besed.", false, "Binarizacija je le predelava podatkov – NB ostane generativen model."],
				],
			},
			{
				q: "Zakaj eksponentni (loglinearni) model uporablja funkcijo exp?",
				pages: [219, 220],
				opts: [
					["Da uteži omeji na interval [0,1], kar zagotovi veljavno verjetnostno porazdelitev.", false, "exp() ne omeji vrednosti – normalizacija čez razrede zagotovi verjetnosti."],
					["Da pretvori linearno kombinacijo v pozitivno vrednost, tudi kadar so uteži negativne.", true, "exp(x) je vedno pozitiven, kar omogoča normalizacijo v verjetnosti."],
					["Da izračuna logaritem skupne verjetnosti, ki jo optimiziramo z gradientnim spustom.", false, "exp() je obratna operacija od logaritma – ne izračunamo log, ampak potrebujemo pozitivne vrednosti."],
					["Da modelira nelinearno odvisnost med značilkami in razredi.", false, "Loglinearni model je linearen v parametrih – exp() ni namenjen nelinearnosti."],
				],
			},
			{
				q: "Katera formula pravilno opisuje loglinearni model P(c|d,λ)?",
				pages: [220],
				opts: [
					["P(d|c)·P(c) / Σc' P(d|c')·P(c')", false, "To je Bayesovo pravilo za generativne modele, ne loglinearni model."],
					["exp(Σi λi fi(c,d)) / Σc' exp(Σi λi fi(c',d))", true, "To je eksaktna formula iz gradiva za loglinearni model."],
					["Σi λi fi(c,d) / Σc' Σi λi fi(c',d)", false, "Linearna normalizacija ne deluje, ker so vrednosti lahko negativne."],
					["exp(Σi λi fi(c,d)) / exp(Σi λi fi(c*,d)), kjer je c* razred z najvišjim glasovanjem", false, "Normalizacija mora teči čez vse razrede, ne samo čez maksimalni."],
				],
			},
			{
				q: "Kaj je empirično pričakovanje značilke fi po gradivu?",
				pages: [217, 224],
				opts: [
					["Napovedano pričakovanje modela, ki ga izračunamo z uteženo vsoto po razredih.", false, "Napovedano pričakovanje temelji na modelski verjetnosti P(c|d,λ), ne na učnih podatkih."],
					["Štetje vrednosti značilke v učni množici (opazovana vsota fi čez (c,d) pare).", true, "Empirično pričakovanje je vsota fi(c,d) čez opazovane pare."],
					["Utež λi, ki jo model dodeli značilki med procesom optimizacije.", false, "Utež je parameter, ki ga optimiziramo – empirično pričakovanje je statistika iz učnih podatkov."],
					["Verjetnost, da se značilka fi sproži za naključno izbran par (c,d) iz testne množice.", false, "Empirično pričakovanje se izračuna iz učne množice, ne testne."],
				],
			},
			{
				q: "Kakšen je pogoj za optimalne parametre pri modelu MaxEnt?",
				pages: [226],
				opts: [
					["Gradient log-verjetnosti je negativen za vse parametre λi pri optimumu.", false, "Pri optimumu je gradient enak nič, ne negativen."],
					["Napovedano pričakovanje je enako empiričnemu pričakovanju za vsako značilko.", true, "To je jedro MaxEnt: E_p̃(fj) = E_p(fj) za vsak j."],
					["Vsota vseh uteži λi je enaka 1, kar zagotovi normalizacijo verjetnosti.", false, "Normalizacijo zagotovi imenovalec formule, ne vsota uteži."],
					["Empirično pričakovanje vsake značilke je enako nič, kar pomeni nevtralne značilke.", false, "Pogoj je enakost med empiričnim in napovedanim, ne enakost z nič."],
				],
			},
			{
				q: "Zakaj se modeli MaxEnt imenujejo modeli maksimalne entropije?",
				pages: [226],
				opts: [
					["Ker maksimizirajo verjetnost učnih podatkov brez kakršnihkoli omejitev na parametrih.", false, "Omejitve (constraints) na pričakovanjih značilk so bistveni del MaxEnt."],
					["Ker iščejo model z maksimalno entropijo, ki zadosti danim omejitvam na pričakovanjih značilk.", true, "To je matematično jedro MaxEnt pristopa."],
					["Ker minimizirajo entropijo porazdelitve razredov, da so odločitve čim bolj zanesljive.", false, "MaxEnt maksimizira, ne minimizira entropijo – išče čim manj pristranski model."],
					["Ker povečujejo entropijo vhodnega besedila, da zmanjšajo vpliv neravnovesja razredov.", false, "MaxEnt ne procesira besedila – maksimizira entropijo modelske porazdelitve."],
				],
			},
			{
				q: "Katera metoda je v gradivu omenjena za iskanje optimalnih parametrov loglinearnega modela?",
				pages: [227],
				opts: [
					["EM algoritem, ki iterativno oceni skrite parametre in maksimizira verjetnost.", false, "EM se uporablja za generativne modele s skritimi spremenljivkami, ne za loglinearni model."],
					["Gradientni spust.", true, "Gradivo eksplicitno omenja gradientni spust kot optimizacijsko metodo."],
					["MLE z zaprtimi formulami, podobno kot pri ocenjevanju n-gram modelov iz korpusa.", false, "Za loglinearni model ni zaprtih formul – zahteva iterativno numerično optimizacijo."],
					["Iterativno proporcionalno prilagajanje (IPS), ki uravnoteži empirična pričakovanja.", false, "IPS je ena od metod za MaxEnt, a gradivo eksplicitno omeni gradientni spust."],
				],
			},
			{
				q: "V primeru iz gradiva (str. 221): P(MESTO|v Maribor)≈0.55, P(DRŽAVA|v Maribor)≈0.45. Kateri razred model izbere?",
				pages: [221],
				opts: [
					["DRŽAVA, ker ima manjšo entropijo in je bolj specifična oznaka.", false, "Model izbere razred z višjo posteriorno verjetnostjo, ne glede na specifičnost oznake."],
					["MESTO", true, "MESTO ima višjo posteriorno verjetnost (0.55 > 0.45) in bo izbrano."],
					["Nobeden – razlika 0.10 je premajhna za zanesljivo odločitev brez praga zaupanja.", false, "Loglinearni klasifikator izbere razred z višjo verjetnostjo brez praga – vedno se odloči."],
					["Odvisno od priorja P(MESTO) in P(DRŽAVA), ki ju model upošteva pred prilagoditvijo.", false, "Loglinearni model ne upošteva priorja eksplicitno – P(c|d,λ) ga ne vsebuje."],
				],
			},
			{
				q: "Kaj pomeni, da model dodeli negativno utež značilki?",
				pages: [215],
				opts: [
					["Značilka zmanjša skupno glasovanje za ta razred – njena prisotnost govori proti razredu.", true, "Negativna utež v exp(Σλifi) zmanjša verjetnost razreda."],
					["Značilka je informativen negativen primer, ki pomaga ločiti razrede v testni množici.", false, "Negativna utež ni isto kot negativen primer – utež pove smer vpliva, ne vrsto primera."],
					["Značilka se ne upošteva pri izračunu glasovanja, ker je njena vrednost pod mejno vrednostjo.", false, "Vsaka značilka z neglinearno vrednostjo prispeva k glasovanju, ne glede na predznak."],
					["Značilka deluje kot regularizacijski člen, ki kaznuje preveč kompleksne modele.", false, "Regularizacija je ločen mehanizem – predznak uteži ni regularizacija."],
				],
			},
			{
				q: "Katera je po gradivu prednost diskriminatornih modelov pri jezikovnih nalogah?",
				pages: [213, 214],
				opts: [
					["Lažje modelirajo skupno porazdelitev P(d,c), kar zagotovi boljše razumevanje podatkov.", false, "Diskriminatorni modeli ne modelirajo P(d,c) – to je prednost generativnih modelov."],
					["Omogočajo enostavno vključitev jezikovno relevantnih značilk in so pogosto bolj točni.", true, "Gradivo to navede kot ključno prednost."],
					["Zahtevajo manj označenih učnih podatkov, ker delno temeljijo na generativnih predpostavkah.", false, "Diskriminatorni modeli načeloma zahtevajo podobne količine označenih podatkov."],
					["Delujejo neposredno na surovih besedilih brez predhodne leksikalne analize.", false, "Diskriminatorni modeli prav tako zahtevajo pripravo značilk iz besedila."],
				],
			},
			{
				q: "Kako je skupna pogojna logaritemska verjetnost CLogVer(D) definirana v gradivu?",
				pages: [227],
				opts: [
					["Σn log P(di|ci), ki meri, kako dobro model generira opazovana besedila.", false, "To je generativna log-verjetnost – CLogVer maksimizira pogojno, ne skupno."],
					["Σn log P(ci|di)", true, "CLogVer maksimizira vsoto logaritmov posteriornih verjetnosti razredov."],
					["Σn [log P(ci) + log P(di|ci)] – log P(di), ki upošteva Bayesovo razgraditev.", false, "Ta zapis je enakovreden P(ci|di) samo matematično, a gradivo definira CLogVer neposredno."],
					["Σi λi fi(c,d), ki meri skupni prispevek vseh značilk na učni množici.", false, "To je glasovanje za posamezen primer, ne skupna log-verjetnost celotne učne množice."],
				],
			},
			{
				q: "Kateri generativni modeli so v gradivu eksplicitno navedeni?",
				pages: [214],
				opts: [
					["Logistična regresija, perceptron in SVM, ker neposredno modelirajo P(c|d).", false, "To so diskriminatorni modeli, ne generativni."],
					["n-gram modeli, Naïve Bayes, skriti Markovi modeli.", true, "Gradivo našteje ravno te modele kot generativne."],
					["MaxEnt, verjetnostne kontekstno proste gramatike in loglinearni modeli.", false, "MaxEnt in loglinearni modeli so diskriminatorni; verjetnostne gramatike so ločeno področje."],
					["Odločitvena drevesa, k-nearest neighbours in Gaussian Mixture Models.", false, "Ti modeli niso omenjeni v gradivu v kontekstu generativnih modelov za JT."],
				],
			},
			{
				q: "Kako se za dani par (c,d) pri loglinearnem modelu glasovanje Σλifi(c,d) pretvori v verjetnost?",
				pages: [220],
				opts: [
					["Z direktno normalizacijo: delimo glasovanje z vsoto glasovanj čez vse razrede.", false, "Direktna normalizacija ne deluje, ker so glasovanja lahko negativna."],
					["Z aplikacijo exp na glasovanje in normalizacijo čez vse razrede.", true, "exp zagotovi pozitivnost, normalizacija zagotovi verjetnost."],
					["Z množenjem z apriorno verjetnostjo P(c) in normalizacijo po Bayesovem pravilu.", false, "Prior se v diskriminatornem modelu ne upošteva eksplicitno."],
					["Z aplikacijo sigmoidne funkcije, ki glasovanje preslika na interval [0,1].", false, "Sigmoida se uporablja za binarno logistično regresijo – za več razredov se uporablja softmax (exp + normalizacija)."],
				],
			},
			{
				q: "Kaj je smisel iterativnega postopka izgradnje modela MaxEnt?",
				pages: [222],
				opts: [
					["Optimizacija uteži z gradientnim spustom za vsako novo iteracijo učnih podatkov.", false, "Iterativnost se nanaša na postopek razvoja modela (dodajanje značilk), ne na en cikel gradientnega spusta."],
					["Dodajanje in preizkušanje značilk na razvojni množici ter iterativno izboljšanje.", true, "Gradivo opiše ravno ta iterativni postopek razvoja modela."],
					["Ponovljeno vzorčenje učnih primerov z bootstrapom za oceno variance modela.", false, "To je bootstrapping za evalvacijo, ne postopek izgradnje MaxEnt modela."],
					["Iterativna konvergenca posteriornih verjetnosti k uniformni porazdelitvi za stabilnost.", false, "MaxEnt ne konvergira k uniformni porazdelitvi – to bi pomenilo izgubo informacij."],
				],
			},
			{
				q: "Kateri tip modelov je po gradivu bolj točen – generativni ali diskriminatorni?",
				pages: [214],
				opts: [
					["Generativni, ker modelirajo celotno porazdelitev in so zato bolje kalibrirani.", false, "Gradivo navede nasprotno – diskriminatorni so pogosto bolj točni (+2.5%)."],
					["Diskriminatorni, ker se neposredno osredotočijo na mejo med razredi.", true, "Gradivo navede 73.6 → 76.1 (+2.5%) kot primer izboljšave pri NB→disk."],
					["Sta enako točna, ker z dovolj učnih podatkov oba konvergirata k optimalnem klasifikatorju.", false, "Gradivo eksplicitno primerja in pokaže razliko – nista enako točna."],
					["Odvisno od naloge: generativni boljši za sentiment, diskriminatorni za NER.", false, "Gradivo ne dela te delitve – diskriminatorni so opisani kot splošno boljši."],
				],
			},
		],
	},
	{
		id: "strojno-prevajanje",
		name: "Strojno prevajanje",
		color: "#f39c6b",
		questions: [
			{
				q: "Kako gradivo opiše neposredno strojno prevajanje?",
				pages: [237, 238],
				opts: [
					["Prevajanje besedo po besedo z zelo malo analize izvornega besedila.", true, "To je neposredni, dictionary-based pristop."],
					["Prevajanje z morfološko analizo in poravnavo stavčnih fraz med izvornim in ciljnim jezikom.", false, "Morfološka analiza in poravnava fraz sta lastnosti naprednejših pristopov, ne neposrednega."],
					["Prevajanje prek vmesne jezikovne reprezentacije, ki je neodvisna od izvornega in ciljnega jezika.", false, "To opisuje medjezikovni pristop (interlingua), ne neposrednega."],
					["Prevajanje s prenosom sintaktičnega drevesa iz izvornega v ciljni jezik po pravilih.", false, "Prenos drevesa je lastnost transfernega prevajanja, ne neposrednega."],
				],
			},
			{
				q: "Katera lastnost loči transferno strojno prevajanje od neposrednega?",
				pages: [237],
				opts: [
					["Transferni pristop prevaja prek skupne vmesne reprezentacije, neodvisne od obeh jezikov.", false, "Vmesna jezikovno neodvisna reprezentacija je značilnost interlingua, ne transfernega pristopa."],
					["Transferni pristop doda skladenjsko in semantično analizo ter prenos strukture.", true, "Transfer-based translation je korak nad neposrednim prevajanjem."],
					["Transferni pristop ne potrebuje dvojezičnega slovarja, ker se uči iz vzporednih korpusov.", false, "Dvojezični slovar ali vzporedni korpus se uporablja pri vseh pristopih, tudi transfernem."],
					["Transferni pristop upošteva statistiko sopojavljanja besed za oceno prevodnih verjetnosti.", false, "Statistika sopojavljanja je lastnost statističnega strojnega prevajanja, ne transfernega."],
				],
			},
			{
				q: "Kaj je bistvo medjezikovnega strojnega prevajanja?",
				pages: [237],
				opts: [
					["Vsak jezik najprej preslikamo v skupno vmesno predstavitev, nato pa iz nje v ciljni jezik.", true, "To je osrednja ideja interlingua-based pristopa."],
					["Izvorni stavek najprej sintaktično razčlenimo, nato prenesemo drevo v ciljni jezik s pravili.", false, "Sintaktičen prenos drevesa opisuje transferni pristop, ne medjezikovni."],
					["Prevajamo z vzporednimi korpusi in statistično ocenimo prevodne verjetnosti med jeziki.", false, "To opisuje statistično strojno prevajanje, ne medjezikovni pristop."],
					["Besedilo prevedemo besedo po besedo z dvojezičnim slovarjem in nato sortiramo besede.", false, "To je neposredno prevajanje, ne medjezikovni pristop."],
				],
			},
			{
				q: "Kaj pomenita parametra tMLE(s|e) in qMLE(j,i|l,m) v statističnem prevajanju?",
				pages: [264],
				opts: [
					["tMLE je MLE ocena verjetnosti poravnave, qMLE pa MLE ocena prevodne verjetnosti besede.", false, "Vlogi sta zamenjani – t je prevodni parameter, q je parameter poravnave."],
					["tMLE je MLE ocena prevodne verjetnosti, qMLE pa MLE ocena verjetnosti poravnave oziroma položaja.", true, "To je točno v duhu modela na diapozitivu."],
					["Oba sta jezikovni model in translacijski model za Bayesovo dekodiranje v SMT.", false, "To so abstraktni opisi, a gradivo razlikuje med t (prevod) in q (poravnava) natančno."],
					["tMLE je skupna verjetnost stavčnega para, qMLE pa verjetnost dolžine ciljnega stavka.", false, "t in q sta parametra na ravni posameznih besed, ne celih stavkov."],
				],
			},
			{
				q: "Kateri primer lepo pokaže, da mora strojno prevajanje upoštevati kontekst?",
				pages: [233, 236],
				opts: [
					["Prevajanje zaimka 'it' – ali se nanaša na računalnik ali na podatke – zahteva razrešitev koreference.", true, "Gradivo pokaže, da prevod ni odvisen samo od posamezne besede."],
					["Prevajanje 'book the flight' zahteva razlikovanje med glagolom 'rezervirati' in samostalnikom 'knjiga'.", false, "Leksikalna dvoumnost 'book' je kontekstna, a gradivo posebej izpostavi primer z 'it' in koferenco."],
					["Prevajanje japonskih stavkov zahteva prerazporeditev besed v SVO vrstni red angleščine.", false, "Prerazporeditev besednega reda je ločen problem, ki ga gradivo navede, a ne kot primer konteksta."],
					["Prevajanje slovenskega stavka z implicitnim subjektom zahteva identifikacijo osebe.", false, "Implicitni subjekt je problem pro-drop jezikov, ki ga gradivo ne navede kot osrednji kontekstni primer."],
				],
			},
			{
				q: "Kaj v prevajanju pomeni ločljivost samostalnikov oziroma zaimka 'it'?",
				pages: [236],
				opts: [
					["Da je treba ugotoviti, ali se 'it' nanaša na računalnik ali na podatke.", true, "Gradivo daje oba primera in pokaže, da je kontekst ključnega pomena."],
					["Da zaimek 'it' prevedemo z glagolom v ednini ali množini glede na spol predhodnika.", false, "Čeprav je reševanje spola del problema, se gradivo osredotoči na identifikacijo referenta, ne slovnice."],
					["Da stavke z zaimki prevedemo v aktivno obliko, da se izognemo dvoumnosti trpnika.", false, "Aktivni/trpnik sta morfosintaktična kategorija, ne problem ločljivosti referenta zaimka."],
					["Da besedni red v ciljnem jeziku določi, kateri referent je v ospredju stavka.", false, "Besedni red ureja tematizacijo, ne ločuje referenta zaimka."],
				],
			},
			{
				q: "Kaj je 'šumni kanal' (noisy channel) pri statističnem strojnem prevajanju?",
				pages: [244],
				opts: [
					["Model za ocenjevanje hrupa v prevajanem besedilu z namenom filtriranja napak.", false, "Hrup je metafora za zakodiranje, ne opis dejanskega hrupa v besedilu."],
					["Metafora: izvorni jezik je zakodiran ciljni jezik, ki ga dekodirnik razplete.", true, "Warren Weaver (1949) je predlagal, da prevajanje razumemo kot dešifriranje kode."],
					["Statistični model, ki oceni verjetnost napake pri poravnavi besed med jezikoma.", false, "Šumni kanal ni model napak poravnave – opisuje celoten prevajalni postopek."],
					["Jezikovni model P(e), ki filtrira slovnično napačne prevode z nizko verjetnostjo.", false, "Jezikovni model je del SMT, a šumni kanal opisuje oba modela skupaj, ne samo P(e)."],
				],
			},
			{
				q: "Kaj dekodirnik (iskalni algoritem) v SMT maksimizira?",
				pages: [245],
				opts: [
					["P(e|s) neposredno, brez razgraditve na jezikovni in prevajalni model.", false, "Dekodirnik ravno razgradi P(e|s) na P(e)·P(s|e) in maksimizira produkt – ne oceni P(e|s) neposredno."],
					["P(e) · P(s|e)", true, "dekodirnik = arg max_e P(e)·P(s|e); produkt jezikovnega in prevajalnega modela."],
					["P(s|e) / P(e), ker jezikovni model kaznuje neverjetne stavke v ciljnem jeziku.", false, "Jezikovni model P(e) se množi, ne deli – z njim nagradimo tečne prevode."],
					["P(e,s) – skupno verjetnost stavčnega para, ocenjeno iz vzporednega korpusa.", false, "P(e,s) je skupna verjetnost para, ki se razgradi drugače kot dekodirnikova formula."],
				],
			},
			{
				q: "Kaj je poravnava 'a' v modelu IBM?",
				pages: [250],
				opts: [
					["Verjetnost, da je par stavkov (e,s) korekten prevod, ocenjena z IBM modelom.", false, "Verjetnost stavčnega para je P(s|e,m), poravnava a pa je preslikava besed."],
					["Preslikava vsake ciljne besede na besedo v izvornem jeziku.", true, "a = {a1,...,am}, kjer aj ∈ {0,...,l} pove, katera izvorna beseda generira j-to ciljno besedo."],
					["Parameter poravnave q(i|j,l,m) iz Modela IBM 2, ki modelira položaj besed.", false, "q je parameter Modela IBM 2 – poravnava a je preslikava besed, ne verjetnostni parameter."],
					["Dolžinska razlika med izvornim in ciljnim stavkom, ki vpliva na strukturo prevoda.", false, "Dolžinska razlika ni poravnava – a pove specifično preslikavo vsake besede."],
				],
			},
			{
				q: "Koliko možnih poravnav obstaja za par stavkov v Modelu IBM 1 z m ciljnimi in l izvornimi besedami?",
				pages: [250],
				opts: [
					["l^m, ker vsaka ciljna beseda se poravna z eno od l izvornih besed.", false, "Manjka NULL simbol – vsaka ciljna beseda se poravna z 0 (NULL) ali z l besedami."],
					["(l+1)^m", true, "Vsaka od m ciljnih besed se poravna z 0 (NULL) ali katerokoli od l izvornih besed."],
					["m^l, ker vsaka izvorna beseda se poravna z eno od m ciljnih besed.", false, "Poravnava je definirana v smeri ciljnih besed, ne izvornih – in ni potenca m^l."],
					["m · l, ker vsak par (izvorna, ciljna) tvori eno možno poravnavo.", false, "Poravnave so kombinatorične – vsaka ciljna beseda se neodvisno poravna, kar da eksponent."],
				],
			},
			{
				q: "Kaj predpostavlja Model IBM 1 glede porazdelitve poravnav P(a|e,m)?",
				pages: [255],
				opts: [
					["Vsaka poravnava je enako verjetna – uniformna porazdelitev 1/(l+1)^m.", true, "To je ključna poenostavitev Modela IBM 1."],
					["Poravnava sledi porazdelitvi, ki jo modelira parameter q(i|j,l,m) iz Modela IBM 2.", false, "Parameter q je lastnost Modela IBM 2 – IBM 1 ga ne vsebuje."],
					["Verjetnost poravnave je sorazmerna s prevodnim parametrom t(sj|eaj).", false, "Prevodni parameter t je ločen od porazdelitve poravnav – IBM 1 ju množi, ne enači."],
					["Vsaka ciljna beseda se poravna z izvorno besedo, ki je najbližja po položaju.", false, "To je pozicijska hevristika – IBM 1 ne upošteva položaja, samo enakomerno razporeditev."],
				],
			},
			{
				q: "Kaj je parameter t(sj|eaj) v modelu IBM?",
				pages: [255],
				opts: [
					["Verjetnost poravnave j-te ciljne besede z i-to izvorno besedo, neodvisno od prevodne verjetnosti.", false, "Verjetnost poravnave opisuje q v IBM 2 – t je prevodni, ne poravnalni parameter."],
					["Prevodni parameter: verjetnost, da je sj prevod besede eaj.", true, "t je ocenjena verjetnost prevodnega para besed."],
					["MLE ocena tMLE(s|e) = štev(e,s) / štev(s), ki normalizira s frekvenco ciljne besede.", false, "MLE ocena deli s štev(e), ne s štev(s) – imenovalec je frekvenca izvorne besede."],
					["Parameter, ki pove, koliko ciljnih besed v povprečju generira posamezna izvorna beseda.", false, "t je verjetnost prevodnega para, ne povprečno razmerje generiranih besed."],
				],
			},
			{
				q: "Kako Model IBM 2 razširi Model IBM 1?",
				pages: [260],
				opts: [
					["IBM 2 zamenja uniformno porazdelitev poravnav z naučeno verjetnostjo q(i|j,l,m).", true, "q(i|j,l,m) je verjetnost, da je j-ta ciljna beseda poravnana z i-to izvorno."],
					["IBM 2 doda jezikovni model P(e) za zagotovitev tečnosti prevodov.", false, "Jezikovni model je del SMT dekoderja, ne razlika med IBM 1 in IBM 2."],
					["IBM 2 uvede parameter t za prevodno verjetnost, ki ga IBM 1 ne vsebuje.", false, "Parameter t je že v IBM 1 – IBM 2 doda q poleg obstoječega t."],
					["IBM 2 zamenja MLE oceno z EM algoritmom za učenje parametrov iz neoznačenih podatkov.", false, "Oba modela (IBM 1 in 2) se naučita z EM algoritmom iz poravnanega korpusa."],
				],
			},
			{
				q: "Zakaj je prevajalni model SMT v gradivu opisan kot 'backwards'?",
				pages: [246],
				opts: [
					["Ker za prevajanje iz slovenščine v angleščino ocenjuje P(slo|ang), ne P(ang|slo).", true, "Model je naučen 'v napačni smeri', jezikovni model pa popravi smer."],
					["Ker dekodirnik išče angleške stavke od desne proti levi za boljšo poravnavo.", false, "Smer iskanja ni razlog za oznako 'backwards'."],
					["Ker P(e)·P(s|e) ni isto kot P(s|e), kar pomeni, da model nikoli ne izračuna prave verjetnosti.", false, "Bayesovo pravilo zagotovi, da arg max_e P(e)·P(s|e) = arg max_e P(e|s) – rezultat je pravilen."],
					["Ker IBM model najprej oceni P(s,a|e,m) in šele nato marginalizira čez poravnave.", false, "Marginalizacija čez poravnave ni razlog za 'backwards' – to je standardni postopek."],
				],
			},
			{
				q: "Koliko sistemov za analizo in generiranje je potrebnih pri medjezikovnem prevajanju za N jezikov?",
				pages: [242],
				opts: [
					["N*(N-1) sistemov, ker za vsak jezikovni par potrebujemo en prevajalnik.", false, "To je število za pristop brez interlingve – interlingva zmanjša kompleksnost."],
					["2N sistemov: N za analizo in N za generiranje.", true, "Gradivo navede, da za N jezikov potrebujemo N analizatorjev in N generatorjev."],
					["N^2 sistemov, ker vsaka kombinacija jezikov zahteva ločen prevajalni modul.", false, "N^2 je za pristop s pari jezikov, ne za medjezikovni pristop."],
					["N sistemov, ker interlingva nadomesti oba koraka za vsak jezik z enim skupnim.", false, "Interlingva zahteva 2 koraka na jezik (analiza + generiranje), ne enega."],
				],
			},
			{
				q: "Katera je tipična slabost neposrednega (dictionary-based) strojnega prevajanja?",
				pages: [239, 240],
				opts: [
					["Nezmožnost zajeti dolge prerazporeditve besed brez skladenjskega znanja.", true, "Gradivo navede primer angleška/japonska razlika v besednem redu."],
					["Prevelika odvisnost od statističnih verjetnosti, ki so nezanesljive za redke besede.", false, "Neposredno prevajanje ne temelji na statistiki – ta problem je lastnost SMT."],
					["Nezmožnost modeliranja jezikovne tečnosti, ker nimamo jezikovnega modela P(e).", false, "Pomanjkanje jezikovnega modela je lastnost SMT brez LM, ne neposrednega prevajanja."],
					["Previsoka računska zahtevnost pri iskanju optimalne poravnave čez vse možne kombinacije.", false, "Neposredno prevajanje je preprosto (besedo po besedo) – računska zahtevnost ni njegova slabost."],
				],
			},
			{
				q: "Kako se v modelu IBM 1 izračuna P(s,a|e,m)?",
				pages: [255],
				opts: [
					["P(a|e,m) · P(s|a,e,m) = (1/(l+1)^m) · ∏j t(sj|eaj)", true, "To je formula, ki jo gradivo eksplicitno navaja."],
					["Σa' P(a'|e,m) · P(s|a',e,m), ker moramo sešteti čez vse poravnave.", false, "Seštevanje čez vse poravnave dá P(s|e,m), ne P(s,a|e,m) za specifično poravnavo."],
					["P(a|e,m) + P(s|a,e,m), ker sta poravnava in prevod neodvisna.", false, "Verjetnosti se množijo, ne seštevajo – P(s,a|e,m) je skupna verjetnost."],
					["∏j q(aj|j,l,m) · t(sj|eaj), ker IBM 1 modelira tako poravnavo kot prevod.", false, "Parameter q je lastnost IBM 2 – IBM 1 uporablja uniformno P(a|e,m) = 1/(l+1)^m."],
				],
			},
			{
				q: "Katera trditev o vrstnem redu besed v slovenščini je navedena v gradivu?",
				pages: [234],
				opts: [
					["Slovenščina ima enak besedni red kot angleščina (SVO), kar olajša neposredno prevajanje.", false, "Gradivo poudari ravno razliko in prosto naravo slovenskega besednega reda."],
					["Besedni red v slovenščini se prilagaja poudarjeni besedi (členitev po aktualnosti).", true, "Gradivo navede šest enakovrednih variacij istega stavka."],
					["V slovenščini je glagol vedno na drugem mestu, podobno kot v nemščini.", false, "To je Wackernagel-ovo pravilo za nemščino – slovenščina ima bolj prosto zaporedje."],
					["Slovenščina ima strogo besedno zaporedje subjekt-glagol-objekt brez izjem.", false, "Prav nasprotno – gradivo prikaže šest variacij istega stavka, ki so vse slovnično pravilne."],
				],
			},
			{
				q: "Kaj je MLE ocena tMLE(s|e) po gradivu?",
				pages: [265],
				opts: [
					["število(e,s) / število(s), ker normaliziramo s skupno frekvenco ciljne besede.", false, "Imenovalec bi moral biti število(e) – delimo s frekvenco izvorne besede, ne ciljne."],
					["število(e,s) / število(e)", true, "To je standardna MLE ocena iz poravnanega korpusa."],
					["število(s) / število(e,s), kar meri, kako pogosto se ciljna beseda pojavi neodvisno.", false, "To je obrnjeno razmerje, ki ne dá prevodne verjetnosti."],
					["število(e,s) / (število(e) · število(s)), kar upošteva neodvisnost besed.", false, "To bi bil PMI-podoben izraz, ne MLE ocena prevodne verjetnosti."],
				],
			},
			{
				q: "Katera faza transfernega prevajanja preoblikuje razčlenitveno drevo izvornega stavka v drevo ciljnega?",
				pages: [241],
				opts: [
					["Analiza, ki gradi sintaktično drevo izvornega stavka za nadaljnjo obdelavo.", false, "Analiza samo razčleni – prenos drevesa se zgodi v ločeni fazi."],
					["Prenos", true, "Faza prenosa preoblikuje drevo izvornega v drevo ciljnega stavka s pravili."],
					["Ustvarjanje, ki iz ciljnega drevesa generira besedilo v ciljnem jeziku.", false, "Ustvarjanje deluje na že preoblikovanem drevesu, ki ga je pripravil prenos."],
					["Poravnava, ki poveže besede izvornega in ciljnega drevesa glede na semantično podobnost.", false, "Poravnava je del SMT, ne ločena faza transfernega prevajanja."],
				],
			},
		],
	},
	{
		id: "ekstrakcija-informacij-in-prepoznavanje-imenskih-entitet",
		name: "Ekstrakcija informacij in NER",
		color: "#7dce82",
		questions: [
			{
				q: "Kaj je glavni cilj ekstrakcije informacij?",
				pages: [267, 268],
				opts: [
					["Pridobiti strukturirane podatke iz nestrukturiranih ali pol-strukturiranih virov.", true, "To je eksplicitno navedena definicija."],
					["Ugotoviti polarnost besedila in razvrščati dokumente glede na sentimentalni ton.", false, "Polarnost je cilj analize sentimenta, ne ekstrakcije informacij."],
					["Prepoznati in klasificirati imenske entitete v besedilu kot osebe, organizacije in lokacije.", false, "NER je ključni korak IE, a cilj IE je širši – pridobiti strukturirane podatke, ne le entitete."],
					["Zgraditi jezikovni model, ki generira nova besedila v stilu izvornega dokumenta.", false, "Generiranje besedil je ločena naloga jezikovnega modeliranja, ne ekstrakcije informacij."],
				],
			},
			{
				q: "Katera vprašanja želi IE pogosto odgovoriti po gradivu?",
				pages: [268],
				opts: [
					["Kdo, kaj, komu, kdaj in kje.", true, "To je dobesedno navedeno kot naloga IE."],
					["Kaj je tema dokumenta, katera ključna beseda se najpogosteje pojavi in kakšna je povprečna dolžina stavkov.", false, "To so statistike besedila, ne strukturirana dejanska informacija."],
					["Kako pozitivno ali negativno je sporočilo in kateri aspekt je omenjen.", false, "To so vprašanja analize sentimenta, ne ekstrakcije informacij."],
					["Katera imenska entiteta se prvič pojavi v besedilu in katera je njena vloga v stavku.", false, "IE je širša od NER – želi odgovoriti na dejanska vprašanja o vsebini."],
				],
			},
			{
				q: "Zakaj je prepoznavanje imenskih entitet tako pomembno?",
				pages: [270, 271],
				opts: [
					["Ker NER neposredno nadomesti ročno anotacijo korpusov za vse jezikovne naloge.", false, "NER je korak v pipeline-u, ne zamenjava za celotno anotacijo."],
					["Ker pomaga pri indeksiranju, povezovanju, analizi sentimenta, relacijah in vprašanjih ter odgovorih.", true, "Gradivo navaja več uporabnosti, ki so vse vezane na entitete."],
					["Ker NER zagotovi poravnavo med izvornim in ciljnim jezikom pri strojnem prevajanju.", false, "Poravnava je del SMT – NER ji ne zagotavlja neposredno."],
					["Ker brez NER ni mogoče določiti polarnosti stavka v analizi sentimenta.", false, "NER pomaga pri aspektni analizi, a osnovna analiza sentimenta ne zahteva NER."],
				],
			},
			{
				q: "Kaj pomeni IOB kodiranje?",
				pages: [276],
				opts: [
					["I označuje nadaljevanje entitete, O pa začetek entitete, B pa ostale besede.", false, "Vloge so pomešane – B je začetek, I nadaljevanje, O pa ostalo."],
					["B označuje začetek imenske entitete, I pa njeno nadaljevanje.", true, "To je neposredna razlaga s diapozitiva."],
					["B označuje zunanjo besedo, I notranjo besedo entitete, O pa konec entitete.", false, "B je začetek (Beginning), I je notranjost (Inside), O je zunaj (Outside) – ne konec."],
					["I in O sta oznaki za eno- in večbesedne entitete, B pa za besede na meji dveh entitet.", false, "To ni pravilno – B je vedno za začetek vsake entitete, ne za mejo med njimi."],
				],
			},
			{
				q: "Kaj je pri sekvenčnem modeliranju na voljo kot vhodna značilka po gradivu?",
				pages: [277],
				opts: [
					["Samo besedne vektorje (word embeddings), pridobljene z word2vec ali GloVe.", false, "Gradivo ne omeni besednih vektorjev kot značilke za NER – omeni besede, kontekst in POS oznake."],
					["Trenutna beseda, okoliške besede, oblikoslovne oznake in prejšnje oziroma naslednje oznake.", true, "To je povzetek diapozitiva o značilkah za sekvenčno označevanje."],
					["Samo frekvence besed v dokumentu in TF-IDF tehtanje glede na korpus.", false, "Frekvence in TF-IDF so značilke za klasifikacijo dokumentov, ne za sekvenčno označevanje."],
					["Samo prejšnja in naslednja oznaka v zaporedju, brez informacije o besedi sami.", false, "Beseda sama je temeljna značilka – same oznake brez besed ne zadostujejo."],
				],
			},
			{
				q: "Katero merilo gradivo uporablja za ocenjevanje prepoznavanja imenskih entitet?",
				pages: [272],
				opts: [
					["Accuracy – delež pravilno označenih besed glede na vse besede v testnem korpusu.", false, "Accuracy je nezanesljiva za NER, ker je večina besed O-oznak – gradivo navede P/R/F1."],
					["Precision, recall in F1", true, "To je natančno navedeno na diapozitivu o ocenjevanju NER."],
					["Perplexity – mera presenečenja jezikovnega modela nad testnimi zaporedji oznak.", false, "Perplexity meri jezikovne modele, ne klasifikacijske sisteme kot NER."],
					["BLEU score – mera prekrivanja med napovedanimi in referenčnimi zaporedji oznak.", false, "BLEU se uporablja za strojno prevajanje, ne za NER."],
				],
			},
			{
				q: "Kdaj se je po gradivu začela razvijati ekstrakcija informacij?",
				pages: [268],
				opts: [
					["Z razvojem statističnih metod v 1980-ih, ko so postali vzporedni korpusi dostopni.", false, "Gradivo navaja leto 1970 in pojavitev NER sistemov, ne 1980-ih in korpusov."],
					["Ob pojavitvi sistemov za razpoznavanje imenskih entitet leta 1970.", true, "To je eksplicitno navedeno v gradivu."],
					["Z razvojem spleta in potrebo po iskanju po HTML dokumentih v 1990-ih.", false, "Splet je prinesel nove aplikacije, a IE se je začela razvijati prej, leta 1970."],
					["Z razvojem globokih nevronskih mrež, ki so omogočile sekvenčno označevanje.", false, "Globoko učenje je prišlo bistveno pozneje – IE se je razvijala z manj zmogljivimi metodami."],
				],
			},
			{
				q: "Katera domena je v gradivu posebej omenjena kot področje uporabe IE?",
				pages: [268],
				opts: [
					["Pravna in finančna domena, kjer so dokumenti pol-strukturirani in vsebinsko bogati.", false, "Gradivo posebej omeni biomedicinsko domeno, ne pravno ali finančno."],
					["Biomedicinska domena.", true, "Gradivo eksplicitno navede biomedicinsko domeno kot primer."],
					["Novičarska domena, kjer je IE ključna za ekstrakcijo entitet iz časopisnih člankov.", false, "Novice so pogost testni korpus za NER, a gradivo posebej izpostavi biomedicinsko domeno."],
					["Akademska domena, kjer IE pomaga pri ekstrakciji citatov in bibliografskih podatkov.", false, "Ekstrakcija citatov je relevanten primer, a gradivo omeni biomedicinsko domeno."],
				],
			},
			{
				q: "Kaj ponudi odjemalec elektronske pošte, ko pri preprostem IE prepozna datum?",
				pages: [270],
				opts: [
					["Samodejno posreduje sporočilo v urejevalnik besedila za nadaljnjo analizo.", false, "Posredovanje urejevalniku ni omenjena funkcija – gradivo navede ustvarjanje dogodka."],
					["Ponudi ustvarjanje dogodka v koledarju.", true, "To je primer preprostega IE, ki ga gradivo navede."],
					["Označi datum z IOB oznakami in ga indeksira za kasnejše iskanje.", false, "IOB je metoda za sekvenčne modele, ne za preprost IE v e-pošti."],
					["Prevede datum v ISO 8601 format in ga vstavi v predmet sporočila.", false, "Formatiranje datuma je korak normalizacije, ne cilj IE, ki ga gradivo navede."],
				],
			},
			{
				q: "Katera tehnika je pri preprostem IE najpogosteje uporabljena?",
				pages: [270],
				opts: [
					["Naïve Bayes klasifikator, ki razvrsti vsako besedo v entitetne kategorije.", false, "NB klasifikator je naprednejša metoda – preprost IE temelji na regularnih izrazih."],
					["Regularni izrazi.", true, "Gradivo eksplicitno navaja, da večina preprostih IE sistemov uporablja regularne izraze."],
					["Sekvenčni model z IOB kodiranjem, ki upošteva kontekst sosednjih besed.", false, "Sekvenčni modeli so bolj napredni – preprost IE ne upošteva konteksta na ta način."],
					["WordNet ontologija za semantično klasifikacijo besednih zvez v entitetne kategorije.", false, "WordNet je semantični vir, ki pomaga naprednim NER sistemom, ne preprostemu IE."],
				],
			},
			{
				q: "Kateri dve operaciji je potrebno izvesti pri prepoznavanju imenskih entitet?",
				pages: [271],
				opts: [
					["Ekstrahirati in normalizirati – torej najti entitete in jih prevesti v standardno obliko.", false, "Normalizacija je naknaden korak – gradivo navede iskanje in klasificiranje."],
					["Poiskati in klasificirati.", true, "Gradivo navede: 'Potrebno je poiskati in klasificirati imena znotraj besedila.'"],
					["Tokenizirati in lematizirati – torej razgraditi besedilo in normalizirati besedne oblike.", false, "To sta koraka predprocesiranja, ne specifični operaciji NER."],
					["Razčleniti in označiti – torej zgraditi sintaktično drevo in mu dodati entitetne oznake.", false, "Sintaktično razčlenjevanje pomaga pri NER, a gradivo opisuje iskanje in klasificiranje."],
				],
			},
			{
				q: "Kateri problem ugotavljanja mej ilustrira primer 'Nova Ljubljanska banka'?",
				pages: [274],
				opts: [
					["Beseda 'Nova' je sama po sebi pridevnik, ki se pogosto pojavi v imenih mest in podjetij.", false, "Ambiguost pridevnika je ločen problem – gradivo izpostavi problem mej entitete."],
					["Entiteta je večbesedna – treba je prepoznati skupaj 'Nova Ljubljanska banka' kot eno entiteto.", true, "Gradivo to navede kot tipičen problem mej pri NER."],
					["Beseda 'banka' je leksikalno dvoumna med finančno institucijo in brežino reke.", false, "Leksikalna dvoumnost je ločen problem – gradivo se osredotoči na meje entitete."],
					["Entiteta bi morala biti klasificirana kot ORG ali LOK, kar ustvari negotovost pri klasifikaciji.", false, "Klasifikacijska negotovost je ločen problem od ugotavljanja mej."],
				],
			},
			{
				q: "Koliko oznak ima IO kodiranje pri c vrstah entitet?",
				pages: [277],
				opts: [
					["c, ker vsaka vrsta entitete dobi eno oznako.", false, "IO ima c oznak za entitete PLUS eno O oznako za ostale besede."],
					["c+1", true, "c oznak za entitete (OSEBA, ORG, ...) in ena O (ostalo)."],
					["2c, ker vsaka vrsta entitete dobi B in I oznaki.", false, "B in I oznaki ima IOB kodiranje, ne IO."],
					["2c+1, ker vsaka vrsta entitete dobi B in I oznaki, plus eno O za ostale.", false, "To je število oznak za IOB kodiranje, ne IO."],
				],
			},
			{
				q: "Koliko oznak ima IOB kodiranje pri c vrstah entitet?",
				pages: [277],
				opts: [
					["c+1, ker vsaka entitetna vrsta dobi eno oznako, plus O za ostale besede.", false, "To je število oznak za IO kodiranje – IOB ima dodatno B oznako za vsak razred."],
					["2c+1", true, "Za vsak razred sta B in I oznaki, plus ena O oznaka."],
					["2c, ker vsaka vrsta entitete dobi B in I oznaki brez O oznake.", false, "Manjka O oznaka za besede zunaj entitet."],
					["3c, ker vsaka vrsta entitete dobi B, I in O oznako.", false, "O oznaka je skupna za vse razrede, ne specifična za vsak razred."],
				],
			},
			{
				q: "Katera je glavna prednost IOB pred IO kodiranjem za NER?",
				pages: [277],
				opts: [
					["IOB ima manj oznak, kar poenostavi učenje in zmanjša računsko zahtevnost modela.", false, "IOB ima VEČ oznak (2c+1 namesto c+1), ne manj."],
					["Natančno loči začetek in nadaljevanje entitete, kar pomaga pri večbesednih entitetah.", true, "IOB je 'uporabnejše' – gradivo to eksplicitno poudari."],
					["IOB odpravi potrebo po kontekstnih značilkah, ker oznake same kodirajo meje entitet.", false, "Kontekstne značilke so koristne pri obeh pristopih – IOB jih ne nadomesti."],
					["IOB je bolj primeren za eno-besedne entitete, ker B oznaka jasno označi posamezno entiteto.", false, "Prednost IOB je ravno pri VEČbesednih entitetah, kjer IO ne loči mej med zaporednimi entitetami."],
				],
			},
			{
				q: "Katera oblika jezikovne analize pomaga pri NER s prepoznavanjem fraz?",
				pages: [275],
				opts: [
					["Morfološka analiza (lematizacija in stematizacija) za normalizacijo besednih oblik.", false, "Morfološka normalizacija je predprocesiranje – gradivo navede sintaktično razpoznavanje fraz."],
					["Sintaktično razpoznavanje (identifikacija fraz).", true, "Gradivo navede sintaktično razpoznavanje kot pomoč pri NER."],
					["Semantična analiza s pomočjo tematskega modeliranja (LDA) za prepoznavo vsebinskih sklopov.", false, "Tematsko modeliranje je nenadzorovana metoda za teme, ne za prepoznavo entitet."],
					["Diskurzivna analiza, ki prepozna koreferenčne verige med imeni v besedilu.", false, "Koreferenčna analiza je koristna za razrešitev zaimkov, a ni omenjena kot pomoč pri NER."],
				],
			},
			{
				q: "V katerem primeru so ročni regularni izrazi za NER po gradivu primerni?",
				pages: [275],
				opts: [
					["Za lepo strukturirane domene ali omejene entitete, kot so datumi in telefonske številke.", true, "Gradivo navede ravno to kot področje uporabe regularnih izrazov."],
					["Za prepoznavo večbesednih entitet v neurejenih spletnih komentarjih.", false, "Neurejeni komentarji zahtevajo robustnejše metode – regularni izrazi so krhki za tak kontekst."],
					["Za sekvenčno označevanje, kjer kontekst oznak pomaga pri identifikaciji mej entitet.", false, "Sekvenčno označevanje je naprednejša metoda, ki nasprotuje omejitvam regularnih izrazov."],
					["Za prepoznavo novih entitet (novel entities), ki se ne pojavljajo v učnih podatkih.", false, "Regularni izrazi so slabi za nove entitete brez predznanih vzorcev."],
				],
			},
			{
				q: "Kaj je pri sekvenčnih modelih za NER korak 'testiranje'?",
				pages: [276],
				opts: [
					["Ročni pregled napačno klasificiranih primerov za analizo napak modela.", false, "Ročni pregled je analiza napak, ne formalni korak testiranja."],
					["Klasifikacija testnih primerov in ocenjevanje kakovosti.", true, "Gradivo navede: testna množica → klasifikacija → ocenjevanje."],
					["Ponovitev učnega postopka na testnih podatkih za potrditev konvergence modela.", false, "Učenje na testnih podatkih bi pomenilo data leakage – to ni korak testiranja."],
					["Primerjava oznak IOB z referenčnimi anotacijami za oceno F1 mere.", false, "To je del evalvacije, ki je del testiranja – a gradivo definira testiranje na višji ravni."],
				],
			},
			{
				q: "Katera je tipična relacija, ki jo IE sistem v gradivu ekstrahira iz besedila?",
				pages: [269],
				opts: [
					["Polarnost stavka skupaj z aspektom in nosilci mnenja za aspektno analizo sentimenta.", false, "To opisuje izhod aspektne analize sentimenta, ne splošne IE relacije."],
					["predavatelj(ime, predmet, kraj, čas, semester).", true, "Gradivo navede ravno ta primer kot obliko strukturiranega izhoda IE."],
					["IOB zaporedje oznak za vsako besedo v besedilu, ki identificira imenske entitete.", false, "IOB zaporedje je izhod NER, ne splošne IE relacije."],
					["Besedna frekvenca in TF-IDF vrednosti za vsako besedo v dokumentu.", false, "Statistike besed so vhodne značilke za modele, ne izhodni strukturirani podatki IE."],
				],
			},
			{
				q: "Katera semantična analiza je v gradivu omenjena kot pomoč pri NER poleg oblikoslovnega označevanja?",
				pages: [275],
				opts: [
					["Vektorska semantika (word2vec, GloVe), ki poveže besede z enakim pomenom.", false, "Vektorska semantika je koristna, a gradivo posebej omeni WordNet kot semantični vir."],
					["WordNet semantična klasifikacija besed.", true, "Gradivo navede WordNet kot primer semantičnega vira za NER."],
					["Latentna semantična analiza (LSA), ki z SVD zmanjša dimenzionalnost.", false, "LSA se uporablja za tematsko modeliranje, ne za semantično klasifikacijo pri NER."],
					["Schererjeva tipologija, ki besedila razporedi v čustvene kategorije.", false, "Schererjeva tipologija je za analizo sentimenta, ne za semantično klasifikacijo entitet."],
				],
			},
		],
	},
	{
		id: "globoko-ucenje-v-jezikovnih-tehnologijah",
		name: "Globoko učenje v JT",
		color: "#9b6cff",
		questions: [
			{
				q: "Kaj je po gradivu globoko učenje?",
				pages: [280, 281],
				opts: [
					["Področje strojnega učenja, ki poskuša samodejno ugotoviti dobre predstavitve in značilke.", true, "To je glavna definicija iz uvodnih diapozitivov."],
					["Samo ročno pisanje značilk za vsako nalogo.", false, "To je ravno nekaj, čemur se globoko učenje izogne."],
					["Prevajanje med jeziki brez modelov.", false, "To ni definicija globokega učenja."],
					["Sistem za pravopisne popravke.", false, "To je samo ena od možnih aplikacij LT."],
				],
			},
			{
				q: "Zakaj je globoko učenje po gradivu uporabno?",
				pages: [282],
				opts: [
					["Ker so ročno določene značilke pogosto preveč specifične, nepopolne in drage za razvoj.", true, "To je neposreden povzetek razlogov za uporabo globokega učenja."],
					["Ker vedno deluje brez podatkov.", false, "Podatki so še kako pomembni."],
					["Ker ne potrebuje nobenega učenja.", false, "Seveda potrebuje učenje."],
					["Ker odpravi potrebo po vseh algoritmih.", false, "To je pretirano in napačno."],
				],
			},
			{
				q: "Kaj je po gradivu pripomoglo k razmahu globokega učenja okoli leta 2010?",
				pages: [283, 284],
				opts: [
					["Velike količine podatkov, hitrejši procesorji in novi modeli ter algoritmi.", true, "To je natančen povzetek diapozitiva o razvoju globokega učenja."],
					["Samo boljši slovarji.", false, "To ni bil glavni dejavnik."],
					["Odprava vseh skritih plasti.", false, "Globoko učenje temelji prav na več plasteh."],
					["Prehod iz besed v zvok.", false, "To ni razlog za razmah."],
				],
			},
			{
				q: "Na katerih nivojih je v LT po gradivu mogoče uporabiti globoko učenje?",
				pages: [286],
				opts: [
					["Le pri govoru.", false, "Uporaba je širša."],
					["Na govor, besede, sintakso, semantiko in tudi na orodja ter aplikacije.", true, "To je izrecno navedeno v diapozitivu o uporabi globokega učenja."],
					["Le pri prevajanju.", false, "To je samo ena aplikacija."],
					["Le pri ekstrakciji informacij.", false, "To je samo en primer uporabe."],
				],
			},
			{
				q: "Kaj je v gradivu navedeno kot zgodnji preboj globokega učenja?",
				pages: [284],
				opts: [
					["Razpoznavanje govora z velikimi učnimi množicami in ImageNet klasifikacija za računalniški vid.", true, "To sta dva izrecno navedena primera zgodnjih prebojev."],
					["Samo analiza sentimenta na Twitterju.", false, "To ni zgodnji preboj, ki ga gradivo izpostavi."],
					["Samo sistem vprašanj in odgovorov.", false, "Tudi to ni navedeno kot prvi preboj."],
					["Samo pravopisni popravljalnik.", false, "To ni primer iz diapozitiva."],
				],
			},
			{
				q: "Kako bi na kratko razložili, zakaj so nevronske mreže zanimive tudi za jezikovne naloge?",
				pages: [286, 288, 289],
				opts: [
					["Ker lahko besede, fraze in celo logične izraze predstavijo kot vektorje in nato s plastmi mreže te predstavitve združujejo ter preoblikujejo.", true, "To povzema jedro povezave med globokim učenjem in LT."],
					["Ker odstranjujejo potrebo po vseh podatkih.", false, "Podatki ostanejo pomembni."],
					["Ker uporabljajo samo slovnice brez numeričnih vrednosti.", false, "Globoko učenje temelji na vektorjih."],
					["Ker so uporabne samo za prevod po slovarju.", false, "To je preozko in ne drži."],
				],
			},
		],
	},
	{
		id: "vektorji-besed",
		name: "Vektorji besed",
		color: "#37b7b3",
		questions: [
			{
				q: "Kaj je osnovna ideja predstavitve besed z vektorji?",
				answer: "<p>Besede preslikamo v točke v n-dimenzionalnem prostoru, kjer so podobne besede blizu skupaj. Gradivo poudari, da imajo besede s podobnim pomenom tendenco, da se pojavijo v grozdih.</p>",
				pages: [287],
			},
			{
				q: "Kaj je problem pri navadni one-hot predstavitvi besed?",
				answer: "<p>One-hot je zelo redek in visoko dimenzionalen zapis – ena enica, vse ostalo ničle. Tak zapis ne vsebuje nobene informacije o podobnosti med besedami, zato slabo izraža semantične odnose.</p>",
				pages: [287],
			},
			{
				q: "Kako gradivo razlaga pomen skaliranja števcev in dekompozicije singularnih vrednosti?",
				answer: "<p>Pri preprostih števcih so frekventne besede premočne. Logaritmiranje in SVD (zmanjšanje dimenzionalnosti) pomagata – v vektorjih se začnejo pojavljati semantični vzorci, npr. drive→driver in teach→teacher.</p>",
				pages: [319],
			},
			{
				q: "Kaj loči count-based in predictive pristope k vektorjem besed?",
				answer: "<p>Count-based temelji na statistiki sočasnih pojavitev. Predictive (skip-gram) bolje zajame kompleksne vzorce, a se drugače skalira s korpusom. GloVe združi oba pristopa.</p>",
				pages: [320],
			},
			{
				q: "Kako GloVe poveže štetje in predikcijo?",
				answer: "<p>GloVe združuje oba pristopa z log-bilinearnim modelom in funkcijo izgube na sočasnih pojavitev. Razlike vektorjev kodirajo razmerja verjetnosti sopojavljanja med besedami.</p>",
				pages: [321, 322, 323, 324],
			},
			{
				q: "Kako ločimo notranje in zunanje ovrednotenje vektorjev besed?",
				answer: "<p>Notranje je hitro, na vmesni nalogi (npr. podobnost besed). Zunanje je na realni nalogi (NER, sentiment...), počasnejše a bolj informativno o dejanskih uporabnosti vektorjev.</p>",
				pages: [325],
			},
		],
	},
];
