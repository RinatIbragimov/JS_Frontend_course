function learnJS(lang, callback) {
    console.log("Я учу" + lang)
    callback();
}

learnJS("Javascript", done);

function done () {
    console.log("Я прошел 3ий урок")
}

/* function first() {  Что-то делаем 
    setTimeout( function () {
        console.log(1);
    }, 500 );
}
function second() {
    console.log(2);
}
first();
second(); */