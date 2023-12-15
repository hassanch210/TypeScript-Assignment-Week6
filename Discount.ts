function DiscountCalculate(dayNumber :number): string{
    let discountperc : number = 5; 
    if(productprice > 100){
        discountperc = 10;
    }   
    let  percentAmpunt  : number = (discountperc / 100) * productprice ;

    return `${discountperc} % of amount ${productprice} is ${percentAmpunt} .`;

}

const dPrompt = require('prompt-sync')();
let productprice : number = dPrompt('Enter the price of products: ');
if (!isNaN(productprice)) {
    let result = DiscountCalculate(productprice);
    console.log(result)
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}
