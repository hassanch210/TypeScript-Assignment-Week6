function WeatcherStatus(temperature :number): string{
    let weatherStatus :string = "";
    if (temperature < 10) {
        weatherStatus = "It's very cold. Wear a heavy winter coat, hat, scarf, and gloves.";
    } else if (temperature >= 10 && temperature < 20) {
        weatherStatus = "It's cold. Consider wearing a jacket and bringing a scarf.";
    } else if (temperature >= 20 && temperature < 30) {
        weatherStatus = "It's cool. A light jacket or sweater should be enough.";
    } else if (temperature >= 30 && temperature < 40) {
        weatherStatus = "It's mild. You can wear a light jacket or a long-sleeved shirt.";
    } else if (temperature >= 40 && temperature < 60) {
        weatherStatus = "It's warm. A T-shirt or a light sweater should be comfortable.";
    } else {
        weatherStatus = "It's hot. Wear light and breathable clothing.";
    }
    return weatherStatus;
}


const weatherPrompt = require('prompt-sync')();
let temperature : number = weatherPrompt('Enter the temperature in degrees Celsius: ');


if (!isNaN(temperature)) {
   
    let result = WeatcherStatus(temperature)
    console.log(`Weather Status:  ${result}`)
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}
