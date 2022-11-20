let btn = document.getElementsByTagName("button")[0];
btn.addEventListener('click', () => {
    console.log(this);
})

/* function count(number) {
    return this * number;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10)); */

/* let user = {
    name: "John"
};

function sayName (surname) {
    console.log(this);
    console.log(this.name+ surname);
};

console.log(sayName.call(user," Smith"));
console.log(sayName.apply(user,[" Snow"])); */


/* function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        alert("Hello " + this.name);
    }
};

User.prototype.exit = function (name) {
  alert ("Пользователь " + this.name + " Покинул сайт")
}

let ivan = new User("Ivan", 23),
    alex = new User("Alex", 20);

console.log (ivan);
console.log (alex);

ivan.exit();  */

// 1) Просто вызов функции - window. Или же undefined при строгом режиме.
// 2) Метод - this = object
// 3) Конструктор (new) = this = созданный объект
// 4) Указание конкретного контекста - call, apply, bind