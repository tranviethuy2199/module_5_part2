// console.log('hello huy quan hue')
var round = 20;
var number1 = 0;
var number2 = 1;
var number3;
var finbonacci = number1 + "," + number2;
for (var i = 3; i < round; i++) {
    number3 = number1 + number2;
    finbonacci += "," + number3;
    number1 = number2;
    number2 = number3;
}
console.log(finbonacci);
