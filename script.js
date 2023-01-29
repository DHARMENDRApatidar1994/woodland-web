const menu = document.querySelector(".mobile-middle");
const mobile = document.querySelector(".mob-middle1");
flag = 0;
menu.addEventListener("click", function(){
    if (flag == 0){
     mobile.style.transform = "translateX(0)";
     flag = 1;
    }
    else{
        mobile.style.transform = "translateX(-120%)";
        flag = 0;
    }
    
})