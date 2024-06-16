let Menu = document.querySelector(".nav-menu") ;
let closeMenuBtn = document.querySelector(".nav-menu__x-icon") ;
let closeMenuIcon = document.querySelector(".nav-menu__x-icon-path") ;


function closeMenu(event){
    console.log(event.target)
    Menu.classList.remove("show");
}

closeMenuBtn.addEventListener("click",closeMenu) ;
closeMenuIcon.addEventListener("click",closeMenu) ;


/////////////////  open menu by Bars //////////////


let openMenuBtn = document.querySelector(".nav-menu__bars") ;


function openMenu(){
    Menu.classList.toggle("show") ;
}


openMenuBtn.addEventListener("click",openMenu) ;


//////////////////  click on menu item and anchor to section  /////////


const MenuItems = document.querySelectorAll(".nav-menu__item") ;


MenuItems.forEach( menuItem => {
    menuItem.addEventListener("click",function(){
        let sectionClass = menuItem.dataset.class ;
        let section = document.querySelector("." + sectionClass) ;
        scrollHandler(section) ;
    })
})


function scrollHandler(section){
    topOffset = section.offsetTop ;
    console.log(topOffset) ;
    window.scrollTo({
        top: topOffset,
        left:0,
        behavior:"smooth"
      });
}



///////// dark mode /////////

const themeToggleBtn = document.querySelector(".toggle-theme-btn") ;
const themeToggleIcon = document.querySelector(".fas") ;
let isDarkMode = true ;




function changeTheme(){
    
    if(isDarkMode){
        document.documentElement.classList.add("light");
        themeToggleIcon.className = "fas fa-moon" ;
        localStorage.setItem("mode","light") ;
        isDarkMode = false ;
    }else{
        document.documentElement.classList.remove("light");
        themeToggleIcon.className = "fas fa-sun" ;
        localStorage.setItem("mode","dark") ;
        isDarkMode = true ;  
    }
}

themeToggleBtn.addEventListener("click",changeTheme) ;
window.addEventListener("load",function(){
   resetMode() ;
})


function resetMode(){
    let mode = localStorage.getItem("mode") ;
    if(mode == "light"){
        document.documentElement.classList.add("light");
        themeToggleIcon.className = "fas fa-moon" ;
        localStorage.setItem("mode","light") ;
        isDarkMode = false ;
    }else{
        document.documentElement.classList.remove("light");
        themeToggleIcon.className = "fas fa-sun" ;
        localStorage.setItem("mode","dark") ;
        isDarkMode = true ;  
    }
    

}


/////// timer /////

const saleNumberElem = document.querySelector(".total-sale__number") ;
const actionNumberElem = document.querySelector(".actions__number") ;
const artistNumberElem = document.querySelector(".artists__number") ;
const achivments = document.querySelector(".achivments") ;

window.addEventListener("scroll",function(){
    let scrollTop = document.documentElement.scrollTop ;
    if(scrollTop == achivments.offsetTop){
        console.log("ok")
    }
})

let saleNumber = 0 , actionNumberm = 0 , artistNumber = 0 ;
let saleTimer =  setInterval(function() {
    if(saleNumber == 240){
        clearInterval(saleTimer) ;
    }
    saleNumberElem.innerHTML = saleNumber + " K+"
    saleNumber ++ ;
    
}, 20);

let actionTimer =  setInterval(function() {
    if(actionNumberm == 160){
        clearInterval(actionTimer) ;
    }
    actionNumberElem.innerHTML = actionNumberm + " K+"
    actionNumberm ++ ;
    
}, 20);

let artistTimer =  setInterval(function() {
    if(artistNumber == 240){
        clearInterval(artistTimer) ;
    }
     artistNumberElem.innerHTML = artistNumber + " K+"
     artistNumber ++ ;
    
}, 20);


