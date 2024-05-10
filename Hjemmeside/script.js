//navbar variabler
let burgerbar = true;
const navbar_icon = document.getElementById("navbar_icon");
const nav_liste = document.getElementById("nav_liste");
const navbar = document.getElementById("navbar");
function chance_navbar(){
    if(burgerbar){
        //burgerbar opens
        navbar_icon.setAttribute("d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
        nav_liste.style.left = '20%';
    }
    else{
        //burgerbar closes
        navbar_icon.setAttribute("d","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
        nav_liste.style.left = '100%';
    }
    burgerbar = !burgerbar;
}

let oldScroll;
const progressbar = document.getElementById("progressbar");
const progress = document.getElementById("progress");
const arrow = document.getElementById("arrow");
window.onscroll = function() {
    //hvis gemte scroll er højrer end nuværende scroll
    //scroll up                bliver nede hvis du er i toppen
    if(oldScroll > scrollY || scrollY < 60){
        
        navbar.style.top = "0px";
        progressbar.style.top = "69px";
    }
    //scroll down
    else{
        navbar.style.top = "-70px";
        progressbar.style.top = "0px";
    }
    //lukker navbar hvis den er åben
    if(!burgerbar){
        chance_navbar();
    }
    oldScroll = scrollY;

    //User journey progress bar, when scroll
    progress.style.width = Math.round((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) + "%";

    //remove arrow
    if(scrollY >= 500){
        arrow.style.color = "#ffffff00";
    };
};

function scrollPage() {
    window.scrollBy({
        top: 600,
        behavior: 'smooth'
    });
}


var tekst = document.getElementById("class_tekst");
var overskrift = document.getElementById("class_overskrift");
var oldtext;
 //tekst swap ved klasser herunder
function swapText(newText) {
    //document.getElementById("displayText").innerText = newText;
    //    Remove the onclick event listener after text is swapped
    // event.target.removeAttribute('onclick');
    document.getElementById(newText).classList += " active";

    if (newText == oldtext){
        overskrift.innerText="Hvad er classes?";
        tekst.innerText="Det, der er vigtigst for din karakter, er hvilken klasser du vælger. En class er en slags arbejde, din karakter har. Din class bestemmer, hvilke evner du kan have. Det kan være alt fra at slå ekstra hårdt til være usynlig."; 
    }
    else if(newText == "reset"){
        overskrift.innerText = "Hvad er classes?";
        tekst.innerText="Det, der er vigtigst for din karakter, er hvilken klasser du vælger. En class er en slags arbejde, din karakter har. Din class bestemmer, hvilke evner du kan have. Det kan være alt fra at slå ekstra hårdt til være usynlig."; 
    
    }
    else if (newText == "Barbarian") {
        overskrift.innerText="Barbarian";
        tekst.innerText="klasse blob"; 
    }
    else if (newText == "Bard") {
        overskrift.innerText="Bard";
        tekst.innerText="klasse "; 
    };


    if(oldtext){
        document.getElementById(oldtext).classList = "ikon " + oldtext;
    }

    if (newText != oldtext){
        oldtext = newText;
    } 
    else{
        oldtext = null;
    }

    
}