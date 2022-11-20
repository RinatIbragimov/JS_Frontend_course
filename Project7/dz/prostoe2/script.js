let i = 1;
    block = document.getElementsByClassName("block")[0];
    btn = document.querySelector(".activate");

    function animate({duration, timing, draw}) {
      let start = performance.now ();   //перфоманс.ноу - получает время, которое произошло с начала захода на страницу

      requestAnimationFrame(function animate(time) {
        let timePassed = (time - start) / duration;

        if (timePassed > 1) timePassed = 1;

        let progress = timing (timePassed);

            draw(progress);

        if (timePassed < 1) {
          requestAnimationFrame(animate);
      }
  });
  };

  btn.addEventListener("click", function () {
     animate({
             duration: 5000,
             timing: function circ(timePassed) {
              for (let a = 0, b = 1, result; 1; a+=b, b /= 2) {      //Это функция bounce - прыжка.
                   if (timePassed >= (7 - 4 * a)/ 11) {
                     return -Math.pow((11 - 6 * a - 11 * timePassed) / 4, 2) + Math.pow (b, 2);
                   }
              }  
            },
             
           /*  timing: function circ(timePassed) {
              return 1 - Math.sin(Math.acos(timePassed));   //эта функция описывает дугу
            },   */

             /*timing: function quad(progress) {
               return Math.pow(progress, 2);   //Это была квадратичная фун-ия
             }, */
             draw: function(progress) {
              block.style.left = progress * 500 +"px";
            }
      });
});


    /*     function animate(draw, duration) {
        let start = performance.now ();   //перфоманс.ноу - получает время, которое произошло с начала захода на страницу

        requestAnimationFrame(function animate(time) {
          let timePassed = time - start;

          if (timePassed > duration) timePassed = duration;  // ЭТО ОБЫЧНАЯ АНИМАЦИЯ

              draw(timePassed);

          if (timePassed < duration) requestAnimationFrame(animate);
        })
    }

    btn.addEventListener("click", function () {
      animate(function(timePassed) {
      block.style.left = timePassed/5 +"px";
    }, 2000);
  }) */
   

/*     function startAnimation () {
      let timerId = setTimeout(function hello() {
        block.style.left = i + "%"
       if (i < 93) {
          timerId = setTimeout(hello, 10);}   // ТОЖЕ ОБЫЧНАЯ АНИМАЦИЯ ЧЕРЕЗ СЕТ_Интервал
        i++;  
      }, 10);
    }

    btn.addEventListener ("click", startAnimation); */