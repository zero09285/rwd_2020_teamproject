var burgar = document.querySelector(".burgar_btn")
var nav = document.querySelector(".navBar")



burgar.onclick = function () { //Loading效果 與 Aos初始化

    //按鈕變x
    burgar.classList.toggle("change");

    if (nav.className.indexOf('nav_active') == -1) {
        nav.classList.add("nav_active")
        $('body').addClass('scrollY_hidden')
        // console.log("if");
        

    }else{
        $('body').removeClass('scrollY_hidden')
        // console.log("else");
        nav.classList.remove("nav_active")
    }

        

};