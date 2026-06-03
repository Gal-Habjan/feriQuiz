# FeriQuiz — How it works

## What the app does

FeriQuiz is a self-contained browser quiz for university exam prep. It has three modes:

- **Večkratni izbor (MCQ)** — four options per question, auto-graded. After answering, all four options slide open with explanations (correct / wrong + reason for each).
- **Odprti odgovori (Open)** — free-recall questions with a model answer you reveal yourself, then self-grade ✓ / ✗.
- **Računske naloge** — worked computational problems with detailed step-by-step solutions, self-graded the same way as open questions.

All modes support chapter-by-chapter practice or a randomised "all chapters" run ("Reši vse skupaj"). Results are shown as a percentage ring chart at the end.

---

## File structure

```
feriQuiz/
├── index.html              Entry point — HTML shell, loads scripts in order
├── css/
│   └── style.css           All styling (dark theme, quiz layout, animations)
├── js/
│   └── app.js              All application logic
├── data/
│   ├── subjects.js         Subject registry — defines the SUBJECTS array
│   ├── psis/
│   │   ├── mcq.js          MCQ chapters for PSIS       (defines PSIS_MCQ)
│   │   ├── open.js         Open chapters for PSIS      (defines PSIS_OPEN)
│   │   └── racunske.js     Computational for PSIS      (defines PSIS_RACUNSKE)
│   └── jt/
│       ├── mcq.js          MCQ chapters for JT         (defines JT_MCQ)
│       ├── open.js         Open chapters for JT        (defines JT_OPEN)
│       └── racunske.js     Computational for JT        (defines JT_RACUNSKE)
└── powerpoints/
    ├── main.pdf            PSIS source slides
    ├── prosojnice.pdf      JT source slides
    └── README.md           Notes on which PDF belongs to which subject
```

Scripts are loaded as plain `<script>` tags in dependency order (no bundler, no server required):

```html
<script src="data/psis/mcq.js"></script>
<script src="data/psis/open.js"></script>
<script src="data/psis/racunske.js"></script>
<script src="data/jt/mcq.js"></script>
<script src="data/jt/open.js"></script>
<script src="data/jt/racunske.js"></script>
<script src="data/subjects.js"></script>   <!-- reads all *_MCQ / *_OPEN / *_RACUNSKE -->
<script src="js/app.js"></script>          <!-- reads SUBJECTS -->
```

---

## Subjects

| id     | name | fullName                                          | PDF               |
|--------|------|---------------------------------------------------|-------------------|
| `psis` | PSIS | Povezljivi sistemi in inteligentne storitve        | powerpoints/main.pdf |
| `jt`   | JT   | Jezikovne tehnologije                              | powerpoints/prosojnice.pdf |

If only one subject exists, the subject tab bar is hidden by CSS automatically.

---

## Data structures

### Subject (`data/subjects.js`)

`SUBJECTS` is a global array. Each entry describes one course:

```js
{
  id:               'jt',
  name:             'JT',
  fullName:         'Jezikovne tehnologije',
  pdf:              'powerpoints/prosojnice.pdf',
  mcqChapters:      JT_MCQ,        // array of MCQ chapters
  openChapters:     JT_OPEN,       // array of open-ended chapters
  racunskeChapters: JT_RACUNSKE,   // array of computational chapters
}
```

`racunskeChapters` is optional. If absent or empty, the "Računske naloge" mode button is hidden for that subject.

### Chapter

`mcqChapters`, `openChapters`, and `racunskeChapters` are arrays of chapter objects:

```js
{
  id:        'analiza-sentimenta',   // unique key within the subject
  name:      'Analiza sentimenta',   // displayed on chapter card and quiz header
  color:     '#ff8a5b',              // accent colour for the chapter card
  questions: [ /* array of question objects */ ]
}
```

### MCQ question

```js
{
  q:     "Katera trditev ...",   // question text (HTML allowed)
  pages: [185, 186],             // PDF page numbers for the ℹ vir button
  opts: [
    ["Option text", true,  "Explanation why this option is correct"],
    ["Option text", false, "Explanation why this is wrong"],
    ["Option text", false, "Explanation..."],
    ["Option text", false, "Explanation..."],
  ]
}
```

- Exactly one option should have `correct: true`.
- `opts` is an array of 3-element arrays: `[text, correct, explanation]`.
- Options are shuffled at runtime so the correct answer is never in a fixed position.
- **Important:** Every question in an `mcqChapters` array must have an `opts` field. Questions without `opts` are silently skipped by `buildFlat()`. Do not mix open-format questions into MCQ chapters.

---

## Writing good MCQ options

The quality of distractors (wrong answers) determines whether a question is worth anything. Follow these rules strictly.

### The cardinal rule: all four options must look equally plausible at a glance

A student who does not know the answer should not be able to eliminate any option on first read. The correct answer must not stand out by being longer, more specific, or more domain-rich than the others.

### Correct answer

- State the fact directly and precisely. No hedging language ("sometimes", "often") that would signal uncertainty.
- Length: 1–3 sentences, same ballpark as the wrong options.
- Do not make it the only option that uses domain-specific vocabulary — all four should.

### Wrong answers (distractors)

Each distractor must target a specific, realistic misconception or slip. Use these patterns:

| Pattern | Example |
|---------|---------|
| **Swap key terms** | Say `q(i|j,l,m)` describes a translation probability when it is actually the alignment probability (and vice-versa). |
| **Almost-right formula** | Change `–` to `+` in PMI difference, or swap numerator/denominator in MLE. |
| **Adjacent concept** | Use the right domain vocabulary but describe a neighbouring concept: describe what IBM 2 does when asked about IBM 1, or describe `perceptron` when asked about `SVM`. |
| **True statement, wrong context** | A factually correct statement that does not answer the specific question asked. |
| **Plausible-sounding nonsense** | Combines domain terms in a grammatically valid but semantically incorrect way. |

### Length and formatting

- All four options should be within ±30% of each other in word count.
- Do not let the correct answer be the only one with a sub-clause, example, or parenthetical.
- If the correct answer includes an example (e.g., "enostavnost uporabe tiskalnika"), include comparably specific examples in at least one distractor.

### Explanations (third element of each opt)

- Wrong-answer explanations should name the **specific mistake** being targeted, not just restate what the right answer is.
- Avoid: `"To je strojno prevajanje."` — this tells the student exactly what topic the correct answer belongs to, making elimination trivial.
- Prefer: `"To opisuje transferni pristop, ki doda prenos drevesa – neposredno prevajanje tega ne počne."` — this requires knowledge to evaluate.
- The explanation for the correct answer should say why it is right, not just confirm it.

### Anti-patterns to avoid

- **Obvious outsider**: a distractor that references a completely different chapter topic (e.g., asking about sentiment analysis and having "To je IBM Model 1" as a distractor). Every distractor should be plausible within the chapter being tested.
- **Length signal**: the correct answer is consistently the longest option.
- **Specificity signal**: the correct answer is the only one with a formula, proper noun, or page reference.
- **Trivially wrong**: "Odloči se naključno" or "Ni mogoče" — these are never the answer to a factual question and students know it immediately.

### Open-ended / Računske question

Both open and računske questions share the same format:

```js
{
  q:      "Razložite ...",             // question text (HTML allowed)
  answer: "<p>HTML answer ...</p>",    // model answer shown after "Prikaži odgovor"
  pages:  [207, 208]                   // PDF page references
}
```

- `answer` is rendered as raw HTML — use `<b>`, `<p>`, `<ul>`, `<li>`, `<code>` etc. freely.
- For računske, include full step-by-step working in `answer` (formulas, intermediate values, final result in `<b>`).

---

## JT (Jezikovne tehnologije) — chapter inventory

### MCQ (20 questions per chapter)
| Chapter id | Name | Slides |
|---|---|---|
| `analiza-sentimenta` | Analiza sentimenta | 185–212 |
| `diskriminatorni-klasifikatorji` | Diskriminatorni klasifikatorji | 213–228 |
| `strojno-prevajanje` | Strojno prevajanje | 229–266 |
| `ekstrakcija-informacij-in-prepoznavanje-imenskih-entitet` | Ekstrakcija informacij in NER | 267–279 |
| `globoko-ucenje-v-jezikovnih-tehnologijah` | Globoko učenje v JT | 280–342 |
| `vektorji-besed` | Vektorji besed | 343+ |

### Open (6–8 questions per chapter)
Same chapter ids as MCQ. Each chapter covers the main conceptual questions for its topic.

### Računske (grouped by topic)
| Chapter id | Name | Content |
|---|---|---|
| `analiza-sentimenta-racunske` | Analiza sentimenta | Turney PMI polariteta, Naïve Bayes žanr (str. 344–346), Binariziran MNB sentiment (str. 347–348) |
| `diskriminatorni-klasifikatorji-racunske` | Diskriminatorni klasifikatorji | MaxEnt/loglinearni model verjetnosti (str. 221), linearni klasifikator glasovanje |
| `strojno-prevajanje-racunske` | Strojno prevajanje | IBM 1 P(s\|a,e,m) (str. 255–256, 257–259, 349–351), IBM 2 P(s,a\|e,m) (str. 261) |
| `ekstrakcija-informacij-racunske` | Ekstrakcija informacij in NER | Precision/Recall/F1, IO vs IOB label comparison |

---

## App logic (`js/app.js`)

### State

| Variable           | Type   | Purpose |
|--------------------|--------|---------|
| `currentSubject`   | object | Currently selected subject from `SUBJECTS` |
| `currentMode`      | string | `'mcq'`, `'open'`, or `'racunske'` |
| `activeChapters`   | array  | Chapter(s) in the current quiz run |
| `flatQuestions`    | array  | Shuffled, flattened question list for the run |
| `answers`          | object | `{ qi → { chosenIdx, correct } }` for MCQ; `{ qi → { revealed, correct } }` for open/racunske |
| `currentChapterId` | string | `'all'` or a chapter `id` |

### Key functions

| Function              | What it does |
|-----------------------|--------------|
| `initSplash()`        | Renders subject tabs + chapter cards; updates subtitle and "all" button |
| `setSubject(id)`      | Switches `currentSubject`, re-renders splash |
| `setMode(mode)`       | Switches `currentMode`, re-renders splash |
| `startQuiz(chId)`     | Builds `flatQuestions`, switches to quiz view |
| `buildFlat()`         | Flattens MCQ chapters, shuffles questions and options, applies limit; skips questions without `opts` |
| `buildOpenFlat()`     | Flattens open/racunske chapters, shuffles, applies limit |
| `renderQuiz()`        | Renders all MCQ question blocks into `#quizBody` |
| `handleAnswer(qi,oi)` | Records answer, colours buttons, triggers explanation panel |
| `showExplanation(qi)` | Populates the right-side panel with all-option explanations |
| `renderOpenQuiz()`    | Renders open-ended / računske question blocks |
| `revealAnswer(qi)`    | Shows model answer, enables mark buttons |
| `markAnswer(qi,bool)` | Records self-grade, updates progress, triggers results when done |
| `showResults()`       | Calculates score, renders ring chart and message |
| `openPdfModal(qi)`    | Opens PDF at the correct page for a question |
| `updateHeader()`      | Refreshes progress bar and score counter in the quiz header |

### User flow

```
Splash
  └─ select subject (tab)     → updates chapter grid
  └─ select mode (toggle)     → updates chapter grid
  └─ click chapter card       → startQuiz(chapterId)
  └─ click "Reši vse skupaj"  → startQuiz('all')

Quiz (MCQ)
  └─ click option             → handleAnswer → showExplanation → updateHeader
  └─ all answered             → setTimeout → showResults

Quiz (Open / Računske)
  └─ click "Prikaži odgovor"  → revealAnswer
  └─ click ✓ / ✗              → markAnswer → updateHeader
  └─ all marked               → setTimeout → showResults

Results
  └─ "Poskusi znova"          → startQuiz(same chapter)
  └─ "Domov"                  → goHome → splash
```

### Limits applied by "Reši vse skupaj"

| Mode      | Limit |
|-----------|-------|
| MCQ       | min(40, total questions) |
| Open      | min(20, total questions) |
| Računske  | min(20, total questions) |

---

## Adding a new subject

1. **Create the data files** (naming convention: subject id in lowercase):

   ```
   data/xyz/mcq.js       → var XYZ_MCQ = [ /* chapters */ ];
   data/xyz/open.js      → var XYZ_OPEN = [ /* chapters */ ];
   data/xyz/racunske.js  → var XYZ_RACUNSKE = [ /* chapters */ ];
   ```

2. **Load the scripts** in `index.html` before `data/subjects.js`:

   ```html
   <script src="data/xyz/mcq.js"></script>
   <script src="data/xyz/open.js"></script>
   <script src="data/xyz/racunske.js"></script>
   ```

3. **Register the subject** in `data/subjects.js`:

   ```js
   {
     id:               'xyz',
     name:             'XYZ',
     fullName:         'Full subject name',
     pdf:              'powerpoints/xyz.pdf',
     mcqChapters:      XYZ_MCQ,
     openChapters:     XYZ_OPEN,
     racunskeChapters: XYZ_RACUNSKE,
   }
   ```

4. **Add the PDF** to `powerpoints/` and note it in `powerpoints/README.md`.

The subject tab appears automatically. `racunskeChapters` can be omitted or set to `[]` — the mode button will be hidden.

---

## Known quirks and constraints

- **No bundler, no server.** The app runs by opening `index.html` directly in a browser. All globals (`SUBJECTS`, `JT_MCQ`, etc.) must be set before `app.js` runs, so script order in `index.html` matters.
- **MCQ questions must have `opts`.** `buildFlat()` silently skips any question without an `opts` array. Never place open-format questions (`answer` only) inside an `mcqChapters` array — they will be excluded from quizzes.
- **One correct answer per MCQ question.** The app does not validate this; having zero or multiple `true` options leads to unexpected behaviour.
- **`pages` is optional** but strongly recommended. Without it, the ℹ vir button opens the PDF without a page target.
- **PDF viewer** uses an `<iframe>` with `#page=N` fragment. Browser support varies — works best in Chromium-based browsers.
- **Variable naming convention:** subject id uppercased + `_MCQ` / `_OPEN` / `_RACUNSKE` (e.g. `JT_MCQ`, `PSIS_OPEN`). Must match exactly between the data file `var` declaration and `data/subjects.js`.
