
    const heightMark = 1.88;
    const massMark = 95;
    const heightJohn = 1.76;
    const massJohn = 85;

    let markBMI = massMark / heightMark ** 2;
    let johnBmi = massJohn / heightJohn ** 2;

    let markHigherBMI = markBMI > johnBmi;

    console.log(markBMI, johnBmi, markHigherBMI);
