//navbar variabler
let burgerbar = true;
const navbar_icon = document.getElementById("navbar_icon");
const nav_liste = document.getElementById("nav_liste");
const navbar = document.getElementById("navbar");
const progressbar = document.getElementById("progressbar");
const progress = document.getElementById("progress")
function chance_navbar(){
    if(burgerbar){
        //burgerbar is open
        navbar_icon.setAttribute("d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
        nav_liste.style.left = '20%';
    }
    else{
        //burgerbar is closed
        navbar_icon.setAttribute("d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
        nav_liste.style.left = '100%';
    }
    burgerbar = !burgerbar;
}

let oldScroll;
let procent = 0;
window.onscroll = function() {
    //hvis gemte scroll er højrer end nuværende scroll
    //scroll up
    if(oldScroll > scrollY){
        
        navbar.style.top = "0px";

        progressbar.style.top = "70px";
    }
    //scroll down
    else{
        navbar.style.top = "-70px";

        progressbar.style.top = "0px";

        if(!burgerbar){
            chance_navbar();
        }
    }
    
    oldScroll = scrollY;

    // User journey progress bar, when scroll

  //  procent = scrollY/document.body.scrollHeight * 100;
    const procent = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
   
    
    console.log(window.innerHeight)
    console.log(document.body.scrollWidth)
    
   
    
    progress.style.width = procent + "%";
}

