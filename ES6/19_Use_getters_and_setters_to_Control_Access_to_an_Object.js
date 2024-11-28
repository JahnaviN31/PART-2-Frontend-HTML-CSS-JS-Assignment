// Problem 19: Use getters and setters to Control Access to an Object

class Thermostat {
    constructor(fahrenheit) {
        this.celsius = ((fahrenheit - 32)*5) / 9;
    }
    get temperature() {
        return this.celsius;
    }
    set temperature(newTemperature) {
        this.celsius = newTemperature;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
