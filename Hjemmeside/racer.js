//kode til klasse beskrivelse
const race_tekst = document.getElementById("race_tekst");
const race_overskrift = document.getElementById("race_overskrift");
var gammel_tekst;
 //tekst swap ved klasser herunder
function swapText(newText) {
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
        overskrift.innerText="Gnom";
        tekst.innerText="race blob"; 
    }
    else if (newText == "Hobbit") {
        overskrift.innerText="Hobbit";
        tekst.innerText="race "; 
    }

    else if (newText == "Tiefling") {
        overskrift.innerText="Tiefling";
        tekst.innerText="race"; 
    }
    else if (newText == "Dværg") {
        overskrift.innerText="Dværg";
        tekst.innerText="race"; 
    }
    else if (newText == "Menneske") {
        overskrift.innerText="Menneske";
        tekst.innerText="race "; 
    }
    else if (newText == "Elver") {
        overskrift.innerText="Elver";
        tekst.innerText="race "; 
    }
    else if (newText == "Halv_Elver") {
        overskrift.innerText="Halv Elver";
        tekst.innerText="race "; 
    }
    else if (newText == "Halv_Ork") {
        overskrift.innerText="Halv Ork ";
        tekst.innerText="race"; 
    }
;

    //tilføjer aktiv + fjerner aktiv
    document.getElementById(newText).classList += " active";
    if(gammel_tekst){
        document.getElementById(oldtext).classList = "ikon " + gammel_tekst;
    }

    // gemmer original id
    if (newText != gammel_text){
        gammel_tekst = newText;
    } 
    else{
        oldtext = null;
    }
}