var JT_OPEN = [
	{
		id: "analiza-sentimenta",
		name: "Analiza sentimenta",
		color: "#ff8a5b",
		questions: [
			{
				q: "Razložite, zakaj gradivo analizo sentimenta opisuje kot odkrivanje odnosov in katere tri stvari pri tem običajno iščemo.",
				answer: "<p>Gradivo analizo sentimenta opiše kot <b>odkrivanje odnosov</b>. Pri tem iščemo: <b>nosilci</b> oziroma izvor odnosa, <b>cilj</b> ali aspekt ter <b>tip oziroma polarnost</b> odnosa (pozitivno, negativno ali nevtralno).</p><p>Primer: ocena tiskalnika, kjer je nosilci avtor mnenja, cilj pa aspekt, npr. cena ali enostavnost uporabe.</p>",
				pages: [189, 190],
			},
			{
				q: "Opišite osnovni postopek analize sentimenta po Pang in Lee ter vlogo leksikalne analize in značilk.",
				answer: "<p>1. <b>Leksikalna analiza</b>: čiščenje besedila (HTML, emodžiji, velike črke, telefonske številke...).</p><p>2. <b>Ugotavljanje značilk</b>: negacija (metoda NOT_), TF-IDF, vse besede ali samo pridevniki.</p><p>3. <b>Klasifikacija</b>: z algoritmom Naïve Bayes, MaxEnt ali SVM.</p><p>Gradivo ugotavlja, da uporaba vseh besed z NB pogosto daje boljše rezultate kot samo pridevniki.</p>",
				pages: [191, 192, 193, 194],
			},
			{
				q: "Kaj je po gradivu pomembno pri značilkah za analizo sentimenta in zakaj?",
				answer: "<p><b>Negacija</b> je ključna – 'Ta film mi ni všeč' je negativno, 'Ta film mi je všeč' pozitivno. Metoda NOT_ doda predpono vsaki besedi med negacijo in ločilom.</p><p>Uporaba <b>vseh besed</b> (ne le pridevnikov) z NB pogosto da boljše rezultate. Podmnožice besed, ročno zgrajeni leksikoni in delno nadzorovano učenje so naprednejše tehnike.</p>",
				pages: [194, 200, 201, 210],
			},
			{
				q: "Pojasnite idejo Turneyevega algoritma in vlogo fraz ter PMI.",
				answer: "<p>Turney (2002) namesto posameznih besed uporablja <b>dvobesdne fraze</b> (POS označevanje) in se uči na domensko specifičnih informacijah.</p><p>Polariteta fraze: <b>Polariteta(fraza) = PMI(fraza, dobro) − PMI(fraza, slabo)</b>.</p><p>PMI se oceni z zadetki iskalnika: PMI(x,y) = log2(zadetki(x BLIZU y)·N / (zadetki(x)·zadetki(y))). Pozitivna polariteta → pozitivna fraza.</p>",
				pages: [207, 208, 209],
			},
			{
				q: "Kako se v gradivu opiše leksikon sentimenta in kako ga lahko gradimo?",
				answer: "<p>Leksikon sentimenta pove, <b>kateri pomen sentimenta imajo besede</b>. Obstajajo: General Inquirer (prost), LIWC (plačljiv), MPQA (GNU GPL), Bing Liu Opinion Lexicon, SentiWordNet (pozitivnost/negativnost/nevtralnost za vsak sinset).</p><p>Lasten leksikon zgradimo z <b>delno nadzorovanim učenjem</b>: ročno označimo semensko množico → razširimo z besedami, ki se pogosto pojavljajo z 'and' ob semenih → klasificiramo po polarnostni podobnosti.</p>",
				pages: [200, 201, 202, 203],
			},
			{
				q: "Zakaj so naprednejše metode sentimenta pogosto formulirane kot klasifikacija ali regresija?",
				answer: "<p>Ker je končni izhod neka ocena odnosa. Osnovna naloga = binarna klasifikacija (poz/neg). Zahtevnejša = regresija (npr. od 1 do 10) ali večrazredna klasifikacija.</p><p>Ko dodamo odkrivanje aspektov, atributov in cilja, postane naloga bolj kompleksna, a matematično ostane klasifikacijska ali regresijska.</p>",
				pages: [190, 210],
			},
			{
				q: "Opišite korak za korakom postopek Hatzivassiloglou in McKeown za identifikacijo besedne polarizacije s pomočjo pridevniških konjunkcij.",
				answer: "<p><b>Korak 1</b>: Ročno označimo 'semensko množico' pridevnikov (pozitivni/negativni).</p><p><b>Korak 2</b>: Pridevnika, vezana z <b>'and'</b>, imata enako polariteto (npr. 'corrupt and brutal' – oba neg.). Vezana z <b>'but'</b> imata različno polariteto.</p><p><b>Korak 3</b>: Na podlagi frekvenc konjunkcij določimo 'podobnost polarnosti' za nove pridevnike.</p><p><b>Korak 4</b>: Grupirajmo besede v dve množici – pozitivno in negativno.</p>",
				pages: [203],
			},
			{
				q: "Razložite razliko med enostavno, zahtevno in napredno nalogo analize sentimenta.",
				answer: "<p><b>Enostavna</b>: Binarna klasifikacija – je odnos pozitiven ali negativen?</p><p><b>Zahtevna</b>: Rangiranje odnosa, npr. od 1 do 10 (regresija ali večrazredna klasifikacija).</p><p><b>Napredna</b>: Odkrivanje vira (kdo izraža), cilja (aspekti – npr. cena tiskalnika) in kompleksnih tipov. Npr. 'Avtor pozitivno ocenjuje ceno, negativno enostavnost uporabe.'</p>",
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
				answer: "<p><b>Generativni modeli</b>: modelirajo P(d|c) in P(c), nato z Bayesovim pravilom izračunajo P(c|d). Primeri: Naïve Bayes, HMM, n-gram modeli.</p><p><b>Diskriminatorni modeli</b>: neposredno modelirajo P(c|d). Primeri: logistična regresija, perceptron, SVM. So bolj točni in bolj fleksibilni pri vključevanju jezikovno relevantnih značilk.</p>",
				pages: [213, 214, 218],
			},
			{
				q: "Kaj je značilka v diskriminatornem modelu in kako se ji dodeli pomen?",
				answer: "<p>Značilka je funkcija <b>f : C × D → R</b>, ki vrne realno vrednost za par (razred, dokument).</p><p>Model dodeli vsaki značilki utež λi: pozitivna utež pomeni, da značilka podpira razred; negativna, da mu nasprotuje. Npr. f1(c,d) ≡ [c=MESTO ∧ bi-1='v' ∧ velikaZačetnica(bi)] z λ1=0.8.</p>",
				pages: [215, 216],
			},
			{
				q: "Kako deluje linearni klasifikator na podlagi značilk?",
				answer: "<p>Za vsak par (razred c, besedilo d) se izračuna glasovanje: <b>glasovanje(c) = Σi λi fi(c,d)</b>.</p><p>Izbere se razred z <b>najvišjo vrednostjo glasovanja</b>: c* = arg max_c Σi λi fi(c,d).</p><p>Perceptron popravi uteži pri napačnih primerih; SVM maksimizira razdaljo med razredi.</p>",
				pages: [217, 218],
			},
			{
				q: "Razložite, zakaj so diskriminatorni modeli v LT pogosto uporabnejši od generativnih.",
				answer: "<p>Diskriminatorni modeli so pogosto bolj točni (gradivo navede +2.5% za NB→diskriminatoren), ker se neposredno osredotočijo na mejo med razredi.</p><p>Prednosti: enostavna vključitev jezikovno relevantnih značilk (kontekst, velika začetnica, oblikoslovna oznaka) in samodejno delovanje brez jezikovno-specifičnih predpostavk.</p>",
				pages: [213, 214],
			},
			{
				q: "Pojasnite, zakaj se modeli MaxEnt imenujejo modeli maksimalne entropije, in razložite pogoj za optimalne parametre.",
				answer: "<p>MaxEnt išče model z <b>maksimalno entropijo</b> (čim manj pristranski), ki hkrati zadosti omejitvam na pričakovanjih značilk.</p><p>Pogoj za optimum (iz odvoda log-verjetnosti): za vsako značilko fj mora veljati <b>E_p̃(fj) = E_p(fj)</b>, tj. empirično pričakovanje = napovedano pričakovanje.</p><p>To pomeni, da model pravilno povzema statistike učne množice za vsako značilko.</p>",
				pages: [226],
			},
			{
				q: "Opišite eksponentni (loglinearni) model in razložite vlogo parametrov λi pri klasifikaciji.",
				answer: "<p>Formula: <b>P(c|d,λ) = exp(Σi λi fi(c,d)) / Σc' exp(Σi λi fi(c',d))</b>.</p><p>Vloga parametrov: pozitiven λi poveča verjetnost razreda, negativen jo zmanjša. Funkcija exp zagotovi pozitivnost pred normalizacijo.</p><p>Optimalne λi poiščemo z <b>gradientnim spustom</b> na skupni log-verjetnosti učnih podatkov, kjer optimiziramo CLogVer(D) = Σn log P(ci|di).</p>",
				pages: [219, 220, 227],
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
				answer: "<p><b>Neposredno (dictionary-based)</b>: prevajanje besedo po besedo z dvojezičnim slovarjem, minimalna analiza. Slabost: ne ujame dolgih prerazporeditev.</p><p><b>Transferno</b>: 3 faze – analiza izvornega stavka (sintaktično drevo) → prenos strukture → ustvarjanje ciljnega stavka.</p><p><b>Medjezikovno (interlingua)</b>: 2 fazi – analiza v jezikovno neodvisno predstavitev → generiranje ciljnega besedila. Za N jezikov potrebujemo 2N sistemov.</p>",
				pages: [237, 238, 241, 242],
			},
			{
				q: "Zakaj je kontekst v strojnem prevajanju pomemben in kako to pokaže primer z zaimkom 'it'?",
				answer: "<p>Isti zaimek ima različne prevode glede na kontekst:</p><ul><li>'The computer outputs the data, <b>it</b> is fast.' → 'računalnik <b>je</b> hiter' (it = računalnik).</li><li>'The computer outputs the data, <b>it</b> is stored in ASCII.' → 'podatki <b>so</b> shranjeni' (it = podatki).</li></ul><p>Pravi prevod zahteva razrešitev koreference, ki je odvisna od celotnega konteksta stavka.</p>",
				pages: [233, 236],
			},
			{
				q: "Opišite osnovno idejo statističnega strojnega prevajanja in poravnave.",
				answer: "<p>SMT temelji na <b>šumnem kanalu</b>: dekodirnik = arg max_e P(e)·P(s|e), kjer P(e) je jezikovni model in P(s|e) je prevajalni model.</p><p><b>Poravnava</b> a = {a1,...,am}: aj ∈ {0,...,l} pove, katera izvorna beseda generira j-to ciljno besedo. MLE ocene: tMLE(s|e) = štev(e,s)/štev(e), qMLE(j,i|l,m) = štev(j|i,m,n)/štev(i,l,m).</p>",
				pages: [244, 245, 264, 265],
			},
			{
				q: "Kako bi v eni povedi opisali glavno omejitev neposrednega strojnega prevajanja?",
				answer: "<p>Prevajanje besedo po besedo ne ujame dolgorazponskih skladenjskih prerazporeditev (npr. SOV v japonščini vs. SVO v angleščini) in ne loči pomenskih dvoumnosti brez konteksta.</p>",
				pages: [238, 239, 240],
			},
			{
				q: "Opišite IBM Model 1 – kako izračunamo P(s,a|e,m) in zakaj vsaka poravnava dobi enako verjetnost?",
				answer: "<p><b>Predpostavka IBM 1</b>: uniformna porazdelitev poravnav – P(a|e,m) = 1/(l+1)^m, ker nimamo informacije o položaju.</p><p><b>Formula</b>: P(s,a|e,m) = P(a|e,m) · P(s|a,e,m) = <b>(1/(l+1)^m) · ∏j t(sj|eaj)</b>.</p><p>P(s|e,m) = Σa P(s,a|e,m) – seštejemo čez vse poravnave.</p><p>Najbolj verjetna poravnava: a*j = arg max_i t(sj|ei) – za vsako ciljno besedo izberemo izvorno z najvišjo prevodno verjetnostjo.</p>",
				pages: [250, 253, 254, 255, 256],
			},
			{
				q: "Kako se IBM Model 2 razlikuje od IBM Model 1 in kaj pomeni parameter q(i|j,l,m)?",
				answer: "<p><b>IBM Model 1</b>: samo prevodni parametri t(sj|eaj), uniformna poravnava.</p><p><b>IBM Model 2</b>: doda parametre poravnave <b>q(i|j,l,m)</b> = verjetnost, da je j-ta ciljna beseda poravnana z i-to izvorno besedo pri dolžinah l in m.</p><p>Formula: P(s,a|e,m) = ∏j q(aj|j,l,m) · t(sj|eaj).</p><p>IBM 2 bolje modelira jezike z različnim besednim redom, npr. slovenščina vs. angleščina.</p>",
				pages: [260, 261, 262, 263],
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
				answer: "<p>Cilj: iz nestrukturiranega ali pol-strukturiranega besedila izluščiti <b>strukturirane podatke</b> – kdo, kaj, komu, kdaj, kje.</p><p>Primer: predavatelj(Janez Novak, Slovenščina, Maribor, Ponedeljek, Poletni semester).</p><p>To omogoča nadaljnje sklepanje, organizacijo, poizvedovanje, analizo (biomedicinska domena).</p>",
				pages: [267, 268, 269],
			},
			{
				q: "Zakaj je prepoznavanje imenskih entitet ključno za IE in katere vrste entitet običajno iščemo?",
				answer: "<p>NER je ključen, ker so relacije in dejstva vezana na imena. Ko prepoznamo entitete, jih lahko indeksiramo, povežemo (spletne strani), določimo cilj sentimenta in uporabimo v vprašanjih/odgovorih.</p><p>Tipične vrste: ime osebe (Miha), mesto (Maribor), organizacija (Merkator), datum, telefonska številka.</p>",
				pages: [270, 271, 272],
			},
			{
				q: "Opišite razlike med ročno zapisanimi pravili, klasifikatorji in sekvenčnimi modeli za NER.",
				answer: "<p><b>Ročna pravila</b>: regularni izrazi, primerni za lepo strukturirane domene (datumi, tel. številke). Hitri, a omejeni.</p><p><b>Klasifikatorji</b>: vsako besedo klasificiramo neodvisno v 'za ekstrakcijo' ali 'ne'. Preprostejše, a ignorirajo kontekst oznak.</p><p><b>Sekvenčni modeli</b>: upoštevajo zaporedje oznak (B-I-O), kontekst besede in okoliških oznak. Najpogosteje za NER, ker prepoznajo večbesedne entitete.</p>",
				pages: [274, 275, 276, 277],
			},
			{
				q: "Kaj pomeni IOB kodiranje in zakaj je uporabnejše od preprostega IO kodiranja?",
				answer: "<p><b>IO</b>: vsaka beseda entitete → I-TIP, ostale → O. Skupaj c+1 oznak.</p><p><b>IOB</b>: B-TIP = začetek entitete, I-TIP = nadaljevanje, O = ostalo. Skupaj 2c+1 oznak.</p><p>IOB je uporabnejše, ker jasno loči meje entitet. Brez B-oznake ne vemo, kje se ena entiteta konča in druga začne (npr. 'Janez Novak Marija Kovač').</p>",
				pages: [276, 277],
			},
			{
				q: "Kako se ocenjuje kakovost prepoznavanja imenskih entitet?",
				answer: "<p>Gradivo uporablja kontingenčno tabelo (tp, tn, fp, fn):</p><ul><li><b>Precision</b> = tp / (tp + fp): med vsemi najdenimi entitetami, koliko je pravilnih.</li><li><b>Recall</b> = tp / (tp + fn): med vsemi pravimi entitetami, koliko smo našli.</li><li><b>F1</b> = 2·P·R / (P+R): harmonično povprečje.</li></ul>",
				pages: [272, 273],
			},
			{
				q: "Kaj so tipične značilke pri sekvenčnem označevanju za NER?",
				answer: "<p>Gradivo navaja:</p><ul><li><b>Besede</b>: trenutna beseda, prejšnja/naslednja beseda (kontekst).</li><li><b>Oblikoslovno označevanje</b>: slovnična kategorija (POS tag).</li><li><b>Kontekst oznak</b>: prejšnja in naslednja oznaka (npr. B-OSEBA pred I-OSEBA).</li></ul>",
				pages: [277, 278],
			},
			{
				q: "Primerjajte IO in IOB kodiranje v sekvenčnem označevanju – kdaj je razlika ključna?",
				answer: "<p><b>IO</b>: c+1 oznak, manjša časovna zahtevnost, ni razlike med začetkom in nadaljevanjem entitete.</p><p><b>IOB</b>: 2c+1 oznak, večja zahtevnost, a eksplicitno loči začetek (B) od nadaljevanja (I).</p><p>Razlika je ključna pri <b>zaporednih entitetah istega tipa</b>: 'Janez Novak Marija Kovač'. Z IO: I-OSEBA I-OSEBA I-OSEBA I-OSEBA – ni jasno, kje ena konča. Z IOB: B-OSEBA I-OSEBA B-OSEBA I-OSEBA – meje so jasne.</p>",
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
				answer: "<p>Sistem samodejno išče dobre značilke ali predstavitve iz vhodnih podatkov, namesto da bi jih morali ročno definirati. Model gradi večplastne predstavitve, ki bolje ujamejo strukturo problema.</p>",
				pages: [281, 282],
			},
			{
				q: "Zakaj je globoko učenje postalo tako uspešno okoli leta 2010?",
				answer: "<p>Tri ključne spremembe: <b>velike količine podatkov</b>, <b>hitrejši procesorji in GPU-ji</b> ter <b>novi modeli, algoritmi in ideje</b>. Ti dejavniki so skupaj omogočili učinkovitejše učenje globokih mrež in dosegli preboje v govoru in vidu.</p>",
				pages: [283, 284],
			},
			{
				q: "Kako gradivo povezuje globoko učenje z jezikovnimi tehnologijami?",
				answer: "<p>Globoko učenje se v JT uporabi na vseh nivojih: govor, besede, sintaksa, semantika, orodja in aplikacije. Besede se predstavi kot vektorje, plasti mreže pa jih preoblikujejo – to omogoča učenje kompleksnih vzorcev, ki jih ročne značilke ne ujamejo.</p>",
				pages: [286],
			},
			{
				q: "Kako gradivo opiše prednosti globokega učenja pred ročno narejenimi značilkami?",
				answer: "<p>Ročno določene značilke so pogosto preveč specifične, nepopolne in drage za razvoj. Globoko učenje pa je fleksibilnejše, uči se iz označenih in neoznačenih podatkov ter se lažje prenaša med domenami.</p>",
				pages: [282, 283],
			},
			{
				q: "Navedite dva zgodnja preboja, ki ju gradivo omenja kot pomembna za razcvet globokega učenja.",
				answer: "<p><b>Razpoznavanje govora</b> z velikimi učnimi množicami ter <b>ImageNet klasifikacija</b> z globokimi konvolucijskimi mrežami za računalniški vid sta bila ključna zgodnja preboja.</p>",
				pages: [284],
			},
			{
				q: "Kako bi na kratko razložili, zakaj so nevronske mreže zanimive tudi za jezikovne naloge?",
				answer: "<p>Ker lahko besede, fraze in logične izraze predstavijo kot vektorje, plasti mreže pa te predstavitve združujejo in preoblikujejo. To omogoča učenje kompleksnih vzorcev, ki jih ročno zasnovane značilke pogosto spregledajo.</p>",
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
				answer: "<p><b>Count-based</b>: statistika sočasnih pojavitev, hitro učenje. <b>Predictive</b> (skip-gram): bolje zajame kompleksne vzorce, a se drugače skalira s korpusom. GloVe združi oba pristopa.</p>",
				pages: [320],
			},
			{
				q: "Kako GloVe poveže štetje in predikcijo?",
				answer: "<p>GloVe združuje oba pristopa z log-bilinearnim modelom in funkcijo izgube na sočasnih pojavitev. Razlike vektorjev kodirajo razmerja verjetnosti sopojavljanja med besedami.</p>",
				pages: [321, 322, 323, 324],
			},
			{
				q: "Kako ločimo notranje in zunanje ovrednotenje vektorjev besed?",
				answer: "<p><b>Notranje</b>: hitro, na vmesni nalogi (npr. podobnost besed). <b>Zunanje</b>: na realni nalogi (NER, sentiment...), počasnejše a bolj informativno o dejanskih uporabnosti vektorjev.</p>",
				pages: [325],
			},
		],
	},
];
