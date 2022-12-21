// console.log('hello huy quan hue')
let round :number = 20;
let number1 :number = 0;
let number2:number = 1;
let number3:number;
let array :number[] = [];
let finbonacci:string = number1  + "," + number2;
for (let i = 3 ; i <  round   ; i++){
    number3 = number1 + number2;
    finbonacci += "," + number3;
    number1 = number2;
    number2 = number3;
}
console.log(finbonacci);







