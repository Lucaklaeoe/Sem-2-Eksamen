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
    if(progressbar){
        if(oldScroll > scrollY || scrollY < 60){
            navbar.style.top = "0px";
            progressbar.style.top = "69px";
        }
        //scroll down
        else{
            navbar.style.top = "-70px";
            progressbar.style.top = "0px";
        }
        //User journey progress bar, when scroll
        progress.style.width = Math.round((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) + "%";
    }
    
    //lukker navbar hvis den er åben
    if(!burgerbar){
        chance_navbar();
    }
    oldScroll = scrollY;

    
    //remove arrow
    if(scrollY >= 500){
        //ændre farve istedet for display for at lave det smooth
        arrow.style.color = "#ffffff00";
    };
};

function scrollPage() {
    window.scrollBy({
        top: 600,
        behavior: 'smooth'
    });
}

//kode til klasse beskrivelse
const tekst = document.getElementById("class_tekst");
const overskrift = document.getElementById("class_overskrift");
var oldtext;
 //tekst swap ved klasser herunder
function swapText(newText) {
    //ændrer tekst
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

    //tilføjer aktiv + fjerner aktiv
    document.getElementById(newText).classList += " active";
    if(oldtext){
        document.getElementById(oldtext).classList = "ikon " + oldtext;
    }

    // gemmer original id
    if (newText != oldtext){
        oldtext = newText;
    } 
    else{
        oldtext = null;
    }
}



const Navn = document.getElementById("Navn");
const Email = document.getElementById("Email");
const Besked = document.getElementById("Besked");
const info = document.getElementById("info");

if(Navn){
    (function() {
        //https://dashboard.emailjs.com/admin/account
        emailjs.init({
        publicKey: "IICOjP8VvZvZgUlsM",
        });
    })();

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();       

            if(Navn.value != "" && Email.value != "" && Besked.value != ""){
            //Alle felter er udfyldt --> do this  
                emailjs.sendForm('service_kesfnw1', 'template_uvrhrpc', this).then(() => {
                    //Removes the submit buttons funktion and the text in the input boxes
                    document.getElementById("submit").setAttribute("type","Done");
                    //sæt formen til start
                    Navn.value = null;
                    Email.value = null;
                    Besked.value = null;
                    //fjern deres class, hvis der var noget man ikke udfyldte
                    Navn.classList = "";
                    Email.classList = "";
                    Besked.classList = "";

                    info.innerHTML = "Mail sendt!";
                    }, (error) => {
                        console.log('FAILED...', error);
                });
            } 
            else{
                var message_to_user = "Du mangler at udfylde følgende: ";
                if(Navn.value == ""){
                    Navn.classList = "not_filled";
                    message_to_user += "<br> - Navn";
                };
                if(Email.value == ""){
                    Email.classList = "not_filled";
                    message_to_user += "<br> - Email";
                };
                if(Besked.value == ""){
                    Besked.classList = "not_filled";
                    message_to_user += "<br> - Besked";
                };
                info.innerHTML = message_to_user;
            };
        });
    };
}


