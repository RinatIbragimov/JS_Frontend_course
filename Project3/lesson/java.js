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
/* start (); */

mainlist = {
    budget: money,
    ShopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
}

function ChooseGoods() { 
    for (let i = 0; i < 5; i++) {

        let a = prompt("Какой тип товаров будем продавать?");

        if ((typeof (a)) === "string" && (typeof (a)) != null && a != "" && a.length < 50) {
            console.log("Все верно");
            mainlist.shopGoods[i] = a;
        } else {
            i = i -1;
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
WorkTime(18);

alert("Ежедневный бюджет:" + mainlist.budget / 30);

console.log(mainlist);