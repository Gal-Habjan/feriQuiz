/* global SUBJECTS */
const LABELS = ["A", "B", "C", "D"];

// ── STATE ─────────────────────────────────────────────
let currentSubject = SUBJECTS[0];
let currentMode = "mcq"; // 'mcq', 'open' or 'racunske'
let activeChapters = [];
let flatQuestions = [];
let answers = {}; // index → { chosen, correct } for MCQ | { revealed, correct } for open
let currentChapterId = null;

function shuffle(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function buildFlat(chapters, limit) {
	const flat = [];
	chapters.forEach((ch) => {
		const shuffledQs = shuffle(ch.questions);
		shuffledQs.forEach((q) => {
			const indexed = q.opts.map((o) => ({
				text: o[0],
				correct: o[1],
				explanation: o[2],
			}));
			flat.push({
				...q,
				opts: shuffle(indexed),
				chapterName: ch.name,
				chapterColor: ch.color,
				pages: q.pages || [],
			});
		});
	});
	if (limit && limit < flat.length) return shuffle(flat).slice(0, limit);
	return flat;
}

function buildOpenFlat(chapters, limit) {
	const flat = [];
	chapters.forEach((ch) => {
		shuffle(ch.questions).forEach((q) => {
			flat.push({
				...q,
				chapterName: ch.name,
				chapterColor: ch.color,
				pages: q.pages || [],
			});
		});
	});
	if (limit && limit < flat.length) return shuffle(flat).slice(0, limit);
	return flat;
}

// ── SPLASH INIT ───────────────────────────────────────
function initSplash() {
	const subject = currentSubject;
	const chapters =
		currentMode === "open"
			? subject.openChapters
			: currentMode === "racunske"
				? subject.racunskeChapters || []
				: subject.mcqChapters;

	// Dynamic subtitle
	const sub = document.getElementById("splashSub");
	if (sub)
		sub.innerHTML = `Interaktivni kviz iz snovi predmeta <em>${subject.fullName}</em>. Izberi poglavje ali reši vse skupaj.`;

	// Subject tabs (hidden by CSS when only one subject)
	const tabsDiv = document.getElementById("subjectTabs");
	if (tabsDiv) {
		tabsDiv.innerHTML = "";
		SUBJECTS.forEach((s) => {
			const btn = document.createElement("button");
			btn.className =
				"subject-btn" + (s.id === subject.id ? " active" : "");
			btn.textContent = s.name;
			btn.onclick = () => setSubject(s.id);
			tabsDiv.appendChild(btn);
		});
	}

	// Chapter grid
	const grid = document.getElementById("chapterGrid");
	grid.innerHTML = "";
	chapters.forEach((ch, i) => {
		const card = document.createElement("div");
		card.className = "ch-card";
		card.style.setProperty("--card-accent", ch.color);
		card.innerHTML = `
      <div class="ch-num">POGLAVJE ${String(i + 1).padStart(2, "0")}</div>
      <div class="ch-name">${ch.name}</div>
      <div class="ch-count">${ch.questions.length} vprašanj</div>`;
		card.onclick = () => startQuiz(ch.id);
		grid.appendChild(card);
	});

	// "All" button label
	const totalQ = chapters.reduce((s, c) => s + c.questions.length, 0);
	const limit =
		currentMode === "open" ? Math.min(20, totalQ) : Math.min(40, totalQ);
	const btnAll = document.getElementById("btnAll");
	if (btnAll) {
		btnAll.textContent = `▶ Reši vse skupaj (${limit} naključnih)`;
	}

	// Mode buttons: reflect active state and hide racunske if subject has none
	const btnMCQ = document.getElementById("modeMCQ");
	const btnOpen = document.getElementById("modeOpen");
	const btnRac = document.getElementById("modeRacunske");
	if (btnMCQ) btnMCQ.classList.toggle("active", currentMode === "mcq");
	if (btnOpen) btnOpen.classList.toggle("active", currentMode === "open");
	if (btnRac) {
		const hasRac = !!(
			subject.racunskeChapters && subject.racunskeChapters.length
		);
		btnRac.style.display = hasRac ? "inline-block" : "none";
		if (hasRac) {
			btnRac.classList.toggle("active", currentMode === "racunske");
		} else {
			// if current mode was racunske but this subject lacks chapters, fall back to open
			if (currentMode === "racunske") {
				currentMode = "open";
				if (btnOpen) btnOpen.classList.add("active");
				if (btnMCQ) btnMCQ.classList.remove("active");
				btnRac.classList.remove("active");
			}
		}
	}
}

function setSubject(subjectId) {
	currentSubject = SUBJECTS.find((s) => s.id === subjectId) || SUBJECTS[0];
	initSplash();
}

function startQuiz(chId) {
	currentChapterId = chId;
	answers = {};
	const subject = currentSubject;

	if (currentMode === "open" || currentMode === "racunske") {
		const key =
			currentMode === "open" ? "openChapters" : "racunskeChapters";
		const src =
			chId === "all"
				? subject[key]
				: subject[key].filter((c) => c.id === chId);
		activeChapters = src;
		const totalOpen = subject[key].reduce(
			(s, c) => s + c.questions.length,
			0,
		);
		flatQuestions = buildOpenFlat(
			src,
			chId === "all" ? Math.min(20, totalOpen) : null,
		);
		document.getElementById("splash").style.display = "none";
		document.getElementById("results").style.display = "none";
		document.getElementById("quiz").style.display = "block";
		renderOpenQuiz();
		return;
	}

	activeChapters =
		chId === "all"
			? subject.mcqChapters
			: subject.mcqChapters.filter((c) => c.id === chId);
	const totalMcq = subject.mcqChapters.reduce(
		(s, c) => s + c.questions.length,
		0,
	);
	flatQuestions = buildFlat(
		activeChapters,
		chId === "all" ? Math.min(40, totalMcq) : null,
	);
	document.getElementById("splash").style.display = "none";
	document.getElementById("results").style.display = "none";
	document.getElementById("quiz").style.display = "block";
	renderQuiz();
}

function goHome() {
	document.getElementById("quiz").style.display = "none";
	document.getElementById("results").style.display = "none";
	document.getElementById("splash").style.display = "flex";
}

// ── RENDER QUIZ ───────────────────────────────────────
function renderQuiz() {
	const total = flatQuestions.length;
	const answered = Object.keys(answers).length;
	const correct = Object.values(answers).filter((a) => a.correct).length;

	const chName =
		currentChapterId === "all"
			? "Vse skupaj"
			: activeChapters[0]?.name || "";
	const prefix = SUBJECTS.length > 1 ? `[${currentSubject.name}] ` : "";
	document.getElementById("quizChapterName").textContent = prefix + chName;
	document.getElementById("quizProgressText").textContent =
		`${answered} / ${total} odgovorjenih`;
	document.getElementById("progressFill").style.width =
		`${(answered / total) * 100}%`;
	document.getElementById("scoreDisplay").textContent =
		`✓ ${correct} / ${answered}`;

	const body = document.getElementById("quizBody");
	body.innerHTML = "";

	flatQuestions.forEach((q, qi) => {
		const ans = answers[qi];
		const block = document.createElement("div");
		block.className = "q-block";
		block.id = `q${qi}`;

		const statusClass = ans ? (ans.correct ? "correct" : "wrong") : "";
		if (ans) block.classList.add("answered");
		block.innerHTML = `
      <div class="q-inner">
        <div class="q-left">
          <div class="q-meta">
            <span class="q-number"># ${String(qi + 1).padStart(2, "0")}</span>
            <span style="font-size:11px;color:var(--text-muted);font-family:'Space Mono',monospace;flex:1">${q.chapterName}</span>
            <button class="info-btn ${ans ? "visible" : ""}" id="infobtn${qi}" onclick="openPdfModal(${qi})">ℹ vir</button>
            <span class="q-status ${statusClass}"></span>
          </div>
          <div class="q-text">${q.q}</div>
          <div class="options" id="opts${qi}"></div>
        </div>
        <div class="q-right">
          <div class="all-explanations" id="allExp${qi}"></div>
        </div>
      </div>`;

		body.appendChild(block);

		const optsDiv = block.querySelector(`#opts${qi}`);
		q.opts.forEach((opt, oi) => {
			const btn = document.createElement("button");
			btn.className = "opt-btn";
			btn.disabled = !!ans;
			btn.innerHTML = `<span class="opt-label">${LABELS[oi]}</span><span>${opt.text}</span>`;

			if (ans) {
				if (opt.correct && oi === ans.chosenIdx) {
					btn.classList.remove("reveal-correct");
					btn.classList.add("correct-choice");
				} else if (!opt.correct && oi === ans.chosenIdx) {
					btn.classList.add("wrong-choice");
				} else if (opt.correct) {
					btn.classList.add("reveal-correct");
				}
			}

			btn.onclick = () => handleAnswer(qi, oi);
			optsDiv.appendChild(btn);
		});

		if (ans) showExplanation(qi, ans.chosenIdx);
	});
}

function handleAnswer(qi, chosenIdx) {
	if (answers[qi]) return;
	const q = flatQuestions[qi];
	const correct = q.opts[chosenIdx].correct;
	answers[qi] = { chosenIdx, correct };

	const optsDiv = document.getElementById(`opts${qi}`);
	const btns = optsDiv.querySelectorAll(".opt-btn");
	btns.forEach((btn, oi) => {
		btn.disabled = true;
		if (q.opts[oi].correct && oi === chosenIdx)
			btn.classList.add("correct-choice");
		else if (!q.opts[oi].correct && oi === chosenIdx)
			btn.classList.add("wrong-choice");
		else if (q.opts[oi].correct) btn.classList.add("reveal-correct");
	});

	const dot = document.querySelector(`#q${qi} .q-status`);
	if (dot) dot.classList.add(correct ? "correct" : "wrong");

	showExplanation(qi, chosenIdx);
	const infoBtn = document.getElementById(`infobtn${qi}`);
	if (infoBtn) infoBtn.classList.add("visible");
	updateHeader();

	if (Object.keys(answers).length === flatQuestions.length) {
		setTimeout(showResults, 600);
	}
}

function showExplanation(qi, chosenIdx) {
	const q = flatQuestions[qi];
	const ans = answers[qi];
	const container = document.getElementById(`allExp${qi}`);
	if (!container || !ans) return;

	container.innerHTML = q.opts
		.map((opt, oi) => {
			const isChosen = oi === chosenIdx;
			const isCorrect = opt.correct;
			let cls = isCorrect ? "correct-opt" : "wrong-opt";
			if (isChosen && !isCorrect) cls += " chosen";
			const verdict = isCorrect
				? "✓ PRAVILNO" + (isChosen ? " ← tvoj odgovor" : "")
				: "✗ NAPAČNO" + (isChosen ? " ← tvoj odgovor" : "");
			return `<div class="opt-explanation ${cls}">
      <span class="opt-exp-label">${LABELS[oi]}</span>
      <div class="opt-exp-content">
        <div class="opt-exp-verdict">${verdict}</div>
        <div class="opt-exp-reason">${opt.explanation}</div>
      </div>
    </div>`;
		})
		.join("");

	container.classList.add("visible");
	document.getElementById(`q${qi}`)?.classList.add("answered");
}

function updateHeader() {
	const total = flatQuestions.length;
	const answered = Object.keys(answers).length;
	const correct = Object.values(answers).filter((a) => a.correct).length;
	document.getElementById("quizProgressText").textContent =
		`${answered} / ${total} odgovorjenih`;
	document.getElementById("progressFill").style.width =
		`${(answered / total) * 100}%`;
	document.getElementById("scoreDisplay").textContent =
		`✓ ${correct} / ${answered}`;
}

// ── RESULTS ───────────────────────────────────────────
function showResults() {
	document.getElementById("quiz").style.display = "none";
	const res = document.getElementById("results");
	res.style.display = "flex";

	const total = flatQuestions.length;
	const correct =
		currentMode === "open"
			? Object.values(answers).filter((a) => a.correct === true).length
			: Object.values(answers).filter((a) => a.correct).length;
	const pct = Math.round((correct / total) * 100);

	document.getElementById("resultPct").textContent = pct + "%";
	document
		.getElementById("resultRing")
		.style.setProperty("--ring-deg", `${pct * 3.6}deg`);

	let title, sub;
	if (pct >= 90) {
		title = "🏆 Odlično!";
		sub = `${correct} / ${total} pravilnih — odlično znanje agentnih sistemov!`;
	} else if (pct >= 70) {
		title = "👍 Dobro!";
		sub = `${correct} / ${total} pravilnih — dobra osnova, ponovite šibke točke.`;
	} else if (pct >= 50) {
		title = "📚 Ni slabo";
		sub = `${correct} / ${total} pravilnih — snov je vredna ponovitve.`;
	} else {
		title = "💪 Naprej!";
		sub = `${correct} / ${total} pravilnih — preučite gradivo in poskusite znova.`;
	}

	document.getElementById("resultTitle").textContent = title;
	document.getElementById("resultSub").textContent = sub;
	document.getElementById("retryBtn").onclick = () =>
		startQuiz(currentChapterId);
}

// ── PDF MODAL ─────────────────────────────────────────
function openPdfModal(qi) {
	const q = flatQuestions[qi];
	const pages = q.pages || [];
	const modal = document.getElementById("pdfModal");
	const label = document.getElementById("pdfPageLabel");
	const chips = document.getElementById("pdfPageChips");
	const wrap = document.getElementById("pdfFrameWrap");
	const pdfSrc = currentSubject.pdf;

	document.getElementById("pdfFileName").textContent = pdfSrc
		.split("/")
		.pop();
	chips.innerHTML = "";

	if (pages.length === 0) {
		label.textContent = "";
		wrap.innerHTML = `<div class="pdf-no-pages">Strani za to vprašanje niso nastavljene.<br>Dodajte polje <code>pages: [n]</code> v podatke vprašanja.</div>`;
	} else {
		wrap.innerHTML = "";
		const loadPage = (p) => {
			const frame = document.createElement("iframe");
			frame.id = "pdfFrame";
			frame.src = `${pdfSrc}#page=${p}&t=${Date.now()}`;
			wrap.replaceChildren(frame);
			label.textContent = `· stran ${p}`;
			chips
				.querySelectorAll(".pdf-page-chip")
				.forEach((c) => c.classList.remove("active"));
			chips.querySelector(`[data-page="${p}"]`)?.classList.add("active");
		};
		pages.forEach((p, i) => {
			const chip = document.createElement("button");
			chip.type = "button";
			chip.className = "pdf-page-chip" + (i === 0 ? " active" : "");
			chip.dataset.page = p;
			chip.textContent = `str. ${p}`;
			chip.onclick = (event) => {
				event.preventDefault();
				event.stopPropagation();
				loadPage(p);
			};
			chips.appendChild(chip);
		});
		loadPage(pages[0]);
	}

	modal.classList.add("open");
}

function closePdfModal() {
	document.getElementById("pdfModal").classList.remove("open");
	document.getElementById("pdfFrame")?.remove();
}

// ── MODE SWITCHING ────────────────────────────────────
function setMode(mode) {
	currentMode = mode;
	document
		.getElementById("modeMCQ")
		.classList.toggle("active", mode === "mcq");
	document
		.getElementById("modeOpen")
		.classList.toggle("active", mode === "open");
	const mR = document.getElementById("modeRacunske");
	if (mR) mR.classList.toggle("active", mode === "racunske");
	initSplash();
}

// ── OPEN QUIZ ─────────────────────────────────────────
function renderOpenQuiz() {
	const total = flatQuestions.length;
	const marked = Object.values(answers).filter(
		(a) => a.correct !== null,
	).length;
	const correct = Object.values(answers).filter(
		(a) => a.correct === true,
	).length;
	const chName =
		currentChapterId === "all"
			? "Vse skupaj"
			: activeChapters[0]?.name || "";
	const prefix = SUBJECTS.length > 1 ? `[${currentSubject.name}] ` : "";
	document.getElementById("quizChapterName").textContent = prefix + chName;
	document.getElementById("quizProgressText").textContent =
		`${marked} / ${total} ocenjenih`;
	document.getElementById("progressFill").style.width =
		`${(marked / total) * 100}%`;
	document.getElementById("scoreDisplay").textContent =
		`✓ ${correct} / ${marked}`;

	const body = document.getElementById("quizBody");
	body.innerHTML = "";
	flatQuestions.forEach((q, qi) => {
		const ans = answers[qi];
		const block = document.createElement("div");
		block.className =
			"q-block" +
			(ans && ans.correct === true
				? " open-correct"
				: ans && ans.correct === false
					? " open-wrong"
					: "");
		block.id = `q${qi}`;
		const statusClass = ans
			? ans.correct === true
				? "correct"
				: ans.correct === false
					? "wrong"
					: ""
			: "";
		block.innerHTML = `
      <div class="q-meta">
        <span class="q-number"># ${String(qi + 1).padStart(2, "0")}</span>
        <span style="font-size:11px;color:var(--text-muted);font-family:'Space Mono',monospace;flex:1">${q.chapterName}</span>
        <button class="info-btn ${ans ? "visible" : ""}" id="infobtn${qi}" onclick="openPdfModal(${qi})">ℹ vir</button>
        <span class="q-status ${statusClass}"></span>
      </div>
      <div class="q-text">${q.q}</div>
      <div id="revealWrap${qi}" ${ans ? 'style="display:none"' : ""}>
        <button class="btn-reveal" onclick="revealAnswer(${qi})">Prikaži odgovor</button>
      </div>
      <div class="open-answer-wrap" id="answerWrap${qi}" ${!ans ? 'style="display:none"' : ""}>
        <div class="open-answer-box">${q.answer}</div>
        <div class="open-mark-btns">
          <button class="btn-mark-correct" onclick="markAnswer(${qi}, true)" ${ans && ans.correct !== null ? "disabled" : ""}>✓ Pravilno</button>
          <button class="btn-mark-wrong" onclick="markAnswer(${qi}, false)" ${ans && ans.correct !== null ? "disabled" : ""}>✗ Napačno</button>
        </div>
      </div>`;
		body.appendChild(block);
	});
}

function revealAnswer(qi) {
	if (answers[qi]) return;
	answers[qi] = { revealed: true, correct: null };
	document.getElementById(`revealWrap${qi}`).style.display = "none";
	document.getElementById(`answerWrap${qi}`).style.display = "block";
	const infoBtn = document.getElementById(`infobtn${qi}`);
	if (infoBtn) infoBtn.classList.add("visible");
}

function markAnswer(qi, isCorrect) {
	if (!answers[qi] || answers[qi].correct !== null) return;
	answers[qi].correct = isCorrect;
	const block = document.getElementById(`q${qi}`);
	if (block) {
		block.classList.toggle("open-correct", isCorrect);
		block.classList.toggle("open-wrong", !isCorrect);
	}
	const dot = document.querySelector(`#q${qi} .q-status`);
	if (dot) dot.classList.add(isCorrect ? "correct" : "wrong");
	block
		.querySelectorAll(".btn-mark-correct, .btn-mark-wrong")
		.forEach((b) => (b.disabled = true));
	const total = flatQuestions.length;
	const marked = Object.values(answers).filter(
		(a) => a.correct !== null,
	).length;
	const correct = Object.values(answers).filter(
		(a) => a.correct === true,
	).length;
	document.getElementById("quizProgressText").textContent =
		`${marked} / ${total} ocenjenih`;
	document.getElementById("progressFill").style.width =
		`${(marked / total) * 100}%`;
	document.getElementById("scoreDisplay").textContent =
		`✓ ${correct} / ${marked}`;
	if (marked === total) setTimeout(showResults, 600);
}

// ── INIT ───────────────────────────────────────────────
initSplash();

// Expose functions used by inline HTML event handlers
window.startQuiz = startQuiz;
window.goHome = goHome;
window.setMode = setMode;
window.setSubject = setSubject;
window.openPdfModal = openPdfModal;
window.closePdfModal = closePdfModal;
window.handleAnswer = handleAnswer;
window.revealAnswer = revealAnswer;
window.markAnswer = markAnswer;
