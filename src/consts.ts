const TIMES = [
    "1 min", "2 min", "5 min"
];

const LEVELS = [
    "Easy", "Medium", "Hard"
];

const CATEGORIES = [
    "all", "1cat", "2cat", "3cat"
];

const TYPES = [
    "1type"
];

const questions = [
    { //mb some another format, depends on where we will get questions from
        qText: "Elon Musk was born in South Africa",
        answers: {"True": 1, "False": 0},
        category: "1cat"
    },
    {
        qText: "What country drinks the most coffee per capita?",
        answers: {"Italy": 0, "Turkey": 0, "Russia": 0, "Finland": 1},
        category: "2cat"
    },
    {
        qText: "How many bones do we have in an ear?",
        answers: {"1": 0, "0": 0, "3": 1, "2": 0},
        category: "3cat"
    }
];

export {TIMES, LEVELS, CATEGORIES, TYPES, questions};