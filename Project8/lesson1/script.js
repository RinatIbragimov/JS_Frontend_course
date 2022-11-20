let box = document.querySelector(".box"),
    width = box.clientWidth,
    height = box.clientHeight,
    btn = document.getElementsByTagName("button")[0];
    z = box.getBoundingClientRect().top

    console.log (document.documentElement.scrollTop);
    console.log (document.documentElement.clientHeight);
    console.log (z);

    window.scrollBy(0, 0);
    window.scrollTo(0, 200); 
