let money = prompt("Ваш бюджет?");
var name = prompt("Название вашего магазина?");
let time = 19;

mainlist = {
    budget: money,
    ShopName: name,
    shopGoods: [],
    employers: {},
    open: false,
}

/* do {
    let a = prompt("Какой тип товаров будем продавать?");
        if ((typeof (a)) === "string" && (typeof (a)) != null && a != "" && a.length < 50) {
            i++;
            console.log("Все верно");
            mainlist.shopGoods[i] = a;
    } else {
        i++
        }
} while (num<55); */

/* let i =0;
while (i < 5) {
    let a = prompt("Какой тип товаров будем продавать?");
     if ((typeof (a)) === "string" && (typeof (a)) != null && a != "" && a.length < 50) {
         i++;
         console.log("Все верно");
         mainlist.shopGoods[i] = a;
     } else {
         i++
        }
}
 */

/* for (let i = 0; i < 5; i++) {

    let a = prompt("Какой тип товаров будем продавать?");

    if ((typeof (a)) === "string" && (typeof (a)) != null && a != "" && a.length < 50) {
        console.log("Все верно");
        mainlist.shopGoods[i] = a;
    }
} */

if (time < 0) {
    console.log("Такого не может быть");
} else if (time > 8 && time < 20) {
    console.log("Время работать")
} else if (time < 24) {
    console.log("Уже слишком поздно")
} else {
    console.log("В сутках 24 часа")
};


alert(mainlist.budget / 30);

console.log(mainlist);