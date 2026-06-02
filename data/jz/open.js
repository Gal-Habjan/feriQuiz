var JZ_OPEN = [
	{
		id: "analiza-sentimenta",
		name: "Analiza sentimenta",
		color: "#ff8a5b",
		questions: [
			{
				q: "Razložite, zakaj gradivo analizo sentimenta opisuje kot odkrivanje odnosov in katere tri stvari pri tem običajno iščemo.",
				answer: "<p>Gradivo analizo sentimenta opiše kot <b>odkrivanje odnosov</b>. Pri tem običajno iščemo <b>nosilca</b> oziroma izvor odnosa, <b>cilj</b> ali aspekt ter <b>tip oziroma polarnost</b> odnosa, na primer pozitivno, negativno ali nevtralno.</p><p>Primer je lahko ocena izdelka, kjer je nosilec avtor mnenja, cilj pa določen aspekt, kot je cena ali enostavnost uporabe.</p>",
				pages: [189, 190],
			},
			{
				q: "Opišite osnovni postopek analize sentimenta po Pang in Lee ter vlogo leksikalne analize in značilk.",
				answer: "<p>Osnovni pristop začne z <b>leksikalno analizo</b>, kjer očistimo besedilo, upoštevamo elemente, kot so HTML, emodžiji, velike črke in podobno. Nato izberemo značilke, na primer negacijo, TF-IDF ali uporabo vseh besed.</p><p>V naslednjem koraku besedilo klasificiramo z algoritmom, kot so <b>Naïve Bayes</b>, <b>MaxEnt</b> ali <b>SVM</b>. Cilj je ugotoviti polarnost, na primer pri filmskih kritikah ali podobnih besedilih.</p>",
				pages: [191, 192, 193, 194],
			},
			{
				q: "Kaj je po gradivu pomembno pri značilkah za analizo sentimenta in zakaj?",
				answer: "<p><b>Negacija</b> je zelo pomembna, ker lahko popolnoma spremeni pomen povedi. Poleg tega gradivo poudari, da uporaba <b>vseh besed</b> pogosto daje boljše rezultate kot uporaba samo pridevnikov.</p><p>Pri naprednejših pristopih pomagajo tudi podmnožice besed, ročno zgrajeni leksikoni polarnosti in delno nadzorovano učenje za izgradnjo leksikonov.</p>",
				pages: [194, 200, 201, 210],
			},
			{
				q: "Pojasnite idejo Turneyevega algoritma in vlogo fraz ter PMI.",
				answer: "<p>Turneyev algoritem namesto posameznih besed uporablja <b>fraze</b> in se uči na <b>domensko specifičnih</b> informacijah. Polariteto fraze določi s primerjavo povezanosti s pozitivnim in negativnim polom, pri čemer je pomembna <b>PMI</b> oziroma točkovna medsebojna informacija.</p><p>Jedro je, da primerjamo, kako pogosto se fraza pojavlja skupaj z besedo <b>dobro</b> in kako pogosto z besedo <b>slabo</b>.</p>",
				pages: [207, 208, 209],
			},
			{
				q: "Kako se v gradivu opiše leksikon sentimenta in kako ga lahko gradimo?",
				answer: "<p>Leksikon sentimenta pove, <b>kateri pomen sentimenta imajo besede</b>. Gradivo navaja obstoječe leksikone, na primer <b>The General Inquirer</b> in <b>LIWC</b>.</p><p>Lahko pa zgradimo tudi lasten leksikon s pomočjo <b>delno nadzorovanega učenja</b>, kjer imamo le malo označenih primerov ali ročno zgrajenih vzorcev.</p>",
				pages: [200, 201],
			},
			{
				q: "Zakaj so naprednejše metode sentimenta pogosto formulirane kot klasifikacija ali regresija?",
				answer: "<p>Ker je končni izhod običajno neka numerična ali diskretna ocena odnosa. Pri osnovni nalogi je to pogosto binarna klasifikacija, pri zahtevnejših pa lahko gre za <b>regresijo</b> ali bolj fino razčlenjeno klasifikacijo.</p><p>Ko dodamo še odkrivanje aspektov, atributov in cilja sentimenta, preidemo v bolj kompleksno nalogo, vendar je osnovna matematična oblika še vedno pogosto klasifikacijska ali regresijska.</p>",
				pages: [190, 210],
			},
		],
	},
	{
		id: "diskriminatorni-klasifikatorji",
		name: "Diskriminatorni klasifikatorji",
		color: "#4d9fff",
		questions: [
			{
				q: "Razložite razliko med generativnimi in diskriminatornimi modeli ter navedite tipične primere obeh družin.",
				answer: "<p><b>Generativni modeli</b> modelirajo P(d|c) in P(c), nato pa z Bayesovim pravilom izračunajo P(c|d). Tipični primeri so Naïve Bayes, HMM, n-gram modeli in podobni.</p><p><b>Diskriminatorni modeli</b> pa neposredno modelirajo P(c|d). Primeri so logistična regresija, perceptron in SVM. V gradivu so izpostavljeni kot bolj točni in bolj fleksibilni pri uporabi značilk.</p>",
				pages: [213, 214, 218],
			},
			{
				q: "Kaj je značilka v diskriminatornem modelu in kako se ji dodeli pomen?",
				answer: "<p>Značilka je funkcija, ki pove, kako močno določen vidik besedila podpira neki razred. V gradivu je podana kot funkcija <b>f : C x D → R</b>, torej vrne realno vrednost.</p><p>Model vsaki značilki dodeli utež. Ta utež je lahko pozitivna, če značilka podpira razred, ali negativna, če mu nasprotuje.</p>",
				pages: [215, 216],
			},
			{
				q: "Kako deluje linearni klasifikator na podlagi značilk?",
				answer: "<p>Za vsak par razred-besedilo značilke glasujejo z utežmi. Za razred se seštejejo prispevki vseh značilk in izbere se razred z največjo skupno vrednostjo glasovanja.</p><p>V gradivu je to zapisano kot vsota <b>λi fi(c,d)</b>. Perceptron in SVM sta navedena kot načina, kako uteži naučimo.</p>",
				pages: [217, 218],
			},
			{
				q: "Razložite, zakaj so diskriminatorni modeli v LT pogosto uporabnejši od generativnih.",
				answer: "<p>Diskriminatorni modeli so pogosto bolj točni, ker se neposredno osredotočijo na mejo med razredi. Poleg tega je vanje lažje vključiti jezikovno pomembne značilke, na primer okolico besede, veliko začetnico ali druge kontekstne signale.</p><p>Gradivo poudari tudi, da omogočajo samodejno izgradnjo jezikovno neodvisnih modelov, kar je posebej uporabno v nalogah, kot je prepoznavanje entitet.</p>",
				pages: [213, 214],
			},
		],
	},
	{
		id: "strojno-prevajanje",
		name: "Strojno prevajanje",
		color: "#f39c6b",
		questions: [
			{
				q: "Primerjajte neposredno, transferno in medjezikovno strojno prevajanje.",
				answer: "<p><b>Neposredno prevajanje</b> je prevajanje besedo po besedo z minimalno analizo in uporabo dvojezičnega slovarja. <b>Transferno prevajanje</b> doda skladenjsko in semantično analizo ter prenos strukture iz izvornega v ciljni jezik.</p><p><b>Medjezikovno prevajanje</b> pa najprej izvorni jezik preslika v skupno vmesno predstavitev, t. i. interlingvo, iz katere potem generira ciljno besedilo.</p>",
				pages: [237, 238],
			},
			{
				q: "Zakaj je kontekst v strojnem prevajanju pomemben in kako to pokaže primer z zaimkom it?",
				answer: "<p>V prevajanju ni dovolj pogledati samo posamezne besede, ker ista oblika lahko v različnih kontekstih pomeni različne stvari. Gradivo pokaže, da lahko angleški <b>it</b> v enem primeru pomeni <b>the computer</b>, v drugem pa <b>the data</b>.</p><p>Pravi prevod je zato odvisen od širšega konteksta in od razrešitve skladenjske oziroma pomenske dvoumnosti.</p>",
				pages: [233, 236],
			},
			{
				q: "Opišite osnovno idejo statističnega strojnega prevajanja in poravnave.",
				answer: "<p>Statistično strojno prevajanje modelira prevod z verjetnostmi, naučenimi iz poravnanega korpusa. V gradivu se pojavi model z <b>tMLE(s|e)</b> za prevodno verjetnost in <b>qMLE(j,i|l,m)</b> za verjetnost poravnave oziroma položaja besed.</p><p>Učni podatki vsebujejo pare izvornih in ciljnih stavkov ter njihove poravnave, iz katerih se naučijo verjetnosti za prevajanje in za položaj posameznih besed.</p>",
				pages: [264],
			},
			{
				q: "Kako bi v eni povedi opisali glavno omejitev neposrednega strojnega prevajanja?",
				answer: "<p>Glavna omejitev je, da prevaja besedo po besedo in zato pogosto ne ujame skladenjskih, pomenskih in kontekstnih razlik med jeziki.</p><p>Zato v gradivu sledijo transferni in medjezikovni pristopi, ki skušajo te informacije zajeti sistematičneje.</p>",
				pages: [238, 239],
			},
		],
	},
	{
		id: "ekstrakcija-informacij-in-prepoznavanje-imenskih-entitet",
		name: "Ekstrakcija informacij in NER",
		color: "#7dce82",
		questions: [
			{
				q: "Kaj želi ekstrakcija informacij iz besedila pridobiti in zakaj je to koristno?",
				answer: "<p>Cilj je iz nestrukturiranega ali pol-strukturiranega besedila izluščiti <b>strukturirane podatke</b>, na primer kdo, kaj, komu, kdaj in kje. To omogoča nadaljnje sklepanje, organizacijo in boljše poizvedovanje po podatkih.</p><p>Gradivo posebej omenja tudi biomedicinsko domeno in uporabo v različnih informacijskih sistemih.</p>",
				pages: [267, 268],
			},
			{
				q: "Zakaj je prepoznavanje imenskih entitet ključno za IE in katere vrste entitet običajno iščemo?",
				answer: "<p>Prepoznavanje imenskih entitet je ključno, ker je veliko relacij in dejstev v besedilu vezanih prav na imena ljudi, organizacij, lokacij in podobno. Ko entitete pravilno identificiramo, jih lahko indeksiramo, povežemo in uporabimo pri relacijah ali vprašanjih in odgovorih.</p><p>Gradivo zato poudari, da je NER eden najpomembnejših korakov v ekstrakciji informacij.</p>",
				pages: [270, 271],
			},
			{
				q: "Opišite razlike med ročno zapisanimi pravili, klasifikatorji in sekvenčnimi modeli za NER.",
				answer: "<p><b>Ročna pravila</b> so uporabna predvsem v lepo strukturiranih domenah, na primer pri datumih in telefonskih številkah. <b>Klasifikatorji</b> razvrščajo besede v razreda, na primer za ekstrakcijo ali ne.</p><p><b>Sekvenčni modeli</b> pa obravnavajo zaporedje oznak za cel dokument ali poved ter upoštevajo kontekst in sosledje oznak, zato so za NER pogosto najbolj uporabni.</p>",
				pages: [274, 275, 276, 277],
			},
			{
				q: "Kaj pomeni IOB kodiranje in zakaj je uporabnejše od preprostega IO kodiranja?",
				answer: "<p>Pri <b>IOB</b> kodiranju ima vsaka entiteta oznako <b>B</b> za začetek in <b>I</b> za nadaljevanje. Tako lahko natančno označimo meje entitet.</p><p>IO kodiranje je preprostejše, a manj informativno, ker ne loči začetka od nadaljevanja entitete. Zato ima IOB več oznak, a boljšo uporabnost pri označevanju zaporedij.</p>",
				pages: [276],
			},
			{
				q: "Kako se ocenjuje kakovost prepoznavanja imenskih entitet?",
				answer: "<p>Gradivo uporablja <b>kontingenčno tabelo</b> s količinami tp, tn, fp in fn ter iz nje izpelje <b>precision</b>, <b>recall</b> in <b>F1</b>. Te mere skupaj pokažejo, koliko entitet je sistem pravilno našel in kako malo napačnih zadetkov ima.</p>",
				pages: [272],
			},
			{
				q: "Kaj so tipične značilke pri sekvenčnem označevanju za NER?",
				answer: "<p>Gradivo navaja <b>trenutno besedo</b>, <b>prejšnjo in naslednjo besedo</b>, oblikoslovne oznake ter <b>prejšnje in naslednje oznake</b>. To omogoča, da model upošteva širši kontekst okoli entitete.</p>",
				pages: [277],
			},
		],
	},
	{
		id: "globoko-ucenje-v-jezikovnih-tehnologijah",
		name: "Globoko učenje v JT",
		color: "#9b6cff",
		questions: [
			{
				q: "Kaj pomeni, da globoko učenje izvaja feature learning oziroma representation learning?",
				answer: "<p>Pomeni, da sistem samodejno išče dobre značilke ali predstavitve iz vhodnih podatkov, namesto da bi jih morali ročno definirati. Model tako gradi večplastne predstavitve, ki bolje ujamejo strukturo problema.</p><p>V gradivu je to prikazano kot vhodni, skriti in izhodni nivo, kjer se model uči vmesnih predstavitev.</p>",
				pages: [281, 282],
			},
			{
				q: "Zakaj je globoko učenje postalo tako uspešno okoli leta 2010?",
				answer: "<p>Gradivo navaja tri glavne razloge: <b>velike količine podatkov</b>, <b>hitrejše procesorje in GPU-je</b> ter <b>nove modele, algoritme in ideje</b>. Ti dejavniki so omogočili učinkovitejše učenje globokih mrež.</p><p>Posledično so izboljšave pri govoru, vidu in tudi jezikovnih tehnologijah hitro postale vidne.</p>",
				pages: [283, 284],
			},
			{
				q: "Kako gradivo povezuje globoko učenje z jezikovnimi tehnologijami?",
				answer: "<p>Globoko učenje združuje cilje jezikovnih tehnologij z metodami večplastnega učenja. Uporabi se ga lahko na različnih nivojih, od govora in besed do sintakse in semantike, ter pri orodjih in aplikacijah, kot so označevanje besedila, prepoznavanje entitet, strojno prevajanje in analiza sentimenta.</p>",
				pages: [286],
			},
			{
				q: "Kako gradivo opiše prednosti globokega učenja pred ročno narejenimi značilkami?",
				answer: "<p>Ročno določene značilke so pogosto preveč specifične, nepopolne in drage za razvoj. Globoko učenje pa omogoča bolj fleksibilno ogrodje, ki se lahko uči iz označenih in neoznačenih podatkov ter se lažje prenaša med domenami.</p>",
				pages: [282, 283],
			},
			{
				q: "Navedite dva zgodnja preboja, ki ju gradivo omenja kot pomembna za razcvet globokega učenja.",
				answer: "<p>Gradivo omenja <b>razpoznavanje govora</b> z velikimi učnimi množicami in <b>ImageNet klasifikacijo</b> z globokimi konvolucijskimi mrežami za računalniški vid. Oba primera sta pokazala, da so globoke mreže lahko zelo uspešne v velikih realnih nalogah.</p>",
				pages: [284],
			},
			{
				q: "Kako bi na kratko razložili, zakaj so nevronske mreže zanimive tudi za jezikovne naloge?",
				answer: "<p>Ker lahko besede, fraze in celo logične izraze predstavijo kot vektorje in nato s plastmi mreže te predstavitve združujejo ter preoblikujejo. To omogoča učenje kompleksnih vzorcev, ki jih ročno zasnovane značilke pogosto spregledajo.</p>",
				pages: [286, 288, 289],
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
