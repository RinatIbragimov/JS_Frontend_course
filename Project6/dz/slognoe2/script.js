function getFriendlyNumbers(start, end) {

    function summa_del(num) {
      let sum = 0;
      for (let i = 1; i < num; i++) {
        if (num % i == 0) {
          sum += i;
        }
      }
      return sum;
    }
    
  let arr = [];
  
    if ( start>=end || start <= 0 || end <= 0 || isNaN(start) || isNaN(end) || start == "" || end == ""
        || start == null || end == null 
        || start != parseInt(start) /* проверка, что n не является целым числом */
        || end != parseInt(end)) {
      alert('Вы ввели некорректные данные, введите заново!');
      return false;
    } else {
       for(let n=start; n <= end; n++){
        let a=summa_del(n);
        if (n==summa_del(a) && n<a) {     
        arr.push([n, a]);
      }
  }
        }
      return(arr); 
  };

  console.log(getFriendlyNumbers(1, 1211));
