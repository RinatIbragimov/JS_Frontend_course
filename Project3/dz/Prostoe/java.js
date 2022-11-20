let money,
    name,
    time,
    price;

function start() {
    money = prompt("Ваш бюджет?");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?");
    }

    name = prompt("Название вашего магазина?").toUpperCase();
    time = 21;
}
    start ();

mainlist = {
    budget: money,
    ShopName: name,
    shopGoods: [],
    employers: [],
    open: false,
    discount: true  
}

function ChooseGoods() {
    for (let i = 0; i < 5; i++) {

        let a = prompt("Какой тип товаров будем продавать?");

        if ((typeof (a)) === "string" && (typeof (a)) != null && a != "" && a.length < 50) {
            console.log("Все верно");
            mainlist.shopGoods[i] = a;
        } else {
            i = i - 1;
        }
    }
}
/* ChooseGoods (); */


function WorkTime(time) {

    if (time < 0) {
        console.log("Такого не может быть");
    } else if (time > 8 && time < 20) {
        console.log("Время работать")
    } else if (time < 24) {
        console.log("Уже слишком поздно")
    } else {
        console.log("В сутках 24 часа")
    };
}
WorkTime(2);

function calcMoney() {
    return (mainlist.budget / 30);
}

function checkDisk(price) {
    if (mainlist.discount == true) {
        price = price/100*80;
        console.log(price);
    }
}
checkDisk(228);

function naimEmployers() {
    for (let k = 0; k < 4; k++) {

        let b = prompt("Имя сотрудника:");
        if ((typeof (b)) === "string" && (typeof (b)) != null && b != "") {
            let z = k + 1; 
            mainlist.employers[k] = [z + "-" + b];
            console.log(z + ": " + mainlist.employers[k]);
        } else {
            k = k - 1;
        }
} 
}
naimEmployers();

/* alert("Ежедневный бюджет:" + mainlist.budget / 30); */

console.log(mainlist);