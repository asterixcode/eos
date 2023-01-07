var b = require('bonescript');
var LED3Pin = "USR3";

b.pinMode(LED3Pin, b.OUTPUT); // Set the LED3Pin to be an output
var isOn = false; // Boolean to keep track of LED state

setInterval(toggleLED, 500) // Run the toggleLED function every half second

function toggleLED() {
    isOn = !isOn; // Invert the isOn variable
    if (isOn) {
        b.digitalWrite(LED3Pin, 1); // Turn LED on
    }
    else {
        b.digitalWrite(LED3Pin, 0); // Turn LED off
    }
    console.log("LED on is " + isOn + "); // output the state of the LED to the console
}