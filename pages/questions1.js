const questions = [
    {
        question: "Найдите дискриминант уравнения: \\(x^2 + 3x - 1 = 0\\)",
        answers: [
            {text: "5", correct: false},
            {text: "13", correct: true},
            {text: "8", correct: false},
            {text: "2", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(3x^2 - 3x - 1 = 0\\)",
        answers: [
            {text: "20", correct: false},
            {text: "15", correct: false},
            {text: "8", correct: false},
            {text: "21", correct: true},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(x^2 + 5x + 2 = 0\\)",
        answers: [
            {text: "15", correct: false},
            {text: "17", correct: true},
            {text: "10", correct: false},
            {text: "9", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(x^2 - 4x + 2 = 0\\)",
        answers: [
            {text: "7", correct: false},
            {text: "9", correct: false},
            {text: "10", correct: false},
            {text: "8", correct: true},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(4x^2 - x - 5 = 0\\)",
        answers: [
            {text: "49", correct: false},
            {text: "25", correct: false},
            {text: "81", correct: true},
            {text: "64", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(x^2 - 5x + 4 = 0\\)",
        answers: [
            {text: "2", correct: false},
            {text: "13", correct: false},
            {text: "9", correct: true},
            {text: "5", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(x^2 - 3x + 2 = 0\\)",
        answers: [
            {text: "1", correct: true},
            {text: "-5", correct: false},
            {text: "4", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(x^2 - 5x + 6 = 0\\)",
        answers: [
            {text: "1", correct: true},
            {text: "-5", correct: false},
            {text: "-4", correct: false},
            {text: "10", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(2x^2 - 7x + 3 = 0\\)",
        answers: [
            {text: "19", correct: false},
            {text: "21", correct: false},
            {text: "25", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(3x^2 + 2x - 5 = 0\\)",
        answers: [
            {text: "9", correct: false},
            {text: "64", correct: true},
            {text: "8", correct: false},
            {text: "-64", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(4x^2 - 4x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "0", correct: true},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(x^2 - 2x + 1 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "10", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(2x^2 - 5x + 2 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "9", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(3x^2 + 4x - 5 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "-76", correct: false},
            {text: "76", correct: true},
            {text: "64", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(4x^2 - 7x + 3 = 0\\)",
        answers: [
            {text: "10", correct: false},
            {text: "1", correct: true},
            {text: "-1", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(x^2 + 6x + 9 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "0", correct: true},
            {text: "-9", correct: false},
            {text: "25", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(2x^2 + x - 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "10", correct: false},
            {text: "16", correct: false},
            {text: "9", correct: true},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(3x^2 - 2x - 1 = 0\\)",
        answers: [
            {text: "3", correct: false},
            {text: "6", correct: false},
            {text: "-8", correct: false},
            {text: "16", correct: true},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(4x^2 + 7x + 2 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "17", correct: true},
            {text: "18", correct: false},
            {text: "20", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(x^2 - 4x + 4 = 0\\)",
        answers: [
            {text: "-32", correct: false},
            {text: "32", correct: false},
            {text: "0", correct: true},
            {text: "20", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(2x^2 + 3x + 1 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "1", correct: true},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(3x^2 - 5x - 2 = 0\\)",
        answers: [
            {text: "49", correct: true},
            {text: "1", correct: false},
            {text: "-1", correct: false},
            {text: "36", correct: false},
        ]
    },
    {
        question: "Найдите дискриминант уравнения: \\(4x^2 - 6x + 2 = 0\\)",
        answers: [
            {text: "15", correct: false},
            {text: "2", correct: false},
            {text: "4", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        question: "Найдите корни уравнения: \\(x^2 + 2x - 15 = 0\\), если дискриминант = 64",
        answers: [
            {text: "(3; -5)", correct: false},
            {text: "(2; -5)", correct: false},
            {text: "(3; 5)", correct: false},
            {text: "(3; 2)", correct: true},
        ]
    },
]