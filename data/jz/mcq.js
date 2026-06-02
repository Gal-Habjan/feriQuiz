var JZ_MCQ = [
	{
		id: "analiza-sentimenta",
		name: "Analiza sentimenta",
		color: "#ff8a5b",
		questions: [
			{
				q: "Katera skupina izrazov se v gradivu uporablja kot poimenovanje za analizo sentimenta?",
				pages: [185],
				opts: [
					[
						"Samo 'subjectivity analysis'",
						false,
						"Gradivo navaja več sopomenk, ne samo ene.",
					],
					[
						"Sentiment analysis, opinion mining, opinion extraction, sentiment mining in analysis subjektivnosti",
						true,
						"To je nabor poimenovanj, ki ga gradivo eksplicitno navede.",
					],
					[
						"Samo 'text mining'",
						false,
						"Text mining je širši okvir, ne sopomenka za analizo sentimenta.",
					],
					[
						"Samo 'polarity detection'",
						false,
						"Polarnost je le ena podnaloga analize sentimenta.",
					],
				],
			},
			{
				q: "Kaj je osnovni cilj analize sentimenta po gradivu?",
				pages: [186, 189, 190],
				opts: [
					[
						"Ugotoviti, ali je besedilo slovnično pravilno.",
						false,
						"To je naloga popravljanja pravopisa, ne sentimenta.",
					],
					[
						"Odkrivanje odnosov, na primer nosilec, cilj in polarnost odnosa.",
						true,
						"Analiza sentimenta je opisana kot odkrivanje odnosov med nosilcem, ciljem in čustveno/polarnostno oceno.",
					],
					[
						"Prevesti besedilo v drug jezik.",
						false,
						"To spada v strojno prevajanje.",
					],
					[
						"Poimenovati vse imenske entitete v besedilu.",
						false,
						"To spada v ekstrakcijo informacij in NER.",
					],
				],
			},
			{
				q: "Katera naloga je v gradivu označena kot zahtevnejša od osnovne binarne klasifikacije sentimenta?",
				pages: [190],
				opts: [
					[
						"Ali je kritika pozitivna ali negativna?",
						false,
						"To je osnovna naloga.",
					],
					[
						"Rangiranje odnosa, na primer od 1 do 10.",
						true,
						"To je eksplicitno navedeno kot zahtevnejša naloga.",
					],
					[
						"Iskanje telefonskih številk v besedilu.",
						false,
						"To je tipična naloga regularnih izrazov oziroma IE.",
					],
					[
						"Določanje stavčnih členov v stavku.",
						false,
						"To je naloga sintaktične analize.",
					],
				],
			},
			{
				q: "Kaj po gradivu pravilno velja za značilke pri osnovni analizi sentimenta?",
				pages: [193, 194, 210],
				opts: [
					[
						"Negacija ni pomembna, pomembni so le pridevniki.",
						false,
						"Gradivo poudari, da je negacija pomembna in da uporaba vseh besed pogosto deluje bolje.",
					],
					[
						"Uporaba vseh besed z Naïve Bayesom pogosto da boljše rezultate.",
						true,
						"To je ena izmed eksplicitnih ugotovitev na končnih diapozitivih poglavja.",
					],
					[
						"Vedno uporabimo samo čustvene simbole.",
						false,
						"To je preozko in ni navedeno kot splošno pravilo.",
					],
					[
						"Analiza sentimenta ne uporablja leksikonov.",
						false,
						"Leksikoni sentimenta so v gradivu pomemben pristop.",
					],
				],
			},
			{
				q: "Kaj je bistvo Turneyevega algoritma?",
				pages: [208, 209],
				opts: [
					[
						"Uporablja fraze namesto posameznih besed in se uči na domensko specifičnih informacijah.",
						true,
						"To je ravno opis Turneyevga pristopa v gradivu.",
					],
					[
						"Za vsako besedo uporablja le slovnični slovar.",
						false,
						"To ne opisuje Turneyevega algoritma.",
					],
					[
						"Temelji izključno na ročno napisanih pravilih za negacijo.",
						false,
						"Negacija je pomembna, a Turney ni le ročna pravila.",
					],
					[
						"Prevede besedilo po pravilih medjezikovnega prevajanja.",
						false,
						"To je strojno prevajanje, ne sentiment.",
					],
				],
			},
			{
				q: "Kako gradivo opiše naprednejše metode analize sentimenta?",
				pages: [210],
				opts: [
					[
						"Kot povsem ločeno od klasifikacije ali regresije.",
						false,
						"Gradivo pravi, da je osnovno modeliranje klasifikacija ali regresija.",
					],
					[
						"Kot klasifikacijo ali regresijo z dodatnimi značilkami, kot sta negacija in iskanje podmnožic besed.",
						true,
						"To je natančen povzetek diapozitiva o naprednejših metodah.",
					],
					[
						"Kot sekvenčno označevanje z IOB kodami.",
						false,
						"To sodi v prepoznavanje imenskih entitet.",
					],
					[
						"Kot prevajanje stavkov med jeziki.",
						false,
						"To spada v strojno prevajanje.",
					],
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
					[
						"P(d|c) skupaj s priorom P(c)",
						false,
						"To je značilno za generativne modele.",
					],
					[
						"P(c|d)",
						true,
						"Diskriminatorni modeli neposredno računajo posteriorno verjetnost razreda.",
					],
					[
						"P(d)",
						false,
						"Samo marginalna verjetnost ni dovolj za klasifikacijo.",
					],
					[
						"P(c)",
						false,
						"Prior ni edino, kar diskriminatorni model ocenjuje.",
					],
				],
			},
			{
				q: "Katera trditev najbolje opiše razliko med generativnimi in diskriminatornimi modeli?",
				pages: [214],
				opts: [
					[
						"Generativni modeli neposredno računajo P(c|d), diskriminatorni pa P(d|c).",
						false,
						"To je obrnjeno.",
					],
					[
						"Generativni modeli uporabljajo P(d|c) in P(c) ter Bayesovo pravilo, diskriminatorni pa neposredno P(c|d).",
						true,
						"To je jedro razlike, ki jo prikazuje gradivo.",
					],
					[
						"Oba tipa modelov uporabljata samo logične izraze.",
						false,
						"To je preveč poenostavljeno in napačno.",
					],
					[
						"Diskriminatorni modeli ne uporabljajo značilk.",
						false,
						"Prav značilke so pri njih zelo pomembne.",
					],
				],
			},
			{
				q: "Kaj je v gradivu posebnost značilk pri diskriminatornem modelu?",
				pages: [215, 216],
				opts: [
					[
						"Značilke so samo binarne in nikoli nimajo uteži.",
						false,
						"Gradivo pravi, da model značilkam dodeli uteži.",
					],
					[
						"Značilka lahko vrne realno vrednost in model ji dodeli pozitivno ali negativno utež.",
						true,
						"To je osrednja ideja funkcij f : CxD → R.",
					],
					[
						"Značilke so vedno skrite in nevidne uporabniku.",
						false,
						"V gradivu so značilke eksplicitno opisane.",
					],
					[
						"Značilke se uporabljajo samo v generativnih modelih.",
						false,
						"Ravno nasprotno, tu so ključne za diskriminatorne modele.",
					],
				],
			},
			{
				q: "Kako linearni klasifikator izbere razred na podlagi značilk?",
				pages: [217, 218],
				opts: [
					[
						"Izbere razred z najmanjšo vsoto uteži.",
						false,
						"Izbere se razred z največjo vrednostjo glasovanja.",
					],
					[
						"Izbere razred z največjo vrednostjo glasovanja Σ λi fi(c,d).",
						true,
						"To je neposredno zapisano v diapozitivu o linearnem klasifikatorju.",
					],
					[
						"Izbere razred naključno.",
						false,
						"To nima zveze z opisanim postopkom.",
					],
					[
						"Izbere razred, ki ima največ vhodnih besed.",
						false,
						"Število besed ni samo po sebi odločilno pravilo.",
					],
				],
			},
			{
				q: "Kaj počne perceptron v tem okviru?",
				pages: [218],
				opts: [
					[
						"Išče napačno klasificirane primere in uteži premakne proti pravilni klasifikaciji.",
						true,
						"To je natančen opis perceptronskega učenja v gradivu.",
					],
					[
						"Izračuna Bayesov prior za vsak razred.",
						false,
						"To je generativen pristop, ne perceptron.",
					],
					[
						"Ustvari slovar za strojno prevajanje.",
						false,
						"To ne spada v to poglavje.",
					],
					[
						"Določa IOB oznake za imenske entitete.",
						false,
						"To je del sekvenčnih modelov za NER.",
					],
				],
			},
			{
				q: "Katera metoda je v gradivu navedena kot diskriminatorna?",
				pages: [213, 214, 218],
				opts: [
					[
						"Naïve Bayes",
						false,
						"Naïve Bayes je naveden med generativnimi modeli.",
					],
					[
						"SVM",
						true,
						"SVM je izrecno naveden med diskriminatornimi metodami.",
					],
					[
						"Hidden Markov Model",
						false,
						"HMM spada med generativne modele.",
					],
					[
						"n-gram jezikovni model",
						false,
						"To je generativni model.",
					],
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
					[
						"Prevajanje besedo po besedo z zelo malo analize izvornega besedila.",
						true,
						"To je neposredni, dictionary-based pristop.",
					],
					[
						"Prevajanje z globokimi nevronskimi mrežami in pozornostjo.",
						false,
						"To ni klasični rule-based pristop iz teh diapozitivov.",
					],
					[
						"Prevajanje izključno s semantično analizo stavka.",
						false,
						"Neposredni pristop semantične analize ne uporablja.",
					],
					[
						"Prevajanje brez dvojezičnega slovarja.",
						false,
						"Dvojezični slovar je temelj neposrednega pristopa.",
					],
				],
			},
			{
				q: "Katera lastnost loči transferno strojno prevajanje od neposrednega?",
				pages: [237],
				opts: [
					[
						"Transferni pristop doda skladenjsko in semantično analizo ter prenos strukture.",
						true,
						"Transfer-based translation je korak nad neposrednim prevajanjem.",
					],
					[
						"Transferni pristop vedno prevaja besedo po besedo.",
						false,
						"To je prej neposredno prevajanje.",
					],
					[
						"Transferni pristop sploh ne uporablja pravil.",
						false,
						"Uporablja pravila za prenos med strukturami.",
					],
					[
						"Transferni pristop je enak interlingvi.",
						false,
						"Interlingua je tretji, ločen pristop.",
					],
				],
			},
			{
				q: "Kaj je bistvo medjezikovnega strojnega prevajanja?",
				pages: [237],
				opts: [
					[
						"Vsak jezik najprej preslikamo v skupno vmesno predstavitev, nato pa iz nje v ciljni jezik.",
						true,
						"To je osrednja ideja interlingua-based pristopa.",
					],
					[
						"Besede prevajamo neposredno s slovarjem brez analize.",
						false,
						"To je neposredno prevajanje.",
					],
					[
						"Prevajamo le posamezne fraze brez strukture.",
						false,
						"Tako pristopa ne opisuje gradivo.",
					],
					[
						"Za prevod potrebujemo samo morfološki leksikon.",
						false,
						"To ni dovolj za medjezikovni pristop.",
					],
				],
			},
			{
				q: "Kaj pomenita parametra tMLE(s|e) in qMLE(j,i|l,m) v statističnem prevajanju?",
				pages: [264],
				opts: [
					[
						"tMLE je verjetnost prevoda besedila, qMLE pa verjetnost govornega signala.",
						false,
						"To ni pravilna razlaga oznak.",
					],
					[
						"tMLE je MLE ocena prevodne verjetnosti, qMLE pa MLE ocena poravnave oziroma položaja.",
						true,
						"To je točno v duhu modela na diapozitivu.",
					],
					[
						"Obe oznaki pomenita isti slovar dveh jezikov.",
						false,
						"Ne predstavljata slovarja.",
					],
					[
						"qMLE opisuje le slovnico slovenščine.",
						false,
						"Gre za model poravnave, ne slovnico.",
					],
				],
			},
			{
				q: "Kateri primer lepo pokaže, da mora strojno prevajanje upoštevati kontekst?",
				pages: [233, 236],
				opts: [
					[
						"Razlika med 'how much' in 'as much' v neposrednem prevajanju.",
						true,
						"Gradivo pokaže, da prevod ni odvisen samo od posamezne besede, temveč tudi od okoliškega konteksta.",
					],
					[
						"Uporaba čustvenih simbolov v analizi sentimenta.",
						false,
						"To ni prevajalski primer.",
					],
					[
						"Obravnava IOB oznak pri NER.",
						false,
						"To je drugo poglavje.",
					],
					[
						"GloVe ko-occurence razmerja.",
						false,
						"To sodi v vektorje besed.",
					],
				],
			},
			{
				q: "Kaj v prevajanju pomeni ločljivost samostalnikov oziroma zaimka it?",
				pages: [236],
				opts: [
					[
						"Da je treba ugotoviti, ali se it nanaša na računalnik ali na podatke.",
						true,
						"Gradivo daje oba primera in pokaže, da je kontekst ključnega pomena.",
					],
					[
						"Da zaimek it vedno prevedemo kot ista beseda.",
						false,
						"To bi bilo napačno.",
					],
					[
						"Da je prevod odvisen le od slovarja.",
						false,
						"Kontekst je nujen za pravi prevod.",
					],
					[
						"Da ločljivost ni pomembna za prevajanje.",
						false,
						"Prav nasprotno, pomembna je.",
					],
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
					[
						"Pridobiti strukturirane podatke iz nestrukturiranih ali pol-strukturiranih virov.",
						true,
						"To je eksplicitno navedena definicija.",
					],
					[
						"Prevesti nestrukturirano besedilo v drug jezik.",
						false,
						"To je strojno prevajanje.",
					],
					[
						"Določiti le polarnost stavka.",
						false,
						"To spada v sentiment, ne v IE kot celoto.",
					],
					[
						"Pretvoriti stavek v fonetični zapis.",
						false,
						"To ni cilj IE.",
					],
				],
			},
			{
				q: "Katera vprašanja želi IE pogosto odgovoriti po gradivu?",
				pages: [268],
				opts: [
					[
						"Kdo, kaj, komu, kdaj in kje.",
						true,
						"To je dobesedno navedeno kot naloga IE.",
					],
					[
						"Kateri je najboljši prevod besede.",
						false,
						"To je prevajanje.",
					],
					["Kateri je najkrajši stavek.", false, "To ni IE."],
					[
						"Katera je dominantna strategija v igri.",
						false,
						"To je teorija iger.",
					],
				],
			},
			{
				q: "Zakaj je prepoznavanje imenskih entitet tako pomembno?",
				pages: [270, 271],
				opts: [
					[
						"Ker pomaga pri indeksiranju, povezovanju, analizi sentimenta, relacijah in vprašanjih ter odgovorih.",
						true,
						"Gradivo navaja več uporabnosti, ki so vse vezane na entitete.",
					],
					[
						"Ker nadomešča vse druge jezikovne tehnologije.",
						false,
						"NER je pomemben, ne pa univerzalna zamenjava.",
					],
					[
						"Ker omogoča prevajanje besedilo besedo po besedo.",
						false,
						"To je drugo področje.",
					],
					[
						"Ker odstrani potrebo po označevanju besedila.",
						false,
						"Označevanje ostaja pomembno.",
					],
				],
			},
			{
				q: "Kaj pomeni IOB kodiranje?",
				pages: [276],
				opts: [
					[
						"Oznaki I in O pomenita samo dve vrsti dokumentov.",
						false,
						"IOB je oznaka za strukturo entitet, ne dokumentov.",
					],
					[
						"B označuje začetek imenske entitete, I pa njeno nadaljevanje.",
						true,
						"To je neposredno razlago s diapozitiva.",
					],
					[
						"B pomeni beseda, I pomeni indeks, O pomeni opomba.",
						false,
						"To ni pravilno.",
					],
					[
						"IOB je isto kot one-hot kodiranje.",
						false,
						"Gre za popolnoma drugačne pojme.",
					],
				],
			},
			{
				q: "Kaj je pri sekvenčnem modeliranju na voljo kot vhodna značilka po gradivu?",
				pages: [277],
				opts: [
					[
						"Trenutna beseda, okoliške besede, oblikoslovne oznake in prejšnje oziroma naslednje oznake.",
						true,
						"To je povzetek diapozitiva o značilkah za sekvenčno označevanje.",
					],
					[
						"Samo število črk v besedi.",
						false,
						"Preozko in neustrezno.",
					],
					[
						"Samo pomenska mreža iz WordNet.",
						false,
						"To ni edina značilka.",
					],
					[
						"Samo dolžina dokumenta.",
						false,
						"To ne zadostuje za sekvenčno označevanje.",
					],
				],
			},
			{
				q: "Katero merilo gradivo uporablja za ocenjevanje prepoznavanja imenskih entitet?",
				pages: [272],
				opts: [
					["Bleu score", false, "Bleu se uporablja pri prevajanju."],
					[
						"Precision, recall in F1",
						true,
						"To je natančno navedeno na diapozitivu o ocenjevanju NER.",
					],
					["RMSE in MAE", false, "To sta tipični regresijski meri."],
					[
						"Perplexity",
						false,
						"To je tipična mera za jezikovne modele.",
					],
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
					[
						"Področje strojnega učenja, ki poskuša samodejno ugotoviti dobre predstavitve in značilke.",
						true,
						"To je glavna definicija iz uvodnih diapozitivov.",
					],
					[
						"Samo ročno pisanje značilk za vsako nalogo.",
						false,
						"To je ravno nekaj, čemur se globoko učenje izogne.",
					],
					[
						"Prevajanje med jeziki brez modelov.",
						false,
						"To ni definicija globokega učenja.",
					],
					[
						"Sistem za pravopisne popravke.",
						false,
						"To je samo ena od možnih aplikacij LT.",
					],
				],
			},
			{
				q: "Zakaj je globoko učenje po gradivu uporabno?",
				pages: [282],
				opts: [
					[
						"Ker so ročno določene značilke pogosto preveč specifične, nepopolne in drage za razvoj.",
						true,
						"To je neposreden povzetek razlogov za uporabo globokega učenja.",
					],
					[
						"Ker vedno deluje brez podatkov.",
						false,
						"Podatki so še kako pomembni.",
					],
					[
						"Ker ne potrebuje nobenega učenja.",
						false,
						"Seveda potrebuje učenje.",
					],
					[
						"Ker odpravi potrebo po vseh algoritmih.",
						false,
						"To je pretirano in napačno.",
					],
				],
			},
			{
				q: "Kaj je po gradivu pripomoglo k razmahu globokega učenja okoli leta 2010?",
				pages: [283, 284],
				opts: [
					[
						"Velike količine podatkov, hitrejši procesorji in novi modeli ter algoritmi.",
						true,
						"To je natančen povzetek diapozitiva o razvoju globokega učenja.",
					],
					[
						"Samo boljši slovarji.",
						false,
						"To ni bil glavni dejavnik.",
					],
					[
						"Odprava vseh skritih plasti.",
						false,
						"Globoko učenje temelji prav na več plasteh.",
					],
					[
						"Prehod iz besed v zvok.",
						false,
						"To ni razlog za razmah.",
					],
				],
			},
			{
				q: "Na katerih nivojih je v LT po gradivu mogoče uporabiti globoko učenje?",
				pages: [286],
				opts: [
					["Le pri govoru.", false, "Uporaba je širša."],
					[
						"Na govor, besede, sintakso, semantiko in tudi na orodja ter aplikacije.",
						true,
						"To je izrecno navedeno v diapozitivu o uporabi globokega učenja.",
					],
					["Le pri prevajanju.", false, "To je samo ena aplikacija."],
					[
						"Le pri ekstrakciji informacij.",
						false,
						"To je samo en primer uporabe.",
					],
				],
			},
			{
				q: "Kaj je v gradivu navedeno kot zgodnji preboj globokega učenja?",
				pages: [284],
				opts: [
					[
						"Razpoznavanje govora z velikimi učnimi množicami in ImageNet klasifikacija za računalniški vid.",
						true,
						"To sta dva izrecno navedena primera zgodnjih prebojev.",
					],
					[
						"Samo analiza sentimenta na Twitterju.",
						false,
						"To ni zgodnji preboj, ki ga gradivo izpostavi.",
					],
					[
						"Samo sistem vprašanj in odgovorov.",
						false,
						"Tudi to ni navedeno kot prvi preboj.",
					],
					[
						"Samo pravopisni popravljalnik.",
						false,
						"To ni primer iz diapozitiva.",
					],
				],
			},
			{
				q: "Kako bi na kratko razložili, zakaj so nevronske mreže zanimive tudi za jezikovne naloge?",
				pages: [286, 288, 289],
				opts: [
					[
						"Ker lahko besede, fraze in celo logične izraze predstavijo kot vektorje in nato s plastmi mreže te predstavitve združujejo ter preoblikujejo.",
						true,
						"To povzema jedro povezave med globokim učenjem in LT.",
					],
					[
						"Ker odstranjujejo potrebo po vseh podatkih.",
						false,
						"Podatki ostanejo pomembni.",
					],
					[
						"Ker uporabljajo samo slovnice brez numeričnih vrednosti.",
						false,
						"Globoko učenje temelji na vektorjih.",
					],
					[
						"Ker so uporabne samo za prevod po slovarju.",
						false,
						"To je preozko in ne drži.",
					],
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
				answer: "<p>Besede preslikamo v točke v n-dimenzionalnem prostoru, kjer so podobne besede blizu skupaj. Tako lahko pomen besed in njihove odnose modeliramo numerično, ne le simbolno.</p><p>Gradivo poudari, da imajo besede s podobnim pomenom tendenco, da se pojavijo v grozdih.</p>",
				pages: [287],
			},
			{
				q: "Kaj je problem pri navadni one-hot predstavitvi besed?",
				answer: "<p>One-hot je zelo redek in visoko dimenzionalen zapis, kjer ima beseda samo eno enico in vse ostalo ničle. Tak zapis ne vsebuje neposredne podobnosti med besedami, zato slabo izraža semantične odnose.</p>",
				pages: [287],
			},
			{
				q: "Kako gradivo razlaga pomen skaliranja števcev in dekompozicije singularnih vrednosti?",
				answer: "<p>Pri preprostih števcih so zelo frekventne besede premočne, zato pomaga uporaba logaritmov, ignoriranje besed brez semantičnega pomena in zmanjševanje dimenzionalnosti. Tako se v vektorjih začnejo pojavljati semantični vzorci, na primer <b>drive → driver</b> in <b>teach → teacher</b>.</p>",
				pages: [319],
			},
			{
				q: "Kaj loči count-based in predictive pristope k vektorjem besed?",
				answer: "<p><b>Count-based</b> metode uporabljajo statistiko sočasnih pojavitev in so hitre pri učenju, a imajo svoje omejitve. <b>Predictive</b> metode, kot je skip-gram, bolje zajamejo kompleksne vzorce med besedami, a se drugače skalirajo s korpusom.</p>",
				pages: [320],
			},
			{
				q: "Kako GloVe poveže štetje in predikcijo?",
				answer: "<p>GloVe združuje ideje obeh pristopov s pomočjo modela log-bilinear in funkcije izgube na sočasnih pojavitev. Ključna ideja je, da razlike vektorjev lahko kodirajo razmerja verjetnosti sopojavljanja med besedami.</p>",
				pages: [321, 322, 323, 324],
			},
			{
				q: "Kako ločimo notranje in zunanje ovrednotenje vektorjev besed?",
				answer: "<p><b>Notranje ovrednotenje</b> je hitro in pomaga razumeti sistem, ker uporablja neko vmesno nalogo. <b>Zunanje ovrednotenje</b> je na realni nalogi, je časovno zahtevnejše, vendar bolje pokaže dejansko uporabnost vektorjev.</p>",
				pages: [325],
			},
		],
	},
];
