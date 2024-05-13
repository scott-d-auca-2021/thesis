const questions = [
    {
        //1
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + 3x - 1 = 0\\)",
        answers: [
            {text: "5", correct: false},
            {text: "13", correct: true},
            {text: "8", correct: false},
            {text: "2", correct: false},
        ]
    },
    {
        //2
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 3x - 1 = 0\\)",
        answers: [
            {text: "20", correct: false},
            {text: "15", correct: false},
            {text: "8", correct: false},
            {text: "21", correct: true},
        ]
    },
    {
        //3
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + 5x + 2 = 0\\)",
        answers: [
            {text: "15", correct: false},
            {text: "17", correct: true},
            {text: "10", correct: false},
            {text: "9", correct: false},
        ]
    },
    {
        //4
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 4x + 2 = 0\\)",
        answers: [
            {text: "7", correct: false},
            {text: "9", correct: false},
            {text: "10", correct: false},
            {text: "8", correct: true},
        ]
    },
    {
        //5
        question: "Теңдеменин дискриминантын тапкыла: \\(4x^2 - x - 5 = 0\\)",
        answers: [
            {text: "49", correct: false},
            {text: "25", correct: false},
            {text: "81", correct: true},
            {text: "64", correct: false},
        ]
    },
    {
        //6
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 5x + 4 = 0\\)",
        answers: [
            {text: "2", correct: false},
            {text: "13", correct: false},
            {text: "9", correct: true},
            {text: "5", correct: false},
        ]
    },
    {
        //7
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 3x + 2 = 0\\)",
        answers: [
            {text: "1", correct: true},
            {text: "-5", correct: false},
            {text: "4", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        //8
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 5x + 6 = 0\\)",
        answers: [
            {text: "1", correct: true},
            {text: "-5", correct: false},
            {text: "-4", correct: false},
            {text: "10", correct: false},
        ]
    },
    {
        //9
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 - 7x + 3 = 0\\)",
        answers: [
            {text: "19", correct: false},
            {text: "21", correct: false},
            {text: "25", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //10
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 + 2x - 5 = 0\\)",
        answers: [
            {text: "9", correct: false},
            {text: "64", correct: true},
            {text: "8", correct: false},
            {text: "-64", correct: false},
        ]
    },
    {
        //11
        question: "Теңдеменин дискриминантын тапкыла: \\(4x^2 - 4x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "0", correct: true},
        ]
    },
    {
        //12
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 2x + 1 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "10", correct: false},
        ]
    },
    {
        //13
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 - 5x + 2 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "9", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //14
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 + 4x - 5 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "-76", correct: false},
            {text: "76", correct: true},
            {text: "64", correct: false},
        ]
    },
    {
        //15
        question: "Теңдеменин дискриминантын тапкыла: \\(4x^2 - 7x + 3 = 0\\)",
        answers: [
            {text: "10", correct: false},
            {text: "1", correct: true},
            {text: "-1", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        //16
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + 6x + 9 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "0", correct: true},
            {text: "-9", correct: false},
            {text: "25", correct: false},
        ]
    },
    {
        //17
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 + x - 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "10", correct: false},
            {text: "16", correct: false},
            {text: "9", correct: true},
        ]
    },
    {
        //18
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 2x - 1 = 0\\)",
        answers: [
            {text: "3", correct: false},
            {text: "6", correct: false},
            {text: "-8", correct: false},
            {text: "16", correct: true},
        ]
    },
    {
        //19
        question: "Теңдеменин дискриминантын тапкыла: \\(4x^2 + 7x + 2 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "17", correct: true},
            {text: "18", correct: false},
            {text: "20", correct: false},
        ]
    },
    {
        //20
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 4x + 4 = 0\\)",
        answers: [
            {text: "-32", correct: false},
            {text: "32", correct: false},
            {text: "0", correct: true},
            {text: "20", correct: false},
        ]
    },
    {
        //21
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 + 3x + 1 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "-1", correct: false},
            {text: "1", correct: true},
        ]
    },
    {
        //22
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 5x - 2 = 0\\)",
        answers: [
            {text: "49", correct: true},
            {text: "1", correct: false},
            {text: "-1", correct: false},
            {text: "36", correct: false},
        ]
    },
    {
        //23
        question: "Теңдеменин дискриминантын тапкыла: \\(4x^2 - 6x + 2 = 0\\)",
        answers: [
            {text: "15", correct: false},
            {text: "2", correct: false},
            {text: "4", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //24
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 5x + 6 = 0\\)",
        answers: [
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "0", correct: false},
            {text: "1", correct: true},
        ]
    },
    {
        //25
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 6x + 9 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "36", correct: false},
            {text: "3", correct: false},
            {text: "9", correct: false},
        ]
    },
    {
        //26
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 + 3x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "-3", correct: true},
            {text: "9", correct: false},
            {text: "12", correct: false},
        ]
    },
    {
        //27
        question: "Теңдеменин дискриминантын тапкыла: \\(5x^2 - 10x + 2 = 0\\)",
        answers: [
            {text: "60", correct: false},
            {text: "80", correct: true},
            {text: "20", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        //28
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + x - 1 = 0\\)",
        answers: [
            {text: "5", correct: true},
            {text: "1", correct: false},
            {text: "-3", correct: false},
            {text: "2", correct: false},
        ]
    },
    {
        //29
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 - 6x + 3 = 0\\)",
        answers: [
            {text: "12", correct: false},
            {text: "0", correct: true},
            {text: "9", correct: false},
            {text: "3", correct: false},
        ]
    },
    {
        //30
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 8x + 15 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "64", correct: true},
            {text: "-16", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        //31
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 12x + 10 = 0\\)",
        answers: [
            {text: "24", correct: false},
            {text: "24", correct: true},
            {text: "36", correct: false},
            {text: "-24", correct: false},
        ]
    },
    {
        //32
        question: "Теңдеменин дискриминантын тапкыла: \\(4x^2 + 8x + 3 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "-8", correct: false},
            {text: "28", correct: true},
            {text: "4", correct: false},
        ]
    },
    {
        //33
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 10x + 25 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "10", correct: false},
            {text: "25", correct: false},
            {text: "-25", correct: false},
        ]
    },
    {
        //34
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 2x + 1 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        //35
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + 6x + 9 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "3", correct: false},
            {text: "9", correct: false},
            {text: "36", correct: false},
        ]
    },
    {
        //36
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 3x + 2 = 0\\)",
        answers: [
            {text: "1", correct: true},
            {text: "4", correct: false},
            {text: "-1", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        //37
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 4x + 4 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "16", correct: false},
            {text: "4", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        //38
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + 2x + 1 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "-4", correct: false},
        ]
    },
    {
        //39
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "3", correct: false},
            {text: "-3", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //40
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + 4x + 4 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "0", correct: true},
            {text: "16", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        //41
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 7x + 10 = 0\\)",
        answers: [
            {text: "49", correct: false},
            {text: "0", correct: false},
            {text: "10", correct: false},
            {text: "9", correct: true},
        ]
    },
    {
        //42
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 2x + 5 = 0\\)",
        answers: [
            {text: "16", correct: false},
            {text: "5", correct: false},
            {text: "2", correct: false},
            {text: "-16", correct: true},
        ]
    },
    {
        //43
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 - 2x + 1 = 0\\)",
        answers: [
            {text: "-1", correct: false},
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "0", correct: true},
        ]
    },
    {
        //44
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 6x + 3 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "6", correct: false},
            {text: "9", correct: false},
            {text: "3", correct: false},
        ]
    },
    {
        //45
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 9x + 20 = 0\\)",
        answers: [
            {text: "0", correct: false},
            {text: "20", correct: false},
            {text: "1", correct: true},
            {text: "81", correct: false},
        ]
    },
    {
        //46
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 4x + 5 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "-4", correct: true},
            {text: "16", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        //47
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 - 8x + 8 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "64", correct: false},
            {text: "8", correct: false},
            {text: "16", correct: false},
        ]
    },
    {
        //48
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 5x + 6 = 0\\)",
        answers: [
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "0", correct: false},
            {text: "1", correct: true},
        ]
    },
    {
        //49
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 10x + 25 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "50", correct: false},
            {text: "-100", correct: false},
            {text: "25", correct: false},
        ]
    },
    {
        //50
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 3x + 1 = 0\\)",
        answers: [
            {text: "1", correct: false},
            {text: "9", correct: false},
            {text: "-3", correct: true},
            {text: "3", correct: false},
        ]
    },
    {
        //51
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 - 4x + 2 = 0\\)",
        answers: [
            {text: "0", correct: true},
            {text: "4", correct: false},
            {text: "8", correct: false},
            {text: "-4", correct: false},
        ]
    },
    {
        //52
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + 2x + 1 = 0\\)",
        answers: [
            {text: "8", correct: false},
            {text: "0", correct: true},
            {text: "4", correct: false},
            {text: "-1", correct: false},
        ]
    },
    {
        //53
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 6x + 8 = 0\\)",
        answers: [
            {text: "4", correct: false},
            {text: "8", correct: false},
            {text: "16", correct: true},
            {text: "0", correct: false},
        ]
    },
    {
        //54
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + x - 12 = 0\\)",
        answers: [
            {text: "49", correct: true},
            {text: "12", correct: false},
            {text: "36", correct: false},
            {text: "-12", correct: false},
        ]
    },
    {
        //55
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 - 5x + 2 = 0\\)",
        answers: [
            {text: "1", correct: true},
            {text: "4", correct: false},
            {text: "0", correct: false},
            {text: "-1", correct: false},
        ]
    },
    {
        //56
        question: "Теңдеменин дискриминантын тапкыла: \\(4x^2 - 12x + 9 = 0\\)",
        answers: [
            {text: "36", correct: false},
            {text: "0", correct: true},
            {text: "-12", correct: false},
            {text: "12", correct: false},
        ]
    },
    {
        //57
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 8x + 15 = 0\\)",
        answers: [
            {text: "16", correct: true},
            {text: "0", correct: false},
            {text: "15", correct: false},
            {text: "-15", correct: false},
        ]
    },
    {
        //58
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 9x + 6 = 0\\)",
        answers: [
            {text: "9", correct: false},
            {text: "3", correct: false},
            {text: "0", correct: true},
            {text: "-6", correct: false},
        ]
    },
    {
        //59
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 5x = 0\\)",
        answers: [
            {text: "25", correct: true},
            {text: "0", correct: false},
            {text: "-25", correct: false},
            {text: "5", correct: false},
        ]
    },
    {
        //60
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 + 6x = 0\\)",
        answers: [
            {text: "36", correct: true},
            {text: "6", correct: false},
            {text: "0", correct: false},
            {text: "-36", correct: false},
        ]
    },
    {
        //61
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 9x = 0\\)",
        answers: [
            {text: "81", correct: true},
            {text: "9", correct: false},
            {text: "0", correct: false},
            {text: "-9", correct: false},
        ]
    },
    {
        //62
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 + 4x = 0\\)",
        answers: [
            {text: "16", correct: true},
            {text: "4", correct: false},
            {text: "0", correct: false},
            {text: "-16", correct: false},
        ]
    },
    {
        //63
        question: "Теңдеменин дискриминантын тапкыла: \\(5x^2 - 10x = 0\\)",
        answers: [
            {text: "100", correct: true},
            {text: "10", correct: false},
            {text: "0", correct: false},
            {text: "-100", correct: false},
        ]
    },
    {
        //64
        question: "Теңдеменин дискриминантын тапкыла: \\(4x^2 + 8x = 0\\)",
        answers: [
            {text: "64", correct: true},
            {text: "8", correct: false},
            {text: "0", correct: false},
            {text: "-64", correct: false},
        ]
    },
    {
        //65
        question: "Теңдеменин дискриминантын тапкыла: \\(6x^2 - 12x = 0\\)",
        answers: [
            {text: "144", correct: true},
            {text: "12", correct: false},
            {text: "0", correct: false},
            {text: "-144", correct: false},
        ]
    },
    {
        //66
        question: "Теңдеменин дискриминантын тапкыла: \\(x^2 - 7x = 0\\)",
        answers: [
            {text: "49", correct: true},
            {text: "7", correct: false},
            {text: "0", correct: false},
            {text: "-49", correct: false},
        ]
    },
    {
        //67
        question: "Теңдеменин дискриминантын тапкыла: \\(2x^2 + 4x = 0\\)",
        answers: [
            {text: "16", correct: true},
            {text: "4", correct: false},
            {text: "0", correct: false},
            {text: "-16", correct: false},
        ]
    },
    {
        //68
        question: "Теңдеменин дискриминантын тапкыла: \\(3x^2 - 3x = 0\\)",
        answers: [
            {text: "9", correct: true},
            {text: "3", correct: false},
            {text: "0", correct: false},
            {text: "-9", correct: false},
        ]
    },
    {
        //69
        question: "Теңдеменин чечимин тапкыла: \\(x^2 - 4x - 5 = 0\\),  дискриминант = 36",
        answers: [
            {text: "(5; -1)", correct: true},
            {text: "(1; -5)", correct: false},
            {text: "(4; 5)", correct: false},
            {text: "(5; 1)", correct: false},
        ]
    },
    {
        //70
        question: "Теңдеменин чечимин тапкыла: \\(x^2 + 6x + 5 = 0\\), дискриминант = 16",
        answers: [
            {text: "(-1; -5)", correct: true},
            {text: "(1; -5)", correct: false},
            {text: "(6; 5)", correct: false},
            {text: "(-5; -1)", correct: false},
        ]
    },
    {
        //71
        question: "Теңдеменин чечимин тапкыла: \\(x^2 + 3x - 10 = 0\\), дискриминант = 49",
        answers: [
            {text: "(2; -5)", correct: false},
            {text: "(5; -2)", correct: true},
            {text: "(-3; 10)", correct: false},
            {text: "(-2; 5)", correct: false},
        ]
    },
    {
        //72
        question: "Теңдеменин чечимин тапкыла: \\(x^2 - 5x + 6 = 0\\), дискриминант = 1",
        answers: [
            {text: "(3; 2)", correct: true},
            {text: "(2; 3)", correct: false},
            {text: "(-5; 6)", correct: false},
            {text: "(5; -6)", correct: false},
        ]
    },
    {
        //73
        question: "Теңдеменин чечимин тапкыла: \\(x^2 - x - 6 = 0\\), дискриминант = 25",
        answers: [
            {text: "(3; -2)", correct: true},
            {text: "(-3; 2)", correct: false},
            {text: "(-2; 3)", correct: false},
            {text: "(2; -3)", correct: false},
        ]
    },
    {
        //74
        question: "Теңдеменин чечимин тапкыла: \\(x^2 - 6x + 8 = 0\\), дискриминант = 4",
        answers: [
            {text: "(4; 2)", correct: true},
            {text: "(2; 4)", correct: false},
            {text: "(6; 8)", correct: false},
            {text: "(-4; -2)", correct: false},
        ]
    },
    {
        //75
        question: "Теңдеменин чечимин тапкыла: \\(x^2 + 4x - 12 = 0\\), дискриминант = 64",
        answers: [
            {text: "(2; -6)", correct: false},
            {text: "(-6; 2)", correct: false},
            {text: "(6; -2)", correct: false},
            {text: "(-2; 6)", correct: true},
        ]
    },
    {
        //76
        question: "Теңдеменин чечимин тапкыла: \\(x^2 + 5x - 14 = 0\\), дискриминант = 81",
        answers: [
            {text: "(2; -7)", correct: true},
            {text: "(-2; 7)", correct: false},
            {text: "(7; -2)", correct: false},
            {text: "(-7; 2)", correct: false},
        ]
    },
    {
        //77
        question: "Теңдеменин чечимин тапкыла: \\(x^2 - 3x - 4 = 0\\), дискриминант = 25",
        answers: [
            {text: "(-1; 4)", correct: false},
            {text: "(4; -1)", correct: true},
            {text: "(-3; -4)", correct: false},
            {text: "(3; 4)", correct: false},
        ]
    },
    {
        //78
        question: "Теңдеменин чечимин тапкыла: \\(x^2 - 8x + 12 = 0\\), дискриминант = 16",
        answers: [
            {text: "(6; 2)", correct: false},
            {text: "(2; 6)", correct: true},
            {text: "(-6; -2)", correct: false},
            {text: "(8; -12)", correct: false},
        ]
    }   
]