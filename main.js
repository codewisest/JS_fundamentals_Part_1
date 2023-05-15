window.onload = function() {
    let js = 'amazing';
    if(js === 'amazing') console.log('JavaScript is fun');
    console.log(40 + 8 + 23 - 10);

    const firstName = 'Chijioke';
    const lastName = 'Nwagwu';
    const birthYear = '2030';
    const currentYear = 2040;
    const job = 'Web Developer';
    const age = currentYear - birthYear;

    // string building
    const chijioke = `I'm ${firstName}, a ${currentYear - birthYear} old ${job}`;
    console.log(chijioke);

    // conditionals
    
    if(age >= 18) {
        console.log(`${firstName} can start driving license 🚗`)
    } else {
        console.log(`${firstName} can start driving license 🚗 after ${18 - age} years`)
    }

    // const favoriteNumber = prompt('What is your favorite number');
    // console.log(favoriteNumber);
}