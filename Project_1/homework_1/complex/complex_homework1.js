var num = 33721;
var p = 1;
for (; num > 0;) {
    p = p * (num % 10);
    num = Math.floor(num / 10);
}
console.log('Произведение цифр числа num: ' + p);
console.log('Число ' + p + ' в 3 степени: ' + Math.pow(p, 3));

alert(p + ' в 3 степени: ' + Math.pow(p, 3));
