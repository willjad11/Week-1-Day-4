//Print odds 1-20
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log("--------NEXT CHALLENGE--------")

//Decreasing Multiples of 3
for (var x = 100; x >= 0; x--) {
    if (x % 3 == 0) {
        console.log(x);
    }
}

console.log("--------NEXT CHALLENGE--------")

//Print the sequence
var number = 1.5;
var number2 = 4;
for (var y = 0; y <= 5; y++) {
    console.log(number2);
    number2 = number2 - number;
}

console.log("--------NEXT CHALLENGE--------")

//Sigma
var number3 = 0;
for (var n = 1; n <= 100; n++) {
    number3 += n;
}
console.log(number3);

console.log("--------NEXT CHALLENGE--------")

//Factorial
var number4 = 1;
for (var v = 1; v <= 12; v++) {
    number4 *= v;
}
console.log(number4);