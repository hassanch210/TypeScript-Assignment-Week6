function CheckDayNumber(dayNumber :number): string{
    if (dayNumber == 1) {
        return 'Sunday';
    } else if (dayNumber == 2) {
        return 'Monday';
    } else if (dayNumber == 3) {
        return 'Tuesday';
    } else if (dayNumber == 4) {
        return 'Wednesday';
    } else if (dayNumber == 5) {
        return 'Thursday';
    } else if (dayNumber == 6) {
        return 'Friday';
    } else {
        return 'Saturday';
    }
}

const wPrompts = require('prompt-sync')();
let dayNo : number = wPrompts('Enter a number (1-7) to determine the day of the week: ');
if (!isNaN(dayNo) && dayNo >= 1 && dayNo <= 7) {    
    let result:string = CheckDayNumber(dayNo);
    console.log(result) 
}
else {
    console.log('Invalid input. Please enter valid numeric value.');
}  

