var PSIS_OPEN = [
{
  id: 'vec-agentni',
  name: 'Več agentni sistemi — osnove',
  color: '#6c8eff',
  questions: [
    {
      q: "Kaj je ocenitvena funkcija u_i in kakšno vlogo igra v formalnem opisu večagentnih sistemov?",
      answer: "<p>Ocenitvena funkcija <b>u_i : Ω → ℝ</b> je preslikava iz množice izidov v realna števila. Poda numerično vrednost kakovosti posameznega izida za agenta i, kar omogoča primerjanje izidov.</p><p>Izid ω je boljši od ω' za agenta i, če <b>u_i(ω) ≥ u_i(ω')</b> (šibka preferenca ⪰) oziroma <b>u_i(ω) > u_i(ω')</b> (stroga preferenca ≻).</p>",
      pages: [117]
    },
    {
      q: "Opišite funkcijo okolja τ in razložite, kaj pomeni, da okolje vzdržuje agent j.",
      answer: "<p>Funkcija <b>τ : Ac_i × Ac_j → Ω</b> preslika par dejanj obeh agentov v izid sveta. Določa, kakšno stanje nastane glede na kombinacijo dejanj agenta i in j.</p><p>Okolje vzdržuje agent j, kadar je izid odvisen le od j-jevega dejanja, ne od i-jevega — npr. <b>τ(D,D)=ω1, τ(D,C)=ω2, τ(C,D)=ω1, τ(C,C)=ω2</b>: izid se menja glede na j (C ali D), ne glede na i.</p>",
      pages: [119]
    },
    {
      q: "Razložite razliko med šibko (⪰_i) in strogo (≻_i) preferenco agenta i.",
      answer: "<p><b>Šibka preferenca</b> ω ⪰_i ω' pomeni u_i(ω) ≥ u_i(ω') — agent i ima izid ω vsaj tako rad kot ω'. Izida sta lahko enakovredna.</p><p><b>Stroga preferenca</b> ω ≻_i ω' pomeni u_i(ω) > u_i(ω') — agent i strogo preferira ω pred ω'. Izid ω mora biti boljši, ne le enako dober.</p>",
      pages: [117]
    },
    {
      q: "Zakaj sistem enega agenta v praksi ne obstaja? Kakšne so posledice za gradnjo agentnih sistemov?",
      answer: "<p>Realni scenariji vedno vključujejo interakcijo z drugimi agenti — vsak agent deluje v okolju, ki ga soupravljajo ostali. Primer: dva robota ne moreta skozi vrata hkrati.</p><p>Posledica: moramo graditi <b>družbo agentov</b>, formalno opisati organizacijska razmerja, tipe interakcij in medsebojne vplive. En agent je lahko šef drugemu.</p>",
      pages: [116]
    },
    {
      q: "Navedite vse komponente formalnega okvirja za dva agenta in razložite vsako.",
      answer: "<p><b>Ag = {i, j}</b> — množica agentov. <b>Ω = {ω1, ω2, ...}</b> — množica izidov/stanj sveta. <b>Ac = {C, D}</b> — množica dejanj (sodelovati/nasprotovati). <b>τ : Ac_i × Ac_j → Ω</b> — funkcija okolja.</p><p><b>u_i, u_j : Ω → ℝ</b> — ločeni ocenitveni funkciji. Vsak agent ima svojo. Izid je odvisen od kombinacije dejanj obeh agentov.</p>",
      pages: [116, 117, 119]
    }
  ]
},
{
  id: 'teorija-iger',
  name: 'Teorija iger & strategije',
  color: '#43e97b',
  questions: [
    {
      q: "Definirajte Nashovo ravnovesje in razložite, zakaj 'zaklene agente' v par strategij.",
      answer: "<p>Nashovo ravnovesje je par strategij (s_i, s_j), pri katerem: če agent i uporablja s_i, je s_j najboljši odziv agenta j, in obratno.</p><p><b>Noben agent nima vzpodbude za enostransko spremembo</b> — s spremembo bi le poslabšal lasten izid (ob predpostavki, da nasprotnik ostane pri svoji strategiji). Zato ravnovesje oba 'zaklene'. Nekateri scenariji imajo nič ali več NE.</p>",
      pages: [124]
    },
    {
      q: "Opišite paradoks zapornikove dileme — zakaj je paradoksalna?",
      answer: "<p>Vsak zapornik ima dominantno strategijo D (ne-sodelovati). Čeprav bi oba pridobila pri (C,C), racionalno individualno vedenje pripelje do (D,D).</p><p><b>Paradoks:</b> individualna racionalnost povzroči kolektivno iracionalen izid — (D,D) je edino Nashovo ravnovesje, a ni Pareto optimalno. (C,C) bi bilo boljše za oba, a nihče ne bo enostransko izbral C, ker tvega, da drugi ostane pri D.</p>",
      pages: [129, 130]
    },
    {
      q: "Opišite strategijo TIT-FOR-TAT in razložite, zakaj je bila uspešna na Axelrodovem turnirju.",
      answer: "<p>V prvi iteraciji (t=1) agent <b>sodeluje (C)</b>. V vsaki naslednji iteraciji posnema prejšnje dejanje nasprotnika.</p><p>Je <b>prijazna</b> (začne s C), <b>maščevalna</b> (takoj kaznuje D z D) in <b>odpuščajoča</b> (vrne se k C, ko se nasprotnik). Na turnirju uspešna, ker nagradi sodelovanje in kaznuje nesodelovaje brez dolge zamere.</p>",
      pages: [132]
    },
    {
      q: "Razložite igro piščanca: kakšni sta Nashovi ravnovesji in zakaj ni dominantnih strategij?",
      answer: "<p>Dva voznika vozita naravnost drug proti drugemu. D = vztraja, C = umakne se. Matrika: (D,D)=(0,0), (C,C)=(2,2), (D,C)=(3,1), (C,D)=(1,3).</p><p><b>Dve asimetrični NE: (D,C) in (C,D)</b> — ko eden vztraja, se drugemu splača umakniti. Ni dominantnih strategij, ker optimalna odločitev zavisi od nasprotnikovega dejanja. Gre za problem <b>koordinacije in tveganja</b>, ne dominantnih strategij.</p>",
      pages: [134]
    },
    {
      q: "Kaj je interakcija z ničelno vsoto? Navedite primer in razložite, zakaj ne dopušča kooperacije.",
      answer: "<p>Interakcija z ničelno vsoto: <b>u_i(ω) + u_j(ω) = 0 za vse ω ∈ Ω</b>. Kar pridobi eden, izgubi drugi. Vsak takšen scenarij je strogo tekmovalen.</p><p>Primer: <b>šah</b> (zmaga enega = poraz drugega). Ne dopušča kooperativnega vedenja — vsako izboljšanje izida enega pomeni poslabšanje za drugega, ni skupnega dobička iz sodelovanja.</p>",
      pages: [127, 128]
    },
    {
      q: "Razložite pojem dominantne strategije in iterativno eliminacijo dominiranih strategij.",
      answer: "<p>Strategija s1 <b>strogo dominira</b> s2, če daje vedno strogo večjo korist, ne glede na dejanje nasprotnika. <b>Šibka dominanca</b>: s1 daje vsaj enako korist v vseh izidih.</p><p><b>Iterativna eliminacija:</b> izločamo dominirane strategije in ponavljamo. Če ostane ena, je to edina racionalna izbira. Pri šibki eliminaciji tvegamo, da izločimo sicer koristne strategije v nekaterih kontekstih.</p>",
      pages: [122, 123]
    }
  ]
},
{
  id: 'doseganje-dogovorov',
  name: 'Doseganje dogovorov & dražbe',
  color: '#f9ca24',
  questions: [
    {
      q: "Naštejte in razložite vsaj štiri lastnosti, ki jih mora imeti dober protokol za pogajanje.",
      answer: "<p><b>(1) Zagotovljen uspeh</b> — dogovor bo vedno dosežen. <b>(2) Pareto učinkovitost</b> — ni izida, ki bi enemu agentu izboljšal položaj brez škode drugemu.</p><p><b>(3) Individualna racionalnost</b> — sledenje protokolu je v interesu udeležencev. <b>(4) Stabilnost</b> — agentom zagotavlja spodbudo za določeno vedenje (npr. NE). <b>(5) Enostavnost</b> — optimalna strategija je enostavno določljiva.</p>",
      pages: [137]
    },
    {
      q: "Opišite Vickrey-jevo dražbo in razložite, zakaj je dominantna strategija pošteno licitiranje.",
      answer: "<p>Zaprta dražba druge cene: en krog, vsak odda eno ponudbo, zmagovalec je z <b>najvišjo ponudbo</b>, plača pa znesek <b>druge najvišje ponudbe</b>.</p><p>Dominantna strategija = ponudi dejansko vrednost: ponudba nad vrednostjo poveča tveganje preplačila; ponudba pod vrednostjo zmanjša možnosti zmage, ne pa cene (ker plačaš drugo ceno). V obeh smereh se ne splača lagati.</p>",
      pages: [143, 144]
    },
    {
      q: "Primerjajte angleško in nizozemsko dražbo: mehanizem, dominantne strategije, prekletstvo zmagovalca.",
      answer: "<p><b>Angleška:</b> odprta naraščajoča, agenti zvišujejo ponudbe, plača se prva cena. Dominantna strategija: postopno višaj do mejne vrednosti. Prekletstvo zmagovalca: možna precenitev blaga.</p><p><b>Nizozemska:</b> odprta padajoča, dražitelj znižuje ceno, prvi ponudnik dobi blago. <b>Ni dominantne strategije</b> — kdaj ponuditi je strateška dilema. Ni prekletstva zmagovalca.</p>",
      pages: [140, 141]
    },
    {
      q: "Definirajte Pareto optimalni dogovor pri pogajanju o nalogah in razložite množico pogajanj.",
      answer: "<p>Dogovor δ1 je <b>Pareto optimalen</b>, če ga ne dominira noben drug dogovor — ni δ2, ki bi vsaj enemu agentu izboljšal koristnost brez škode drugemu. <b>koristnost(δ_i) = c(T_i) − c(D_i)</b> (prihranek v stroških).</p><p><b>Množica pogajanj</b> vsebuje vse dogovore, ki so hkrati: (1) <b>individualno racionalni</b> (šibko dominirajo začetni dogovor) in (2) <b>Pareto optimalni</b>.</p>",
      pages: [151, 152, 153]
    },
    {
      q: "Opišite špekulacijo pri dražbah: kaj je, kdaj se splača in kaj so stroški?",
      answer: "<p>Špekulacija je postopek, pri katerem ponudnik pridobiva informacije o <b>resnični vrednosti blaga</b> ali <b>vrednotenjih ostalih ponudnikov</b>.</p><p>Splača se, kadar potencialni dobički od pridobljenih informacij <b>presegajo njene stroške</b> (čas, denar). Brezplačna špekulacija ni možna. V angleški in nizozemski dražbi so časovni stroški posebej kritični — čas oddaje ponudbe je ključen.</p>",
      pages: [146]
    },
    {
      q: "Opišite strategijo Zeuthena: kako agent določi prvi predlog in kdo mora popustiti?",
      answer: "<p><b>Prvi predlog</b> = za agenta najboljši možni dogovor. <b>Kdo popusti?</b> Tisti z manjšo vrednostjo tveganja: <b>risk_i = (korist ob sprejemu − korist ob konfliktu) / korist ob konfliktu</b>.</p><p>Agent z manjšim risk_i je bolj pripravljen popustiti (manj izgubi pri konfliktu). Popusti toliko, da se razmerje tveganja v naslednji iteraciji obrne. Pri enakem tveganju se 'meče kovanec'.</p>",
      pages: [156]
    }
  ]
},
{
  id: 'pogajanja-argumentacija',
  name: 'Pogajanja & argumentacija',
  color: '#ff6b6b',
  questions: [
    {
      q: "Naštejte in opišite štiri načine argumentiranja po Gilbertu.",
      answer: "<p><b>(1) Logični</b> — podoben matematičnemu dokazu, deduktivni: A = true ∧ A ⇒ B, torej B = true.</p><p><b>(2) Čustveni</b> — sklicevanje na čustva in stališča: 'Kako bi se počutili, če bi se to zgodilo vam?'. <b>(3) Visceralni</b> — fizični/čutni vidik; argumenti s čutnimi zaznavami (vid, sluh, tip). <b>(4) Kisceralni</b> — sklicevanje na intuitivno, mistično ali religiozno.</p>",
      pages: [161]
    },
    {
      q: "Razložite razliko med ovrganjem (rebuttal) in spodkopavanjem (undercutting) argumenta.",
      answer: "<p><b>Ovrganje:</b> ⟨φ1, Γ1⟩ ovrže ⟨φ2, Γ2⟩, kadar φ1 napade <b>zaključek</b> φ2 — torej φ1 ⊢ ¬φ2. Napad gre na zaključek argumenta.</p><p><b>Spodkopavanje:</b> ⟨φ1, Γ1⟩ spodkopava ⟨φ2, Γ2⟩, kadar φ1 napade enega od <b>razlogov</b> ψ ∈ Γ2 — torej φ ⊢ ¬ψ. Napad gre na premise/razloge, ne na zaključek.</p>",
      pages: [165]
    },
    {
      q: "Opišite razrede argumentov A1–A5 in njihov vrstni red moči.",
      answer: "<p><b>A1:</b> vsi argumenti iz Δ. <b>A2:</b> netrivialni (Γ konsistentna). <b>A3:</b> za katere ni ovrgljivih argumentov. <b>A4:</b> za katere ni spodkopovalnih argumentov. <b>A5:</b> tavtološki (Γ = ∅ — zaključek vedno resničen).</p><p>Vrstni red moči: <b>A1 ≺ A2 ≺ A3 ≺ A4 ≺ A5</b>. Višja številka = bolj sprejemljiv, ker ima manj razlogov za dvom.</p>",
      pages: [167]
    },
    {
      q: "Opišite protokol monotoničnega konsenza: kako poteka in kakšno garancijo daje?",
      answer: "<p>Pogajanje gre skozi kruhe u = 1, 2, … V krogu u oba predlagata dogovor hkrati. Dogovor dosežen, če eden ugotovi, da je predlog drugega vsaj tako dober kot lasten.</p><p>V krogu u+1 agent <b>ne sme predlagati dogovora, ki je drugemu manj všeč</b> kot v krogu u (monotonost = poštenost). Ne garantira hitre konvergence — možnih je O(2^|T|) krogov.</p>",
      pages: [155]
    },
    {
      q: "Kaj je pomanjkljivost pogajanj brez argumentacije in kako argumentacija to odpravlja?",
      answer: "<p><b>(1) Ni utemeljitev</b> — agent ne pojasni, zakaj preferira določen izid. <b>(2) Statična funkcija koristnosti</b> — koristnostna funkcija se ne more spremeniti med pogajanji.</p><p>Argumentacija to odpravlja: agent poda razloge za svojo pozicijo, kar pri drugem agentu <b>revidira preference</b>. V fazi pogajanj se funkcija koristnosti dejansko lahko premeni ob izpostavljenosti novim argumentom.</p>",
      pages: [160]
    }
  ]
},
{
  id: 'komunikacija',
  name: 'Komunikacija med agenti',
  color: '#e056fd',
  questions: [
    {
      q: "Razložite tri vrste govornih dejanj po Johnu Austinu in navedite primer za vsako.",
      answer: "<p><b>(1) Lokucijsko</b> — izgovorjeni glasovi/besede z gramatičnim smislom. Primer: 'Rekel sem ji, naj gre.'</p><p><b>(2) Ilokucijsko</b> — govorčev namen/konvencionalna sila. Primer: 'Ukazal sem ji, naj gre.' <b>(3) Perlokucijsko</b> — dejanski učinek na sogovornika. Primer: 'S tem, da sem ji rekel, sem jo prepričal.' Performativnost: izrekanje znaka je hkrati izvedba dejanja ('Zdaj vaju razglašam…').</p>",
      pages: [173]
    },
    {
      q: "Naštejte pet kategorij govornih dejanj po Searlu in navedite primer za vsako.",
      answer: "<p><b>(1) Reprezentativno</b> — zaveže govorca k resničnosti trditve. Pr.: 'Dežuje.' <b>(2) Novodilo</b> — spodbudi poslušalca k dejanju. Pr.: 'Zapri okno.' <b>(3) Zavezujoče</b> — zaveže govorca k prihodnjemu dejanju. Pr.: 'Obljubim, da pridem.'</p><p><b>(4) Izrazno</b> — izrazi psihološko stanje. Pr.: 'Hvala!' <b>(5) Deklaracija</b> — ustvari institucionalno stanje. Pr.: 'Napovedujem vojno.'</p>",
      pages: [174]
    },
    {
      q: "Opišite razliko med KIF in KQML ter kako se skupaj uporabljata.",
      answer: "<p><b>KIF (Knowledge Interchange Format):</b> vsebinski jezik za izražanje znanja o domeni — opisuje lastnosti in relacije objektov z logiko prvega reda (defrelation, =, kvantifikatorji).</p><p><b>KQML (Knowledge Query and Manipulation Language):</b> komunikacijski jezik — določa format 'ovojnice' sporočila s performativom (ask-one, tell, reply…) in parametri (:content, :receiver, :language, :ontology). KQML določa <b>kako</b>, KIF pa <b>kaj</b> komuniciramo.</p>",
      pages: [181, 184]
    },
    {
      q: "Opišite predpogoje in rezultat Inform(S,H,φ) ter v čem se razlikuje od Convince(S,H,φ).",
      answer: "<p><b>Inform(S,H,φ):</b> Predpogoji: (S verjame φ) in (S verjame (S želi φ)). Rezultat: <b>(H verjame (S verjame φ))</b> — H ve, da S verjame v φ, a ne nujno da H sam verjame.</p><p><b>Convince(S,H,φ):</b> Predpogoji: (H verjame (S verjame (S želi φ))). Rezultat: <b>(H verjame φ)</b> — H dejansko verjame. Razlika: Inform posreduje vedenje o S-jevih prepričanjih, Convince doseže dejansko prepričanje H.</p>",
      pages: [179, 180]
    },
    {
      q: "Opišite strukturo KQML sporočila in razložite vlogo performativa na konkretnem primeru.",
      answer: "<p>KQML sporočilo ima dve komponenti: <b>(1) performativ</b> — razred sporočila, poda ilokucijsko moč (ask-one, tell, reply, subscribe…); <b>(2) parametri</b> kot pari atribut/vrednost: :content, :receiver, :language, :ontology.</p><p>Primer: <code>(ask-one :content (PRICE IBM ?price) :receiver stock-server :language LPROLOG :ontology NYSE-TICKS)</code>. Performativ je <b>ask-one</b> — zahteva natanko en odgovor o ceni delnic IBM.</p>",
      pages: [184]
    }
  ]
}
];
