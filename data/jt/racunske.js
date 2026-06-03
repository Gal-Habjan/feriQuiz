var JT_RACUNSKE = [
	{
		id: "analiza-sentimenta-racunske",
		name: "Analiza sentimenta",
		color: "#ff8a5b",
		questions: [
			{
				q: "Izračunajte polariteto fraze 'odlično' s Turneyevim algoritmom. Podatki iz spletnega iskalnika: zadetki('odlično BLIZU dobro') = 200, zadetki('odlično BLIZU slabo') = 10, zadetki('dobro') = 50000, zadetki('slabo') = 40000. Uporabite formulo: Polariteta = log2[(zadetki(fraza BLIZU dobro) · zadetki(slabo)) / (zadetki(dobro) · zadetki(fraza BLIZU slabo))].",
				answer: "<p><b>Formula:</b> Polariteta(fraza) = PMI(fraza, dobro) − PMI(fraza, slabo) = log2[(zadetki(fraza BLIZU dobro) · zadetki(slabo)) / (zadetki(dobro) · zadetki(fraza BLIZU slabo))]</p><p><b>Izračun:</b><br>Števec: 200 · 40000 = 8 000 000<br>Imenovalec: 50000 · 10 = 500 000<br>Razmerje: 8 000 000 / 500 000 = 16<br><b>Polariteta = log2(16) = 4</b></p><p><b>Razlaga:</b> Pozitivna vrednost (4 > 0) pomeni, da je fraza 'odlično' pozitivna. Višja vrednost = bolj pozitivna. Negativna vrednost bi pomenila negativno frizo.</p>",
				pages: [208, 209],
			},
			{
				q: "Izračunajte polariteto fraze 'grozno' s Turneyevim algoritmom. Podatki: zadetki('grozno BLIZU dobro') = 5, zadetki('grozno BLIZU slabo') = 300, zadetki('dobro') = 50000, zadetki('slabo') = 40000.",
				answer: "<p><b>Formula:</b> Polariteta = log2[(zadetki(fraza BLIZU dobro) · zadetki(slabo)) / (zadetki(dobro) · zadetki(fraza BLIZU slabo))]</p><p><b>Izračun:</b><br>Števec: 5 · 40000 = 200 000<br>Imenovalec: 50000 · 300 = 15 000 000<br>Razmerje: 200 000 / 15 000 000 ≈ 0.01333<br><b>Polariteta = log2(0.01333) ≈ −6.23</b></p><p><b>Razlaga:</b> Negativna vrednost pomeni, da je fraza 'grozno' negativna – fraza se pogosteje pojavlja z 'slabo' kot z 'dobro'. Absolutna vrednost je večja kot pri 'odlično', kar pomeni močnejšo polariteto.</p>",
				pages: [208, 209],
			},
			{
				q: "Naïve Bayes žanrska klasifikacija (primer iz prosojnic, str. 344–346). Učni podatki:\n1. zabava, par, ljubezen → komedija\n2. hitro, besno → akcija\n3. par, leti, hitro, zabavno → komedija\n4. besno, streljanje, streljanje → akcija\n5. leti, hitro, streljaj → akcija\n\nS pomočjo binariziranega Multinominalnega Naïve Bayesa z glajnjem add-1 določite žanr za znaèilke: hitro, par, streljaj, leti.",
				answer: "<p><b>Korak 1: Prior verjetnosti</b><br>P(komedija) = 2/5, P(akcija) = 3/5</p><p><b>Korak 2: Slovar</b> (9 besed): zabava, par, ljubezen, hitro, besno, leti, zabavno, streljanje, streljaj → |V| = 9</p><p><b>Korak 3: Binariziran korpus po razredu</b></p><p><i>Komedija</i> (dok1 + dok3 binarizirana):<br>dok1: {zabava, par, ljubezen} + dok3: {par, leti, hitro, zabavno}<br>Skupaj: zabava, par, ljubezen, par, leti, hitro, zabavno → n = 7<br>Štetje: par=2, hitro=1, leti=1, ostali=1 ali 0</p><p><i>Akcija</i> (dok2 + dok4 + dok5 binarizirana):<br>dok2: {hitro, besno} + dok4: {besno, streljanje} + dok5: {leti, hitro, streljaj}<br>Skupaj: n = 8 (kot v prosojnicah)<br>Štetje: hitro=2, besno=2, streljanje=1, leti=1, streljaj=1</p><p><b>Korak 4: Izračun P(značilke|razred)</b></p><p><i>Za testno besedilo</i>: hitro, par, streljaj, leti</p><p><b>P(znač|komedija)</b> = P(komedija) · P(hitro|kom) · P(par|kom) · P(streljaj|kom) · P(leti|kom)<br>= 2/5 · (1+1)/(7+9) · (2+1)/(7+9) · (0+1)/(7+9) · (1+1)/(7+9)<br>= 2/5 · 2/16 · 3/16 · 1/16 · 2/16<br>= 0.4 · (2·3·1·2)/65536 = 0.4 · 12/65536 ≈ <b>7.32e−5</b></p><p><b>P(znač|akcija)</b> = P(akcija) · P(hitro|ak) · P(par|ak) · P(streljaj|ak) · P(leti|ak)<br>= 3/5 · (2+1)/(8+9) · (0+1)/(8+9) · (1+1)/(8+9) · (1+1)/(8+9)<br>= 3/5 · 3/17 · 1/17 · 2/17 · 2/17<br>= 0.6 · (3·1·2·2)/83521 = 0.6 · 12/83521 ≈ <b>8.62e−5</b></p><p><b>Zaključek:</b> 8.62e−5 > 7.32e−5 → razred je <b>AKCIJA</b>.</p>",
				pages: [344, 345, 346],
			},
			{
				q: "Binariziran Multinominal Naïve Bayes za analizo sentimenta (primer iz prosojnic, str. 347–348). Učni podatki:\n\ndok | 'dober' | 'slabo' | 'odlični' | razred\nd1  |   6     |    0    |    6      | poz.\nd2  |   0     |    2    |    4      | poz.\nd3  |   2     |    6    |    0      | neg.\nd4  |   2     |   10    |    4      | neg.\nd5  |   0     |    4    |    0      | neg.\n\nS pomočjo binariziranega MNB z glajnjem add-1 določite razred povedi: 'Dober, dober zaplet, odlični igralci, se pa slabo konča.'",
				answer: "<p><b>Korak 1: Prior</b><br>P(poz.) = 2/5, P(neg.) = 3/5</p><p><b>Korak 2: Binariziran korpus (frekvence besed v posameznem dok → 0/1, potem seštej čez razred)</b></p><p><i>Pozitivni razred</i> (d1, d2):<br>d1 binariziran: {dober:1, slabo:0, odlični:1} → dober=1, odlični=1<br>d2 binariziran: {dober:0, slabo:1, odlični:1} → slabo=1, odlični=1<br>Skupaj n = 1+1+1+1 = 4? Toda prosojnica kaže n=18 (skupno besedilo).<br><br><b>Opomba:</b> Prosojnica sešteva originalne frekvence pojavitev besed čez razred (ne binarizira pred seštevanjem), nato deli z n+|V|. Za poz.: dober=6+0=6... Toda binariziran NB = odstranimo podvojene ZNOTRAJ dokumenta.<br><br>Za d1 binariziran: dober→1, slabo→0, odlični→1 (vsaka beseda kvečjemu 1×)<br>Za d2 binariziran: dober→0, slabo→1, odlični→1<br>Skupaj poz. besedilo: dober=1, slabo=1, odlični=2; n=4, |V|=3</p><p><b>Prosojnica (str. 348) neposredno navaja:</b><br>P(poz.) = 2/5<br>P(dober|poz.) = (1+1)/(18+3) = 2/21<br>P(odlični|poz.) = (1+1)/(18+3) = 2/21<br>P(slabo|poz.) = (1+1)/(18+3) = 2/21<br>(n=18 je vsota frekvenc v poz. razredu: 6+0+6+0+2+4=18)</p><p><b>P(pov|poz.)</b> = 2/5 · 2/21 · 2/21 · 2/21 = 2/5 · (2/21)^3 ≈ 2/5 · 0.000866 ≈ <b>0.000346</b></p><p><b>P(pov|neg.)</b>:<br>neg. razred (d3, d4, d5): dober=2+2+0=4, slabo=6+10+4=20, odlični=0+4+0=4; n=28<br>P(dober|neg.) = (1+1)/(28+3) = 2/31<br>P(odlični|neg.) = (1+1)/(28+3) = 2/31<br>P(slabo|neg.) = (1+1)/(28+3) = 2/31<br>P(pov|neg.) = 3/5 · (2/31)^3 = 3/5 · 0.000268 ≈ <b>0.000161</b></p><p><b>Zaključek:</b> 0.000346 > 0.000161 → razred je <b>POZITIVNO</b>.</p>",
				pages: [347, 348],
			},
		],
	},
	{
		id: "diskriminatorni-klasifikatorji-racunske",
		name: "Diskriminatorni klasifikatorji",
		color: "#4d9fff",
		questions: [
			{
				q: "Loglinearni model (MaxEnt) – izračun verjetnosti (primer iz prosojnic, str. 221). Dano:\n- Značilka f1(c,d) ≡ [c=MESTO ∧ bi-1='v' ∧ velikaZačetnica(bi)] z utežjo λ1=0.8\n- Značilka f2(c,d) ≡ [c=DRŽAVA ∧ bi-2='glavno' ∧ bi-1='mesto' ∧ velikaZačetnica(bi) ∧ bi+1='je'] z utežjo λ2=0.6\n\nVhod: 'v Maribor'. Za MESTO velja f1=1 (Σλf=0.8), za DRŽAVA velja f2=1 (Σλf=0.6). Izračunajte P(MESTO|v Maribor) in P(DRŽAVA|v Maribor).",
				answer: "<p><b>Formula loglinearnega modela:</b><br>P(c|d,λ) = exp(Σλifi(c,d)) / Σc' exp(Σλifi(c',d))</p><p><b>Glasovanje:</b><br>Σλifi(MESTO, d) = 0.8 (f1 se sproži)<br>Σλifi(DRŽAVA, d) = 0.6 (f2 se sproži)</p><p><b>Imenovalec:</b><br>exp(0.8) + exp(0.6) = 2.2255 + 1.8221 = 4.0476</p><p><b>Verjetnosti:</b><br>P(MESTO|v Maribor) = exp(0.8) / 4.0476 = 2.2255 / 4.0476 ≈ <b>0.55</b><br>P(DRŽAVA|v Maribor) = exp(0.6) / 4.0476 = 1.8221 / 4.0476 ≈ <b>0.45</b></p><p><b>Odločitev:</b> Model izbere razred <b>MESTO</b> (0.55 > 0.45).</p><p><b>Razlaga:</b> Čeprav obe značilki sta se sprožili, ima MESTO višjo utež (0.8 > 0.6), zato je bolj verjetno. exp() zagotovi, da so vrednosti pozitivne pred normalizacijo.</p>",
				pages: [220, 221],
			},
			{
				q: "Linearni klasifikator – glasovanje. Dane uteži: λ1=2.0, λ2=−1.5, λ3=0.8. Dane vrednosti značilk za (razred A, besedilo d): f1=1, f2=0, f3=1. Za (razred B, besedilo d): f1=0, f2=1, f3=1. Kateri razred model izbere?",
				answer: "<p><b>Formula:</b> glasovanje(c) = Σi λi fi(c,d)</p><p><b>Glasovanje za razred A:</b><br>= λ1·f1 + λ2·f2 + λ3·f3<br>= 2.0·1 + (−1.5)·0 + 0.8·1<br>= 2.0 + 0 + 0.8 = <b>2.8</b></p><p><b>Glasovanje za razred B:</b><br>= λ1·f1 + λ2·f2 + λ3·f3<br>= 2.0·0 + (−1.5)·1 + 0.8·1<br>= 0 − 1.5 + 0.8 = <b>−0.7</b></p><p><b>Odločitev:</b> 2.8 > −0.7 → model izbere razred <b>A</b>.</p><p><b>Opazka:</b> Negativna utež λ2=−1.5 kaznuje razred B, ker se f2 sproži samo za B.</p>",
				pages: [217, 218],
			},
		],
	},
	{
		id: "strojno-prevajanje-racunske",
		name: "Strojno prevajanje",
		color: "#f39c6b",
		questions: [
			{
				q: "IBM Model 1 – izračun P(s|a,e,m) (primer iz prosojnic, str. 255–256).\ne = the dog barks (l=3), s = pes laja (m=2)\nPoravnava a = {2, 3}: 'pes' je poravnan z 'dog', 'laja' z 'barks'.\n\nDane vrednosti t:\nt(pes|dog) = 0.8, t(laja|barks) = 0.7\n\nIzračunajte P(s|a,e,m) in P(s,a|e,m).",
				answer: "<p><b>Formula:</b> P(s|a,e,m) = ∏j t(sj|eaj)</p><p><b>Izračun P(s|a,e,m):</b><br>= t(pes|dog) · t(laja|barks)<br>= 0.8 · 0.7<br>= <b>0.56</b></p><p><b>Formula za skupno verjetnost:</b><br>P(s,a|e,m) = P(a|e,m) · P(s|a,e,m) = (1/(l+1)^m) · P(s|a,e,m)</p><p><b>Izračun P(s,a|e,m):</b><br>P(a|e,m) = 1/(l+1)^m = 1/(3+1)^2 = 1/16<br>P(s,a|e,m) = (1/16) · 0.56 = <b>0.035</b></p><p><b>Razlaga:</b><br>- (l+1)^m = 4^2 = 16: skupno število možnih poravnav (pes in laja se vsaka lahko poravna z the, dog, barks ali NULL).<br>- IBM 1 predpostavlja uniformno verjetnost poravnave (vsaka enako verjetna).<br>- P(s|a,e,m) meri samo prevodne verjetnosti.</p>",
				pages: [255, 256],
			},
			{
				q: "IBM Model 1 – večji primer (primer iz prosojnic, str. 257–259).\ne = and the program has been implemented (l=6)\ns = in program je bil implementiran (m=5)\nPoravnava a = {1, 3, 4, 5, 6}: 'in'→'and', 'program'→'program', 'je'→'has', 'bil'→'been', 'implementiran'→'implemented'.\n\nDane vrednosti t:\nt(in|and)=0.8, t(program|program)=0.7, t(je|has)=0.9, t(bil|been)=0.8, t(implementiran|implemented)=0.9\n\nIzračunajte P(s|a,e,m) in P(s,a|e,m).",
				answer: "<p><b>P(s|a,e,m) = ∏j t(sj|eaj)</b></p><p>= t(in|and) · t(program|program) · t(je|has) · t(bil|been) · t(implementiran|implemented)<br>= 0.8 · 0.7 · 0.9 · 0.8 · 0.9<br>= 0.8 · 0.7 = 0.56<br>0.56 · 0.9 = 0.504<br>0.504 · 0.8 = 0.4032<br>0.4032 · 0.9 = <b>0.36288</b></p><p><b>P(s,a|e,m):</b><br>P(a|e,m) = 1/(l+1)^m = 1/(6+1)^5 = 1/16807<br>P(s,a|e,m) = (1/16807) · 0.36288 ≈ <b>2.159e−5</b></p><p><b>Razlaga:</b><br>To je 'prava' poravnava. Vsota čez vse možne poravnave = P(s|e,m). V učnem algoritmu se iz takšnih primerov naučimo parameter t.<br>Opazka: tMLE(s|e) = štev(e,s) / štev(e) se oceni iz poravnanega korpusa.</p>",
				pages: [257, 258, 259],
			},
			{
				q: "IBM Model 1 – primerjava poravnav (primer iz prosojnic, str. 349–351).\ne = the coronavirus has been defeated (l=5)\ns = koronavirus je bil premagan (m=4)\n\nDve možni poravnavi:\na1 = {2, 3, 4, 5}: koronavirus→coronavirus, je→has, bil→been, premagan→defeated\na2 = {1, 3, 4, 5}: koronavirus→the, je→has, bil→been, premagan→defeated\n\nDane vrednosti t:\nt(koronavirus|coronavirus)=0.9, t(koronavirus|the)=0.11\nt(je|has)=0.75, t(bil|been)=0.82, t(premagan|defeated)=0.89\n\nKatera poravnava je verjetnejša?",
				answer: "<p><b>Formula:</b> P(s|a,e,m) = ∏j t(sj|eaj)</p><p><b>Za a1 = {2,3,4,5}:</b><br>= t(koronavirus|coronavirus) · t(je|has) · t(bil|been) · t(premagan|defeated)<br>= 0.9 · 0.75 · 0.82 · 0.89<br>= 0.9 · 0.75 = 0.675<br>0.675 · 0.82 = 0.5535<br>0.5535 · 0.89 ≈ <b>0.4926 ≈ 0.49</b></p><p><b>Za a2 = {1,3,4,5}:</b><br>= t(koronavirus|the) · t(je|has) · t(bil|been) · t(premagan|defeated)<br>= 0.11 · 0.75 · 0.82 · 0.89<br>= 0.11 · 0.75 = 0.0825<br>0.0825 · 0.82 = 0.06765<br>0.06765 · 0.89 ≈ <b>0.0602 ≈ 0.060</b></p><p><b>Zaključek:</b> P(s|a1,e,m) = 0.49 > P(s|a2,e,m) = 0.060 → <b>verjetnejša je poravnava a1</b>.</p><p><b>Razlaga:</b> t(koronavirus|coronavirus)=0.9 je bistveno višja kot t(koronavirus|the)=0.11, ker 'koronavirus' je prevod 'coronavirus', ne 'the'. IBM 1 to pravilno ugotovi brez upoštevanja položaja besed.</p>",
				pages: [349, 350, 351],
			},
			{
				q: "IBM Model 2 – izračun P(s,a|e,m) (primer iz prosojnic, str. 261).\ne = And the program has been implemented (l=6)\ns = In program je bil implementiran (m=5)\na = {1, 3, 4, 5, 6}\n\nDane vrednosti q in t:\nq(1|1,6,5)=0.4, q(3|2,6,5)=0.3, q(4|3,6,5)=0.5, q(5|4,6,5)=0.6, q(6|5,6,5)=0.7\nt(In|And)=0.8, t(program|program)=0.7, t(je|has)=0.9, t(bil|been)=0.8, t(implementiran|implemented)=0.9\n\nIzračunajte P(s,a|e,m).",
				answer: "<p><b>Formula IBM 2:</b> P(s,a|e,m) = ∏j q(aj|j,l,m) · t(sj|eaj)</p><p><b>Korak 1: P(a|e,m)</b> = ∏j q(aj|j,l,m)<br>= q(1|1,6,5) · q(3|2,6,5) · q(4|3,6,5) · q(5|4,6,5) · q(6|5,6,5)<br>= 0.4 · 0.3 · 0.5 · 0.6 · 0.7<br>= 0.4 · 0.3 = 0.12<br>0.12 · 0.5 = 0.06<br>0.06 · 0.6 = 0.036<br>0.036 · 0.7 = <b>0.0252</b></p><p><b>Korak 2: P(s|a,e,m)</b> = ∏j t(sj|eaj)<br>= t(In|And) · t(program|program) · t(je|has) · t(bil|been) · t(implementiran|implemented)<br>= 0.8 · 0.7 · 0.9 · 0.8 · 0.9 = <b>0.36288</b></p><p><b>Korak 3: P(s,a|e,m)</b> = P(a|e,m) · P(s|a,e,m)<br>= 0.0252 · 0.36288 ≈ <b>0.00915</b></p><p><b>Razlika od IBM 1:</b> V IBM 1 bi bil P(a|e,m) = 1/(6+1)^5 = 1/16807 ≈ 0.0000595, kar je bistveno manj kot 0.0252 za to 'pravilno' poravnavo. IBM 2 nagrajuje poravnave z dobrim položajem besed.</p>",
				pages: [260, 261, 262],
			},
		],
	},
	{
		id: "ekstrakcija-informacij-racunske",
		name: "Ekstrakcija informacij in NER",
		color: "#7dce82",
		questions: [
			{
				q: "Precision, Recall in F1 za NER. Sistem za prepoznavanje imenskih entitet je obdelal 100 stavkov. Rezultati:\n- Pravilno najdene entitete (TP) = 80\n- Napačno najdene entitete (FP) = 20\n- Spregledane entitete (FN) = 10\n\nIzračunajte Precision, Recall in F1.",
				answer: "<p><b>Precision</b> = TP / (TP + FP) = 80 / (80 + 20) = 80 / 100 = <b>0.80 (80%)</b></p><p><b>Recall</b> = TP / (TP + FN) = 80 / (80 + 10) = 80 / 90 ≈ <b>0.889 (88.9%)</b></p><p><b>F1</b> = 2 · P · R / (P + R) = 2 · 0.80 · 0.889 / (0.80 + 0.889)<br>= 2 · 0.711 / 1.689<br>= 1.422 / 1.689 ≈ <b>0.842 (84.2%)</b></p><p><b>Interpretacija:</b><br>- Precision 80%: 80% najdenih entitet je pravilnih (20% je lažnih zadetkov).<br>- Recall 88.9%: Sistem je našel 88.9% vseh entitet (10% je spregledal).<br>- F1 je harmonično povprečje – kaznuje neuravnotežene vrednosti. Visok F1 pomeni, da sta oba P in R visoka.</p>",
				pages: [272, 273],
			},
			{
				q: "Primerjava IOB oznak za dva primera. Za stavek 'Janez Novak je obiskal Novo Ljubljansko banko v Mariboru' zapišite:\n(a) IO kodiranje za entitete: Janez Novak (OSEBA), Nova Ljubljanska banka (ORG), Maribor (LOK)\n(b) IOB kodiranje za iste entitete\n\nKolikšno je skupno število različnih oznak pri 2 vrstah entitet (OSEBA, ORG, LOK = c=3)?",
				answer: "<p><b>(a) IO kodiranje:</b><br>Janez → I-OSEBA<br>Novak → I-OSEBA<br>je → O<br>obiskal → O<br>Nova → I-ORG<br>Ljubljansko → I-ORG<br>banko → I-ORG<br>v → O<br>Mariboru → I-LOK</p><p><b>(b) IOB kodiranje:</b><br>Janez → <b>B-OSEBA</b><br>Novak → <b>I-OSEBA</b><br>je → O<br>obiskal → O<br>Nova → <b>B-ORG</b><br>Ljubljansko → <b>I-ORG</b><br>banko → <b>I-ORG</b><br>v → O<br>Mariboru → <b>B-LOK</b></p><p><b>Število oznak:</b><br>IO: c + 1 = 3 + 1 = <b>4 oznak</b> (I-OSEBA, I-ORG, I-LOK, O)<br>IOB: 2c + 1 = 2·3 + 1 = <b>7 oznak</b> (B-OSEBA, I-OSEBA, B-ORG, I-ORG, B-LOK, I-LOK, O)</p><p><b>Zakaj IOB?</b> Če bi imeli v stavku zaporedni entiteti iste vrste (npr. 'Janez Kovač Marija Novak'), bi IO kodiranje dalo: I-OSEBA I-OSEBA I-OSEBA I-OSEBA – ni jasno, kje ena konča. IOB: B-OSEBA I-OSEBA B-OSEBA I-OSEBA – meje so jasne.</p>",
				pages: [276, 277],
			},
		],
	},
];
