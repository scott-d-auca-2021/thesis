const questions = [
    {
        //1
        question: "Найдите дискриминант уравнения: \\(x^2 + 3x - 1 = 0\\)",
        answers: [
            {text: "5", correct: false},
            {text: "13", correct: true},
            {text: "8", correct: false},
            {text: "2", correct: false},
        ]
    },
    {
        //2
        question: "Найдите дискриминант уравнения: \\(3x^2 - 3x - 1 = 0\\)",
        answers: [
            {text: "20", correct: false},
            {text: "15", correct: false},
            {text: "8", correct: false},
            {text: "21", correct: true},
        ]
    },
    {
        //3
        question: "Найдите дискриминант уравнения: \\(x^2 + 5x + 2 = 0\\)",
        answers: [
            {text: "15", correct: false},
            {text: "17", correct: true},
            {text: "10", correct: false},
            {text: "9", correct: false},
        ]
    },
    {
        //4
        question: "Найдите дискриминант уравнения: \\(x^2 - 4x + 2 = 0\\)",
        answers: [
            {text: "7", correct: false},
            {text: "9", correct: false},
            {text: "10", correct: false},
            {text: "8", correct: true},
        ]
    },
    {
        //5
        question: "Найдите дискриминант уравнения: \\(4x^2 - x - 5 = 0\\)",
        answers: [
            {text: "49", correct: false},
            {text: "25", correct: false},
            {text: "81", correct: true},
            {text: "64", correct: false},
        ]
    },
    {
        //6
        question: "Найдите дискриминант уравнения: \\(x^2 - 5x + 4 = 0\\)",
        answers: [
            {text: "2", correct: false},
            {text: "13", correct: false},
            {text: "9", correct: true},
            {text: "5", correct: false},
        ]
    },
    {
        //7
        question: "Найдите дискриминант уравнения: \\(x^2 - 3x + 2 = 0\\)",
        answers: [
            {text: "1", correct: true},
            {text: "-5", correct: false},
            {text: "4", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        //8
        question: "Найдите дискриминант уравнения: \\(x^2 - 5x + 6 = 0\\)",
        answers: [
            {text: "1", correct: true},
            {text: "-5", correct: false},
            {text: "-4", correct: false},
            {text: "10", correct: false},
        ]
    },
    {
        //9
        question: "Найдите дискриминант уравнения: \\(2x^2 - 7x + 3 = 0\\)",
        answers: [
            {text: "19", correct: false},
            {text: "21", correct: false},
            {text: "25", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //10
        question: "Найдите дискриминант уравнения: \\(3x^2 + 2x - 5 = 0\\)",
        answers: [
            {text: "9", correct: false},
            {text: "64", correct: true},
            {text: "8", correct: false},
            {text: "-64", correct: false},
        ]
    },
    {
        //11
        question: "Найдите дискриминант уравнения: \\(4x^2 - 4x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "0", correct: true},
        ]
    },
    {
        //12
        question: "Найдите дискриминант уравнения: \\(x^2 - 2x + 1 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "10", correct: false},
        ]
    },
    {
        //13
        question: "Найдите дискриминант уравнения: \\(2x^2 - 5x + 2 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "9", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //14
        question: "Найдите дискриминант уравнения: \\(3x^2 + 4x - 5 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "-76", correct: false},
            {text: "76", correct: true},
            {text: "64", correct: false},
        ]
    },
    {
        //15
        question: "Найдите дискриминант уравнения: \\(4x^2 - 7x + 3 = 0\\)",
        answers: [
            {text: "10", correct: false},
            {text: "1", correct: true},
            {text: "-1", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        //16
        question: "Найдите дискриминант уравнения: \\(x^2 + 6x + 9 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "0", correct: true},
            {text: "-9", correct: false},
            {text: "25", correct: false},
        ]
    },
    {
        //17
        question: "Найдите дискриминант уравнения: \\(2x^2 + x - 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "10", correct: false},
            {text: "16", correct: false},
            {text: "9", correct: true},
        ]
    },
    {
        //18
        question: "Найдите дискриминант уравнения: \\(3x^2 - 2x - 1 = 0\\)",
        answers: [
            {text: "3", correct: false},
            {text: "6", correct: false},
            {text: "-8", correct: false},
            {text: "16", correct: true},
        ]
    },
    {
        //19
        question: "Найдите дискриминант уравнения: \\(4x^2 + 7x + 2 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "17", correct: true},
            {text: "18", correct: false},
            {text: "20", correct: false},
        ]
    },
    {
        //20
        question: "Найдите дискриминант уравнения: \\(x^2 - 4x + 4 = 0\\)",
        answers: [
            {text: "-32", correct: false},
            {text: "32", correct: false},
            {text: "0", correct: true},
            {text: "20", correct: false},
        ]
    },
    {
        //21
        question: "Найдите дискриминант уравнения: \\(2x^2 + 3x + 1 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "1", correct: true},
        ]
    },
    {
        //22
        question: "Найдите дискриминант уравнения: \\(3x^2 - 5x - 2 = 0\\)",
        answers: [
            {text: "49", correct: true},
            {text: "1", correct: false},
            {text: "-1", correct: false},
            {text: "36", correct: false},
        ]
    },
    {
        //23
        question: "Найдите дискриминант уравнения: \\(4x^2 - 6x + 2 = 0\\)",
        answers: [
            {text: "15", correct: false},
            {text: "2", correct: false},
            {text: "4", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //24
        question: "Найдите дискриминант уравнения: \\(x^2 - 5x + 6 = 0\\)",
        answers: [
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "0", correct: false},
            {text: "1", correct: true},
        ]
    },
    {
        //25
        question: "Найдите дискриминант уравнения: \\(x^2 - 6x + 9 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "36", correct: false},
            {text: "3", correct: false},
            {text: "9", correct: false},
        ]
    },
    {
        //26
        question: "Найдите дискриминант уравнения: \\(3x^2 + 3x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "-3", correct: true},
            {text: "9", correct: false},
            {text: "12", correct: false},
        ]
    },
    {
        //27
        question: "Найдите дискриминант уравнения: \\(5x^2 - 10x + 2 = 0\\)",
        answers: [
            {text: "60", correct: true},
            {text: "80", correct: false},
            {text: "20", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        //28
        question: "Найдите дискриминант уравнения: \\(x^2 + x - 1 = 0\\)",
        answers: [
            {text: "5", correct: true},
            {text: "1", correct: false},
            {text: "-3", correct: false},
            {text: "2", correct: false},
        ]
    },
    {
        //29
        question: "Найдите дискриминант уравнения: \\(2x^2 - 6x + 3 = 0\\)",
        answers: [
            {text: "0", correct: false},
            {text: "12", correct: true},
            {text: "9", correct: false},
            {text: "3", correct: false},
        ]
    },
    {
        //30
        question: "Найдите дискриминант уравнения: \\(x^2 - 8x + 15 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "4", correct: true},
            {text: "-16", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        //31
        question: "Найдите дискриминант уравнения: \\(3x^2 - 12x + 10 = 0\\)",
        answers: [
            {text: "26", correct: false},
            {text: "24", correct: true},
            {text: "36", correct: false},
            {text: "-24", correct: false},
        ]
    },
    {
        //32
        question: "Найдите дискриминант уравнения: \\(4x^2 + 8x + 3 = 0\\)",
        answers: [
            {text: "26", correct: false},
            {text: "-8", correct: false},
            {text: "16", correct: true},
            {text: "4", correct: false},
        ]
    },
    {
        //33
        question: "Найдите дискриминант уравнения: \\(x^2 - 10x + 25 = 0\\)",
        answers: [
            {text: "25", correct: false},
            {text: "10", correct: false},
            {text: "0", correct: true},
            {text: "-25", correct: false},
        ]
    },
    {
        //34
        question: "Найдите дискриминант уравнения: \\(x^2 - 2x + 1 = 0\\)",
        answers: [
            {text: "2", correct: false},
            {text: "1", correct: false},
            {text: "0", correct: true},
            {text: "4", correct: false},
        ]
    },
    {
        //35
        question: "Найдите дискриминант уравнения: \\(x^2 + 6x + 9 = 0\\)",
        answers: [
            {text: "6", correct: false},
            {text: "3", correct: false},
            {text: "0", correct: true},
            {text: "36", correct: false},
        ]
    },
    {
        //36
        question: "Найдите дискриминант уравнения: \\(x^2 - 3x + 2 = 0\\)",
        answers: [
            {text: "-1", correct: false},
            {text: "4", correct: false},
            {text: "1", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //37
        question: "Найдите дискриминант уравнения: \\(x^2 - 4x + 4 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "16", correct: false},
            {text: "0", correct: true},
            {text: "8", correct: false},
        ]
    },
    {
        //38
        question: "Найдите дискриминант уравнения: \\(x^2 + 4x + 1 = 0\\)",
        answers: [
            {text: "12", correct: true},
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "-4", correct: false},
        ]
    },
    {
        //39
        question: "Найдите дискриминант уравнения: \\(x^2 - x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "-3", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //40
        question: "Найдите дискриминант уравнения: \\(x^2 + 4x + 4 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "0", correct: true},
            {text: "16", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        //41
        question: "Найдите дискриминант уравнения: \\(x^2 - 7x + 10 = 0\\)",
        answers: [
            {text: "49", correct: false},
            {text: "0", correct: false},
            {text: "10", correct: false},
            {text: "9", correct: true},
        ]
    },
    {
        //42
        question: "Найдите дискриминант уравнения: \\(x^2 - 2x + 5 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "5", correct: false},
            {text: "2", correct: false},
            {text: "-16", correct: true},
        ]
    },
    {
        //43
        question: "Найдите дискриминант уравнения: \\(2x^2 - 2x + 1 = 0\\)",
        answers: [
            {text: "-1", correct: false},
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "-4", correct: true},
        ]
    },
    {
        //44
        question: "Найдите дискриминант уравнения: \\(3x^2 - 7x + 3 = 0\\)",
        answers: [
            {text: "0", correct: false},
            {text: "6", correct: false},
            {text: "9", correct: false},
            {text: "13", correct: true},
        ]
    },
    {
        //45
        question: "Найдите дискриминант уравнения: \\(x^2 - 9x + 20 = 0\\)",
        answers: [
            {text: "0", correct: false},
            {text: "20", correct: false},
            {text: "1", correct: true},
            {text: "81", correct: false},
        ]
    },
    {
        //46
        question: "Найдите дискриминант уравнения: \\(x^2 - 4x + 5 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "-4", correct: true},
            {text: "16", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        //47
        question: "Найдите дискриминант уравнения: \\(2x^2 - 8x + 8 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "64", correct: false},
            {text: "8", correct: false},
            {text: "16", correct: false},
        ]
    },
    {
        //48
        question: "Найдите дискриминант уравнения: \\(x^2 - 5x + 6 = 0\\)",
        answers: [
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "0", correct: false},
            {text: "1", correct: true},
        ]
    },
    {
        //49
        question: "Найдите дискриминант уравнения: \\(2x^2 - 9x + 10 = 0\\)",
        answers: [
            {text: "0", correct: false},
            {text: "1", correct: true},
            {text: "-100", correct: false},
            {text: "25", correct: false},
        ]
    },
    {
        //50
        question: "Найдите дискриминант уравнения: \\(3x^2 - 3x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "9", correct: false},
            {text: "-3", correct: true},
            {text: "3", correct: false},
        ]
    },
    {
        //51
        question: "Найдите дискриминант уравнения: \\(2x^2 - 4x + 1 = 0\\)",
        answers: [
            {text: "12", correct: false},
            {text: "4", correct: false},
            {text: "8", correct: true},
            {text: "-4", correct: false},
        ]
    },
    {
        //52
        question: "Найдите дискриминант уравнения: \\(x^2 + 2x - 1 = 0\\)",
        answers: [
            {text: "0", correct: false},
            {text: "8", correct: true},
            {text: "4", correct: false},
            {text: "-1", correct: false},
        ]
    },
    {
        //53
        question: "Найдите дискриминант уравнения: \\(x^2 - 6x + 8 = 0\\)",
        answers: [
            {text: "14", correct: false},
            {text: "8", correct: false},
            {text: "4", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //54
        question: "Найдите дискриминант уравнения: \\(x^2 + x - 12 = 0\\)",
        answers: [
            {text: "49", correct: true},
            {text: "12", correct: false},
            {text: "36", correct: false},
            {text: "-12", correct: false},
        ]
    },
    {
        //55
        question: "Найдите дискриминант уравнения: \\(2x^2 - 5x + 2 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "9", correct: true},
            {text: "-1", correct: false},
        ]
    },
    {
        //56
        question: "Найдите дискриминант уравнения: \\(4x^2 - 10x + 3 = 0\\)",
        answers: [
            {text: "36", correct: false},
            {text: "52", correct: true},
            {text: "-12", correct: false},
            {text: "12", correct: false},
        ]
    },
    {
        //57
        question: "Найдите дискриминант уравнения: \\(x^2 - 8x + 15 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "4", correct: true},
            {text: "15", correct: false},
            {text: "-15", correct: false},
        ]
    },
    {
        //58
        question: "Найдите дискриминант уравнения: \\(3x^2 - 9x + 6 = 0\\)",
        answers: [
            {text: "0", correct: false},
            {text: "3", correct: false},
            {text: "9", correct: true},
            {text: "-6", correct: false},
        ]
    },
    {
        //59
        question: "Найдите дискриминант уравнения: \\(x^2 - 5x = 0\\)",
        answers: [
            {text: "25", correct: true},
            {text: "0", correct: false},
            {text: "-25", correct: false},
            {text: "5", correct: false},
        ]
    },
    {
        //60
        question: "Найдите дискриминант уравнения: \\(2x^2 + 6x = 0\\)",
        answers: [
            {text: "6", correct: false},
            {text: "36", correct: true},
            {text: "0", correct: false},
            {text: "-36", correct: false},
        ]
    },
    {
        //61
        question: "Найдите дискриминант уравнения: \\(3x^2 - 9x = 0\\)",
        answers: [
            {text: "18", correct: true},
            {text: "9", correct: false},
            {text: "81", correct: true},
            {text: "-9", correct: false},
        ]
    },
    {
        //62
        question: "Найдите дискриминант уравнения: \\(x^2 + 4x = 0\\)",
        answers: [
            {text: "-16", correct: true},
            {text: "4", correct: false},
            {text: "0", correct: false},
            {text: "16", correct: true},
        ]
    },
    {
        //63
        question: "Найдите дискриминант уравнения: \\(5x^2 - 10x = 0\\)",
        answers: [
            {text: "10", correct: false},
            {text: "100", correct: true},
            {text: "0", correct: false},
            {text: "-100", correct: false},
        ]
    },
    {
        //64
        question: "Найдите дискриминант уравнения: \\(4x^2 + 8x = 0\\)",
        answers: [
            {text: "64", correct: true},
            {text: "8", correct: false},
            {text: "0", correct: false},
            {text: "-64", correct: false},
        ]
    },
    {
        //65
        question: "Найдите дискриминант уравнения: \\(6x^2 - 12x = 0\\)",
        answers: [
            {text: "14", correct: false},
            {text: "12", correct: false},
            {text: "0", correct: false},
            {text: "144", correct: true},
        ]
    },
    {
        //66
        question: "Найдите дискриминант уравнения: \\(x^2 - 7x = 0\\)",
        answers: [
            {text: "7", correct: false},
            {text: "49", correct: true},
            {text: "0", correct: false},
            {text: "-49", correct: false},
        ]
    },
    {
        //67
        question: "Найдите дискриминант уравнения: \\(2x^2 + 4x = 0\\)",
        answers: [
            {text: "8", correct: false},
            {text: "4", correct: false},
            {text: "16", correct: true},
            {text: "-16", correct: false},
        ]
    },
    {
        //68
        question: "Найдите дискриминант уравнения: \\(3x^2 - 3x = 0\\)",
        answers: [
            {text: "9", correct: true},
            {text: "3", correct: false},
            {text: "0", correct: false},
            {text: "-9", correct: false},
        ]
    },
    {
        //69
        question: "Найдите корни уравнения: \\(x^2 - 4x - 5 = 0\\), если дискриминант = 36",
        answers: [
            {text: "(5; -1)", correct: true},
            {text: "(1; -5)", correct: false},
            {text: "(4; 5)", correct: false},
            {text: "(5; 1)", correct: false},
        ]
    },
    {
        //70
        question: "Найдите корни уравнения: \\(x^2 + 6x + 5 = 0\\), если дискриминант = 16",
        answers: [
            {text: "(-1; -2)", correct: false},
            {text: "(1; -5)", correct: false},
            {text: "(6; 5)", correct: false},
            {text: "(-5; -1)", correct: true},
        ]
    },
    {
        //71
        question: "Найдите корни уравнения: \\(x^2 + 3x - 10 = 0\\), если дискриминант = 49",
        answers: [
            {text: "(2; -5)", correct: true},
            {text: "(5; -2)", correct: false},
            {text: "(-3; 10)", correct: false},
            {text: "(-2; 5)", correct: false},
        ]
    },
    {
        //72
        question: "Найдите корни уравнения: \\(x^2 - 5x + 6 = 0\\), если дискриминант = 1",
        answers: [
            {text: "(-3; -2)", correct: false},
            {text: "(2; 3)", correct: true},
            {text: "(-5; 6)", correct: false},
            {text: "(5; -6)", correct: false},
        ]
    },
    {
        //73
        question: "Найдите корни уравнения: \\(x^2 - x - 6 = 0\\), если дискриминант = 25",
        answers: [
            {text: "(3; 0)", correct: false},
            {text: "(-3; 2)", correct: false},
            {text: "(-2; 3)", correct: true},
            {text: "(2; -3)", correct: false},
        ]
    },
    {
        //74
        question: "Найдите корни уравнения: \\(x^2 - 6x + 8 = 0\\), если дискриминант = 4",
        answers: [
            {text: "(4; -2)", correct: false},
            {text: "(2; 4)", correct: true},
            {text: "(6; 8)", correct: false},
            {text: "(-4; -2)", correct: false},
        ]
    },
    {
        //75
        question: "Найдите корни уравнения: \\(x^2 + 4x - 12 = 0\\), если дискриминант = 64",
        answers: [
            {text: "(2; -6)", correct: true},
            {text: "(-6; -2)", correct: false},
            {text: "(6; -2)", correct: false},
            {text: "(-2; 6)", correct: false},
        ]
    },
    {
        //76
        question: "Найдите корни уравнения: \\(x^2 + 5x - 14 = 0\\), если дискриминант = 81",
        answers: [
            {text: "(2; -7)", correct: true},
            {text: "(-2; 7)", correct: false},
            {text: "(7; -2)", correct: false},
            {text: "(-7; 2)", correct: false},
        ]
    },
    {
        //77
        question: "Найдите корни уравнения: \\(x^2 - 3x - 4 = 0\\), если дискриминант = 25",
        answers: [
            {text: "(-1; 4)", correct: false},
            {text: "(4; -1)", correct: true},
            {text: "(-3; -4)", correct: false},
            {text: "(3; 4)", correct: false},
        ]
    },
    {
        //78
        question: "Найдите корни уравнения: \\(x^2 - 8x + 12 = 0\\), если дискриминант = 16",
        answers: [
            {text: "(6; -2)", correct: false},
            {text: "(2; 6)", correct: true},
            {text: "(-6; -2)", correct: false},
            {text: "(8; -12)", correct: false},
        ]
    }   
]