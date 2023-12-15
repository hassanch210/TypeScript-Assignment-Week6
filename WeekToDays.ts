function WeekDaysCalculate(dayNumber :number): string{
    let  noOfWeeks : number = Math.floor(daysVal / 7) ;
    let  remainingDays : number = daysVal % 7 ;
    return `There are ${noOfWeeks} weeks and ${remainingDays} days.`;
}

const wPrompt = require('prompt-sync')();
let daysVal : number = wPrompt('Enter the no of days: ');
if (!isNaN(daysVal)) {
    let result = WeekDaysCalculate(daysVal);
        console.log(result);
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}