//kode til klasse beskrivelse
const race_tekst = document.getElementById("race_tekst");
const race_overskrift = document.getElementById("race_overskrift");
var gammel_tekst;
 //tekst swap ved klasser herunder
function swapText(newText) {
    //ændrer tekst
    if (newText == gammel_tekst){
        race_overskrift.innerText="Hvad er classes?";
        race_tekst.innerText="Det, der er vigtigst for din karakter, er hvilken klasser du vælger. En class er en slags arbejde, din karakter har. Din class bestemmer, hvilke evner du kan have. Det kan være alt fra at slå ekstra hårdt til være usynlig."; 
    }
    else if(newText == "reset"){
        overskrift.innerText = "Hvad er classes?";
        tekst.innerText="Det, der er vigtigst for din karakter, er hvilken klasser du vælger. En class er en slags arbejde, din karakter har. Din class bestemmer, hvilke evner du kan have. Det kan være alt fra at slå ekstra hårdt til være usynlig."; 
    
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
    if (newText != oldtext){
        oldtext = newText;
    } 
    else{
        oldtext = null;
    }
}