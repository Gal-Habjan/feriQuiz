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
					["Samo 'subjectivity analysis'", false, "Gradivo navaja več sopomenk, ne samo ene."],
					["Sentiment analysis, opinion mining, opinion extraction, sentiment mining in analysis subjektivnosti", true, "To je nabor poimenovanj, ki ga gradivo eksplicitno navede."],
					["Samo 'text mining'", false, "Text mining je širši okvir, ne sopomenka za analizo sentimenta."],
					["Samo 'polarity detection'", false, "Polarnost je le ena podnaloga analize sentimenta."],
				],
			},
			{
				q: "Kaj je osnovni cilj analize sentimenta po gradivu?",
				pages: [186, 189, 190],
				opts: [
					["Ugotoviti, ali je besedilo slovnično pravilno.", false, "To je naloga popravljanja pravopisa, ne sentimenta."],
					["Odkrivanje odnosov, na primer nosilec, cilj in polarnost odnosa.", true, "Analiza sentimenta je opisana kot odkrivanje odnosov med nosilcem, ciljem in čustveno/polarnostno oceno."],
					["Prevesti besedilo v drug jezik.", false, "To spada v strojno prevajanje."],
					["Poimenovati vse imenske entitete v besedilu.", false, "To spada v ekstrakcijo informacij in NER."],
				],
			},
			{
				q: "Katera naloga je v gradivu označena kot zahtevnejša od osnovne binarne klasifikacije sentimenta?",
				pages: [190],
				opts: [
					["Ali je kritika pozitivna ali negativna?", false, "To je osnovna naloga."],
					["Rangiranje odnosa, na primer od 1 do 10.", true, "To je eksplicitno navedeno kot zahtevnejša naloga."],
					["Iskanje telefonskih številk v besedilu.", false, "To je tipična naloga regularnih izrazov oziroma IE."],
					["Določanje stavčnih členov v stavku.", false, "To je naloga sintaktične analize."],
				],
			},
			{
				q: "Kaj po gradivu pravilno velja za značilke pri osnovni analizi sentimenta?",
				pages: [193, 194, 210],
				opts: [
					["Negacija ni pomembna, pomembni so le pridevniki.", false, "Gradivo poudari, da je negacija pomembna in da uporaba vseh besed pogosto deluje bolje."],
					["Uporaba vseh besed z Naïve Bayesom pogosto da boljše rezultate.", true, "To je ena izmed eksplicitnih ugotovitev na končnih diapozitivih poglavja."],
					["Vedno uporabimo samo čustvene simbole.", false, "To je preozko in ni navedeno kot splošno pravilo."],
					["Analiza sentimenta ne uporablja leksikonov.", false, "Leksikoni sentimenta so v gradivu pomemben pristop."],
				],
			},
			{
				q: "Kaj je bistvo Turneyevega algoritma?",
				pages: [208, 209],
				opts: [
					["Uporablja fraze namesto posameznih besed in se uči na domensko specifičnih informacijah.", true, "To je ravno opis Turneyevega pristopa v gradivu."],
					["Za vsako besedo uporablja le slovnični slovar.", false, "To ne opisuje Turneyevega algoritma."],
					["Temelji izključno na ročno napisanih pravilih za negacijo.", false, "Negacija je pomembna, a Turney ni le ročna pravila."],
					["Prevede besedilo po pravilih medjezikovnega prevajanja.", false, "To je strojno prevajanje, ne sentiment."],
				],
			},
			{
				q: "Kako gradivo opiše naprednejše metode analize sentimenta?",
				pages: [210],
				opts: [
					["Kot povsem ločeno od klasifikacije ali regresije.", false, "Gradivo pravi, da je osnovno modeliranje klasifikacija ali regresija."],
					["Kot klasifikacijo ali regresijo z dodatnimi značilkami, kot sta negacija in iskanje podmnožic besed.", true, "To je natančen povzetek diapozitiva o naprednejših metodah."],
					["Kot sekvenčno označevanje z IOB kodami.", false, "To sodi v prepoznavanje imenskih entitet."],
					["Kot prevajanje stavkov med jeziki.", false, "To spada v strojno prevajanje."],
				],
			},
			{
				q: "Katera tipologija razlikuje med emocijami, razpoloženjem, medosebnimi stališči, odnosi in osebnostnimi lastnostmi?",
				pages: [188],
				opts: [
					["Plutchikova tipologija čustev", false, "Gradivo navaja Schererjevo tipologijo, ne Plutchikove."],
					["Schererjeva tipologija čustev", true, "Gradivo eksplicitno navede Schererja kot vir te tipologije."],
					["Ekmanovih 6 osnovnih čustev", false, "Ekman je drug avtoritet za čustva, ne ta tipologija."],
					["Jungova teorija arhetipov", false, "To je psihološka teorija, ne tipologija čustev iz gradiva."],
				],
			},
			{
				q: "Po Hatzivassiloglou in McKeown – pridevnika, ki sta v besedilu povezana z besedo 'and', imata...?",
				pages: [203],
				opts: [
					["Vedno negativno polariteto.", false, "Polariteta je odvisna od konteksta, ne vedno negativna."],
					["Enako polariteto.", true, "To je jedro njune intuicije: 'corrupt and brutal' – oba negativna."],
					["Različno polariteto.", false, "To velja za 'but', ne za 'and'."],
					["Nevtralno polariteto.", false, "Besedni par z 'and' ima enako, ne nevtralno polariteto."],
				],
			},
			{
				q: "Kako metoda NOT_ obravnava negacijo v besedilu?",
				pages: [196],
				opts: [
					["Vsaki besedi v celotnem dokumentu doda predpono NOT_.", false, "To bi bilo preširoko – NOT_ se doda le med negacijo in ločilom."],
					["Vsaki besedi med negacijo in ločilom doda predpono NOT_.", true, "Gradivo eksplicitno navaja primer: 'didn't NOT_like NOT_this NOT_movie but I'."],
					["Negacijo v celoti ignorira.", false, "Gradivo poudari, da je negacija POMEMBNA."],
					["Vsaki pridevniški besedi v stavku doda NOT_.", false, "To je preozko – NOT_ ni omejeno le na pridevnike."],
				],
			},
			{
				q: "Kaj meri PMI (točkovna medsebojna informacija) pri analizi sentimenta?",
				pages: [206, 207],
				opts: [
					["Dolžino dokumenta glede na povprečje.", false, "PMI ne meri dolžine."],
					["Kako pogosto se dve besedi skupaj pojavita v primerjavi z njuno neodvisno pojavitvijo.", true, "To je definicija PMI: log2(P(x,y) / (P(x)·P(y)))."],
					["Razmerje med pozitivnimi in negativnimi besedami v leksikonu.", false, "To ni PMI, temveč razlika polarnosti."],
					["Frekvenco besede v korpusu.", false, "To je TF, ne PMI."],
				],
			},
			{
				q: "Kako Turneyev algoritem s PMI izmeri polariteto fraze?",
				pages: [208, 209],
				opts: [
					["PMI(fraza, dobro) + PMI(fraza, slabo)", false, "Seštevanje ne da razlike – potrebujemo odštevanje."],
					["PMI(fraza, dobro) – PMI(fraza, slabo)", true, "Pozitivna vrednost pomeni bližje k 'dobro', negativna k 'slabo'."],
					["PMI(dobro, slabo) / dolžina fraze", false, "To ni formula Turneyevega algoritma."],
					["log2(frekvenca fraze)", false, "To je le logaritem frekvence, ne PMI razlika."],
				],
			},
			{
				q: "Kaj SentiWordNet dodeli vsem WordNet sinsetom?",
				pages: [201],
				opts: [
					["Samo oznako pozitivno ali negativno.", false, "SentiWordNet dodeli vse tri stopnje, ne le binarno."],
					["Stopnjo pozitivnosti, negativnosti in nevtralnosti.", true, "To je eksplicitno navedeno v opisu SentiWordNeta v gradivu."],
					["Seznam sopomenk in protipomenk.", false, "To je naloga WordNeta samega, ne SentiWordNeta."],
					["Morfološke kategorije besede.", false, "Te dodeli morfološki označevalnik, ne SentiWordNet."],
				],
			},
			{
				q: "Katera lastnost razlikuje binariziran Multinominalni Naïve Bayes od standardnega?",
				pages: [198, 199],
				opts: [
					["Upošteva frekvenco vsake besede v dokumentu.", false, "To je standardni, ne binariziran NB."],
					["Pred računanjem verjetnosti iz vsakega dokumenta odstrani podvojene besede.", true, "Binariziran NB temelji na pojavitvi (ali se beseda pojavi), ne frekvenci."],
					["Upošteva samo pridevnike kot značilke.", false, "Binariziran NB ni omejen na pridevnike."],
					["Ignorira verjetnosti razredov P(cj).", false, "P(cj) je del vsake različice NB."],
				],
			},
			{
				q: "Katera klasifikatorja v gradivu pogosto dosegata boljše rezultate kot Naïve Bayes?",
				pages: [200],
				opts: [
					["Regularni izrazi in odločitvena drevesa.", false, "Ti niso navedeni kot boljši od NB za sentiment."],
					["MaxEnt in SVM.", true, "Gradivo eksplicitno navaja, da MaxEnt in SVM ponavadi dajeta boljše rezultate."],
					["n-gram modeli in HMM.", false, "To so generativni modeli, ki niso primerjani na ta način."],
					["KNN in logistična regresija.", false, "Logistična regresija je sorodna MaxEnt, KNN pa ni omenjen."],
				],
			},
			{
				q: "Kaj je 'aspekt' (cilj) pri odkrivanju odnosov v analizi sentimenta?",
				pages: [189],
				opts: [
					["Celoten dokument, ki vsebuje opis odnosa.", false, "Dokument je kontekst, aspekt je specifičen vidik."],
					["Specifičen vidik predmeta, npr. cena tiskalnika ali enostavnost uporabe.", true, "To je primer aspekta, ki ga gradivo eksplicitno navede."],
					["Osebnostna lastnost avtorja ocene.", false, "To je del Schererjeve tipologije, ne aspekt."],
					["Polarnost celotnega stavka.", false, "Polarnost je tip odnosa, ne aspekt."],
				],
			},
			{
				q: "Katera metoda za gradnjo leksikona sentimenta temelji na razširitvi semenske množice z besednimi zvezami?",
				pages: [202, 203],
				opts: [
					["Ročno pisanje vseh besed z oznako.", false, "To je ročno delo, ne delno nadzorovano učenje."],
					["Hatzivassiloglou in McKeown: razširitev semen prek pogostih pridevniških konjunkcij.", true, "To je natančen opis postopka iz gradiva."],
					["Nenadzorovano gručenje besed.", false, "To ne zahteva nobenih semen ali označenih primerov."],
					["Prevajanje angleškega leksikona s strojnim prevajalcem.", false, "To je drug pristop, ki ni opisan v tem postopku."],
				],
			},
			{
				q: "Kaj leksikalna analiza pri analizi sentimenta med drugim obravnava?",
				pages: [194],
				opts: [
					["Samo semantično razčlenjevanje stavkov.", false, "Semantika je ločen korak."],
					["HTML/XML operacije, Twitter posebnosti, čustvene simbole, datume in telefonske številke.", true, "Gradivo navaja ravno te primere na diapozitivu o leksikalni analizi."],
					["Samo popravljanje pravopisa.", false, "To ni naloga leksikalne analize v tem kontekstu."],
					["Samo poravnavo stavkov v korpusu.", false, "Poravnava spada v strojno prevajanje."],
				],
			},
			{
				q: "Kateri leksikon je po gradivu prosto dostopen za raziskovanje (brez plačila)?",
				pages: [201],
				opts: [
					["LIWC (Linguistic Inquiry and Word Count)", false, "LIWC je plačljiv (30 oz. 90 USD)."],
					["The General Inquirer", true, "Gradivo eksplicitno navede The General Inquirer kot prosto dostopen za raziskovanje."],
					["Bing Liu Opinion Lexicon", false, "Bing Liu je na voljo, a gradivo ne navaja tega kot splošno dostopen za raziskovanje."],
					["MPQA Subjectivity Cues Lexicon", false, "MPQA ima licenco GNU GPL – to je zastonj, a ločen leksikon od The General Inquirer."],
				],
			},
			{
				q: "Kakšna je formula za oceno PMI med dvema besedama s spletnim iskalnikom?",
				pages: [208],
				opts: [
					["log2(zadetki(beseda1) / zadetki(beseda2))", false, "To je razmerje pojavitev, ne PMI."],
					["log2(zadetki(beseda1 BLIZU beseda2) · N / (zadetki(beseda1) · zadetki(beseda2)))", true, "To je formula iz gradiva za oceno PMI z iskalnikom."],
					["zadetki(beseda1) + zadetki(beseda2)", false, "To je seštevanje, ne PMI."],
					["zadetki(beseda1 BLIZU beseda2) / N", false, "To je le ocena skupne verjetnosti P(x,y), ne PMI."],
				],
			},
			{
				q: "Kateri korak pri Turneyevem algoritmu pride po učenju polaritete fraz?",
				pages: [204],
				opts: [
					["Ročno označevanje fraz.", false, "Turney je nenadzorovana metoda."],
					["Rangiranje kritik glede na povprečno polariteto fraz.", true, "Gradivo navede: pridobi fraze → nauči polariteto → rangiraj kritike."],
					["Negacija vseh fraz z NOT_.", false, "Negacija je del Pang & Lee pristopa, ne Turneyevega."],
					["Binarizacija dokumentov.", false, "To je korak binariziranega NB, ne Turney."],
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
					["P(d|c) skupaj s priorom P(c)", false, "To je značilno za generativne modele."],
					["P(c|d)", true, "Diskriminatorni modeli neposredno računajo posteriorno verjetnost razreda."],
					["P(d)", false, "Sama marginalna verjetnost ni dovolj za klasifikacijo."],
					["P(c)", false, "Prior ni edino, kar diskriminatorni model ocenjuje."],
				],
			},
			{
				q: "Katera trditev najbolje opiše razliko med generativnimi in diskriminatornimi modeli?",
				pages: [214],
				opts: [
					["Generativni modeli neposredno računajo P(c|d), diskriminatorni pa P(d|c).", false, "To je obrnjeno."],
					["Generativni modeli uporabljajo P(d|c) in P(c) ter Bayesovo pravilo, diskriminatorni pa neposredno P(c|d).", true, "To je jedro razlike, ki jo prikazuje gradivo."],
					["Oba tipa modelov uporabljata samo logične izraze.", false, "To je preveč poenostavljeno in napačno."],
					["Diskriminatorni modeli ne uporabljajo značilk.", false, "Prav značilke so pri njih zelo pomembne."],
				],
			},
			{
				q: "Kaj je v gradivu posebnost značilk pri diskriminatornem modelu?",
				pages: [215, 216],
				opts: [
					["Značilke so samo binarne in nikoli nimajo uteži.", false, "Gradivo pravi, da model značilkam dodeli uteži."],
					["Značilka lahko vrne realno vrednost in model ji dodeli pozitivno ali negativno utež.", true, "To je osrednja ideja funkcij f : CxD → R."],
					["Značilke so vedno skrite in nevidne uporabniku.", false, "V gradivu so značilke eksplicitno opisane."],
					["Značilke se uporabljajo samo v generativnih modelih.", false, "Ravno nasprotno, tu so ključne za diskriminatorne modele."],
				],
			},
			{
				q: "Kako linearni klasifikator izbere razred na podlagi značilk?",
				pages: [217, 218],
				opts: [
					["Izbere razred z najmanjšo vsoto uteži.", false, "Izbere se razred z največjo vrednostjo glasovanja."],
					["Izbere razred z največjo vrednostjo glasovanja Σλi fi(c,d).", true, "To je neposredno zapisano v diapozitivu o linearnem klasifikatorju."],
					["Izbere razred naključno.", false, "To nima zveze z opisanim postopkom."],
					["Izbere razred, ki ima največ vhodnih besed.", false, "Število besed ni samo po sebi odločilno pravilo."],
				],
			},
			{
				q: "Kaj počne perceptron v tem okviru?",
				pages: [218],
				opts: [
					["Išče napačno klasificirane primere in uteži premakne proti pravilni klasifikaciji.", true, "To je natančen opis perceptronskega učenja v gradivu."],
					["Izračuna Bayesov prior za vsak razred.", false, "To je generativen pristop, ne perceptron."],
					["Ustvari slovar za strojno prevajanje.", false, "To ne spada v to poglavje."],
					["Določa IOB oznake za imenske entitete.", false, "To je del sekvenčnih modelov za NER."],
				],
			},
			{
				q: "Katera metoda je v gradivu navedena kot diskriminatorna?",
				pages: [213, 214, 218],
				opts: [
					["Naïve Bayes", false, "Naïve Bayes je naveden med generativnimi modeli."],
					["SVM", true, "SVM je izrecno naveden med diskriminatornimi metodami."],
					["Hidden Markov Model", false, "HMM spada med generativne modele."],
					["n-gram jezikovni model", false, "To je generativni model."],
				],
			},
			{
				q: "Zakaj eksponentni (loglinearni) model uporablja funkcijo exp?",
				pages: [219, 220],
				opts: [
					["Da uteži ohrani med 0 in 1.", false, "exp() ne omeji vrednosti na interval [0,1]."],
					["Da pretvori linearno kombinacijo v pozitivno vrednost, tudi kadar so uteži negativne.", true, "exp(x) je vedno pozitiven, kar omogoča normalizacijo v verjetnosti."],
					["Da izračuna Bayesov prior.", false, "Prior ni vloga exp() v loglinearnem modelu."],
					["Da zmanjša dimenzionalnost besednega vektorja.", false, "To nima zveze z exp()."],
				],
			},
			{
				q: "Katera formula pravilno opisuje loglinearni model P(c|d,λ)?",
				pages: [220],
				opts: [
					["P(d|c)·P(c) / P(d)", false, "To je Bayesovo pravilo za generativne modele."],
					["exp(Σi λi fi(c,d)) / Σc' exp(Σi λi fi(c',d))", true, "To je eksaktna formula iz gradiva za loglinearni model."],
					["Σi λi fi(c,d) / |C|", false, "To je povprečje linearnih prispevkov, ne verjetnost."],
					["log(P(c)·P(d|c))", false, "To je logaritem skupne verjetnosti za generativni model."],
				],
			},
			{
				q: "Kaj je empirično pričakovanje značilke fi po gradivu?",
				pages: [217, 224],
				opts: [
					["Napovedano pričakovanje, ki ga model izračuna.", false, "To je napovedano, ne empirično pričakovanje."],
					["Štetje vrednosti značilke v učni množici (opazovana vsota fi čez (c,d) pare).", true, "Empirično pričakovanje je vsota fi(c,d) čez opazovane pare."],
					["Utež λi, ki jo model dodeli značilki.", false, "Utež ni enaka pričakovanju."],
					["Normalizirana TF-IDF vrednost za značilko.", false, "TF-IDF ni del loglinearnega modela."],
				],
			},
			{
				q: "Kakšen je pogoj za optimalne parametre pri modelu MaxEnt?",
				pages: [226],
				opts: [
					["Napovedano pričakovanje vsake značilke je enako nič.", false, "Nič ni pogoj – pogoj je enačba med empiričnim in napovedanim."],
					["Napovedano pričakovanje je enako empiričnemu pričakovanju za vsako značilko.", true, "To je jedro MaxEnt: E_p̃(fj) = E_p(fj) za vsak j."],
					["Vsota vseh uteži λi je enaka 1.", false, "To ni pogoj MaxEnt modela."],
					["Gradient je negativen za vse parametre.", false, "Optimum je tam, kjer je gradient enak nič, ne negativen."],
				],
			},
			{
				q: "Zakaj se modeli MaxEnt imenujejo modeli maksimalne entropije?",
				pages: [226],
				opts: [
					["Ker maksimizirajo verjetnost podatkov brez kakršnihkoli omejitev.", false, "Omejitve (constraints) so bistveni del MaxEnt."],
					["Ker iščejo model z maksimalno entropijo, ki zadosti danim omejitvam na pričakovanjih značilk.", true, "To je matematično jedro MaxEnt pristopa."],
					["Ker vsebujejo največ možnih razredov.", false, "Število razredov ni razlog za ime."],
					["Ker nikoli ne konvergirajo.", false, "MaxEnt modeli konvergirajo k optimumu."],
				],
			},
			{
				q: "Katera metoda je v gradivu omenjena za iskanje optimalnih parametrov loglinearnega modela?",
				pages: [227],
				opts: [
					["Ročno nastavljanje uteži.", false, "To je preveč zamudno in ne zagotavlja optimalnosti."],
					["Gradientni spust.", true, "Gradivo eksplicitno omenja gradientni spust kot optimizacijsko metodo."],
					["Naivni Bayesov MLE estimator.", false, "To je estimator za generativne modele."],
					["Izčrpno iskanje po vseh kombinacijah.", false, "To je računsko neizvedljivo."],
				],
			},
			{
				q: "V primeru iz gradiva (str. 221): P(MESTO|v Maribor)≈0.55, P(DRŽAVA|v Maribor)≈0.45. Kateri razred model izbere?",
				pages: [221],
				opts: [
					["DRŽAVA", false, "DRŽAVA ima nižjo verjetnost (0.45 < 0.55)."],
					["MESTO", true, "MESTO ima višjo posteriorno verjetnost in bo izbrano."],
					["Nobeden – verjetnosti so preblizu.", false, "Model vedno izbere razred z višjo verjetnostjo."],
					["Odloči se naključno.", false, "Klasifikator je determinističen."],
				],
			},
			{
				q: "Kaj pomeni, da model dodeli negativno utež značilki?",
				pages: [215],
				opts: [
					["Značilka podpira razred z visoko verjetnostjo.", false, "Negativna utež pomeni nasprotovanje razredu."],
					["Značilka nasprotuje razredu – njeno prisotnost model kaznuje.", true, "Negativna utež v exp(Σλifi) zmanjša verjetnost razreda."],
					["Značilka se ne upošteva pri sklepanju.", false, "Vse značilke vplivajo, pozitivne in negativne."],
					["Značilka velja samo za negativen sentiment.", false, "Predznak uteži ni vezan na sentiment."],
				],
			},
			{
				q: "Katera je po gradivu prednost diskriminatornih modelov pri jezikovnih nalogah?",
				pages: [213, 214],
				opts: [
					["Lažje modelirajo P(d|c) kot generativni modeli.", false, "Diskriminatorni modeli modelirajo P(c|d), ne P(d|c)."],
					["Omogočajo enostavno vključitev jezikovno relevantnih značilk in so pogosto bolj točni.", true, "Gradivo to navede kot ključno prednost."],
					["Ne potrebujejo učnih podatkov.", false, "Diskriminatorni modeli prav tako zahtevajo učne podatke."],
					["Delujejo samo na angleškem jeziku.", false, "Gradivo omeni samodejno izgradnjo jezikovno neodvisnih modelov."],
				],
			},
			{
				q: "Kako je skupna pogojna logaritemska verjetnost CLogVer(D) definirana v gradivu?",
				pages: [227],
				opts: [
					["Σn log P(di|ci)", false, "To je generativni pristop."],
					["Σn log P(ci|di)", true, "CLogVer maksimizira vsoto logaritmov posteriornih verjetnosti razredov."],
					["Σi λi", false, "To je vsota uteži, ne logaritemska verjetnost."],
					["Entropija porazdelitve razredov.", false, "Entropija je drug pojem."],
				],
			},
			{
				q: "Kateri generativni modeli so v gradivu eksplicitno navedeni?",
				pages: [214],
				opts: [
					["SVM, logistična regresija, perceptron.", false, "To so diskriminatorni modeli."],
					["n-gram modeli, Naïve Bayes, skriti Markovi modeli.", true, "Gradivo našteje ravno te modele kot generativne."],
					["MaxEnt, HMM, KNN.", false, "MaxEnt je diskriminatoren, KNN ni omenjen tako."],
					["Odločitvena drevesa, random forest, SVM.", false, "Ti niso omenjeni v tem kontekstu."],
				],
			},
			{
				q: "Kako se za dani par (c,d) pri loglinearnem modelu glasovanje Σλifi(c,d) pretvori v verjetnost?",
				pages: [220],
				opts: [
					["Z direktno normalizacijo glasovanj čez vse razrede.", false, "Glasovanja so lahko negativna, direktna normalizacija ne deluje."],
					["Z aplikacijo exp na glasovanje in normalizacijo čez vse razrede.", true, "exp zagotovi pozitivnost, normalizacija zagotovi verjetnost."],
					["Z deljenjem glasovanja z dolžino dokumenta.", false, "Dolžina dokumenta ne nastopa v tej formuli."],
					["Z množenjem z P(c).", false, "Prior se v diskriminatornem modelu ne upošteva eksplicitno."],
				],
			},
			{
				q: "Kaj je smisel iterativnega postopka izgradnje modela MaxEnt?",
				pages: [222],
				opts: [
					["Naključno iskanje dobrih uteži.", false, "Postopek je sistematičen, ne naključen."],
					["Dodajanje in preizkušanje značilk na razvojni množici ter iterativno izboljšanje.", true, "Gradivo opiše ravno ta iterativni postopek razvoja modela."],
					["Enkratno ročno določanje vseh uteži.", false, "To ne bi bilo iterativno."],
					["Samo brisanje slabih uteži.", false, "Gradivo govori o dodajanju in popravljanju značilk."],
				],
			},
			{
				q: "Kateri tip modelov je po gradivu bolj točen – generativni ali diskriminatorni?",
				pages: [214],
				opts: [
					["Generativni, ker modelirajo celotno porazdelitev.", false, "Modeliranje celotne porazdelitve ne zagotavlja višje točnosti."],
					["Diskriminatorni, ker se neposredno osredotočijo na mejo med razredi.", true, "Gradivo navede 73.6 → 76.1 (+2.5%) kot primer izboljšave pri NB→disk."],
					["Sta enako točna.", false, "Gradivo eksplicitno primerja in pokaže razliko."],
					["Odvisno le od dolžine dokumenta.", false, "Dolžina dokumenta ni odločilen faktor."],
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
					["Prevajanje z globokimi nevronskimi mrežami in pozornostjo.", false, "To ni klasični rule-based pristop iz teh diapozitivov."],
					["Prevajanje izključno s semantično analizo stavka.", false, "Neposredni pristop semantične analize ne uporablja."],
					["Prevajanje brez dvojezičnega slovarja.", false, "Dvojezični slovar je temelj neposrednega pristopa."],
				],
			},
			{
				q: "Katera lastnost loči transferno strojno prevajanje od neposrednega?",
				pages: [237],
				opts: [
					["Transferni pristop doda skladenjsko in semantično analizo ter prenos strukture.", true, "Transfer-based translation je korak nad neposrednim prevajanjem."],
					["Transferni pristop vedno prevaja besedo po besedo.", false, "To je prej neposredno prevajanje."],
					["Transferni pristop sploh ne uporablja pravil.", false, "Uporablja pravila za prenos med strukturami."],
					["Transferni pristop je enak interlingvi.", false, "Interlingua je tretji, ločen pristop."],
				],
			},
			{
				q: "Kaj je bistvo medjezikovnega strojnega prevajanja?",
				pages: [237],
				opts: [
					["Vsak jezik najprej preslikamo v skupno vmesno predstavitev, nato pa iz nje v ciljni jezik.", true, "To je osrednja ideja interlingua-based pristopa."],
					["Besede prevajamo neposredno s slovarjem brez analize.", false, "To je neposredno prevajanje."],
					["Prevajamo le posamezne fraze brez strukture.", false, "Takšnega pristopa gradivo ne opisuje."],
					["Za prevod potrebujemo samo morfološki leksikon.", false, "To ni dovolj za medjezikovni pristop."],
				],
			},
			{
				q: "Kaj pomenita parametra tMLE(s|e) in qMLE(j,i|l,m) v statističnem prevajanju?",
				pages: [264],
				opts: [
					["tMLE je verjetnost prevoda besedila, qMLE pa verjetnost govornega signala.", false, "To ni pravilna razlaga oznak."],
					["tMLE je MLE ocena prevodne verjetnosti, qMLE pa MLE ocena verjetnosti poravnave oziroma položaja.", true, "To je točno v duhu modela na diapozitivu."],
					["Obe oznaki pomenita isti slovar dveh jezikov.", false, "Ne predstavljata slovarja."],
					["qMLE opisuje le slovnico slovenščine.", false, "Gre za model poravnave, ne slovnico."],
				],
			},
			{
				q: "Kateri primer lepo pokaže, da mora strojno prevajanje upoštevati kontekst?",
				pages: [233, 236],
				opts: [
					["Razlika med 'how much' in 'as much' v neposrednem prevajanju.", true, "Gradivo pokaže, da prevod ni odvisen samo od posamezne besede, temveč tudi od okoliškega konteksta."],
					["Uporaba čustvenih simbolov v analizi sentimenta.", false, "To ni prevajalski primer."],
					["Obravnava IOB oznak pri NER.", false, "To je drugo poglavje."],
					["GloVe ko-occurence razmerja.", false, "To sodi v vektorje besed."],
				],
			},
			{
				q: "Kaj v prevajanju pomeni ločljivost samostalnikov oziroma zaimka 'it'?",
				pages: [236],
				opts: [
					["Da je treba ugotoviti, ali se 'it' nanaša na računalnik ali na podatke.", true, "Gradivo daje oba primera in pokaže, da je kontekst ključnega pomena."],
					["Da zaimek 'it' vedno prevedemo z isto besedo.", false, "To bi bilo napačno."],
					["Da je prevod odvisen le od slovarja.", false, "Kontekst je nujen za pravi prevod."],
					["Da ločljivost ni pomembna za prevajanje.", false, "Prav nasprotno, je ključna."],
				],
			},
			{
				q: "Kaj je 'šumni kanal' (noisy channel) pri statističnem strojnem prevajanju?",
				pages: [244],
				opts: [
					["Napaka pri prenosu zvoka med govorci.", false, "To ni prevajalska metafora."],
					["Metafora: izvorni jezik je zakodiran ciljni jezik, ki ga dekodirnik razplete.", true, "Warren Weaver (1949) je predlagal, da prevajanje razumemo kot dešifriranje kode."],
					["Model za ocenjevanje hrupa v prevajanem besedilu.", false, "Hrup je samo metafora, ne opis hrupa v besedilu."],
					["Metoda za prevajanje samo stavkov z napakami.", false, "To ni opis šumnega kanala."],
				],
			},
			{
				q: "Kaj dekodirnik (iskalni algoritem) v SMT maksimizira?",
				pages: [245],
				opts: [
					["P(e) / P(s|e)", false, "Delimo z P(s), ne računamo recipročne vrednosti."],
					["P(e) · P(s|e)", true, "dekodirnik = arg max_e P(e)·P(s|e); produkt jezikovnega in prevajalnega modela."],
					["P(s|e) · P(s)", false, "P(s) ni del dekodirnikove formule."],
					["P(e,s) neposredno.", false, "Dekodirnik uporablja Bayesovo razgraditev."],
				],
			},
			{
				q: "Kaj je poravnava 'a' v modelu IBM?",
				pages: [250],
				opts: [
					["Dolžina ciljnega stavka m.", false, "m je dolžina, a pa je preslikava."],
					["Preslikava vsake ciljne besede na besedo v izvornem jeziku.", true, "a = {a1,...,am}, kjer aj ∈ {0,...,l} pove, katera izvorna beseda generira j-to ciljno besedo."],
					["Verjetnost prevoda besede.", false, "To je parameter t, ne poravnava a."],
					["Zaporedje oznak IOB za ciljni stavek.", false, "IOB je za NER, ne za MT."],
				],
			},
			{
				q: "Koliko možnih poravnav obstaja za par stavkov v Modelu IBM 1 z m ciljnimi in l izvornimi besedami?",
				pages: [250],
				opts: [
					["l^m", false, "Manjka upoštevanje NULL simbola."],
					["(l+1)^m", true, "Vsaka od m ciljnih besed se poravna z 0 (NULL) ali katerokoli od l izvornih besed."],
					["m^l", false, "Dimenziji sta zamenjani."],
					["l · m", false, "To je produkt, ne eksponent."],
				],
			},
			{
				q: "Kaj predpostavlja Model IBM 1 glede porazdelitve poravnav P(a|e,m)?",
				pages: [255],
				opts: [
					["Vsaka poravnava je enako verjetna – uniformna porazdelitev 1/(l+1)^m.", true, "To je ključna poenostavitev Modela IBM 1."],
					["Poravnave sledijo Gaussovi porazdelitvi.", false, "Model IBM 1 ne predpostavlja Gaussove porazdelitve."],
					["Verjetnost poravnave je sorazmerna z dolžino stavka.", false, "Model IBM 1 tega ne predpostavlja."],
					["Vsaka beseda se poravna samo z najbližjo izvorno besedo.", false, "To je hevristika, ne predpostavka IBM 1."],
				],
			},
			{
				q: "Kaj je parameter t(sj|eaj) v modelu IBM?",
				pages: [255],
				opts: [
					["Verjetnost poravnave za j-to ciljno besedo.", false, "To opisuje q, ne t."],
					["Prevodni parameter: verjetnost, da je sj prevod besede eaj.", true, "t je ocenjena verjetnost prevodnega para besed."],
					["Dolžina slovenskega stavka.", false, "m je dolžina, t pa je verjetnost prevoda."],
					["Normalizacijska konstanta za celo poravnavo.", false, "t je parameter za posamezen par besed."],
				],
			},
			{
				q: "Kako Model IBM 2 razširi Model IBM 1?",
				pages: [260],
				opts: [
					["Doda semantično analizo s pomočjo WordNeta.", false, "IBM 2 ne uporablja WordNeta."],
					["Uvede parametre poravnave q(i|j,l,m), ki modelirajo položaj besed.", true, "q(i|j,l,m) je verjetnost, da je j-ta ciljna beseda poravnana z i-to izvorno."],
					["Doda morfološko analizo ciljnega stavka.", false, "IBM 2 ni morfološki model."],
					["Odstrani parameter t in ga nadomesti z leksikalnimi pravili.", false, "IBM 2 obdrži t in doda q."],
				],
			},
			{
				q: "Zakaj je prevajalni model SMT v gradivu opisan kot 'backwards'?",
				pages: [246],
				opts: [
					["Ker prevaja od desne proti levi znotraj stavka.", false, "Besedni red ni razlog za to oznako."],
					["Ker za prevajanje iz slovenščine v angleščino ocenjuje P(slo|ang), ne P(ang|slo).", true, "Model je naučen 'v napačni smeri', jezikovni model pa popravi smer."],
					["Ker ignorira jezikovni model.", false, "Oba modela sodelujeta."],
					["Ker prevaja v obratnem časovnem zaporedju.", false, "To ni smisel oznake 'backwards'."],
				],
			},
			{
				q: "Koliko sistemov za analizo in generiranje je potrebnih pri medjezikovnem prevajanju za N jezikov?",
				pages: [242],
				opts: [
					["N*(N-1) sistemov.", false, "To je za pristop s pari jezikov brez interlingve."],
					["2N sistemov: N za analizo in N za generiranje.", true, "Gradivo navede, da za N jezikov potrebujemo N analizatorjev in N generatorjev."],
					["N^2 sistemov.", false, "To je za pristop brez interlingve."],
					["1 sistem za vse jezike.", false, "Interlingva zmanjša kompleksnost, a ne na 1."],
				],
			},
			{
				q: "Katera je tipična slabost neposrednega (dictionary-based) strojnega prevajanja?",
				pages: [239, 240],
				opts: [
					["Preveliko število pravil za gradnjo.", false, "Gradivo navaja pomanjkanje analize, ne preveč pravil."],
					["Nezmožnost zajeti dolge prerazporeditve besed brez skladenjskega znanja.", true, "Gradivo navede primer angleška/japonska razlika v besednem redu."],
					["Pretirano upoštevanje semantičnih razlik.", false, "Neposredni pristop semantike ne upošteva."],
					["Previsoka časovna kompleksnost.", false, "Gradivo ne omeni časa kot slabosti tega pristopa."],
				],
			},
			{
				q: "Kako se v modelu IBM 1 izračuna P(s,a|e,m)?",
				pages: [255],
				opts: [
					["P(a|e,m) + P(s|a,e,m)", false, "To je seštevanje, verjetnosti se množijo."],
					["P(a|e,m) · P(s|a,e,m) = (1/(l+1)^m) · ∏j t(sj|eaj)", true, "To je formula, ki jo gradivo eksplicitno navaja."],
					["P(s|e,m) brez upoštevanja poravnave.", false, "Za P(s,a|e,m) moramo upoštevati specifično poravnavo."],
					["1/m · ∏j t(sj|eaj)", false, "Faktor ni 1/m, temveč 1/(l+1)^m."],
				],
			},
			{
				q: "Katera trditev o vrstnem redu besed v slovenščini je navedena v gradivu?",
				pages: [234],
				opts: [
					["Slovenščina ima enak besedni red kot angleščina.", false, "Gradivo poudari razliko med slovenskim in angleškim besednim redom."],
					["Besedni red v slovenščini se prilagaja poudarjeni besedi (členitev po aktualnosti).", true, "Gradivo navede šest enakovrednih variacij istega stavka."],
					["V slovenščini vedno glagol pride na konec.", false, "To velja bolj za nemščino."],
					["Slovenščina nima prostega besednega reda.", false, "Slovenščina ima razmeroma prost besedni red."],
				],
			},
			{
				q: "Kaj je MLE ocena tMLE(s|e) po gradivu?",
				pages: [265],
				opts: [
					["število(e,s) / število(s)", false, "Imenovalec bi moral biti število(e), ne število(s)."],
					["število(e,s) / število(e)", true, "To je standardna MLE ocena iz poravnanega korpusa."],
					["število(e) / število(s)", false, "To je obrnjeno razmerje."],
					["1 / (l+1)^m", false, "To je uniformna verjetnost poravnave, ne t."],
				],
			},
			{
				q: "Katera faza transfernega prevajanja preoblikuje razčlenitveno drevo izvornega stavka v drevo ciljnega?",
				pages: [241],
				opts: [
					["Analiza", false, "Analiza samo razčleni izvorni stavek."],
					["Prenos", true, "Faza prenosa preoblikuje drevo izvornega v drevo ciljnega stavka s pravili."],
					["Ustvarjanje", false, "Ustvarjanje generira besedilo iz ciljnega drevesa."],
					["Normalizacija", false, "Normalizacija ni faza transfernega prevajanja."],
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
					["Prevesti nestrukturirano besedilo v drug jezik.", false, "To je strojno prevajanje."],
					["Določiti le polarnost stavka.", false, "To spada v sentiment, ne v IE kot celoto."],
					["Pretvoriti stavek v fonetični zapis.", false, "To ni cilj IE."],
				],
			},
			{
				q: "Katera vprašanja želi IE pogosto odgovoriti po gradivu?",
				pages: [268],
				opts: [
					["Kdo, kaj, komu, kdaj in kje.", true, "To je dobesedno navedeno kot naloga IE."],
					["Kateri je najboljši prevod besede.", false, "To je prevajanje."],
					["Kateri je najkrajši stavek.", false, "To ni IE."],
					["Katera je dominantna strategija v igri.", false, "To je teorija iger."],
				],
			},
			{
				q: "Zakaj je prepoznavanje imenskih entitet tako pomembno?",
				pages: [270, 271],
				opts: [
					["Ker pomaga pri indeksiranju, povezovanju, analizi sentimenta, relacijah in vprašanjih ter odgovorih.", true, "Gradivo navaja več uporabnosti, ki so vse vezane na entitete."],
					["Ker nadomešča vse druge jezikovne tehnologije.", false, "NER je pomemben, ne pa univerzalna zamenjava."],
					["Ker omogoča prevajanje besedilo besedo po besedo.", false, "To je drugo področje."],
					["Ker odstrani potrebo po označevanju besedila.", false, "Označevanje ostaja pomembno."],
				],
			},
			{
				q: "Kaj pomeni IOB kodiranje?",
				pages: [276],
				opts: [
					["Oznaki I in O pomenita samo dve vrsti dokumentov.", false, "IOB je oznaka za strukturo entitet, ne dokumentov."],
					["B označuje začetek imenske entitete, I pa njeno nadaljevanje.", true, "To je neposredna razlaga s diapozitiva."],
					["B pomeni beseda, I pomeni indeks, O pomeni opomba.", false, "To ni pravilno."],
					["IOB je isto kot one-hot kodiranje.", false, "Gre za popolnoma drugačne pojme."],
				],
			},
			{
				q: "Kaj je pri sekvenčnem modeliranju na voljo kot vhodna značilka po gradivu?",
				pages: [277],
				opts: [
					["Trenutna beseda, okoliške besede, oblikoslovne oznake in prejšnje oziroma naslednje oznake.", true, "To je povzetek diapozitiva o značilkah za sekvenčno označevanje."],
					["Samo število črk v besedi.", false, "Preozko in neustrezno."],
					["Samo pomenska mreža iz WordNet.", false, "To ni edina značilka."],
					["Samo dolžina dokumenta.", false, "To ne zadostuje za sekvenčno označevanje."],
				],
			},
			{
				q: "Katero merilo gradivo uporablja za ocenjevanje prepoznavanja imenskih entitet?",
				pages: [272],
				opts: [
					["Bleu score", false, "Bleu se uporablja pri prevajanju."],
					["Precision, recall in F1", true, "To je natančno navedeno na diapozitivu o ocenjevanju NER."],
					["RMSE in MAE", false, "To sta tipični regresijski meri."],
					["Perplexity", false, "To je tipična mera za jezikovne modele."],
				],
			},
			{
				q: "Kdaj se je po gradivu začela razvijati ekstrakcija informacij?",
				pages: [268],
				opts: [
					["Z razvojem interneta v 90-ih letih.", false, "Gradivo navaja leto 1970 in pojavitev NER sistemov."],
					["Ob pojavitvi sistemov za razpoznavanje imenskih entitet leta 1970.", true, "To je eksplicitno navedeno v gradivu."],
					["Z globokim učenjem po letu 2010.", false, "Globoko učenje je prišlo kasneje."],
					["Z razvojem WordNeta v 80-ih.", false, "WordNet je drug projekt, ni začetek IE."],
				],
			},
			{
				q: "Katera domena je v gradivu posebej omenjena kot področje uporabe IE?",
				pages: [268],
				opts: [
					["Finančna analiza tečajev.", false, "Finančna domena ni posebej omenjena."],
					["Biomedicinska domena.", true, "Gradivo eksplicitno navede biomedicinsko domeno kot primer."],
					["Meteorologija.", false, "To ni omenjena domena v gradivu."],
					["Astronomija.", false, "Astronomija ni omenjena v kontekstu IE."],
				],
			},
			{
				q: "Kaj ponudi odjemalec elektronske pošte, ko pri preprostem IE prepozna datum?",
				pages: [270],
				opts: [
					["Avtomatično izbriše sporočilo.", false, "To bi bila neprimerna akcija."],
					["Ponudi ustvarjanje dogodka v koledarju.", true, "To je primer preprostega IE, ki ga gradivo navede."],
					["Prevede sporočilo.", false, "Prevajanje ni naloga preprostega IE v tem primeru."],
					["Označi datum z IOB oznakami.", false, "IOB je za sekvenčne modele, ne za preprost IE."],
				],
			},
			{
				q: "Katera tehnika je pri preprostem IE najpogosteje uporabljena?",
				pages: [270],
				opts: [
					["Globoka nevronska mreža.", false, "To je naprednejši pristop."],
					["Regularni izrazi.", true, "Gradivo eksplicitno navaja, da večina preprostih IE sistemov uporablja regularne izraze."],
					["SVM klasifikator.", false, "SVM spada med naprednejše metode."],
					["IBM model 1.", false, "To je model za strojno prevajanje."],
				],
			},
			{
				q: "Kateri dve operaciji je potrebno izvesti pri prepoznavanju imenskih entitet?",
				pages: [271],
				opts: [
					["Prevesti in rangirati.", false, "Prevajanje ni del NER."],
					["Poiskati in klasificirati.", true, "Gradivo navede: 'Potrebno je poiskati in klasificirati imena znotraj besedila.'"],
					["Segmentirati in prevesti.", false, "Prevajanje ni naloga NER."],
					["Rangirati in označiti z IOB.", false, "Rangiranje ni del NER."],
				],
			},
			{
				q: "Kateri problem ugotavljanja mej ilustrira primer 'Nova Ljubljanska banka'?",
				pages: [274],
				opts: [
					["Beseda 'Nova' je sama po sebi entiteta.", false, "Problem je v določanju mej, ne posameznih besed."],
					["Entiteta je večbesedna – treba je prepoznati skupaj 'Nova Ljubljanska banka' kot eno entiteto.", true, "Gradivo to navede kot tipičen problem mej pri NER."],
					["Beseda 'banka' je dvoumna.", false, "Problem mej je v detekciji začetka in konca entitete."],
					["Klasifikacija ni mogoča brez konteksta.", false, "Problem je specifično v mejah, ne le kontekstu."],
				],
			},
			{
				q: "Koliko oznak ima IO kodiranje pri c vrstah entitet?",
				pages: [277],
				opts: [
					["c", false, "IO ima po eno oznako za vsak razred plus O."],
					["c+1", true, "c oznak za entitete (OSEBA, ORG, ...) in ena O (ostalo)."],
					["2c", false, "To je za IOB brez O."],
					["2c+1", false, "To je za IOB kodiranje."],
				],
			},
			{
				q: "Koliko oznak ima IOB kodiranje pri c vrstah entitet?",
				pages: [277],
				opts: [
					["c+1", false, "To je IO kodiranje."],
					["2c", false, "Manjka O oznaka."],
					["2c+1", true, "Za vsak razred sta B in I oznaki, plus ena O oznaka."],
					["3c", false, "To ni pravilno."],
				],
			},
			{
				q: "Katera je glavna prednost IOB pred IO kodiranjem za NER?",
				pages: [277],
				opts: [
					["Manj oznak in preprostejše učenje.", false, "IOB ima VEČ oznak, ne manj."],
					["Natančno loči začetek in nadaljevanje entitete, kar pomaga pri večbesednih entitetah.", true, "IOB je 'uporabnejše' – gradivo to eksplicitno poudari."],
					["Hitrejša klasifikacija.", false, "Več oznak pomeni bolj kompleksno nalogo."],
					["Ne potrebuje sekvenčnih modelov.", false, "IOB je prav tako namenjen sekvenčnim modelom."],
				],
			},
			{
				q: "Katera oblika jezikovne analize pomaga pri NER s prepoznavanjem fraz?",
				pages: [275],
				opts: [
					["Analiza sentimenta.", false, "To je ločena naloga."],
					["Sintaktično razpoznavanje (identifikacija fraz).", true, "Gradivo navede sintaktično razpoznavanje kot pomoč pri NER."],
					["Strojno prevajanje.", false, "Prevajanje ni del NER."],
					["TF-IDF tehtanje.", false, "TF-IDF ni namenjen NER."],
				],
			},
			{
				q: "V katerem primeru so ročni regularni izrazi za NER po gradivu primerni?",
				pages: [275],
				opts: [
					["Za dolge nestrukturirane dokumente s kompleksnim besediščem.", false, "Tam je ročno pisanje pravil neučinkovito."],
					["Za lepo strukturirane domene ali omejene entitete, kot so datumi in telefonske številke.", true, "Gradivo navede ravno to kot področje uporabe regularnih izrazov."],
					["Za odkrivanje aspektov pri sentimentu.", false, "To je naloga analize sentimenta."],
					["Za gradnjo prevajalnega modela IBM.", false, "IBM model ne temelji na regularnih izrazih."],
				],
			},
			{
				q: "Kaj je pri sekvenčnih modelih za NER korak 'testiranje'?",
				pages: [276],
				opts: [
					["Ročno pregledovanje besedil.", false, "Testiranje je avtomatiziran korak."],
					["Klasifikacija testnih primerov in ocenjevanje kakovosti.", true, "Gradivo navede: testna množica → klasifikacija → ocenjevanje."],
					["Samo statistika dolžin dokumentov.", false, "To ni evalvacija NER."],
					["Ročno popravljanje napak modela.", false, "To je korekcija, ne testiranje."],
				],
			},
			{
				q: "Katera je tipična relacija, ki jo IE sistem v gradivu ekstrahira iz besedila?",
				pages: [269],
				opts: [
					["Polarnost stavka.", false, "To je analiza sentimenta."],
					["predavatelj(ime, predmet, kraj, čas, semester).", true, "Gradivo navede ravno ta primer kot obliko strukturiranega izhoda IE."],
					["Poravnava besed med jezikoma.", false, "To je statistično strojno prevajanje."],
					["IOB zaporedje oznak.", false, "To je izhod NER, ne splošne IE relacije."],
				],
			},
			{
				q: "Katera semantična analiza je v gradivu omenjena kot pomoč pri NER poleg oblikoslovnega označevanja?",
				pages: [275],
				opts: [
					["WordNet semantična klasifikacija besed.", true, "Gradivo navede WordNet kot primer semantičnega vira za NER."],
					["IBM poravnalni model.", false, "IBM modeli so za strojno prevajanje."],
					["GloVe vektorji.", false, "GloVe spada v poglavje o vektorjih besed."],
					["Schererjeva tipologija čustev.", false, "To je za analizo sentimenta."],
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
				answer: "<p>Besede preslikamo v točke v n-dimenzionalnem prostoru, kjer so podobne besede blizu skupaj. Tako lahko pomen besed in njihove odnose modeliramo numerično, ne le simbolno.</p>",
				pages: [287],
			},
			{
				q: "Kaj je problem pri navadni one-hot predstavitvi besed?",
				answer: "<p>One-hot je zelo redek in visoko dimenzionalen zapis, kjer ima beseda samo eno enico in vse ostalo ničle. Tak zapis ne vsebuje neposredne podobnosti med besedami.</p>",
				pages: [287],
			},
			{
				q: "Kako gradivo razlaga pomen skaliranja števcev in dekompozicije singularnih vrednosti?",
				answer: "<p>Pri preprostih števcih so zelo frekventne besede premočne. Logaritmiranje in SVD zmanjšata dimenzionalnost in omogočita pojav semantičnih vzorcev.</p>",
				pages: [319],
			},
			{
				q: "Kaj loči count-based in predictive pristope k vektorjem besed?",
				answer: "<p>Count-based temelji na statistiki sočasnih pojavitev. Predictive (skip-gram) bolje zajame kompleksne vzorce, a se drugače skalira s korpusom.</p>",
				pages: [320],
			},
			{
				q: "Kako GloVe poveže štetje in predikcijo?",
				answer: "<p>GloVe združuje oba pristopa z log-bilinearnim modelom in funkcijo izgube na sočasnih pojavitev. Razlike vektorjev kodirajo razmerja verjetnosti sopojavljanja.</p>",
				pages: [321, 322, 323, 324],
			},
			{
				q: "Kako ločimo notranje in zunanje ovrednotenje vektorjev besed?",
				answer: "<p>Notranje je hitro, na vmesni nalogi. Zunanje je na realni nalogi, počasnejše, a bolj informativno.</p>",
				pages: [325],
			},
		],
	},
];
