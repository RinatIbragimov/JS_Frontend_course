let soldier = {
    health: 400,
    armor: 100,
}

let john = {
    health: 100,
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);



/* let first = [1, 15, 20, 3];

function softNumbers(a,b) {
    return a - b;
}

let i = first.sort(softNumbers);

console.log(i); */



/* let first = [1, "second", 3, 4, 5];
first[99] = 99;
console.log(first.length);

first.forEach(function(item,i,first) {
    console.log (i + ": " + item + "(массив: " + first + ")")
})
 */

/* let options = {
    name: "test",
    width: 10first
    height: 1024
}

options.bool = false; 
options.colors = {
    border: "black",
    background: "red"
}
delete options.bool;

console.log(options);

for (let key in options) {
    console.log ("Свойство " + key + " имеет значение " + options[key])
}

console.log (Object.keys(options).length); */