let money,
    name,
    time,
    price;
function start() {
    money = prompt("Ваш бюджет?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?", "");
    }

    name = prompt("Название вашего магазина?", "").toUpperCase();
    time = 21;
}
/* start(); */

mainlist = {
    budget: money,
    ShopName: name,
    shopGoods: [],
    employers: [],
    open: false,
    discount: false,
    shopItems: [],

    ChooseGoods: function ChooseGoods() {
        for (let i = 0; i < 5; i++) {

            let a = prompt("Какой тип товаров будем продавать?", "");

            if ((typeof (a)) === "string" && (typeof (a)) != null && a != "" && a.length < 50) {
                console.log("Все верно");
                mainlist.shopGoods[i] = a;
            } else {
                i = i - 1;
            }
        }
    },

    WorkTime: function WorkTime(time) {

        if (time < 0) {
            console.log("Такого не может быть!");
        } else if (time > 8 && time < 20) {
            console.log("Время работать!");
            mainlist.open = true;
        } else if (time < 24) {
            console.log("Уже слишком поздно!")
        } else {
            console.log("В сутках только 24 часа!")
        };
    },

    dayBudget: function dayBudget() {
        alert("Ежедневный бюджет " + mainlist.budget / 30);
    },

    makeDiscount: function makeDiscount() {
        if (mainlist.discount == true) {
            price = (price / 100) * 80;
            console.log(price);
        }
    },

    hireEmployers: function hireEmployers() {
        for (let i = 0; i < 4; i++) {
            let name = prompt("Имя сотрудника:");
            mainlist.employers[i] = name;
        }
    },

    chooseShopItems: function chooseShopItems() {
        let items = prompt("Перечислите через запятую ваши товары", "");
        while ((typeof (items)) != "string" || (typeof (items)) == null || items == "") {
                items = prompt("Перечислите через запятую ваши товары", "");
        }
        mainlist.shopItems = items.split(",");
        mainlist.shopItems.push(prompt("Подождите, еще ", ""));
        mainlist.shopItems.sort();
        mainlist.shopItems.forEach(function(item,i,shopItems) {
            alert ("У нас вы можете купить:" + "\n" + ++i + ": " + item + "\n")
        });
        for (let key in mainlist.shopItems) {
            console.log("Наш магазин включает в себя: " + mainlist.shopItems[key])
        }
}
}
console.log(mainlist);