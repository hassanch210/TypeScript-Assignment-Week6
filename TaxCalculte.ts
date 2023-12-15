function TaxCalculate(consumedUnits :number,actualUnitAmount : number): number{
    let taxAmount : number = 0;
    if (consumedUnits > 100 && consumedUnits <= 200) {
        taxAmount = (( 10 / 100 ) * actualUnitAmount);
    } else if (consumedUnits > 200 && consumedUnits <= 300) {
        taxAmount = (( 15 / 100 ) * actualUnitAmount);
    } else if (consumedUnits > 300 && consumedUnits <= 500) {
        taxAmount = (( 20 / 100 ) * actualUnitAmount);
    } else if(consumedUnits > 500){
        taxAmount = (( 25 / 100 ) * actualUnitAmount);
    }
    return taxAmount;
}
function CalculateBillAmount(ActaulUnit : number) : string{
    let oneUnitPrice : number = 30;
    let actualUnitAmount : number = oneUnitPrice * ActaulUnit;
    let taxAmount : number = TaxCalculate(ActaulUnit,actualUnitAmount);
    let finalPrice : number = actualUnitAmount + taxAmount;
    let Status = `\n1 Unit price is 30 Rs.\nConsumed Units: ${ActaulUnit}\nConsumed Units Amount: ${actualUnitAmount} Rs. \nTax Amount: ${taxAmount} Rs. \nFinal Bill Amount: ${finalPrice} Rs.`;
    return Status;
}

const taxPrompt = require('prompt-sync')();
let consumedUnits : number = taxPrompt('Enter total consumed units: ');

if (!isNaN(consumedUnits) && consumedUnits >= 0) {  
    let result = CalculateBillAmount(consumedUnits);
    console.log(result)
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}
