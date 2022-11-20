var Bujet = prompt("Ваш бюджет?");
var NameMagazine = prompt("Название вашего магазина?");

mainlist = {
  Money: Bujet,
  ShopName: NameMagazine,
  shopGoods: [],
  employers:
  {
    employer1: 'Valera',
    employer2: 'Zhmih',
    employer3: 'Caryman'
  },
  open: true,
}

var answer1 = prompt("Какой тип товара будем продавать?");
mainlist.shopGoods[0] = answer1;

var answer2 = prompt("Какой тип товара будем продавать?");
mainlist.shopGoods[1] = answer2;

var answer3 = prompt("Какой тип товара будем продавать?");
mainlist.shopGoods[2] = answer3;

alert('ТОВАРЫ: ' + mainlist.shopGoods[0] + ', ' + mainlist.shopGoods[1] + ', ' + mainlist.shopGoods[2]);
alert('Бюджет магаза на день: ' + mainlist.Money / 30);
