// "Comment me!"

/* "And"
    "Me!" */

var first = 1; // Если var объявлена в коде, то она существует еще до выполнения скрипта. Если наш скрипт еще не работает, но переменная var уже существует.

const pi = 3.14;

{
    let second = 2; // Переменная let существует только в блоке кода, окруженного фигурными скобками.
}

console.log (4/0); // infinity
console.log ('string' * 9); // операция не поддающаяся математической логике NaN.

var und;
console.log(und); // обращаемся к объекту, который существует, но никакого значения не имеет

obj = { // объект - это структура данных, которая используется для хранения данных любого типа.
    name: "John", // свойство (методы) объекта
    age:25,
    isMarried: false
 }

 console.log(obj["name"]); // выведет свойство объекта John.

 var arr = ['plumb','orange','apple']; // массив - структура,данные в которой идут попорядку.
 console.log(arr[2]);

 alert("Hello!"); // Выводит информацию в модальном окне с кнопкой ОК.
 
 confirm("Are you Here?"); // выводит окно с вопросом, который мы указываем с 2-мя кнопками: ОК и cancell.

var answer = +prompt("Вам есть 18?","18");

console.log(typeof(answer));

console.log("arr" + "-object");
console.log( 4 + "-object");

var icnr = 10,
    decr = 10;

    icnr++;
    decr--; 

console.log(icnr++);
console.log(decr--); 

console.log(5 % 2); // остаток от деления
console.log("10" === 10); // === сравнение по типам данных

var isChecked = true;
var isClose = true;

console.log(isChecked || !isClose);
