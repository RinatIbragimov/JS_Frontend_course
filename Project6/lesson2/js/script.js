let open = document.getElementById("open-btn"),
	name_value = document.getElementsByClassName("name-value")[0],
	budget_value = document.getElementsByClassName("budget-value")[0],
	goods_value = document.getElementsByClassName("goods-value")[0],
	items_value = document.getElementsByClassName("items-value")[0],
	employers_value = document.getElementsByClassName("employers-value")[0],
	discount_value = document.getElementsByClassName("discount-value")[0],
	isopen_value = document.getElementsByClassName("isopen-value")[0],

	goods_item = document.getElementsByClassName("goods-item"),
	goods_btn = document.getElementsByTagName("button")[1],
	budget_btn = document.getElementsByTagName("button")[2],
	employers_btn = document.getElementsByTagName("button")[3],
	choose_item = document.querySelector(".choose-item"),
	time_value = document.querySelector(".time-value"),
	count_budget_value = document.querySelector(".count-budget-value"),
    hire_employers_item = document.querySelectorAll(".hire-employers-item");

let money,
    price;

open.addEventListener("click", () => {
	money = prompt("Ваш бюджет?","");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?","");
    }
    budget_value.textContent = money;

    name_value.textContent = prompt("Название вашего магазина?","").toUpperCase();
});    

goods_btn.addEventListener("click", () => {
	for (let i = 0; i < goods_item.length; i++) {

    	let a = goods_item[i].value;

            if ((typeof (a)) === "string" && (typeof (a)) != null && a.length < 50) {
                console.log("Все верно");
                mainlist.shopGoods[i] = a;
                goods_value.textContent = mainlist.shopGoods; 
            } else {
                i = i - 1;
            }
        }

}); 

time_value.addEventListener('change', () =>{
	let time = time_value.value;
	 if (time < 0) {
            console.log("Такого не может быть!");
            mainlist.open = false;
            } else if (time > 8 && time < 20) {
                console.log("Время работать!");
                mainlist.open = true;
                 } else if (time < 24) {
                    console.log("Уже слишком поздно!");
                     mainlist.open = false;
                     } else {
                        console.log("В сутках только 24 часа!");
                        mainlist.open = false;
        };
     if (mainlist.open == true) {
     	isopen_value.style.backgroundColor = "green";
     }
     	else {
     		isopen_value.style.backgroundColor = "red";
     	}
})

choose_item.addEventListener('change', () => {
	 let items = choose_item.value;

	 if (isNaN(items) && items != "") {
        mainlist.shopItems = items.split(","); 
        mainlist.shopItems.sort();

        items_value.textContent = mainlist.shopItems;
}

});

budget_btn.addEventListener("click", () => {
	count_budget_value.value = money / 30;
});

employers_btn.addEventListener("click", () => {
	for (let i = 0; i < hire_employers_item.length; i++) {
            let name = hire_employers_item[i].value;
                mainlist.employers[i] = name;

                employers_value.textContent += mainlist.employers[i] + ',';
               } 

});


discount_value.addEventListener('change', () => {
        discount_value.style.backgroundColor = "green";
    
});

const mainlist = {
    budget: money,
    ShopName: name,
    shopGoods: [],
    employers: [],
    open: false,
    discount: true,
    shopItems: [],
};

console.log(mainlist);