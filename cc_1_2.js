
    const heightMark = 1.88;
    const massMark = 95;
    const heightJohn = 1.76;
    const massJohn = 85;

    let markBMI = massMark / heightMark ** 2;
    let johnBMI = massJohn / heightJohn ** 2;

    let markHigherBMI = markBMI > johnBMI;

    console.log(markBMI, johnBMI, markHigherBMI);
    // compare BMIs
    if(markBMI > johnBMI) {
        console.log(`Mark's BMI ${markBMI} is greater than John's BMI ${johnBMI}`);
    } else {
        console.log(`Mark's BMI ${markBMI} is less than John's BMI ${johnBMI}`);
    }
