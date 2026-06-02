var JZ_RACUNSKE = [
	{
		id: "racunske-naloge",
		name: "Računske naloge",
		color: "#ffd166",
		questions: [
			{
				q: "Izračunajte TF-IDF vrednost za besedo 'data' v dokumentu, kjer je TF=4, v korpusu pa se beseda pojavi v 25 od 1000 dokumentov. Uporabite log( N / df ).",
				answer: "<p>TF = 4. IDF = log(1000 / 25) = log(40) ≈ 3.689. TF-IDF = TF × IDF = 4 × 3.689 ≈ <b>14.756</b>.</p>",
				pages: [221],
			},
			{
				q: "Imate dokument s 200 besedami; beseda 'model' se pojavi 5×. Normalizirajte TF z deljenjem z dolžino dokumenta in izračunajte normaliziran TF za 'model'.",
				answer: "<p>Normaliziran TF = frekvenca / skupno stevilo besed = 5 / 200 = <b>0.025</b>.</p>",
				pages: [221],
			},
			{
				q: "Na diapozitivu (str. 247) je enačba za n-gram frekvence. Če imamo za 2-gram 'neural network' frekvenco 12 in skupno 2-gramov 600, kolikšen je delež?",
				answer: "<p>Delež = 12 / 600 = <b>0.02</b> oziroma 2%.</p>",
				pages: [247],
			},
			{
				q: "Na strani 248 primer prikazuje znižanje dimenzij z SVD. Če originalna matrika ima singularne vrednosti [50, 30, 5], koliko energije pokrije prva dva komponente (v %)?",
				answer: "<p>Skupna energija = 50^2 + 30^2 + 5^2 = 2500 + 900 + 25 = 3425. Prva dva pokrivata 2500 + 900 = 3400. Delež = 3400 / 3425 ≈ <b>0.9927</b> ≈ 99.27%.</p>",
				pages: [248],
			},
			{
				q: "Na str. 251 je primer izračuna natančnosti klasifikatorja: TP=80, FP=20, FN=10. Izračunajte precision in recall.",
				answer: "<p>Precision = TP / (TP + FP) = 80 / (80+20) = 80/100 = <b>0.80</b>. Recall = TP / (TP + FN) = 80 / (80+10) = 80/90 ≈ <b>0.8889</b> (≈88.89%).</p>",
				pages: [251],
			},
			{
				q: "Stran 252 prikazuje F1 iz precision in recall; izračunajte F1 za vrednosti iz prejšnjega primera (precision=0.8, recall≈0.8889).",
				answer: "<p>F1 = 2 * (precision * recall) / (precision + recall) = 2*(0.8*0.8889)/(0.8+0.8889) ≈ 2*0.7111/1.6889 ≈ 1.4222/1.6889 ≈ <b>0.842</b> (≈84.2%).</p>",
				pages: [252],
			},
			{
				q: "Na str. 256 je prikaz utežev v linearnem modelu. Če imamo vektor uteži [0.5, -0.2, 0.3] in značilke [2, 4, 1], izračunajte linearno kombinacijo (brez bias).",
				answer: "<p>Skalarni produkt = 0.5*2 + (-0.2)*4 + 0.3*1 = 1.0 - 0.8 + 0.3 = <b>0.5</b>.</p>",
				pages: [256],
			},
			{
				q: "Na str. 259 je primer normalizacije vektorja; normalizirajte vektor [3, 4] (L2).",
				answer: "<p>L2 norma = sqrt(3^2 + 4^2) = 5. Normaliziran vektor = [3/5, 4/5] = [<b>0.6</b>, <b>0.8</b>].</p>",
				pages: [259],
			},
			{
				q: "Stran 261 prikazuje primer izračuna PMI med besedama A in B: P(A,B)=0.01, P(A)=0.05, P(B)=0.02. Izračunajte PMI = log( P(A,B) / (P(A)P(B)) ).",
				answer: "<p>P(A)P(B)=0.05*0.02=0.001. Razmerje = 0.01/0.001 = 10. PMI = log(10) ≈ <b>2.3026</b>.</p>",
				pages: [261],
			},
			{
				q: "Na isti strani (261) je primer ocene asociativne moči: če je frekvenca sopojavljanja 30 in pričakovana frekvenca 12, izračunajte uplift = 30/12.",
				answer: "<p>Uplift = 30 / 12 = <b>2.5</b>.</p>",
				pages: [261],
			},
			{
				q: "Na str. 264 je primer ocene verjetnosti prevoda t(s|e). Če je t(s|e)=0.02 in verjetnost poravnave q=0.5, izračunajte skupno prispevek (multiplikativno).",
				answer: "<p>Skupni prispevek = t(s|e) * q = 0.02 * 0.5 = <b>0.01</b>.</p>",
				pages: [264],
			},
			{
				q: "Tudi na 264: če imamo tri neodvisne parne verjetnosti 0.02, 0.03 in 0.04, kolikšna je njihova produktna verjetnost?",
				answer: "<p>Produkt = 0.02 * 0.03 * 0.04 = 0.000024 = <b>2.4e-5</b>.</p>",
				pages: [264],
			},
			{
				q: "V poglavju 'PRIMERI NALOG' (str. 343) je izračun stroškovne funkcije; če so napake [1, 2, -1] in prištevamo kvadratne napake, izračunajte MSE (povprečna kvadratna napaka).",
				answer: "<p>Kvadratne napake = [1^2, 2^2, (-1)^2] = [1,4,1]. Sum = 6. MSE = 6 / 3 = <b>2</b>.</p>",
				pages: [343],
			},
			{
				q: "Na nadaljevanju primerov (str. 344) je vaja izračuna gradienta za preprosto funkcijo L(w)= (w-3)^2. Izračunajte grad L pri w=1 in okrepite korak posodobitve z η=0.1 (w_new = w - η * grad).",
				answer: "<p>dL/dw = 2*(w-3). Pri w=1: grad = 2*(1-3) = -4. Posodobitev: w_new = 1 - 0.1*(-4) = 1 + 0.4 = <b>1.4</b>.</p>",
				pages: [344],
			},
		],
	},
];
