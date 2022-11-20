function getFriendlyNumbers(start, end) {

    start = prompt("Введите начало диапазона", "");
    end = prompt("Введите конец диапазона", "");

let 
    t = 0,
    e = 0,
    m = [],
    n = [],
    arr = [];

while ( isNaN(start) || isNaN(end) || (start >= end) || (start <= 0) || (end <= 0) || start == "" 
    || end == "" || start == null || end == null
    || start != parseInt(start) /* проверка, что n не является целым числом */ 
    || (end != parseInt(end))) {
        alert ("Вы ввели некорректные данные, введите заново!");
        start = prompt("Введите начало диапазона", "");
        end = prompt("Введите конец диапазона", "");
    }

for (let i = 0; i <= end - start; i++) {
    m[i] = Number(start) + i;
    }

console.log(m);

for (let i = start; i <= end; i++) {
    for (let j = 1; j < i; j++){
        if ( i % j == 0 ) {
            e += j;
            n[i - start] = e; 
        }
    }
    e = 0;
}

console.log(n);

for (let i = 0; i <= n.length; i++) {
    if (n[i] >= start && n[i] <= end) {
        for (let j = 1; j < n[i]; j++) {
            if ( n[i] % j == 0) {
                t += j;
            }
        }
    if ( t >= start && t <= end && t != 0) {
        for (let k = 0; k <= m.length; k++) {
            if (m[k]) {
                arr.push(t,m[k])
            }
        }
    }
  }
    
}

console.log(arr);


}

getFriendlyNumbers();

