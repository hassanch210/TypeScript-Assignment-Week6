function TempratureCalculate(tempInCal :number): string{
    let tempinFarn : number = (tempInCal * (9 / 5) + 32);
    return `the temperature of Fahrenheitis : ${tempinFarn}`;    
}


const tempPrompt = require('prompt-sync')();
let tempInCal : number = tempPrompt('Enter the temperature in Celsius:');
if (!isNaN(tempInCal)) {
    let result = TempratureCalculate(tempInCal);
    console.log(result)
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}
