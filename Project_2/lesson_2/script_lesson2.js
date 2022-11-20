let money = prompt("Ваш бюджет?");
var name_store = prompt("Название вашего магазина?");
let time = 19;

mainlist = {
    budget: money,
    ShopName: name_store,
    shopGoods: [],
    employers: {},
    open: false,
}

for (let i = 0; i < 5; i++) {

    let a = prompt("Какой тип товаров будем продавать?");

    if ((typeof(a)) === "string" && (typeof(a)) != null && a != "" && a.length < 50) { // === проверка строго по типу
        console.log ("Все верно");
        mainlist.shopGoods[i] = a;
    } else if ((typeof(a)) != "string" || (typeof (a)) == null || a == "" || a.length > 50) {
        console.log ("Ошибка");
        mainlist.shopGoods[i] = a;
    }
 }

if (time < 0) {
    console.log("Такого не может быть");
    } else if (time > 8 && time < 20) {
         console.log("Время работать")
       } else if (time < 24) {
         console.log("Уже слишком поздно")
            } else {
                console.log("В сутках 24 часа")
             }

alert('ТОВАРЫ: ' + mainlist.shopGoods);
alert('Бюджет магаза на день: ' + mainlist.budget / 30);
console.log(mainlist);