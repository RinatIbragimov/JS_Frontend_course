let arr = [];
function OprosPolz () {
    let i = prompt ("Сколько массивов включить в arr?");
    for (let k = 0; k < i; k++ ) {
    arr[k] = "[]";
}
}
OprosPolz();
console.log(arr);
for (let a = 0; a < arr.length; a++) {
    arr[a] = Math.floor(Math.random() * 5) - 10;
}
console.log(arr);