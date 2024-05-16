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
    if(scrollY >= 500 && arrow){
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



//kode til Race beskrivelse
const race_tekst = document.getElementById("race_tekst");
const race_overskrift = document.getElementById("race_overskrift");
var gammel_tekst;
 //tekst swap ved racer herunder
function swapText2(newText) {
    //ændrer tekst
    if (newText == gammel_tekst){
        race_overskrift.innerText="Hvad er classes?";
        race_tekst.innerText="Der er flere racer at vælge imellem når man skal bygge en karakter. Det gør ofte ikke den store forskel hvilken race man vælger. Vi har valgt de mest normale. Hvis du er tvivl - så spørg din DM om hvilke racer I spiller med."; 
    }
    else if(newText == "reset"){
        race_overskrift.innerText = "Hvad er classes?";
       race_tekst.innerText="Der er flere racer at vælge imellem når man skal bygge en karakter. Det gør ofte ikke den store forskel hvilken race man vælger. Vi har valgt de mest normale. Hvis du er tvivl - så spørg din DM om hvilke racer I spiller med."; 
    
    }
    else if (newText == "Gnom") {
        race_overskrift.innerText="Gnom";
        race_tekst.innerHTML=" Forbedring af evneniveau: Dit intelligensniveau øges med 2. <br>Alder: Gnomer modnes som mennesker og bliver voksne omkring 40 år. De kan leve op til næsten 500 år.<Størrelbr> se: Gnomer er 3-4 fod høje og vejer typisk 40 pund. De er små i størrelse. <br>Hastighed: Grundlæggende ganghastighed er 25 fod. <br>Mørkesyn: Gnomer har overlegen vision i mørke og svagt oplyste områder, kan se i svagt lys op til 60 fod væk og i mørke som svagt oplyst. De ser kun nuancer af gråt i mørket. <br>Gnom Snilde: Gnomer har fordel på redninger mod magi vedrørende intelligens, visdom og karisma. <br>Sprog: Gnomer taler, læser og skriver Common og Gnom. Gnomisk, skrevet med dværgisk alfabet, er kendt for tekniske afhandlinger og viden om naturen."; 
    }
    else if (newText == "Hobbit") {
        race_overskrift.innerText="Hobbit";
        race_tekst.innerHTML=" Evneniveau: Din Smidighed stiger med 2. <br>Alder: Hobitter når voksenalderen ved 20 år og kan leve omkring 250 år.<br>Størrelse: Hobitter er typisk 3 fod høje og vejer ca. 40 pund. De er små. <br>Hastighed: Din grundlæggende ganghastighed er 25 fod. >br>Held: Ved at kaste en 1 på en D20 kan du genkaste terningen og bruge det nye resultat. <br>Mod: Du har fordel på redninger mod at blive forskrækket. <br>Smidighed: Du kan bevæge dig ubemærket omkring større skabninger. <br>Sprog: Du taler, læser og skriver Common og Hobbit. Hobbit-sproget deles sjældent med andre og har en stærk mundtlig tradition. "; 
    }

    else if (newText == "Tiefling") {
        race_overskrift.innerText="Tiefling";
        race_tekst.innerText=" Evneniveau: Din intelligens stiger med 1, og din karisma stiger med 2. <br>Alder: Tieflings modnes som mennesker, men lever lidt længere. <br>Størrelse: Tieflings er omtrent samme størrelse som mennesker. Du er Medium. <br>Hastighed: Din basisganghastighed er 30 fod. <br>Mørkesyn: Takket være din infernalske arv har du overlegen syn i mørke og svagt oplyste områder. <br>Helvedes Modstand: Du er resistent over for brandskader.<br>Infernalt Eftermæle: Du kender thaumaturgy cantrip'en og kan kaste Helvedes Reprimande og Mørke magi som en del af dine evner, brugende karisma som din trylleformular.<br>Sprog: Du taler, læser og skriver Common og Infernalsk."; 
    }
    else if (newText == "Dværg") {
        race_overskrift.innerText="Dværg";
        race_tekst.innerHTML="Evneniveau: Din Konstitution stiger med 2. <br>Alder: Dværge modnes som mennesker, betragtes unge indtil 50 og lever i gennemsnit omkring 350 år. <br>Størrelse: Dværge er 4-5 fod høje og vejer i gennemsnit 150 pund. Du er Medium. <br>Hastighed: Din basis ganghastighed er 25 fod, ikke påvirket af tung rustning. <br>Mørkesyn: Du har overlegen syn i mørke og svagt oplyste områder. <br>Udholdenhed: Du har fordel på redninger mod gift og er resistent over for giftskader. <br>Kamptræning: Dygtig med slagøkser, håndøkser, lette hamre og krigshamre. <br>Værktøjsfærdighed: Du er dygtig med håndværkerens værktøjer som smedens, bryggerens eller murerens. <br>Stenkundskab: Kyndig i historie relateret til stenarbejde, tilføjer dobbelt din færdighedsbonus til relevante checks. <br>Sprog: Du taler, læser og skriver Common og Dværge. Dværgesprog er hårdt og gutturalt."; 
    }
    else if (newText == "Menneske") {
        race_overskrift.innerText="Menneske";
        race_tekst.innerHTML="Evneniveau: Alle dine evneniveauer stiger med 1. <br>Alder: Mennesker når voksenalderen i deres sene teenageår og lever mindre end et århundrede. <br>Størrelse: Mennesker varierer i højde fra knap 5 fod til over 6 fod. Du er Medium. <br>Hastighed: Din basisganghastighed er 30 fod. <br>Sprog: Udover Common kan du tale, læse og skrive et ekstra sprog efter eget valg. Mennesker lærer typisk sprogene fra de folk, de omgås, og integrerer ofte ord og udtryk fra andre kulturer i deres tale."; 
    }
    else if (newText == "Elver") {
        race_overskrift.innerText="Elver";
        race_tekst.innerText="Evneniveau: Din Smidighed øges med 2. <br>Alder: Elvere modnes som mennesker, tager voksenstatus omkring 100 år og lever op til 750 år. <br>Størrelse: Elvere varierer i højde og har slanke bygninger. Du er Medium. <br>Hastighed: Din basisganghastighed er 30 fod. <br>Mørkesyn: Du har overlegen vision i mørke og svagt oplyste områder.<br>Skarpe Sanser: Dygtig i Fornemmelse færdigheden.<br>Fey Ancestry: Immun over for fortryllelse og magi kan ikke få dig til at sove.<br>Trance: Mediterer i 4 timer om dagen og får samme fordele som 8 timers søvn.<br>Sprog: Udover Common taler, læser og skriver du Elvish. Elvish er flydende med rig litteratur."; 
    }
    else if (newText == "Halv_Elver") {
        race_overskrift.innerText="Halv Elver";
        race_tekst.innerText="Evneniveau: Dit karisma stiger med 2, og to andre stats efter eget valg stiger med 1.<br>Alder: Halv-elvere modnes som mennesker og lever ofte over 180 år.<br>Størrelse: Cirka samme størrelse som mennesker, 5 til 6 fod høj. Du er Medium.<br>Hastighed: Din basis ganghastighed er 30 fod.<br>Mørkesyn: Overlegen syn i mørke og svagt oplyste områder.<br>Fey Ancestry: Immun over for fortryllelse, kan ikke søvnmagi påvirke dig.<br> Færdighedsfleksibilitet: Får færdighed i to valgte færdigheder.<br>Sprog: Udover Common, taler, læser og skriver du Elvish og et ekstra sprog efter eget valg."; 
    }
    else if (newText == "Halv_Ork") {
        race_overskrift.innerText="Halv Ork ";
        race_tekst.innerText="Evneniveau: Din styrke stiger med 2, og din konstitution stiger med 1.<br>Alder: Halv-orker modnes hurtigere end mennesker og lever sjældent over 75 år.<br>Størrelse: Lidt større og kraftigere end mennesker, 5 til over 6 fod høj. Du er Medium.<br>Hastighed: Din basis ganghastighed er 30 fod.<br>Mørkesyn: Overlegen syn i mørke og svagt oplyste områder.<br>Truende: Dygtig i intimidation.<br>Urokkelig Udholdenhed: Ved at falde til 0 hit points kan du i stedet falde til 1 hit point, men kun en gang før en lang hvile.<br>Voldsomme Angreb: Ved et kritisk slag med et melee våben kan du kaste en ekstra skadeterning.<br>Sprog: Udover Common, taler, læser og skriver du Ork. Ork er barsk og skrives på dværgisk skrift."; 
    }
;

    //tilføjer aktiv + fjerner aktiv
    document.getElementById(newText).classList += " active";
    if(gammel_tekst){
        document.getElementById(gammel_tekst).classList = "ikon " + gammel_tekst;
    }

    // gemmer original id
    if (newText != gammel_tekst){
        gammel_tekst = newText;
    } 
    else{
        gammel_tekst = null;
    }
}
//race tekst swap slut
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
    }

    else if (newText == "Cleric") {
        overskrift.innerText="Cleric";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Druid") {
        overskrift.innerText="Druid";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Fighter") {
        overskrift.innerText="Fighter";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Munk") {
        overskrift.innerText="Munk";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Paladin") {
        overskrift.innerText="Paladin";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Ranger") {
        overskrift.innerText="Ranger";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Rogue") {
        overskrift.innerText="Rogue";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Ranger") {
        overskrift.innerText="Ranger";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Sorcerer") {
        overskrift.innerText="Sorcerer";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Warlock") {
        overskrift.innerText="Warlock";
        tekst.innerText="klasse "; 
    }
    else if (newText == "Troldmand") {
        overskrift.innerText="Troldmand";
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
//tekst til klasser slut


//Terninger
function Rolldice(dice){
    const the_dice = document.getElementById(dice)
    const dice_img = document.getElementById(dice + 'dice');
    const randomnumber = Math.floor(Math.random() * dice.split("D")[1] + 1);
    the_dice.style.fontSize = "0px";
    dice_img.style.transition = "ease-in-out 1s";
    dice_img.style.transform = 'rotate(360deg)';

    setTimeout(function(){
        the_dice.textContent = randomnumber;
        the_dice.style.fontSize = "1.5em";

        dice_img.style.transition = "0s";
        dice_img.style.transform = 'rotate(0deg)';
    }, 1000)
};

//popup
const video_element = document.getElementById("video");
const popup_element = document.getElementById("popup");
const popup_overskrift = document.getElementById("popup_overskrift");
function popup(video, overskrift){
    if(video == "reset"){
        popup_element.style.top = "150%";
        video_element.setAttribute("src", null);
    }
    else{
        video_element.setAttribute("src", "forklarings_videoer/" + video);
        popup_element.style.top = "50%";
        popup_overskrift.innerText = overskrift;
    }
};


//kontakt formular
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
                        info.innerHTML = "Fejl, prøv igen"; 
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
};