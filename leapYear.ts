function CheckLeapYear(numberToCheck :number): string{
    if (numberToCheck % 4 === 0 ) {
        return `${numberToCheck} is Leap Year`;
    } else {
        return `${numberToCheck} is not Leap Year`;
    }
}

const Prompts = require('prompt-sync')();
let givenYear : number = Prompts('Enter the year: ');
if (!isNaN(givenYear)) {    
    let result:string = CheckLeapYear(givenYear);
    console.log(result) 
}
else {
    console.log('Invalid input. Please enter valid numeric value.');
}  

