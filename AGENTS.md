# FeriQuiz — How it works

## What the app does

FeriQuiz is a self-contained browser quiz for university exam prep. It has two modes:

- **Večkratni izbor (MCQ)** — four options per question, auto-graded. After answering, all four options slide open with explanations (correct / wrong + reason for each).
- **Odprti odgovori (Open)** — free-recall questions with a model answer you reveal yourself, then self-grade ✓ / ✗.

Both modes support chapter-by-chapter practice or a randomised "all chapters" run. Results are shown as a percentage ring chart at the end.

---

## File structure

```
feriQuiz/
├── index.html          Entry point — HTML shell, loads scripts in order
├── css/
│   └── style.css       All styling (dark theme, quiz layout, animations)
├── js/
│   └── app.js          All application logic
├── data/
│   ├── subjects.js     Subject registry — defines the SUBJECTS array
│   └── psis/
│       ├── mcq.js      MCQ chapters for PSIS (defines PSIS_MCQ)
│       └── open.js     Open-ended chapters for PSIS (defines PSIS_OPEN)
└── powerpoints/
    └── main.pdf        Source slides — linked per-question via the ℹ vir button
```

Scripts are loaded as plain `<script>` tags in dependency order (no bundler, no server required):

```html
<script src="data/psis/mcq.js"></script>
<script src="data/psis/open.js"></script>
<script src="data/subjects.js"></script>   <!-- reads PSIS_MCQ / PSIS_OPEN -->
<script src="js/app.js"></script>           <!-- reads SUBJECTS -->
```

---

## Data structures

### Subject (`data/subjects.js`)

`SUBJECTS` is a global array. Each entry describes one course:

```js
{
  id:          'psis',                                      // unique key
  name:        'PSIS',                                      // short label (shown on tab button)
  fullName:    'Povezljivi sistemi in inteligentne storitve', // shown in splash subtitle
  pdf:         'powerpoints/main.pdf',                      // path to source PDF
  mcqChapters: PSIS_MCQ,                                    // array of MCQ chapters
  openChapters: PSIS_OPEN,                                  // array of open-ended chapters
}
```

### Chapter

Both `mcqChapters` and `openChapters` are arrays of chapter objects:

```js
{
  id:        'vec-agentni',                    // unique key within the subject
  name:      'Več agentni sistemi — osnove',   // displayed on chapter card and quiz header
  color:     '#6c8eff',                        // accent colour for the chapter card
  questions: [ /* array of question objects */ ]
}
```

### MCQ question

```js
{
  q:     "Katera trditev o večagentnih sistemih drži?",   // question text (HTML allowed)
  pages: [115],                                           // PDF page numbers for the ℹ vir button
  opts: [
    ["Option text", correct (bool), "Explanation why this option is right/wrong"],
    ["Option text", false,          "Explanation..."],
    ["Option text", true,           "Explanation..."],
    ["Option text", false,          "Explanation..."],
  ]
}
```

- Exactly one option should have `correct: true`.
- `opts` is an array of 3-element arrays: `[text, correct, explanation]`.
- Options are shuffled at runtime so the correct answer is never in a fixed position.

### Open-ended question

```js
{
  q:      "Kaj je ocenitvena funkcija u_i ...",   // question text
  answer: "<p>HTML answer text ...</p>",           // shown after "Prikaži odgovor"
  pages:  [117]                                    // PDF page references
}
```

- `answer` is rendered as raw HTML so you can use `<b>`, `<p>`, `<code>`, etc.
- `pages` works the same as in MCQ questions.

---

## App logic (`js/app.js`)

### State

| Variable          | Type    | Purpose                                          |
|-------------------|---------|--------------------------------------------------|
| `currentSubject`  | object  | Currently selected subject from `SUBJECTS`       |
| `currentMode`     | string  | `'mcq'` or `'open'`                              |
| `activeChapters`  | array   | Chapter(s) in the current quiz run               |
| `flatQuestions`   | array   | Shuffled, flattened question list for the run    |
| `answers`         | object  | `{ qi → { chosenIdx, correct } }` for MCQ; `{ qi → { revealed, correct } }` for open |
| `currentChapterId`| string  | `'all'` or a chapter `id`                        |

### Key functions

| Function              | What it does                                                           |
|-----------------------|------------------------------------------------------------------------|
| `initSplash()`        | Renders subject tabs + chapter cards; updates subtitle and "all" button |
| `setSubject(id)`      | Switches `currentSubject`, re-renders splash                           |
| `setMode(mode)`       | Switches `currentMode`, re-renders splash                              |
| `startQuiz(chId)`     | Builds `flatQuestions`, switches to quiz view                          |
| `buildFlat()`         | Flattens MCQ chapters, shuffles questions and options, applies limit   |
| `buildOpenFlat()`     | Flattens open chapters, shuffles, applies limit                        |
| `renderQuiz()`        | Renders all MCQ question blocks into `#quizBody`                       |
| `handleAnswer(qi,oi)` | Records answer, colours buttons, triggers explanation panel            |
| `showExplanation(qi)` | Populates the right-side panel with all-option explanations            |
| `renderOpenQuiz()`    | Renders open-ended question blocks                                     |
| `revealAnswer(qi)`    | Shows model answer, enables mark buttons                               |
| `markAnswer(qi,bool)` | Records self-grade, updates progress, triggers results when done       |
| `showResults()`       | Calculates score, renders ring chart and message                       |
| `openPdfModal(qi)`    | Opens PDF at the correct page for a question                           |
| `updateHeader()`      | Refreshes progress bar and score counter in the quiz header            |

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

Quiz (Open)
  └─ click "Prikaži odgovor"  → revealAnswer
  └─ click ✓ / ✗              → markAnswer → updateHeader
  └─ all marked               → setTimeout → showResults

Results
  └─ "Poskusi znova"          → startQuiz(same chapter)
  └─ "Domov"                  → goHome → splash
```

---

## Adding a new subject

1. **Create the data files:**

   `data/jt/mcq.js` — define `var JT_MCQ = [ /* chapters */ ];`
   `data/jt/open.js` — define `var JT_OPEN = [ /* chapters */ ];`

2. **Register the subject** in `data/subjects.js`:

   ```js
   {
     id:          'jt',
     name:        'JT',
     fullName:    'Jezikovne tehnologije',
     pdf:         'powerpoints/jt.pdf',
     mcqChapters: JT_MCQ,
     openChapters: JT_OPEN,
   }
   ```

3. **Load the scripts** in `index.html` (before `data/subjects.js`):

   ```html
   <script src="data/jt/mcq.js"></script>
   <script src="data/jt/open.js"></script>
   ```

That's it. The subject tab appears automatically. If only one subject exists, the tab bar is hidden by CSS.
