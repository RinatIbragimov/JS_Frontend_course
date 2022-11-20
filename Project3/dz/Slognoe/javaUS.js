let str = "урок - 3 - был слишком легким";
str = str.charAt(0).toUpperCase() + str.substr(1);
console.log(str);
str = str.replace(/-/g, "_");
console.log(str);
str = str.replace(/ легким/g, "");
console.log(str);
console.log(str.length);
str = str.substring(0, str.length - 2) + "оо";
console.log(str);
console.log(str.length);

let arr = [20, 33, 1, "Человек", 2, 3];
let s = 0;
for (let i = 0; i <= arr.length; i++) {
    if (typeof(arr[i]) == "number") {
        s = s + Math.pow(arr[i] , 3);
    }
}
console.log(s);
s = Math.sqrt(s);
console.log(s);
