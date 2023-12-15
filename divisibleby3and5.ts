function DivisibilityStataus(numberToCheck :number): string{
    if (numberToCheck % 3 === 0 && numberToCheck % 5 === 0) {
        return `${numberToCheck} is divisible by both 3 and 5.`;
    } else if (numberToCheck % 3 === 0) {
        return `${numberToCheck} is divisible by 3.`;
    } else if (numberToCheck % 5 === 0) {
        return `${numberToCheck} is divisible by 5.`;
    } else {
        return `${numberToCheck} is not divisible by 3 or 5.`;
    }
}

function main():void{
    const Prompts = require('prompt-sync')();
    let numberToDevied : number = Prompts('Enter the value: ');
    if (!isNaN(temperature)) {
        let result:string = DivisibilityStataus(numberToDevied);
        console.log(result) 
    }
    else {
        console.log('Invalid input. Please enter valid numeric value.');
    }   
}


main();