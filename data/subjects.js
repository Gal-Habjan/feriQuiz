// To add a new subject (e.g. JT):
//   1. Create data/jt/mcq.js  (defines var JT_MCQ = [...])
//   2. Create data/jt/open.js (defines var JT_OPEN = [...])
//   3. Add those two <script> tags in index.html (before data/subjects.js)
//   4. Add an entry below referencing JT_MCQ and JT_OPEN

var SUBJECTS = [
	{
		id: "psis",
		name: "PSIS",
		fullName: "Povezljivi sistemi in inteligentne storitve",
		pdf: "powerpoints/main.pdf",
		mcqChapters: PSIS_MCQ,
		openChapters: PSIS_OPEN,
		racunskeChapters: PSIS_RACUNSKE,
	},
	{
		id: "jz",
		name: "JZ",
		fullName: "Jezikovne tehnologije",
		pdf: "powerpoints/prosojnice.pdf",
		mcqChapters: JZ_MCQ,
		openChapters: JZ_OPEN,
		racunskeChapters: JZ_RACUNSKE,
	},
];
