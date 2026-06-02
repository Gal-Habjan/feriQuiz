var PSIS_MCQ = [
	{
		id: "vec-agentni",
		name: "Več agentni sistemi — osnove",
		color: "#6c8eff",
		questions: [
			{
				q: "Katera trditev o večagentnih sistemih drži?",
				pages: [115],
				opts: [
					[
						"Sistem enega agenta vedno zadostuje za reševanje kompleksnih problemov.",
						false,
						"To ne drži — sistem enega agenta praviloma ne obstaja kot izolirano idealno rešitev; vprašanje je, kako zgraditi družbo agentov.",
					],
					[
						"V večagentnem sistemu agenti nimajo medsebojnih vplivov.",
						false,
						"Agenti drug na drugega vplivajo — npr. dva robota ne moreta skozi vrata hkrati.",
					],
					[
						"Sistem enega agenta v praksi ne obstaja; graditi moramo družbo agentov.",
						true,
						"Točno — osnovna premisa večagentnih sistemov je, da realni scenariji zahtevajo interakcijo več agentov.",
					],
					[
						"Organizacijska razmerja med agenti so vedno enakopravna.",
						false,
						"En agent je lahko šef drugemu, torej hierarhična razmerja obstajajo.",
					],
				],
			},
			{
				q: "Kaj predstavlja ocenitvena funkcija u_i v formalnem opisu večagentnih sistemov?",
				pages: [116],
				opts: [
					[
						"Funkcija, ki šteje število agentov v sistemu.",
						false,
						"Ocenitvena funkcija ne šteje agentov, temveč vrednoti izide.",
					],
					[
						"Preslikava iz množice izidov v realna števila, ki pove, kako dober je izid za agenta i.",
						true,
						"Točno: u_i : Ω → ℝ podaja numerično vrednost posameznega izida za agenta i.",
					],
					[
						"Funkcija, ki določa, katero dejanje bo agent izbral.",
						false,
						"To bi bila strategija ali politika, ne ocenitvena funkcija.",
					],
					[
						"Protokol za izmenjavo sporočil med agenti.",
						false,
						"Protokol za sporočila je komunikacijski mehanizem, ne ocenitvena funkcija.",
					],
				],
			},
			{
				q: "Če velja u_i(ω) ≥ u_i(ω'), kako to zapišemo?",
				pages: [116],
				opts: [
					[
						"ω ≻_i ω'",
						false,
						"Stroga prednost (≻) pomeni strogo večjo vrednost, ne le večjo ali enako.",
					],
					[
						"ω ⪰_i ω'",
						true,
						"Simbol ⪰ označuje šibko prednost — agent i ima ω vsaj tako rad kot ω'.",
					],
					[
						"ω ≺_i ω'",
						false,
						"≺ bi pomenilo, da je ω slabši od ω', kar je nasprotno.",
					],
					[
						"ω = ω'",
						false,
						"Enakost bi pomenila enako ocenitveno vrednost, ne splošno relacijo ≥.",
					],
				],
			},
			{
				q: "Kaj je množica Ω v formalnem opisu večagentnih sistemov?",
				pages: [116],
				opts: [
					[
						"Množica vseh agentov v sistemu.",
						false,
						"Agenti so označeni z Ag, ne Ω.",
					],
					[
						"Množica možnih dejanj agentov.",
						false,
						"Dejanja so v množici Ac, ne Ω.",
					],
					[
						"Množica izidov ali stanj, ki si jih agenta želita.",
						true,
						"Ω = {ω1, ω2, ...} predstavlja izide oz. stanja sveta, ki so predmet interesa agentov.",
					],
					[
						"Množica komunikacijskih protokolov.",
						false,
						"Protokoli niso del formalne definicije Ω.",
					],
				],
			},
			{
				q: "Funkcija τ : Ac_i × Ac_j → Ω opisuje:",
				pages: [118],
				opts: [
					[
						"Verjetnostno porazdelitev nagrad.",
						false,
						"τ je deterministična preslikava, ne verjetnostna porazdelitev.",
					],
					[
						"Preslikavo para dejanj obeh agentov v izid okolja.",
						true,
						"Točno — τ vrne izid sveta glede na kombinacijo dejanj agenta i in agenta j.",
					],
					[
						"Ocenitveno funkcijo agenta j.",
						false,
						"Ocenitvena funkcija je u_j, ne τ.",
					],
					[
						"Strategijo agenta i.",
						false,
						"Strategija opisuje, katero dejanje agent izbere, ne preslikave dejanj v izide.",
					],
				],
			},
			{
				q: "V primeru, ko τ(D,D)=ω1, τ(D,C)=ω1, τ(C,D)=ω1, τ(C,C)=ω1, kakšno okolje imamo?",
				pages: [118],
				opts: [
					[
						"Okolje, ki ga spreminja le agent j.",
						false,
						"V takšnem okolju nobeden od agentov ne vpliva na izid.",
					],
					[
						"Okolje, kjer vsaka kombinacija dejanj vrne enak izid.",
						true,
						"Točno — vse štiri kombinacije vrnejo ω1, torej dejanja ne vplivajo na izid.",
					],
					[
						"Konkurenčno okolje z ničelno vsoto.",
						false,
						"Ničelna vsota zahteva antagonistično razmerje, ne enolični izid za vse akcije.",
					],
					[
						"Okolje, kjer vsaka kombinacija vrne drugačen izid.",
						false,
						"To bi bil primer τ(D,D)=ω1, τ(D,C)=ω2 itd.",
					],
				],
			},
			{
				q: "Kaj pomeni ω ≻_i ω' ?",
				pages: [116],
				opts: [
					[
						"Agent i je brezbrižen med ω in ω'.",
						false,
						"Brezbrižnost bi pomenila enako ocenitveno vrednost.",
					],
					[
						"Agent i strogo preferira izid ω pred izhodom ω'.",
						true,
						"Stroga prednost (≻) pomeni u_i(ω) > u_i(ω').",
					],
					[
						"ω in ω' sta enakovredna za agenta i.",
						false,
						"Enakovrednost bi zapisali z u_i(ω) = u_i(ω').",
					],
					[
						"Agent i preferira ω', ne ω.",
						false,
						"Simbol kaže preferenco za ω, ne ω'.",
					],
				],
			},
			{
				q: "Katera od navedenih situacij prikazuje vpliv agentov?",
				pages: [115],
				opts: [
					[
						"Agent A izračuna optimalno pot.",
						false,
						"Izračun poti brez interakcije z drugim agentom ni primer medsebojnega vpliva.",
					],
					[
						"Agent A prebere bazo znanja.",
						false,
						"Branje baze znanja je notranje delovanje, ne interakcija.",
					],
					[
						"Dva robota ne moreta skozi vrata hkrati.",
						true,
						"To je klasičen primer medsebojnega vpliva — dejanje enega omeji možnosti drugega.",
					],
					[
						"Agent A posodobi svoja prepričanja.",
						false,
						"Posodobitev prepričanj je notranje stanje agenta, ne interakcija.",
					],
				],
			},
			{
				q: "Kakšen je namen ocenitvene funkcije pri primerjavi izidov?",
				pages: [116],
				opts: [
					[
						"Poda binarno vrednost (dobro/slabo) za vsak izid.",
						false,
						"Ocenitvena funkcija vrne realno število, ne le binarno vrednost.",
					],
					[
						"Določi zaporedje dejanj za dosego cilja.",
						false,
						"To je naloga načrtovalca, ne ocenitvene funkcije.",
					],
					[
						"Podaja numerično vrednost kakovosti izida za posameznega agenta.",
						true,
						"Točno — u_i : Ω → ℝ omogoča primerjanje izidov po numerični vrednosti.",
					],
					[
						"Meri hitrost izvedbe dejanj agenta.",
						false,
						"Hitrost izvedbe ni del ocenitvene funkcije v tej formalizaciji.",
					],
				],
			},
			{
				q: "Kako je v formalnem opisu označena množica dejanj agenta?",
				pages: [118],
				opts: [
					["Ω", false, "Ω označuje množico izidov."],
					["Ag", false, "Ag označuje množico agentov."],
					[
						"Ac",
						true,
						"Ac = {C − sodelovati, D − nasprotovati} je standardna oznaka za množico dejanj.",
					],
					["τ", false, "τ je funkcija okolja, ne množica dejanj."],
				],
			},
			{
				q: "Katera trditev drži pri primeru agenta i z 4 milijoni in agenta j z 1 evrom, kjer vsak zasluži milijon?",
				pages: [117],
				opts: [
					[
						"Oba agenta imata enako korist, ker je zaslužek enak.",
						false,
						"Enaka absolutna vsota ne pomeni enake koristnosti — to je ključna poanta primera.",
					],
					[
						"Dodatni milijon evrov prinese večjo marginalno korist tistemu, ki ima manj.",
						true,
						"Zaradi padajoče mejne koristnosti (kar je ekonomski princip) je milijon evrov več vreden za j.",
					],
					[
						"Agent j ima večjo korist, ker ima manj denarja in torej potrebuje več.",
						false,
						"Formalizacija temelji na funkciji koristnosti, ne na 'potrebi'.",
					],
					[
						"Ocenitvena funkcija v tem primeru ne more ločiti med agentoma.",
						false,
						"Prav to pokazuje primer — ocenitvena funkcija mora upoštevati kontekst.",
					],
				],
			},
			{
				q: "V večagentnem sistemu, kaj razumemo pod 'organizacijskimi razmerji med agenti'?",
				pages: [115],
				opts: [
					[
						"Algoritmično zapletenost agentnih protokolov.",
						false,
						"Organizacijska razmerja se nanašajo na socialno strukturo, ne algoritmično zapletenost.",
					],
					[
						"Hierarhična in socialna razmerja, npr. da je en agent šef drugemu.",
						true,
						"Točno — en agent je lahko nadrejen drugemu, kar vpliva na koordinacijo.",
					],
					[
						"Način shranjevanja znanja posameznih agentov.",
						false,
						"To se nanaša na interno reprezentacijo, ne organizacijska razmerja.",
					],
					[
						"Komunikacijski protokoli med agenti.",
						false,
						"Protokoli so del komunikacije, ne organizacijska razmerja.",
					],
				],
			},
			{
				q: "Katera kombinacija dejanj v funkciji τ pomeni, da okolje vzdržuje agent j?",
				pages: [118, 119],
				opts: [
					[
						"τ(D,D)=ω1, τ(D,C)=ω2, τ(C,D)=ω3, τ(C,C)=ω4",
						false,
						"Tukaj vsaka kombinacija vrne drugačen izid — okolje ni nujno odvisno od j.",
					],
					[
						"τ(D,D)=ω1, τ(D,C)=ω1, τ(C,D)=ω1, τ(C,C)=ω1",
						false,
						"Tukaj okolje ni odvisno od ničesar — vsi izidi so enaki.",
					],
					[
						"τ(D,D)=ω1, τ(D,C)=ω2, τ(C,D)=ω1, τ(C,C)=ω2",
						true,
						"Točno — izid se razlikuje le glede na dejanje agenta j (C ali D), ne agenta i.",
					],
					[
						"τ(D,D)=ω2, τ(D,C)=ω2, τ(C,D)=ω1, τ(C,C)=ω1",
						false,
						"V tem primeru je izid odvisen le od dejanja agenta i.",
					],
				],
			},
			{
				q: "Katera izjava o večagentnih sistemih je napačna?",
				pages: [115, 116],
				opts: [
					[
						"Agenti imajo vsak svojo predstavitev stanja sveta.",
						false,
						"Ta trditev drži.",
					],
					[
						"Agenti imajo vsak svoje cilje/želje.",
						false,
						"Ta trditev drži.",
					],
					[
						"Vsak agent vedno pozna cilje in ocenitvene funkcije vseh ostalih agentov.",
						true,
						"Napačno — v splošnem agenti nimajo popolnega vpogleda v cilje in funkcije koristnosti ostalih.",
					],
					[
						"Interakcije med agenti je treba formalno opisati.",
						false,
						"Ta trditev drži.",
					],
				],
			},
			{
				q: "Katero dejanje v primeru z akcijama C in D označuje 'nasprotovanje'?",
				pages: [118],
				opts: [
					["C", false, "C pomeni sodelovanje (cooperate)."],
					[
						"D",
						true,
						"D pomeni nasprotovanje oz. defection v angleščini.",
					],
					[
						"Oba, odvisno od konteksta.",
						false,
						"Oznaka je fiksna: D = nasprotovati, C = sodelovati.",
					],
					[
						"Nobeno — 'nasprotovanje' ni formalno definirana akcija.",
						false,
						"D je eksplicitno definiran kot 'nasprotovati'.",
					],
				],
			},
			{
				q: "Zakaj je razumevanje tipov interakcij med agenti ključno?",
				pages: [115],
				opts: [
					[
						"Ker zmanjša računsko zahtevnost agentov.",
						false,
						"Tip interakcij ne zmanjša neposredno računske zahtevnosti.",
					],
					[
						"Ker omogoča pravilno modeliranje in predvidevanje vedenja sistema.",
						true,
						"Razumevanje interakcij je osnova za načrtovanje protokolov in strategij.",
					],
					[
						"Ker poenostavi shranjevanje baze znanja.",
						false,
						"Razumevanje interakcij ni neposredno povezano s shranjevanjem znanja.",
					],
					[
						"Ker odpravlja potrebo po komunikaciji med agenti.",
						false,
						"Razumevanje interakcij ne odpravlja komunikacije.",
					],
				],
			},
			{
				q: "Katera oznaka v formalni definiciji predstavlja množico agentov?",
				pages: [116],
				opts: [
					["Ω", false, "Ω je množica izidov."],
					["τ", false, "τ je funkcija okolja."],
					[
						"Ag",
						true,
						"Ag ∈ {i, j} je standardna oznaka za množico agentov.",
					],
					["Ac", false, "Ac je množica dejanj."],
				],
			},
			{
				q: "Kaj velja za primer, ko u_i(C,C) ≥ u_i(C,D) ≥ u_i(D,C) ≥ u_i(D,D)?",
				pages: [119],
				opts: [
					[
						"Agent i stremi k nasprotovanju.",
						false,
						"Relacija kaže, da je C,C najboljše za i, torej agent stremi k sodelovanju.",
					],
					[
						"Agent i stremi k sodelovanju.",
						true,
						"Hierarhija vrednosti kaže, da agent i preferira sodelovanje (C) ne glede na dejanje j.",
					],
					[
						"Dejanje agenta j ne vpliva na strategijo agenta i.",
						false,
						"Dejanje j vpliva na izid, a agent i vseeno preferira C.",
					],
					[
						"Agenta sta v strogo konkurenčnem razmerju.",
						false,
						"Strogo konkurenčno razmerje bi pomenilo nasprotne preference.",
					],
				],
			},
			{
				q: "V primeru u_i(C,C)=4 in u_i(D,D)=1, kateri izid je boljši za agenta i?",
				pages: [119, 120],
				opts: [
					[
						"(D,D), ker je bolj stabilen.",
						false,
						"Stabilnost ni merilo; boljši je izid z večjo ocenitveno vrednostjo.",
					],
					[
						"(C,C), ker ima višjo ocenitveno vrednost.",
						true,
						"u_i(C,C)=4 > u_i(D,D)=1, torej je (C,C) boljši za agenta i.",
					],
					[
						"Oba sta enakovredna.",
						false,
						"4 ≠ 1, torej nista enakovredna.",
					],
					[
						"Odvisno od strategije agenta j.",
						false,
						"Ocenitvena vrednost je fiksna za par dejanj.",
					],
				],
			},
			{
				q: "Katera trditev pravilno opisuje formalni okvir za dva agenta?",
				pages: [116, 118],
				opts: [
					[
						"Agenta si delita enako ocenitveno funkcijo.",
						false,
						"Vsak agent ima svojo ocenitveno funkcijo u_i in u_j.",
					],
					[
						"Izid sveta je odvisen le od dejanj agenta i.",
						false,
						"Izid je odvisen od kombinacije dejanj obeh agentov: τ(Ac_i × Ac_j).",
					],
					[
						"Agenta imata svoji ocenitveni funkciji in izid je funkcija kombinacije njunih dejanj.",
						true,
						"Točno — u_i, u_j sta ločeni, τ pa slika par dejanj v izid.",
					],
					[
						"Agent i vedno pozna vrednost u_j.",
						false,
						"V splošnem agenti ne poznajo ocenitvenih funkcij ostalih.",
					],
				],
			},
		],
	},
	{
		id: "teorija-iger",
		name: "Teorija iger & strategije",
		color: "#43e97b",
		questions: [
			{
				q: "Kdaj strategija s1 strogo dominira strategijo s2 za agenta i?",
				pages: [121],
				opts: [
					[
						"Ko s1 daje enako ali večjo korist kot s2 v vseh izidih.",
						false,
						"To bi bila šibka dominanca, ne stroga.",
					],
					[
						"Ko s1 daje strogo večjo korist od s2 v vseh možnih izidih.",
						true,
						"Stroga dominanca pomeni, da je s1 vedno boljša, ne le enako dobra.",
					],
					[
						"Ko s1 daje večjo korist le v nekaterih izidih.",
						false,
						"To ni dovolj za dominanco — pogoj mora veljati za vse izide.",
					],
					[
						"Ko s1 vodi do Nashovega ravnovesja.",
						false,
						"Nashovo ravnovesje in dominanca sta ločena koncepta.",
					],
				],
			},
			{
				q: "Kaj je Nashovo ravnovesje?",
				pages: [123],
				opts: [
					[
						"Strategija, ki maksimizira skupno korist vseh agentov.",
						false,
						"To bi bila Pareto optimalna rešitev, ne Nashovo ravnovesje.",
					],
					[
						"Par strategij, od katerih noben agent nima vzpodbude za enostransko spremembo.",
						true,
						"Točno — Nashovo ravnovesje je vzajemno najboljši odziv: nobeden ne more izboljšati izida s spremembo le svojega dejanja.",
					],
					[
						"Strategija, ki vedno zagotovi enake nagrade za oba agenta.",
						false,
						"Nashovo ravnovesje ne zahteva enakopravne porazdelitve nagrad.",
					],
					[
						"Edina možna rešitev vsakega scenarija interakcije.",
						false,
						"Nekateri scenariji nimajo Nashovega ravnovesja, nekateri jih imajo več.",
					],
				],
			},
			{
				q: "Kaj je strogo konkurenčni scenarij?",
				pages: [126],
				opts: [
					[
						"Scenarij, kjer oba agenta maksimizirata skupno korist.",
						false,
						"To bi bila kooperativna igra.",
					],
					[
						"Scenarij, kjer en agent izboljša izid le na račun izida drugega.",
						true,
						"Formalno: ω ≻_i ω' natanko takrat, ko ω' ≻_j ω.",
					],
					[
						"Scenarij z ničelno vsoto nagrad.",
						false,
						"Ničelna vsota je posebni primer strogo konkurenčnega scenarija, ne sinonim.",
					],
					[
						"Scenarij, kjer imata oba agenta enake ocenitvene funkcije.",
						false,
						"Enaki ocenitveni funkciji bi pomenili kooperativno, ne konkurenčno razmerje.",
					],
				],
			},
			{
				q: "Katera igra predstavlja primer interakcije z ničelno vsoto?",
				pages: [127],
				opts: [
					[
						"Zapornikova dilema",
						false,
						"Zapornikova dilema ni igra z ničelno vsoto — skupna korist se razlikuje po izidih.",
					],
					[
						"Lov na jelene",
						false,
						"Lov na jelene ima dve Nashovi ravnovesji in ni igra z ničelno vsoto.",
					],
					[
						"Šah",
						true,
						"Šah je klasični primer: kar zmaga eden, izgubi drugi (1, -1 ali 0).",
					],
					[
						"Igra piščanca",
						false,
						"Igra piščanca ima asimetrična Nashova ravnovesja in ni čista ničelna vsota.",
					],
				],
			},
			{
				q: "V zapornikovi dilemi, katera je dominantna strategija za vsakega zapornika?",
				pages: [129],
				opts: [
					[
						"Sodelovati (C)",
						false,
						"Čeprav bi skupni izid pri (C,C) bil boljši, posamičen racionalnost vodi k D.",
					],
					[
						"Nasprotovati (D)",
						true,
						"D je dominantna strategija: ne glede na dejanje nasprotnika je D vedno boljša ali enaka.",
					],
					[
						"Naključna mešanica C in D",
						false,
						"Mešana strategija ni potrebna, ker obstaja čista dominantna strategija.",
					],
					[
						"Odvisno od tega, kaj naredi drugi zapornik.",
						false,
						"Prav to je posebnost dileme — D dominira ne glede na nasprotnikovo dejanje.",
					],
				],
			},
			{
				q: "Kakšen je edini par strategij Nashovega ravnovesja v zapornikovi dilemi?",
				pages: [129, 130],
				opts: [
					[
						"(C, C)",
						false,
						"(C,C) je Pareto optimalen, ampak ni Nashovo ravnovesje — vsak ima vzpodbudo, da enostransko preide na D.",
					],
					[
						"(D, C)",
						false,
						"(D,C) ni ravnovesje — agent C bi imel vzpodbudo preiti na D.",
					],
					[
						"(D, D)",
						true,
						"Edino Nashovo ravnovesje je (D,D), čeprav ni Pareto optimalno.",
					],
					[
						"(C, D)",
						false,
						"(C,D) ni ravnovesje — agent C bi imel vzpodbudo preiti na D.",
					],
				],
			},
			{
				q: "Katera trditev pravilno opisuje iterativno zapornikovo dilemo?",
				pages: [130],
				opts: [
					[
						"Dominantna strategija ostane D za vsako število ponovitev.",
						false,
						"V iterativni igri je strategija manj jasna, ker lahko nasprotnik kaznuje nesodelovaje.",
					],
					[
						"Z iteracijo postane jasno, da je TIT-FOR-TAT vedno optimalna strategija.",
						false,
						"TIT-FOR-TAT je dobra strategija, a ni garantirano optimalna v vseh kontekstih.",
					],
					[
						"Z večim ponovitvami nastane možnost, da nesodelovaje kaznuje nasprotnik, kar ustvari vzpodbudo za sodelovanje.",
						true,
						"Točno — zagrožena kaznovanje z nesodelovanjem v prihodnosti daje vzpodbudo za trenutno sodelovanje.",
					],
					[
						"Iterativna igra ima vedno enako Nashovo ravnovesje kot enkratna.",
						false,
						"Iterativna igra ima drugačno dinamiko in pogosto drugačna ravnovesja.",
					],
				],
			},
			{
				q: "Katera strategija v Axelrodovem turnirju v prvi iteraciji vedno nasprotuje?",
				pages: [131],
				opts: [
					[
						"TIT-FOR-TAT",
						false,
						"TIT-FOR-TAT v prvi iteraciji sodeluje.",
					],
					[
						"TESTER",
						false,
						"TESTER v prvi iteraciji preizkuša nasprotnika z nesodelovanjem — ampak to je ena od strategij.",
					],
					[
						"ALL-D",
						true,
						"ALL-D vedno izbere strategijo nesodelovaje (D) v vsaki iteraciji, vključno s prvo.",
					],
					[
						"JOSS",
						false,
						"JOSS je variacija TIT-FOR-TAT z 10 % verjetnostjo nesodelovaje.",
					],
				],
			},
			{
				q: "Katera je ključna razlika med igro piščanca in zapornikovo dilemo?",
				pages: [133],
				opts: [
					[
						"Igra piščanca nima Nashovega ravnovesja.",
						false,
						"Igra piščanca ima dve Nashovi ravnovesji (asimetrični).",
					],
					[
						"V igri piščanca ni dominantnih strategij — gre za koordinacijo in tveganje.",
						true,
						"Točno — igra piščanca je problem koordinacije brez čiste dominantne strategije.",
					],
					[
						"V igri piščanca vedno zmagata oba.",
						false,
						"Eden 'zmaga' z vožnjo naprej, drugi se mora umakniti.",
					],
					[
						"Igra piščanca je vedno igra z ničelno vsoto.",
						false,
						"Izplačila so asimetrična, niso nujno z ničelno vsoto.",
					],
				],
			},
			{
				q: "Kaj je 'prekletstvo zmagovalca' v teoriji dražb?",
				pages: [143],
				opts: [
					[
						"Zmagovalec plača preveč in ne dobi nič v zameno.",
						false,
						"Zmagovalec dobi blago, a tveganje je, da ga preceni.",
					],
					[
						"Zmagovalec je pridobil blago, a morda po ceni, ki presega njegovo dejansko vrednost.",
						true,
						"Točno — ker je zmagovalec tisti z najvišjo oceno, verjetno precenjuje vrednost.",
					],
					[
						"Zmagovalec je vedno nezadovoljen z nakupom.",
						false,
						"Nezadovoljstvo ni nujno, a obstaja tveganje precenitve.",
					],
					[
						"Zmagovalec mora plačati kazen za zmago.",
						false,
						"Ni formalne kazni, le tveganje precenitve.",
					],
				],
			},
			{
				q: "Kaj je šibko dominantna strategija?",
				pages: [122],
				opts: [
					[
						"Strategija, ki daje vedno strogo večjo korist od alternative.",
						false,
						"To bi bila strogo dominantna strategija.",
					],
					[
						"Strategija, ki daje vsaj enako dobro korist v vseh izidih kot alternativa.",
						true,
						"Šibka dominanca: s1 ⪰ s2 pomeni, da je s1 vedno vsaj enako dobra kot s2.",
					],
					[
						"Strategija, ki je optimalna le v nekaterih scenarijih.",
						false,
						"Šibka dominanca zahteva pogoj za vse scenarije.",
					],
					[
						"Strategija, ki jo vsi agenti zavrnejo.",
						false,
						"Ravno nasprotno — šibko dominirane strategije se zavrnejo v iterativni eliminaciji.",
					],
				],
			},
			{
				q: "V lovu na jelene, kateri izid ima vrednost (10,10)?",
				pages: [132],
				opts: [
					[
						"Oba nasprotujeta (D,D)",
						true,
						"V primeru lova na jelene je (D,D) = (10,10) — obojestransko nesodelovanje, ki je boljše kot asimetrija.",
					],
					[
						"Oba sodelujeta (C,C)",
						false,
						"(C,C) ima vrednost (5,5) — manj kot (D,D) v tem primeru.",
					],
					[
						"i sodeluje, j nasprotuje (C,D)",
						false,
						"(C,D) ima vrednost (1,8).",
					],
					[
						"i nasprotuje, j sodeluje (D,C)",
						false,
						"(D,C) ima vrednost (8,1).",
					],
				],
			},
			{
				q: "Kateri par strategij v igri piščanca je Nashovo ravnovesje?",
				pages: [133],
				opts: [
					[
						"(D,D) — oba vztrajata",
						false,
						"(D,D) = (0,0) — oba se odpeljeta v smrt; nihče bi ne izbral tega, ker bi D ob nasprotnikovem D rad zamenjal na C.",
					],
					[
						"(C,C) — oba se umakneta",
						false,
						"(C,C) = (2,2) — ni ravnovesje, ker bi eden rad vztrajal, ko se drugi umakne.",
					],
					[
						"(D,C) in (C,D) — asimetrični ravnovesji",
						true,
						"Točno — če eden vztraja (D), se drugemu splača umakniti (C), in obratno.",
					],
					[
						"Igra piščanca nima Nashovega ravnovesja.",
						false,
						"Igra piščanca ima dve asimetrični Nashovi ravnovesji.",
					],
				],
			},
			{
				q: "Katera trditev o Nashovem ravnovesju je napačna?",
				pages: [123],
				opts: [
					[
						"Nashovo ravnovesje zaklene agente v par strategij.",
						false,
						"Ta trditev drži.",
					],
					[
						"Vsak scenarij interakcije ima natanko eno Nashovo ravnovesje.",
						true,
						"Napačno — nekateri scenariji nimajo ravnovesja, nekateri jih imajo več.",
					],
					[
						"Noben agent nima spodbude za enostransko odstopanje.",
						false,
						"Ta trditev drži — to je definicija ravnovesja.",
					],
					[
						"Nashovo ravnovesje je pomemben analitični koncept.",
						false,
						"Ta trditev drži.",
					],
				],
			},
			{
				q: "Strategija TIT-FOR-TAT v iterativni zapornikovi dilemi:",
				pages: [131],
				opts: [
					[
						"Vedno nasprotuje, ne glede na preteklo igro.",
						false,
						"To je strategija ALL-D.",
					],
					[
						"V prvi iteraciji sodeluje, nato posnema prejšnje dejanje nasprotnika.",
						true,
						"Točno — TIT-FOR-TAT: začni s C, nato kopiraj prejšnjo potezo nasprotnika.",
					],
					[
						"Naključno izbira med C in D.",
						false,
						"To je strategija RANDOM.",
					],
					[
						"V prvi iteraciji preizkuša nasprotnika, nato igra TIT-FOR-TAT.",
						false,
						"To je strategija TESTER.",
					],
				],
			},
			{
				q: "Katera lastnost ničelne vsote drži?",
				pages: [127],
				opts: [
					[
						"u_i(ω) + u_j(ω) = 0 za vse ω.",
						true,
						"Definicija igre z ničelno vsoto: vsota koristnosti obeh agentov je nič za vsak izid.",
					],
					[
						"u_i(ω) = u_j(ω) za vse ω.",
						false,
						"To bi pomenilo enake koristnosti, ne ničelno vsoto.",
					],
					[
						"u_i(ω) ≥ 0 in u_j(ω) ≤ 0 za vse ω.",
						false,
						"To bi bila posebna oblika ničelne vsote, a ne splošna definicija.",
					],
					[
						"Vsaka ničelna vsota dopušča kooperativno vedenje.",
						false,
						"Ničelne vsote so 'najbolj zlobne' in ne dopuščajo kooperativnega vedenja.",
					],
				],
			},
			{
				q: "V kateri situaciji se iterativna zapornikova dilema bistveno razlikuje od enkratne?",
				pages: [130],
				opts: [
					[
						"Ko imata agenta vedno enake ocenitvene funkcije.",
						false,
						"Enake ocenitvene funkcije so poseben primer, ne ključna razlika.",
					],
					[
						"Ko se igra igra neskončno ali veliko število iteracij in nesodelovaje se kaznuje.",
						true,
						"V iterativni igri je kaznovanje z D v prihodnosti spodbuda za sedanje C, kar menja optimalne strategije.",
					],
					[
						"Ko je komunikacija med agentoma dovoljena.",
						false,
						"Komunikacija ni ključna spremenljivka v standardnem opisu iterativne dileme.",
					],
					[
						"Ko je število dejanj večje od dveh.",
						false,
						"Iterativna dilema ohrani dve akciji, le časovna razsežnost se dodaja.",
					],
				],
			},
			{
				q: "Zakaj je zapornikova dilema paradoksalna?",
				pages: [128, 129],
				opts: [
					[
						"Ker nimata zapornika nobene dominantne strategije.",
						false,
						"Prav nasprotno — oba imata dominantno strategijo D.",
					],
					[
						"Ker racionalno individualno vedenje (D,D) vodi do slabšega skupnega izida od (C,C).",
						true,
						"To je srž paradoksa: individualna racionalnost povzroči kolektivno iracionalen izid.",
					],
					[
						"Ker ima igra več Nashovih ravnovesij.",
						false,
						"Zapornikova dilema ima le eno Nashovo ravnovesje: (D,D).",
					],
					[
						"Ker agenta ne poznata svojih ocenitvenih funkcij.",
						false,
						"Ocenitvene funkcije so znane — paradoks je kljub temu prisoten.",
					],
				],
			},
			{
				q: "Kaj je matrika izplačil?",
				pages: [120],
				opts: [
					[
						"Tabel, ki prikaže najoptimalnejše dejanje za vsakega agenta.",
						false,
						"Matrika izplačil prikaže vse kombinacije dejanj in njim ustrezna izplačila.",
					],
					[
						"Preglednica, ki prikazuje koristnosti za vse kombinacije dejanj obeh agentov.",
						true,
						"Točno — vrstice/stolpci so dejanja agentov, celice so pari koristnosti (u_i, u_j).",
					],
					[
						"Verjetnostna porazdelitev izidov igre.",
						false,
						"Matrika izplačil ni verjetnostna — prikazuje deterministične vrednosti.",
					],
					[
						"Seznam strategij, rangiranih po dominanci.",
						false,
						"Dominanca se razbere iz matrike, a matrika sama prikaže izplačila.",
					],
				],
			},
			{
				q: "Iterativna eliminacija dominiranih strategij:",
				pages: [121, 122],
				opts: [
					[
						"Odstrani samo strogo dominirane strategije in vedno najde eno rešitev.",
						false,
						"Šibko dominirane se sicer lahko odstranjujejo, a to ni garancija za eno rešitev.",
					],
					[
						"Iterativno odstranjuje dominirane strategije; pri šibkih dominancah se lahko zavržejo sicer koristne strategije.",
						true,
						"Točno — pri šibki eliminaciji tvegamo, da zavržemo strategije, ki bi bile optimalne v nekaterih kontekstih.",
					],
					[
						"Vedno konvergira k Nashovemu ravnovesju.",
						false,
						"Ni garantirano, da eliminacija konvergira k NE.",
					],
					[
						"Se ne more uporabiti, če ima igra samo dve strategiji.",
						false,
						"Eliminacija deluje ne glede na število strategij.",
					],
				],
			},
		],
	},
	{
		id: "doseganje-dogovorov",
		name: "Doseganje dogovorov & dražbe",
		color: "#f9ca24",
		questions: [
			{
				q: "Katero lastnost protokola za pogajanje imenujemo 'Pareto učinkovitost'?",
				pages: [136],
				opts: [
					[
						"Protokol zagotavlja, da bo dogovor vedno dosežen.",
						false,
						"To je 'zagotovljen uspeh', ne Pareto učinkovitost.",
					],
					[
						"Ni nobenega drugega izida, ki bi vsaj enemu agentu izboljšal položaj, ne da bi drugemu poslabšal.",
						true,
						"Točno — Pareto učinkovitost pomeni, da ni boljšega izida za nekoga brez škode za drugega.",
					],
					[
						"Vsak agent sledi protokolu, ker je to v njegovem lastnem interesu.",
						false,
						"To je 'individualna racionalnost'.",
					],
					[
						"Vsota koristnosti je maksimizirana.",
						false,
						"To je 'maksimiziranje socialne blaginje'.",
					],
				],
			},
			{
				q: "Kaj je angleška vrsta dražbe?",
				pages: [139],
				opts: [
					[
						"Zaprta dražba z eno ponudbo.",
						false,
						"Zaprta dražba z eno ponudbo je dražba prve ali druge cene.",
					],
					[
						"Odprta naraščajoča dražba, kjer blago dobi agent z najvišjo ponudbo.",
						true,
						"Točno — angleška dražba je odprta, naraščajoča, s prvo ceno.",
					],
					[
						"Padajoča dražba, ki začne visoko.",
						false,
						"To je nizozemska dražba.",
					],
					[
						"Zaprta dražba, kjer zmagovalec plača drugo najvišjo ceno.",
						false,
						"To je Vickrey-jeva dražba.",
					],
				],
			},
			{
				q: "Zakaj je Vickrey-jeva dražba spodbuda za pošteno licitiranje?",
				pages: [142],
				opts: [
					[
						"Ker dražitelj ne ve, koliko so ponudniki ponudili.",
						false,
						"To je lastnost zaprte dražbe, ne razlog za pošteno licitiranje.",
					],
					[
						"Ker ponudba manj od dejanske vrednosti zniža možnosti zmage, ne pa cene, ki jo plačaš.",
						true,
						"Točno — zmagovalec plača drugo ceno; ne pridobi z licitiranjem manj ali več od dejanske vrednosti.",
					],
					[
						"Ker je ponudba javna in vsi vidijo ceno.",
						false,
						"Vickrey-jeva dražba je zaprta, ponudbe niso javne.",
					],
					[
						"Ker zmagovalec vedno plača polno ponudbo.",
						false,
						"Zmagovalec plača drugo najvišjo ponudbo, ne svojo.",
					],
				],
			},
			{
				q: "V Vickrey-jevi dražbi zmagovalec:",
				pages: [142],
				opts: [
					[
						"Plača znesek lastne ponudbe.",
						false,
						"Zmagovalec plača znesek druge najvišje ponudbe, ne lastne.",
					],
					[
						"Plača znesek druge najvišje ponudbe.",
						true,
						"Točno — to je definicija Vickrey-jeve (dražbe druge cene).",
					],
					[
						"Ne plača nič, ker je dražba zaprta.",
						false,
						"Zaprta dražba ne pomeni brezplačne pridobitve.",
					],
					[
						"Plača povprečje vseh ponudb.",
						false,
						"Povprečje ni mehanizem nobene standardne vrste dražbe.",
					],
				],
			},
			{
				q: "Kaj je 'individualna racionalnost' kot lastnost protokola?",
				pages: [136],
				opts: [
					[
						"Vsak agent vedno doseže najboljši možni izid.",
						false,
						"To je preoptimistično — individualna racionalnost pomeni le, da je sledenje protokolu v interesu agenta.",
					],
					[
						"Sledenje protokolu je v interesu udeležencev pogajanj.",
						true,
						"Točno — agent nima vzpodbude za odmikanje od protokola, ker bi to škodovalo njemu.",
					],
					[
						"Vsak agent pozna strategije ostalih.",
						false,
						"Poznanje strategij je ločen pojem.",
					],
					[
						"Dogovor je vedno Pareto optimalen.",
						false,
						"To je lastnost Pareto učinkovitosti.",
					],
				],
			},
			{
				q: "Kaj je nizozemska vrsta dražbe?",
				pages: [140],
				opts: [
					[
						"Naraščajoča dražba z zaprtimi ponudbami.",
						false,
						"Naraščajoča dražba z odprtimi ponudbami je angleška dražba.",
					],
					[
						"Odprta padajoča dražba — cena se znižuje, dokler nekdo ne ponudi.",
						true,
						"Točno — nizozemska dražba začne visoko in pada, dokler ponudnik ne sprejme.",
					],
					[
						"Zaprta dražba z dvema krogoma licitiranja.",
						false,
						"Dva kroga niso del definicije nizozemske dražbe.",
					],
					[
						"Dražba, kjer zmagovalec plača drugo ceno.",
						false,
						"To je Vickrey-jeva dražba.",
					],
				],
			},
			{
				q: "Katera vrsta dražbe nima dominantne strategije za ponudnike?",
				pages: [140, 141],
				opts: [
					[
						"Angleška vrsta dražbe",
						false,
						"Angleška dražba ima dominantno strategijo: postopoma višaj do maximalnega vrednotenja.",
					],
					[
						"Vickrey-jeva dražba",
						false,
						"Vickrey-jeva dražba ima dominantno strategijo: ponudi dejansko vrednost.",
					],
					[
						"Nizozemska vrsta dražbe",
						true,
						"Nizozemska dražba nima dominantne strategije — ni jasno, kdaj ponuditi.",
					],
					[
						"Zaprta dražba prve cene",
						false,
						"Zaprta dražba prve cene prav tako nima splošne dominantne strategije.",
					],
				],
			},
			{
				q: "Kaj je razlika med javno in privatno vrednostjo v teoriji dražb?",
				pages: [138],
				opts: [
					[
						"Javna vrednost je znana vsem, privatna pa le dražitelju.",
						false,
						"Privatna vrednost je znana le ponudniku — dražitelj je tisti, ki prodaja.",
					],
					[
						"Javna vrednost je enaka za vse (npr. kovanec 1 EUR = 1 EUR), privatna je osebna (npr. kovanec Dončiča).",
						true,
						"Točno — javna vrednost je objektivna, privatna odraža osebne preference.",
					],
					[
						"Javna vrednost se veča, privatna pa pada.",
						false,
						"Ni nujne tendence — razlika je v naravi vrednosti, ne trendu.",
					],
					[
						"V javni dražbi so ponudbe javne, v privatni tajne.",
						false,
						"To opisuje odprto vs. zaprto dražbo, ne vrsto vrednosti.",
					],
				],
			},
			{
				q: "Katera trditev o pričakovanem zaslužku dražitelja drži?",
				pages: [143],
				opts: [
					[
						"Angleška dražba vedno prinese največ zaslužka.",
						false,
						"To ni splošna resnica.",
					],
					[
						"Pri ponudnikih, ki ne tvegajo, je pričakovani zaslužek enak v vseh štirih standardnih vrstah.",
						true,
						"Točno — pri risk-nevtralnih ponudnikih teorija enakovrednosti prihodkov dokazuje enakost.",
					],
					[
						"Vickrey-jeva dražba vedno prinese najmanj zaslužka.",
						false,
						"Ni nujno — odvisno od profila tveganja ponudnikov.",
					],
					[
						"Zaprta dražba prve cene vedno prinese več kot angleška.",
						false,
						"Pri risk-nevtralnih ponudnikih sta enakovredni.",
					],
				],
			},
			{
				q: "Kateri mehanizem licitiranja je 'dražba na en poskus'?",
				pages: [141],
				opts: [
					[
						"Naraščajoča angleška dražba",
						false,
						"Angleška dražba ima več krogov zvišanja ponudb.",
					],
					[
						"Padajoča nizozemska dražba",
						false,
						"Nizozemska dražba ima postopen padec cene.",
					],
					[
						"Zaprta dražba, kjer je le en krog ponudb.",
						true,
						"Dražba na en poskus = vsak ponudnik odda eno ponudbo, en krog.",
					],
					[
						"Vickrey-jeva dražba z javnimi ponudbami.",
						false,
						"Vickrey-jeva dražba je zaprta, ne javna z enim krogom le.",
					],
				],
			},
			{
				q: "Kaj je 'špekulacija' v kontekstu dražb?",
				pages: [145],
				opts: [
					[
						"Lažna ponudba za zvišanje cene.",
						false,
						"Lažna ponudba je oblika goljufije, ne špekulacija v formalni definiciji.",
					],
					[
						"Aktivnost za pridobivanje informacij o vrednosti blaga ali vrednotenjih ostalih ponudnikov.",
						true,
						"Točno — špekulacija je zbiranje informacij pred licitiranjem.",
					],
					[
						"Nakup blaga z namenom kasnejše nadprodaje.",
						false,
						"To je špekulacija v ekonomskem smislu, ne v kontekstu teorije dražb.",
					],
					[
						"Protokol za omejevanje ponudb.",
						false,
						"Protokol in špekulacija sta ločena koncepta.",
					],
				],
			},
			{
				q: "Katera lastnost protokola pomeni, da bo na koncu vedno dosežen dogovor?",
				pages: [136],
				opts: [
					[
						"Pareto učinkovitost",
						false,
						"Pareto učinkovitost se nanaša na kakovost dogovora, ne zagotovitev.",
					],
					[
						"Zagotovljen uspeh",
						true,
						"Točno — 'zagotovljen uspeh' pomeni, da protokol jamči dosego dogovora.",
					],
					[
						"Individualna racionalnost",
						false,
						"Individualna racionalnost se nanaša na vzpodbudo za sledenje, ne jamstvo.",
					],
					[
						"Stabilnost",
						false,
						"Stabilnost se nanaša na vzpodbudo za določeno vedenje (npr. NE).",
					],
				],
			},
			{
				q: "V čem je problem dogovarjanja med ponudniki pri dražbah?",
				pages: [144],
				opts: [
					[
						"Ponudniki ne smejo komunicirati.",
						false,
						"Komunikacija je formalno možna — problem je posledica, ne prepoved.",
					],
					[
						"Ponudniki se lahko dogovorijo za nizke ponudbe in si razdelijo dobiček.",
						true,
						"Točno — velika večina ponudnikov se lahko kartelizira in skupaj pridobi blago po nizki ceni.",
					],
					[
						"Dražba nima protokola za kaznovanje.",
						false,
						"Protokol obstaja, problem je v obhodu pravil.",
					],
					[
						"Ponudniki ne poznajo vrednosti blaga.",
						false,
						"Vrednost je znana ponudniku — problem je goljufija, ne nepoznavanje.",
					],
				],
			},
			{
				q: "Katera lastnost je NIMA Vickrey-jeva dražba?",
				pages: [144],
				opts: [
					[
						"Blago dobi agent z najvišjo ponudbo.",
						false,
						"To velja — zmagovalec je tisti z najvišjo ponudbo.",
					],
					[
						"Dominantna strategija je ponuditi dejansko vrednost.",
						false,
						"To velja — ponudba dejanske vrednosti je dominantna.",
					],
					[
						"Je imuna na dogovarjanje med ponudniki.",
						true,
						"To ne velja — nobena od štirih vrst dražb ni imuna na dogovarjanje.",
					],
					[
						"Je zaprta dražba z enim krogom.",
						false,
						"To velja — Vickrey je zaprta dražba.",
					],
				],
			},
			{
				q: "Kdaj se ponudniku splača špekulirati pred dražbo?",
				pages: [145],
				opts: [
					[
						"Vedno, ker špekulacija nič ne stane.",
						false,
						"Špekulacija ima stroške — čas in denar.",
					],
					[
						"Ko potencialni dobički od špekulacije presegajo njene stroške.",
						true,
						"Točno — kompromis med koristjo pridobljenih informacij in stroški špekulacije.",
					],
					[
						"Ko je dražba nizozemska, ker ima tam največ informacij.",
						false,
						"Ni specifičnega pravila za nizozemsko dražbo.",
					],
					[
						"Nikoli, ker dražbe so vedno poštene.",
						false,
						"Dražbe niso vedno poštene in špekulacija je racionalna pod pogoji.",
					],
				],
			},
			{
				q: "Kaj je dogovor pri pogajanju o nalogah ⟨T, Ag, c⟩?",
				pages: [150, 151],
				opts: [
					[
						"Optimalna razporeditev nalog za minimizacijo skupnih stroškov.",
						false,
						"Dogovor je formalno {D1, D2} — ni nujno optimalen.",
					],
					[
						"Dodelitev podmnožice nalog vsakemu agentu, ki zamenja začetno dodelitev.",
						true,
						"Točno — čisti dogovor {D1, D2} pomeni, da agent 1 prevzame D1 in agent 2 D2.",
					],
					[
						"Protokol za komunikacijo med agenti.",
						false,
						"Protokol in dogovor sta ločena koncepta.",
					],
					[
						"Ocenitvena funkcija razdelitve nalog.",
						false,
						"Ocenitvena funkcija je c, ne dogovor.",
					],
				],
			},
			{
				q: "Kdaj je dogovor δ individualno racionalen?",
				pages: [152],
				opts: [
					[
						"Ko δ Pareto dominira vse ostale dogovore.",
						false,
						"Pareto dominanca je ločen, strožji pogoj.",
					],
					[
						"Ko δ šibko dominira konfliktni dogovor {T1, T2}.",
						true,
						"Točno — δ je individualno racionalen natanko takrat, ko je vsaj tako dober kot začetna dodelitev.",
					],
					[
						"Ko je δ edini dogovor z največjo skupno koristnostjo.",
						false,
						"To ni definicija individualne racionalnosti.",
					],
					[
						"Ko oba agenta preferira δ pred vsemi ostalimi.",
						false,
						"To bi bila stroga Pareto dominanca, ne individualna racionalnost.",
					],
				],
			},
			{
				q: "Kaj je Pareto optimalni dogovor v pogajanju?",
				pages: [153],
				opts: [
					[
						"Dogovor, ki maksimizira koristnost agenta 1.",
						false,
						"Pareto optimalnost ni enostranska — upošteva vse agente.",
					],
					[
						"Dogovor, ki ga ne dominira noben drugi dogovor.",
						true,
						"Točno — ni alternativnega dogovora, ki bi vsaj enemu agentu izboljšal položaj.",
					],
					[
						"Dogovor, ki je dosežen najhitreje.",
						false,
						"Hitrost ni merilo Pareto optimalnosti.",
					],
					[
						"Dogovor, ki ga sprejme vsak agent.",
						false,
						"To opisuje individualno racionalnost, ne Pareto optimalnost.",
					],
				],
			},
			{
				q: "Strategija Zeuthena — kdo mora popustiti?",
				pages: [155],
				opts: [
					[
						"Agent z večjo koristnostjo v trenutnem predlogu.",
						false,
						"Logika je obrnjena — tisti z manj za izgubiti je bolj pripravljen tvegati.",
					],
					[
						"Agent z manjšo vrednostjo tveganja (manj tvega konflikt).",
						true,
						"Točno — agent, ki mu konflikt manj škodi (manjše tveganje), mora popustiti.",
					],
					[
						"Vedno agent 1 v prvem krogu.",
						false,
						"Ni fiksnega pravila o tem, kdo prvi popusti — odvisno od vrednosti tveganja.",
					],
					[
						"Agent, katerega predlog je za nasprotnika manj všečen.",
						false,
						"Merilo je vrednost tveganja, ne všečnost predloga.",
					],
				],
			},
			{
				q: "Katera lastnost protokola monotoničnega konsenza zagotavlja poštenost?",
				pages: [154],
				opts: [
					[
						"Agent sme v naslednji iteraciji predlagati manj ugoden dogovor za nasprotnika.",
						false,
						"Ravno nasprotno — v u+1 krogu agent ne sme predlagati dogovora, ki je drugemu manj všeč.",
					],
					[
						"V vsakem krogu agent ne sme predlagati dogovora, ki je za drugega agenta manj ugoden kot v prejšnjem krogu.",
						true,
						"Točno — monotonično naraščanje kakovosti predlogov za oba je ključna lastnost.",
					],
					[
						"Protokol zagotavlja, da je dogovor vedno dosežen v O(1) korakih.",
						false,
						"Število korakov je lahko O(2^|T|).",
					],
					[
						"Agent sme zavrniti katerikoli predlog brez utemeljitve.",
						false,
						"Zavrnitev brez utemeljitve ni del monotoničnega konsenza.",
					],
				],
			},
		],
	},
	{
		id: "pogajanja-argumentacija",
		name: "Pogajanja & argumentacija",
		color: "#ff6b6b",
		questions: [
			{
				q: "Kateri so štirje načini argumentiranja po Gilbertu?",
				pages: [160],
				opts: [
					[
						"Logični, etični, retorični, empirični.",
						false,
						"Gilbert ne omenja etičnega ali empiričnega načina v tej klasifikaciji.",
					],
					[
						"Logični, čustveni, visceralni, kisceralni.",
						true,
						"Točno — Gilbert razlikuje logični, čustveni (čustva/stališča), visceralni (čutni zaznave) in kisceralni (intuitivni/mistični).",
					],
					[
						"Deduktivni, induktivni, abdukitivni, analogni.",
						false,
						"To so epistemološke metode, ne Gilbertova klasifikacija.",
					],
					[
						"Formalni, neformalni, pisni, ustni.",
						false,
						"Ta delitev je medijska, ne Gilbertova.",
					],
				],
			},
			{
				q: "V logičnem argumentiranju, kaj pomeni A ⊢ φ?",
				pages: [161],
				opts: [
					[
						"A zavrne φ.",
						false,
						"⊢ označuje dokazljivost, ne zavrnitev.",
					],
					[
						"Iz premise A obstaja zaporedje sklepov, ki dokaže φ.",
						true,
						"Točno — A ⊢ φ pomeni, da je φ dokazljivo iz A.",
					],
					[
						"A in φ sta enakovredni trditvi.",
						false,
						"Enakovrednost bi zapisali z A ≡ φ.",
					],
					[
						"φ je predpogoj za A.",
						false,
						"Predpogoj bi pomenilo A ← φ ali podobno.",
					],
				],
			},
			{
				q: "Argument ⟨φ, Γ⟩ je 'netrivialen', kadar:",
				pages: [161, 162],
				opts: [
					[
						"Γ je prazna množica.",
						false,
						"Prazna Γ pomeni tavtološki argument.",
					],
					[
						"Γ je konsistentna (ni protislovja).",
						true,
						"Točno — netrivialen argument ima konsistentno množico razlogov Γ.",
					],
					[
						"φ je logično resnično.",
						false,
						"Logična resničnost φ ni pogoj za netrivialnost.",
					],
					[
						"Γ je enaka podatkovni bazi Δ.",
						false,
						"Γ ⊆ Δ, a Γ = Δ ni pogoj.",
					],
				],
			},
			{
				q: "Kdaj argument ⟨φ1, Γ1⟩ 'ovrže' argument ⟨φ2, Γ2⟩?",
				pages: [164],
				opts: [
					[
						"Ko φ1 napade zaključek φ2 (φ1 ⊢ ¬φ2).",
						true,
						"Točno — ovrgitev napada zaključek drugega argumenta.",
					],
					[
						"Ko Γ1 vsebuje vse elemente Γ2.",
						false,
						"To ni pogoj za ovrgitev.",
					],
					[
						"Ko φ1 napade enega od razlogov ψ ∈ Γ2.",
						false,
						"To je 'spodkopavanje', ne ovrgitev.",
					],
					[
						"Ko je |Γ1| > |Γ2|.",
						false,
						"Velikost Γ ni merilo za ovrgitev.",
					],
				],
			},
			{
				q: "Kaj je 'spodkopavanje' argumenta?",
				pages: [164],
				opts: [
					[
						"Zavrnitev zaključka z neposrednim protiargumentom.",
						false,
						"To je ovrgitev (rebuttal), ne spodkopavanje.",
					],
					[
						"Napad na enega od razlogov argumenta.",
						true,
						"Točno — ⟨φ1, Γ1⟩ spodkopava ⟨φ2, Γ2⟩, ko φ1 napade ψ ∈ Γ2.",
					],
					[
						"Predlaganje alternativnega zaključka.",
						false,
						"Alternativni zaključek je nov argument, ne spodkopavanje.",
					],
					[
						"Zavrnitev celotne podatkovne baze.",
						false,
						"Zavrnitev celotne baze ni formalni tip napada na argument.",
					],
				],
			},
			{
				q: "Kateri razred argumentov (A1–A5) je 'najmočnejši'?",
				pages: [163, 166],
				opts: [
					["A1 — vsi argumenti", false, "A1 je najšibkejši razred."],
					[
						"A3 — brez ovrgljivih argumentov",
						false,
						"A3 je trdnejši od A1/A2, a ne najmočnejši.",
					],
					[
						"A5 — tavtološki argumenti",
						true,
						"A5 vsebuje tavtološke argumente, ki so najmočnejši — zaključek ne more biti FALSE.",
					],
					[
						"A2 — netrivialni argumenti",
						false,
						"A2 je strožji od A1, a šibkejši od višjih razredov.",
					],
				],
			},
			{
				q: "Vrstni red razredov argumentov je:",
				pages: [163, 166],
				opts: [
					[
						"A5 ≺ A4 ≺ A3 ≺ A2 ≺ A1",
						false,
						"Vrstni red je obraten — nižja številka pomeni manj 'sprejemljivosti'.",
					],
					[
						"A1 ≺ A2 ≺ A3 ≺ A4 ≺ A5",
						true,
						"Točno — razredi z višjo številko so bolj sprejemljivi, ker imajo manj razlogov za dvom.",
					],
					[
						"A1 = A2 = A3 = A4 = A5",
						false,
						"Razredi so strogo različni in urejeni.",
					],
					[
						"A3 ≺ A1 ≺ A5 ≺ A2 ≺ A4",
						false,
						"To ni pravilna ureditev.",
					],
				],
			},
			{
				q: "Kakšne so komponente pogajalskega okolja?",
				pages: [146],
				opts: [
					[
						"Agenti, protokol in ocenitvena funkcija.",
						false,
						"Manjkata pogajalska množica predlogov in pravilo dogovora.",
					],
					[
						"Pogajalska množica predlogov, protokol, strategije agentov, pravilo dogovora.",
						true,
						"Točno — vse štiri komponente skupaj tvorijo pogajalsko okolje.",
					],
					[
						"Strategije, komunikacijski kanal in baza znanja.",
						false,
						"Komunikacijski kanal ni posebna komponenta pogajalskega okolja.",
					],
					[
						"Dejanja, izidi in ocenitvene funkcije.",
						false,
						"To je formalna definicija večagentnega okolja, ne pogajalskega.",
					],
				],
			},
			{
				q: "Kaj je razlika med pogajanjem o enem vprašanju in pogajanjem o več vprašanjih?",
				pages: [148],
				opts: [
					[
						"V prvem primeru je en agent, v drugem je več.",
						false,
						"Razlika je v številu vprašanj, ne agentov.",
					],
					[
						"Pri enem vprašanju se pogaja samo o ceni; pri več vprašanjih so vrednosti spremenljivk v1,...,vn.",
						true,
						"Točno — eno vprašanje = cena; več vprašanj = kombinacija vrednosti za n spremenljivk.",
					],
					[
						"Pogajanje o več vprašanjih vedno vodi k boljšemu izidu.",
						false,
						"Ni neposredne implikacije kakovosti izida.",
					],
					[
						"Pogajanje o enem vprašanju nima protokola.",
						false,
						"Oba primera imata protokol.",
					],
				],
			},
			{
				q: "Kako se konča sistem dialogov za argumentiranje?",
				pages: [167],
				opts: [
					[
						"Ko eden od agentov zavrne vse argumente nasprotnika.",
						false,
						"Zavrnitev vseh argumentov ni formalen pogoj za konec.",
					],
					[
						"Ko ni več možnih nadaljnjih korakov; zmaga tisti, ki je zadnji podal argument.",
						true,
						"Točno — dialog se konča, ko nobeden ne more nadaljevati, in zmaga zadnji.",
					],
					[
						"Ko oba agenta dosežeta soglasje.",
						false,
						"Soglasje ni pogoj — dialog se konča z izčrpanjem potez.",
					],
					[
						"Ko je dosežen dogovor po protokolu monotoničnega konsenza.",
						false,
						"To je ločen mehanizem, ne konec argumentnega dialoga.",
					],
				],
			},
			{
				q: "Kateri je prvi predlog agenta po strategiji Zeuthena?",
				pages: [155],
				opts: [
					[
						"Predlog, ki je za nasprotnika najprimernejši.",
						false,
						"Zeuthena strategija pravi, da je prvi predlog za agenta samega najboljši.",
					],
					[
						"Za agenta najboljši možni dogovor.",
						true,
						"Točno — po strategiji Zeuthena agent začne z najboljšim dogovorom zase.",
					],
					[
						"Kompromisni predlog med najboljšim za oba.",
						false,
						"Kompromis pride kasneje, ne ob prvem predlogu.",
					],
					[
						"Naključni dogovor iz množice pogajanj.",
						false,
						"Zeuthena ne predvideva naključnega prvega predloga.",
					],
				],
			},
			{
				q: "Kateri je primer logičnega načina argumentiranja?",
				pages: [160, 161],
				opts: [
					[
						"'Kako bi se počutili, če bi se to zgodilo vam?'",
						false,
						"To je čustveni način.",
					],
					[
						"'A = true ∧ A ⇒ B, torej B = true'",
						true,
						"Točno — to je deduktivni logični argument v stilu matematičnega dokaza.",
					],
					[
						"Sklicevanje na intuicijo ali religijo.",
						false,
						"To je kisceralni način.",
					],
					[
						"Podpiranje argumenta z vizualnimi zaznavami.",
						false,
						"To je visceralni način.",
					],
				],
			},
			{
				q: "Pogajanje o vrednostih opisuje:",
				pages: [156, 157],
				opts: [
					[
						"Scenarije, kjer se agenti pogajajo o ceni blaga.",
						false,
						"Pogajanje o ceni je pogajanje o enem vprašanju, ne o vrednostih v formalnem smislu.",
					],
					[
						"Scenarije, kjer so cilji agentov določeni z ocenitveno funkcijo stanj okolja.",
						true,
						"Točno — ⟨E, Ag, J, c⟩ opisuje scenarij z ocenitveno funkcijo W(e,i).",
					],
					[
						"Dražbe, kjer je vrednost blaga javna.",
						false,
						"Javna vrednost je lastnost dražb, ne pogajanj o vrednostih.",
					],
					[
						"Protokol za doseganje Nashevega ravnovesja.",
						false,
						"Nashevo ravnovesje ni neposreden cilj pogajanja o vrednostih.",
					],
				],
			},
			{
				q: "Katera je pomanjkljivost pogajanj brez argumentacije?",
				pages: [159],
				opts: [
					[
						"Agenti ne morejo doseči dogovora.",
						false,
						"Dogovor je možen brez argumentacije, le manjka utemeljitev.",
					],
					[
						"Ni utemeljitev odločitev, statična funkcija koristi se ne more spremeniti.",
						true,
						"Točno — agent ne pojasni, zakaj je izbral določen izid, in koristnostna funkcija ostaja fiksna.",
					],
					[
						"Pogajanje je časovno neomejeno.",
						false,
						"Trajanje pogajanja ni neposredno odvisno od argumentacije.",
					],
					[
						"Nasprotnik vedno zna goljufati.",
						false,
						"Goljufanje ni specifična pomanjkljivost odsotnosti argumentacije.",
					],
				],
			},
			{
				q: "V pogajanju o nalogah, koristnost(δ_i) je definirana kot:",
				pages: [151],
				opts: [
					[
						"c(D_i)",
						false,
						"Koristnost ni le strošek dodeljenega, temveč razlika med začetnim in novim.",
					],
					[
						"c(T_i) − c(D_i)",
						true,
						"Točno — koristnost je prihranek: koliko manj stane novi dogovor D_i v primerjavi s prvotno dodelitvijo T_i.",
					],
					[
						"c(D_i) − c(T_i)",
						false,
						"Ta formula bi bila negativna pri ugodnem dogovoru.",
					],
					[
						"c(T_i) / c(D_i)",
						false,
						"Delitev ni pravilna formula za koristnost.",
					],
				],
			},
			{
				q: "Množica pogajanj je sestavljena iz dogovorov, ki so:",
				pages: [152],
				opts: [
					[
						"Samo Pareto optimalni.",
						false,
						"Pareto optimalnost sama ni dovolj — potrebna je tudi individualna racionalnost.",
					],
					[
						"Individualno racionalni in Pareto optimalni.",
						true,
						"Točno — oba pogoja skupaj definirata množico pogajanj.",
					],
					[
						"Samo individualno racionalni.",
						false,
						"Individualna racionalnost sama ni dovolj — dodati je treba Pareto optimalnost.",
					],
					[
						"Tisti, ki jih predlaga agent z višjo vrednostjo tveganja.",
						false,
						"Vrednost tveganja je del strategije Zeuthena, ne definicije množice pogajanj.",
					],
				],
			},
			{
				q: "Tavtološki argument je:",
				pages: [166],
				opts: [
					[
						"Argument s prazno množico razlogov (Γ = ∅).",
						true,
						"Točno — tavtološki argument ima prazno Γ, kar pomeni, da je zaključek vedno resničen.",
					],
					[
						"Argument, ki ga ni mogoče ovreči z nobenim protiargumentom.",
						false,
						"To je lastnost argumentov razreda A3, ne tavtologij.",
					],
					[
						"Argument z največjo možno množico razlogov.",
						false,
						"Večja množica razlogov ne pomeni tavtologije.",
					],
					[
						"Argument, ki ga podpirajo vsi agenti.",
						false,
						"Soglasje agentov ni merilo za tavtologijo.",
					],
				],
			},
			{
				q: "Kakšen je namen 'prepričevanja' (Convince) v semantiki govornih dejanj?",
				pages: [179],
				opts: [
					[
						"Govorec želi, da bi poslušalec razumel govorčeva čustva.",
						false,
						"Razumevanje čustev ni namen convinciranja.",
					],
					[
						"Govorec želi, da bi poslušalec dejansko verjel v φ (ne le vedel, da govorec verjame).",
						true,
						"Točno — Convince(S,H,φ) ima kot rezultat (H verjame φ), ne le (H verjame, da S verjame φ).",
					],
					[
						"Govorec želi, da bi poslušalec izvedel dejanje.",
						false,
						"To je namen dejanja 'zahteva' (request).",
					],
					[
						"Govorec želi obvestiti poslušalca o dejstvu.",
						false,
						"To je namen dejanja 'informiranje' (Inform).",
					],
				],
			},
			{
				q: "Kaj je 'stabilnost' kot lastnost protokola za pogajanje?",
				pages: [136],
				opts: [
					[
						"Protokol zagotavlja, da se pogajanja vedno hitro zaključijo.",
						false,
						"Hitrost ni del definicije stabilnosti.",
					],
					[
						"Vsem agentom zagotavlja spodbudo za določeno vedenje, npr. Nashovo ravnovesje.",
						true,
						"Točno — stabilnost pomeni, da nihče ne želi enostransko oditi od predpisanega vedenja.",
					],
					[
						"Protokol se ne sme spremeniti med pogajanji.",
						false,
						"Nespremenljivost protokola je predpogoj, ne lastnost stabilnosti.",
					],
					[
						"Dogovor ne sme biti razveljavljeni po dosegi.",
						false,
						"To ni del definicije stabilnosti v tem kontekstu.",
					],
				],
			},
			{
				q: "Katera trditev o strategijah v pogajanjih drži?",
				pages: [147],
				opts: [
					[
						"Strategije so vedno javno znane vsem udeležencem.",
						false,
						"Strategije so ponavadi zasebne — vidni so le predlogi.",
					],
					[
						"Strategije so ponavadi zasebne; vidni so le predlogi.",
						true,
						"Točno — agent ne razkrije strategije, le konkretne predloge.",
					],
					[
						"Strategije se ne smejo spremeniti med pogajanji.",
						false,
						"Dinamične strategije so možne in pogoste.",
					],
					[
						"Strategija ne sme vsebovati naključnih elementov.",
						false,
						"Mešane strategije so veljavna oblika.",
					],
				],
			},
		],
	},
	{
		id: "komunikacija",
		name: "Komunikacija med agenti",
		color: "#e056fd",
		questions: [
			{
				q: "Kateri sta dve ključni posledici KSE (Knowledge Sharing Effort)?",
				pages: [180],
				opts: [
					[
						"KIF in KQML",
						true,
						"Točno — KIF (Knowledge Interchange Format) za vsebino in KQML (Knowledge Query and Manipulation Language) za komunikacijo.",
					],
					[
						"FIPA ACL in OWL",
						false,
						"FIPA ACL je standard, ki je nastal kasneje, OWL je ontološki jezik.",
					],
					[
						"RDF in SPARQL",
						false,
						"RDF in SPARQL sta spletni semantični tehnologiji, ne KSE rezultata.",
					],
					[
						"PROLOG in LISP",
						false,
						"PROLOG in LISP sta programska jezika, ne KSE standarda.",
					],
				],
			},
			{
				q: "Kateri je namen KQML?",
				pages: [183],
				opts: [
					[
						"Opisati vsebino znanja v določeni domeni.",
						false,
						"Vsebina znanja je namen KIF, ne KQML.",
					],
					[
						"Določiti format 'ovojnice' sporočila s performativom za komunikacijo med agenti.",
						true,
						"Točno — KQML je komunikacijski jezik z performativi; vsebino zagotavlja KIF.",
					],
					[
						"Definirati ontologijo domen.",
						false,
						"Ontologijo definira KIF ali OWL.",
					],
					[
						"Zagotoviti varno šifriranje sporočil.",
						false,
						"KQML se ne ukvarja s šifriranjem.",
					],
				],
			},
			{
				q: "Kaj je 'performativ' v KQML sporočilu?",
				pages: [183],
				opts: [
					[
						"Vsebina sporočila, ki opisuje dejstvo.",
						false,
						"Vsebina je v polju :content.",
					],
					[
						"Razred sporočila, ki podaja ilokucijsko moč (npr. ask-one, tell).",
						true,
						"Točno — performativ označuje vrsto govornega dejanja (vprašanje, trditev, zahteva...).",
					],
					[
						"Identifikator prejemnika sporočila.",
						false,
						"Prejemnik je v :receiver polju.",
					],
					[
						"Protokol za potrditev prejema.",
						false,
						"Potrditev prejema ni del performativa.",
					],
				],
			},
			{
				q: "Kaj je KIF (Knowledge Interchange Format)?",
				pages: [181],
				opts: [
					[
						"Komunikacijski protokol za izmenjavo sporočil.",
						false,
						"Protokol za izmenjavo sporočil je KQML.",
					],
					[
						"Jezik za izražanje lastnosti in relacij določene domene znanja.",
						true,
						"Točno — KIF je namenjen vsebini sporočil in opisovanju domenskega znanja.",
					],
					[
						"Standard za vizualizacijo agentnih sistemov.",
						false,
						"KIF ni vizualizacijski standard.",
					],
					[
						"Ogrodje za načrtovanje večagentnih protokolov.",
						false,
						"Ogrodje za protokole ni KIF.",
					],
				],
			},
			{
				q: "Kaj je 'lokucijsko dejanje' po Austinu?",
				pages: [172],
				opts: [
					[
						"Govorčev namen ob izjavi.",
						false,
						"Govorčev namen je 'ilokucijsko dejanje'.",
					],
					[
						"Dejanski učinek, ki ga ima govor na sogovornika.",
						false,
						"To je 'perlokucijsko dejanje'.",
					],
					[
						"Dejansko izgovorjeni glasovi in besede z gramatičnim smislom.",
						true,
						"Točno — lokucijsko dejanje je fizična izreka stavka z referenco in smislom.",
					],
					[
						"Protokol za izmenjavo znanja med agenti.",
						false,
						"To ni Austinova kategorija govornih dejanj.",
					],
				],
			},
			{
				q: "Katero je perlokucijsko dejanje po Austinu?",
				pages: [172],
				opts: [
					[
						"Rekel sem ji, naj gre.",
						false,
						"To je opis lokucijskega dejanja.",
					],
					[
						"Ukazal sem ji, naj gre.",
						false,
						"To je opis ilokucijskega dejanja.",
					],
					[
						"S tem, da sem ji rekel, sem jo prepričal, da gre.",
						true,
						"Točno — perlokucijsko dejanje je dejanski učinek govora na sogovornika (prepričati, prestrašiti...).",
					],
					[
						"Performativni glagol 'ukaz' izraža moj namen.",
						false,
						"Performativni glagol je del ilokucijskega, ne perlokucijskega dejanja.",
					],
				],
			},
			{
				q: "Katera Searleova kategorija govornih dejanj zavezuje govorca k resničnosti trditve?",
				pages: [173],
				opts: [
					[
						"Novodilo (directives)",
						false,
						"Novodila spodbujajo poslušalca k dejanju.",
					],
					[
						"Zavezujoče dejanje (commissives)",
						false,
						"Commissives zavežejo govorca k prihodnjemu dejanju.",
					],
					[
						"Reprezentativno dejanje (representatives)",
						true,
						"Točno — representatives zavezujejo govorca k resničnosti izrečene trditve.",
					],
					[
						"Deklaracija (declarations)",
						false,
						"Deklaracije spremenijo institucionalno stanje (napoved vojne itd.).",
					],
				],
			},
			{
				q: "Kateri performativni glagol je primer ilokucijskega dejanja?",
				pages: [172, 174],
				opts: [
					[
						"'Glasovi' in 'besede'",
						false,
						"Glasovi in besede so del lokucijskega dejanja.",
					],
					[
						"'Prepričati' ali 'prestrašiti'",
						false,
						"Ti glagoli opisujejo perlokucijsko dejanje.",
					],
					[
						"'Prositi', 'obvestiti', 'obljubiti'",
						true,
						"Točno — ti glagoli so primeri performativnih glagolov, ki izražajo ilokucijsko moč.",
					],
					[
						"'Razumeti' ali 'slišati'",
						false,
						"Razumevanje in slišanje sta kognitivni stanji, ne govorni dejanji.",
					],
				],
			},
			{
				q: "V KIF zapisu, kaj pomeni:\n(defrelation bachelor (?x) := (and (man ?x) (not (married ?x))))?",
				pages: [181, 182],
				opts: [
					[
						"Vsi samci so moški.",
						false,
						"To bi bil samo del definicije.",
					],
					[
						"Definicija koncepta: x je samec, če je moški in ni poročen.",
						true,
						"Točno — defrelation definira nov predikat iz obstoječih z logičnim izrazom.",
					],
					[
						"Obstaja x, ki je moški in ni poročen.",
						false,
						"Eksistenčna trditev ni isto kot definicija predikata.",
					],
					[
						"Vsak moški je samec.",
						false,
						"Moški je samec le, če ni poročen — to je le en pogoj.",
					],
				],
			},
			{
				q: "Kateri je primer Searleove 'deklaracije'?",
				pages: [173],
				opts: [
					[
						"'Dežuje.'",
						false,
						"To je reprezentativno dejanje (trditev o dejstvu).",
					],
					[
						"'Prosim, zapri okno.'",
						false,
						"To je novodilo (directive).",
					],
					[
						"'Obljubim, da bom prišel.'",
						false,
						"To je zavezujoče dejanje (commissive).",
					],
					[
						"'Napovedujem vojno.'",
						true,
						"Točno — deklaracija ustvari novo institucionalno stanje.",
					],
				],
			},
			{
				q: "Kakšna je razlika med KQML in KIF?",
				pages: [180, 183],
				opts: [
					[
						"KQML opisuje vsebino znanja, KIF opisuje format sporočil.",
						false,
						"Vlogi sta zamenjani.",
					],
					[
						"KQML določa format ovojnice sporočil s performativi, KIF pa vsebino sporočila.",
						true,
						"Točno — KQML je komunikacijski sloj, KIF je vsebinski sloj.",
					],
					[
						"Sta sinonima za isti standard.",
						false,
						"Sta ločena, komplementarna standarda.",
					],
					[
						"KIF je naslednja verzija KQML.",
						false,
						"Nista verziji isti standard — sta ločena.",
					],
				],
			},
			{
				q: "Predpogoji za uspešno govorno dejanje 'zahteva' request(S, H, φ) vključujejo:",
				pages: [176],
				opts: [
					[
						"H verjame, da S verjame φ.",
						false,
						"To je rezultat 'informiranja', ne predpogoj zahteve.",
					],
					[
						"S verjame, da H lahko naredi φ in da H verjame, da H lahko naredi φ.",
						true,
						"Točno — S mora verjeti v H-jevo zmožnost in vedeti, da H sam verjame v to zmožnost.",
					],
					[
						"S želi, da H verjame φ.",
						false,
						"To je predpogoj za 'informiranje', ne zahtevo.",
					],
					[
						"H že izvaja dejanje φ.",
						false,
						"Zahteva je smiselna le, če H φ še ne izvaja.",
					],
				],
			},
			{
				q: "Rezultat uspešnega 'informiranja' Inform(S, H, φ) je:",
				pages: [178],
				opts: [
					[
						"H verjame φ.",
						false,
						"To je rezultat 'prepričevanja' (Convince), ne informiranja.",
					],
					[
						"H verjame, da S verjame φ.",
						true,
						"Točno — Inform zagotovi, da H ve, da S verjame v φ, ne pa, da H sam verjame.",
					],
					[
						"H izvede φ.",
						false,
						"Izvedba dejanja je rezultat zahteve, ne informiranja.",
					],
					[
						"S ne verjame več φ.",
						false,
						"Informiranje ne vpliva na S-jeva prepričanja.",
					],
				],
			},
			{
				q: "Katera trditev o komunikaciji v agentnih sistemih drži?",
				pages: [169, 170],
				opts: [
					[
						"Agenti komunicirajo enako kot procesi v paralelnih sistemih.",
						false,
						"Razlika je v avtonomnosti agentov in problemu zaupanja.",
					],
					[
						"Agenti so avtonomni, kar uvaja problem zaupanja v komunikaciji.",
						true,
						"Točno — avtonomnost agentov pomeni, da ne smemo slepo zaupati sporočilom.",
					],
					[
						"Komunikacija med agenti je vedno brezpogojna.",
						false,
						"Zaupanje in preverjanje sta ključna.",
					],
					[
						"Agentna komunikacija je ekvivalentna klicanju metod v OOP.",
						false,
						"Agenti so avtonomni in ne klicajočega ne 'morajo' ubogati.",
					],
				],
			},
			{
				q: "Katera lastnost KIF ga loči od navadnih programskih jezikov?",
				pages: [181],
				opts: [
					[
						"KIF podpira orientacijo na objekte.",
						false,
						"KIF ni objektno-orientiran.",
					],
					[
						"KIF vsebuje eksistencialne in univerzalne kvantifikatorje ter logičnimi vezniki.",
						true,
						"Točno — KIF temelji na logiki prvega reda z vsemi logičnimi operatorji.",
					],
					[
						"KIF je hitrejši od interpretiranih jezikov.",
						false,
						"Hitrost izvajanja ni lastnost KIF.",
					],
					[
						"KIF je namenjen le opisovanju fizikalnih lastnosti.",
						false,
						"KIF je splošen jezik za znanje, ne specifičen za fiziko.",
					],
				],
			},
			{
				q: "Kateri primer v KIF zapisu definira, da vsak posameznik s lastnostjo 'oseba' ima lastnost 'sesalec'?",
				pages: [181, 182],
				opts: [
					[
						"(= (person ?x) (mammal ?x))",
						false,
						"= označuje enakost, ne implikacijo.",
					],
					[
						"(defrelation person (?x) :=> (mammal ?x))",
						true,
						"Točno — :=> definira, da je biti oseba zadosten pogoj za biti sesalec.",
					],
					[
						"(and (person ?x) (mammal ?x))",
						false,
						"and je konjunkcija, ne implikacija.",
					],
					[
						"(not (person ?x) (mammal ?x))",
						false,
						"not je negacija, ne definicija implikacije.",
					],
				],
			},
			{
				q: "Kaj je performativnost po Austinu?",
				pages: [172],
				opts: [
					[
						"Zmožnost agenta za izvajanje fizičnih dejanj.",
						false,
						"Performativnost se nanaša na jezik, ne na fizična dejanja.",
					],
					[
						"Zmožnost jezikovnega znaka, da tvori dejanje, na katerega se nanaša.",
						true,
						"Točno — izrekanje performativa je hkrati izvedba dejanja (npr. 'Krstim te').",
					],
					[
						"Merjenje učinkovitosti komunikacije med agenti.",
						false,
						"Učinkovitost ni Austinov pojem performativnosti.",
					],
					[
						"Protokol za pošiljanje sporočil v KQML.",
						false,
						"KQML je tehnični standard, ne Austinov pojem.",
					],
				],
			},
			{
				q: "Katera je osnovna struktura KQML sporočila?",
				pages: [183],
				opts: [
					[
						"Glava in telo v XML formatu.",
						false,
						"KQML ni XML format.",
					],
					[
						"Performativ in pari atribut/vrednost kot parametri.",
						true,
						"Točno — sporočilo ima performativ (razred) in parametre kot pare atribut:vrednost.",
					],
					[
						"Ontologija in seznam logičnih izrazov.",
						false,
						"Ontologija je en parameter, ne celotna struktura.",
					],
					[
						"Pošiljatelj, prejemnik in časovni žig.",
						false,
						"To so nekateri parametri, ne celotna struktura.",
					],
				],
			},
			{
				q: "Rezultat uspešnega 'prepričevanja' Convince(S, H, φ) je:",
				pages: [179],
				opts: [
					[
						"H verjame, da S verjame φ.",
						false,
						"To je rezultat informiranja.",
					],
					[
						"H verjame φ.",
						true,
						"Točno — Convince(S,H,φ) ima kot rezultat (H verjame φ), ne le vedenje o S-jevih prepričanjih.",
					],
					[
						"S ne verjame več v φ.",
						false,
						"Convince ne vpliva na S-jeva prepričanja.",
					],
					[
						"H izvede φ.",
						false,
						"Izvedba dejanja je rezultat zahteve.",
					],
				],
			},
			{
				q: "Katera oblika komunikacije je med tistimi, ki jih Cohen in Perrault formalizirala s STRIPS?",
				pages: [175],
				opts: [
					[
						"Šifrirana izmenjava ključev.",
						false,
						"STRIPS se ne ukvarja s šifriranjem.",
					],
					[
						"Semantike govornih dejanj z predpogoji in postpogoji.",
						true,
						"Točno — Cohen in Perrault (1979) sta semantike govornih dejanj opisala z STRIPS predpogoj-brisanje-dodajanje sistemom.",
					],
					[
						"Protokol za nizkolatentno komunikacijo agentov.",
						false,
						"Latenca ni tema tega dela.",
					],
					[
						"Formalizacija KQML performativov.",
						false,
						"KQML je prišel po Cohenovem in Perraultovem delu.",
					],
				],
			},
		],
	},
];
