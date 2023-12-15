function AgeCalculate(dayNumber :number): string{
    let ageStatus :string = "";
    if(customerage > 0 && customerage <= 12){
        ageStatus = "Child";
    }   
    else if(customerage >= 13 && customerage <= 19){
        ageStatus = "Teenager";
    }
    else{
        ageStatus = "Adult";
    }
    return `your age status is ${ageStatus}.`;
}


const agePrompt = require('prompt-sync')();
let customerage : number = agePrompt('Enter your age: ');

if (!isNaN(customerage) && customerage > 0) {  
    let result = AgeCalculate(customerage);
    console.log(result)
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}
