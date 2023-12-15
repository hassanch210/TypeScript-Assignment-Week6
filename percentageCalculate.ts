function PercentgeCalculate(totalVal :number, ObtainVal: number): string{
    var PercentVal : number = ((ObtainVal * 100) / totalVal);
    return `the temperature of Fahrenheitis : ${PercentVal} %`;
}

const PercPrompt = require('prompt-sync')();
var totalVal : number = PercPrompt('Enter the total val:');
var ObtainVal : number = PercPrompt('Enter the obtain val:');
if (!isNaN(totalVal) && !isNaN(ObtainVal) && totalVal > 0 ) {
    let result = PercentgeCalculate(totalVal,ObtainVal);
    console.log(result)
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}
