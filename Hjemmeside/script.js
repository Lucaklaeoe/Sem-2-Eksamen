//navbar variabler
var burgerbar = true;
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

var oldScroll;
const progressbar = document.getElementById("progressbar");
const progress = document.getElementById("progress");
const arrow = document.getElementById("arrow");
window.onscroll = function() {
    //hvis gemte scroll er højrer end nuværende scroll
    //scroll up                bliver nede hvis du er i toppen
    if(oldScroll > scrollY || scrollY < 60){
        navbar.style.top = "0px";

        if(progressbar){
            progressbar.style.top = "69px";
        }
    }
    //scroll down
    else{
        navbar.style.top = "-70px";

        if(progressbar){
            progressbar.style.top = "0px";
        }
    };
    oldScroll = scrollY;
    if(progressbar){
        //User journey progress bar, when scroll
        progress.style.width = Math.round((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) + "%";
    };
    //lukker navbar hvis den er åben
    if(!burgerbar){
        chance_navbar();
    };
    
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

    if(newText == "reset" || newText == gammel_tekst){
        race_overskrift.innerText = "Hvad er classes?";
       race_tekst.innerText="Der er flere racer at vælge imellem når man skal bygge en karakter. Det gør ofte ikke den store forskel hvilken race man vælger. Vi har valgt de mest normale. Hvis du er tvivl - så spørg din DM om hvilke racer I spiller med."; 
    
    }
    else if (newText == "Gnom") {
        race_overskrift.innerText="Gnom";
        race_tekst.innerHTML="<b>Forbedring af evneniveau:</b> Dit intelligensniveau øges med 2. <br><b>Alder:</b> Gnomer modnes som mennesker og bliver voksne omkring 40 år. De kan leve op til næsten 500 år.<Størrelbr> se: Gnomer er 3-4 fod høje og vejer typisk 40 pund. De er små i størrelse. <br><b>Hastighed:</b> Grundlæggende ganghastighed er 25 fod. <br><b>Mørkesyn:</b> Gnomer har overlegen vision i mørke og svagt oplyste områder, kan se i svagt lys op til 60 fod væk og i mørke som svagt oplyst. De ser kun nuancer af gråt i mørket. <br><b>Gnom Snilde:</b> Gnomer har fordel på redninger mod magi vedrørende intelligens, visdom og karisma. <br><b>Sprog:</b> Gnomer taler, læser og skriver Common og Gnom. Gnomisk, skrevet med dværgisk alfabet, er kendt for tekniske afhandlinger og viden om naturen."; 
    }
    else if (newText == "Hobbit") {
        race_overskrift.innerText="Hobbit";
        race_tekst.innerHTML=" <b>Evneniveau:</b> Din Smidighed stiger med 2. <br><b>Alder:</b> Hobitter når voksenalderen ved 20 år og kan leve omkring 250 år.<br><b>Størrelse:</b> Hobitter er typisk 3 fod høje og vejer ca. 40 pund. De er små. <br><b>Hastighed:</b> Din grundlæggende ganghastighed er 25 fod. >br>Held: Ved at kaste en 1 på en D20 kan du genkaste terningen og bruge det nye resultat. <br>Mod: Du har fordel på redninger mod at blive forskrækket. <br><b>Smidighed:</b> Du kan bevæge dig ubemærket omkring større skabninger. <br><b>Sprog:</b> Du taler, læser og skriver Common og Hobbit. Hobbit-sproget deles sjældent med andre og har en stærk mundtlig tradition. "; 
    }

    else if (newText == "Tiefling") {
        race_overskrift.innerText="Tiefling";
        race_tekst.innerHTML=" <b>Evneniveau:</b> Din intelligens stiger med 1, og din karisma stiger med 2. <br><b>Alder:</b> Tieflings modnes som mennesker, men lever lidt længere. <br><b>Størrelse:</b> Tieflings er omtrent samme størrelse som mennesker. Du er Medium. <br><b>Hastighed:</b> Din basisganghastighed er 30 fod. <br><b>Mørkesyn:</b> Takket være din infernalske arv har du overlegen syn i mørke og svagt oplyste områder. <br><b>Helvedes Modstand:</b> Du er resistent over for brandskader.<br><b>Infernalt Eftermæle:</b> Du kender thaumaturgy cantrip'en og kan kaste Helvedes Reprimande og Mørke magi som en del af dine evner, brugende karisma som din trylleformular.<br><b>Sprog:</b> Du taler, læser og skriver Common og Infernalsk."; 
    }
    else if (newText == "Dværg") {
        race_overskrift.innerText="Dværg";
        race_tekst.innerHTML="<b>Evneniveau:</b> Din Udholdenhed stiger med 2. <br><b>Alder:</b> Dværge modnes som mennesker, betragtes unge indtil 50 og lever i gennemsnit omkring 350 år. <br><b>Størrelse:</b> Dværge er 4-5 fod høje og vejer i gennemsnit 150 pund. Du er Medium. <br><b>Hastighed:</b> Din basis ganghastighed er 25 fod, ikke påvirket af tung rustning. <br><b>Mørkesyn:</b> Du har overlegen syn i mørke og svagt oplyste områder. <br>Udholdenhed: Du har fordel på redninger mod gift og er resistent over for giftskader. <br><b>Kamptræning:</b> Dygtig med slagøkser, håndøkser, lette hamre og krigshamre. <br><b>Værktøjsfærdighed:</b> Du er dygtig med håndværkerens værktøjer som smedens, bryggerens eller murerens. <br><b>Stenkundskab:</b> Kyndig i historie relateret til stenarbejde, tilføjer dobbelt din færdighedsbonus til relevante checks. <br><b>Sprog:</b> Du taler, læser og skriver Common og Dværge. Dværgesprog er hårdt og gutturalt."; 
    }
    else if (newText == "Menneske") {
        race_overskrift.innerText="Menneske";
        race_tekst.innerHTML="<b>Evneniveau:</b> Alle dine evneniveauer stiger med 1. <br><b>Alder:</b> Mennesker når voksenalderen i deres sene teenageår og lever mindre end et århundrede. <br><b>Størrelse:</b> Mennesker varierer i højde fra knap 5 fod til over 6 fod. Du er Medium. <br><b>Hastighed:</b> Din basisganghastighed er 30 fod. <br><b>Sprog:</b> Udover Common kan du tale, læse og skrive et ekstra sprog efter eget valg. Mennesker lærer typisk sprogene fra de folk, de omgås, og integrerer ofte ord og udtryk fra andre kulturer i deres tale."; 
    }
    else if (newText == "Elver") {
        race_overskrift.innerText="Elver";
        race_tekst.innerHTML="<b>Evneniveau:</b> Din Smidighed øges med 2. <br><b>Alder:</b> Elvere modnes som mennesker, tager voksenstatus omkring 100 år og lever op til 750 år. <br><b>Størrelse:</b> Elvere varierer i højde og har slanke bygninger. Du er Medium. <br><b>Hastighed:</b> Din basisganghastighed er 30 fod. <br><b>Mørkesyn:</b> Du har overlegen vision i mørke og svagt oplyste områder.<br>Skarpe Sanser: Dygtig i Fornemmelse færdigheden.<br><b>Fey Ancestry:</b> Immun over for fortryllelse og magi kan ikke få dig til at sove.<br><b>Trance:</b> Mediterer i 4 timer om dagen og får samme fordele som 8 timers søvn.<br><b>Sprog:</b> Udover Common taler, læser og skriver du Elvish. Elvish er flydende med rig litteratur."; 
    }
    else if (newText == "Halv_Elver") {
        race_overskrift.innerText="Halv Elver";
        race_tekst.innerHTML="<b>Evneniveau:</b> Dit karisma stiger med 2, og to andre stats efter eget valg stiger med 1.<br><b>Alder:</b> Halv-elvere modnes som mennesker og lever ofte over 180 år.<br><b>Størrelse:</b> Cirka samme størrelse som mennesker, 5 til 6 fod høj. Du er Medium.<br><b>Hastighed:</b> Din basis ganghastighed er 30 fod.<br><b>Mørkesyn:</b> Overlegen syn i mørke og svagt oplyste områder.<br><b>Fey Ancestry:</b> Immun over for fortryllelse, kan ikke søvnmagi påvirke dig.<br> <b>Færdighedsfleksibilitet:</b> Får færdighed i to valgte færdigheder.<br><b>Sprog:</b> Udover Common, taler, læser og skriver du Elvish og et ekstra sprog efter eget valg."; 
    }
    else if (newText == "Halv_Ork") {
        race_overskrift.innerText="Halv Ork ";
        race_tekst.innerHTML="<b>Evneniveau:</b> Din styrke stiger med 2, og din Udholdenhed stiger med 1.<br><b>Alder:</b> Halv-orker modnes hurtigere end mennesker og lever sjældent over 75 år.<br><b>Størrelse:</b> Lidt større og kraftigere end mennesker, 5 til over 6 fod høj. Du er Medium.<br><b>Hastighed:</b> Din basis ganghastighed er 30 fod.<br><b>Mørkesyn:</b> Overlegen syn i mørke og svagt oplyste områder.<br><b>Truende:</b> Dygtig i intimidation.<br><b>Urokkelig Udholdenhed:</b> Ved at falde til 0 hit points kan du i stedet falde til 1 hit point, men kun en gang før en lang hvile.<br><b>Voldsomme Angreb:</b> Ved et kritisk slag med et melee våben kan du kaste en ekstra skadeterning.<br><b>Sprog:</b> Udover Common, taler, læser og skriver du Ork. Ork er barsk og skrives på dværgisk skrift."; 
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
        tekst.innerHTML="<b>Hit Dice:</b> 1d12 per barbar-level. <br><b>Hit Points ved 1. niveau:</b> 12 + din Udholdenhedssmodifier. <b>Højere niveauer:</b> 1d12 (eller 7) + din Udholdenhedsmodifier per barbar-niveau efter 1. level.<br><b>Rustning:</b> Let, medium, skjolde. <br> Våben: Simple, krigsvåben. <br><b>Redningskast:</b> Styrke, Udholdenhed. <br>Vælg <b>2</b> færdigheder fra håndtering af dyr, Atletik, Intimidation, Natur, Opfattelse og Overlevelse. <br><b>Udstyr:</b> Rejserygsæk og fire kastespyd. <br><b>Vælg:</b> Start med <b>(a)</b> en stor økse eller <b>(b)</b> et hvilket som helst krigsvåben i nærkamp. <br><b>(a)</b> To håndøkser eller <b>(b)</b> et hvilket som helst simpelt våben. <br><b>Raseri:</b> Bonusaktion for raseri i kamp. Får fordele på styrkechecks og -redninger, skadekast med melee-våben og modstand mod voldelige angreb. <br><b>Ubeskyttet Forsvar:</b> Uden rustning er din Armor Class 10 + din Smidigheds- og Udholdenhedsmodifikator. <br><b>Hensynsløst Angreb:</b> Fra level 2 får du fordele på styrkebaserede melee-våbenangreb denne tur, men fjender får også fordel mod dig. <br><b>Sans for Fare:</b> Fra level 2 får du fordele på Dexterity-redninger mod synlige fælder og spells. <br><b>Stat Forbedring:</b> Fra level 4 kan du øge en stat med 2 eller to stats med 1, op til maksimalt 20. <br><b>Ekstra Angreb:</b> Fra level 5 kan du angribe to gange i en tur. <br><b>Hurtig Bevægelse:</b> Fra level 5 øges din hastighed med 10 fod uden tung rustning."; 
    }
    else if (newText == "Bard") {
        overskrift.innerText="Bard";
        tekst.innerHTML="<b>Hit Dice:</b> 1d8/niveau. <br><b>HP:</b> 8 + Styrke bonus. <b>Højere niveauer:</b> 1d8 (eller 5) + Styrke bonus/niveau efter 1. <br><b>Rustning:</b> Let. <br><b>Våben:</b> Enkle, armbrøster, langsværd, rapiers, kortsværd. <br><b>Værktøj:</b> Tre musikinstrumenter. <br><b>Redningskast:</b> Smidighed, Karisma. Vælg <b>3</B> færdigheder. <br><b>Udstyr:</b> Læderrustning og en dolk. <br>  Vælg: <b>(a)</b> rapier, <b>(b)</b> langsværd, eller <b>(c)</b> et enkelt våben. <br><b>(a)</b> diplomatpakke eller <b>(b)</b> underholders pakke. <br><b>(a)</b> lut eller <b>(b)</b> andet musikinstrument. <br><b>Cantrips og Magi fra level 1:</b> Kender 4 level 1 besværgelser, udskift ved niveauforøgelse. <br><b>Magi:</b> Din karisma styrer din magi. Brug den til angreb og healing. Kan bruge rituel magi. <br><b>Inspiration:</b> Bonusaktion til at inspirere andre (indenfor 60 fod) med ord eller musik, giver ekstra D6 til deres kast i 10 min. <br><b>Håndværk (Jack of all trades):</b> Fra level 2, halvdelen af din færdighedsbonus til andre stats. <br><b>Hvilesang:</b> Fra level 2, musik eller tale helbreder allierede under et kort hvil. <br><b>Stat forbedring:</b> På visse levels kan du forbedre dine stats. <br><b>Inspirationskilde:</b> Fra level 5, får du alle brugte anvendelser af inspiration tilbage ved hvile."; 
    }
    else if (newText == "Cleric") {
        overskrift.innerText="Cleric";
        tekst.innerHTML="<b>Hit Points:</b> 1d8 per niveau (+KUdholdenhed modifikator). <br><b>Rusning og Våben:</b> Let og medium rustning, skjolde, simple våben. Vælg <b>2</b> færdigheder. <br><b>Udstyr:</b> Morgenstjerne eller hammer, skalamail eller læder rustning eller kædemail, let armbrøst med 20 bolte eller ethvert simpelt våben, præstens pakke eller opdagelsespakke, skjold, helligt symbol. <br><b>Tryllekunst:</b> Kast klerikerens besværgelser; kender tre cantrips på niveau 1. <br><b>Forberedelse og Kast af Besværgelser:</b> Forbered klerikerens besværgelser svarende til visdomsmodifikator + klerikerniveau. Besværgelsespladser baseret på Klerikerens tabel. <br><b> Magi: Visdom baseret:</b> besværgelses redningsværdi = 8 + færdighedsbonus + visdoms modifikator; besværgelses angrebts modifikator = færdighedsbonus + visdoms modifikator.<br><b>Ritualbesværgelse:</b> Kast klerikerens besværgelser med ritual mærke som ritualer, hvis forberedt.<br><b>Besværgelsesfokus:</b> Brug det hellige symbol som magisk fokus.<br> Gudeforfængelse: <b>Vælg</b> domæne, der giver domænebesværgelser og funktioner på niveau 1, yderligere Channel Divinity muligheder på niveau 2 og flere fordele på højere niveauer.<br> <b>Channel Divinity:</b> Få Vend de døde ved niveau 2 og yderligere effekter bestemt af domænet; brug to gange mellem hvil på niveau 6 og tre gange på niveau 18. <br><b>Forbedring af Evner:</b> Øg evner på niveau 4, 8, 12, 16 og 19.<br> <b>Ødelæg U-døde:</b> Startende på niveau 5, ødelæg øjeblikkeligt u-døde af visse udfordringsklasser, når de mislykkes deres Vend de døde redningsrulle."; 
    }
    else if (newText == "Druid") {
        overskrift.innerText="Druid";
        tekst.innerHTML="<b>Hit Points:</b> 1d8 pr. niveau (Udholdenhed modifier).<br><b>Færdigheder:</b> Let og medium rustning, skjolde (ikke-metal), forskellige våben, urtesæt. Vælg to færdigheder. <br><b> Udstyr:</b> Træskjold eller simpelt våben, scimitar eller simpelt nærkampsvåben, læderpanser, opdagelsesrejsendes pack, druidisk fokus. <br><b>Druidisk:</b> Kend druidernes hemmelige sprog til skjulte beskeder. <br><b>Spellcasting:</b> Kast trylleformularer fra druid-spell-listen.<br><b>Cantrips:</b> Kend to cantrips på 1. niveau, få flere på højere niveauer.<br><b>Forberedelse og besværgelser: </b>Forbered besværgelser svarende til Wisdom modifier + druide niveau. Stave slots baseret på Druid bord. <br><b>Spellcasting Evne:</b> Visdom er staveevne; stave gem DC = 8 + færdighedsbonus + Visdomsmodifikator; staveangrebsmodifikator = færdighedsbonus + Visdomsmodifikator. <br><b>Rituel casting:</b> Kast besværgelser med rituel tag som ritualer, hvis de er forberedt.<br><b>Spellcasting-fokus:</b> Brug druidisk fokus som spellcasting-fokus. <br><b>Wild Shape:</b> Forvandl dig til dyr, du har set, og genvind brug efter hvile, baseret på Druid-niveau."; 
    }
    else if (newText == "Fighter") {
        overskrift.innerText="Fighter";
        tekst.innerHTML="<b>Hit Points:</b> 1d10 pr. niveau (Udholdenhed modifier).<br><b>Færdigheder:</b> Alle rustninger, skjolde, simple våben, kampvåben. Vælg to færdigheder. <br><b>Udstyr:</b> Ringbrynje eller læderpanser, langbue, 20 pile; kampvåben og skjold eller to kampvåben; let armbrøst, 20 bolte eller to håndøkser; fangekælderpakke eller opdagelsespakke. <br><b>Fighting Style:</b> Vælg mellem Bueskydning, Forsvar, Duellering, Great Weapon Fighting, Protection eller To-Weapon Fighting. <br><b>Anden vind:</b> Bonushandling for at genvinde hitpoint svarende til 1d10 + fighter-niveau, én gang pr. kort eller lang pause. <br>       <b> Action Surge:</b> Start på 2. niveau, tag en ekstra handling én gang pr. kort eller lang hvile. På 17. niveau, brug to gange før hvile, men én gang pr. omgang. <br><b>Martial Archetype:</b> Vælg Champion, Battle Master eller Eldritch Knight på 3. niveau, og få funktioner på forskellige niveauer. <br><b>Forbedring af evnescore:</b> Forøg evnescore på bestemte niveauer, kan ikke overstige 20.<br><b>Ekstra angreb:</b> Begyndende på 5. niveau, angreb to gange, når du tager angrebshandlingen."; 
    }
    else if (newText == "Munk") {
        overskrift.innerText="Munk";
        tekst.innerHTML="<b>Hit Points:</b> 1d8 per niveau (+Udholdenhed modifikator).<br><b>Rustning og våben:</b> Ingen rustning, simple våben, kortsværd; vælg et værktøj til kunst eller et musikinstrument. Vælg to færdigheder. <br><b>Udstyr:</b> Kortsværd eller ethvert simpelt våben, fangekælderpakke eller opdagelsespakke, 10 dartpile. <br><b>Urustet</b> Forsvar: AC = 10 + Fingerfærdighed modifikator + Visdom modifikator uden rustning eller skjold. <br><b>Martial Arts:</b> Brug fingerfærdighed for angrebs- og skadedrulninger med umvæbne slag og munkekamps-våben; kast d4 for væbne slag eller munkekamps-våben skade; udfør bonusaktion umvæbent slag efter Angrebsaktion. <br><b>Ki:</b> Få ki-punkter til munkefunktioner, startende med Storm af Slag, Tålmodig Forsvar og Vinden Trin; genvind efter kort eller lang hvile. <br><b>Urustet Bevægelse:</b> Hastighed +10 ft. uden rustning eller skjold; får yderligere bonusser på højere niveauer. <br><b>Afbøje Missiler:</b> Brug reaktion til at reducere skade fra fjernvåbenangreb; kan fange og kaste tilbage missil hvis skaden reduceres til 0. <br><b>Forbedring af Evner:</b> Øg evnepoint på visse niveauer, kan ikke overstige 20. <br><b>Langsom Fald:</b> Reducer faldskade med munkeniveau x 5 som reaktion på 4. niveau.<br><b>Ekstra Angreb:</b> Angrib to gange, når du udfører Angrebsaktionen på 5. niveau.<br><b>Forbløffende Slag:</b> Brug 1 ki-punkt på hit for at forsøge forbløffende slag, der forårsager Udholdenheds-redning eller forbløffende effekt på 5. niveau."; 
    }

    else if (newText == "Paladin") {
        overskrift.innerText="Paladin";
        tekst.innerHTML="<b>Hitterninger:</b> 1d10 pr. niveau. 1. niveau: 10 + Udholdenhedsmodifikator. For højere niveauer: 1d10 (eller 6) + Udholdenhedsmodifikator pr. niveau efter 1.<br><b>Kompetencer:</b> Alle panser og skjolde. Simpelt og martial våben. Vælg <b>2</b> færdigheder fra atletik, indsigt, intimidering, medicin, overtalelse og religion. <br><b>Udstyr:</b> Ringbrynje, helligt symbol. <br>Vælg: <b>(a)</b> kampvåben og skjold eller <b>(b)</b> to kampvåben. <br>Vælg: <b>(a)</b> fem spydkast eller <b>(b)</b> et simpelt nærkampsvåben. <br>Vælg: <b>(a)</b> præstens pakke eller <b>(b)</b> opdagelsesrejsendes pakke. <br><b>Guddommelig Sans:</b> Fornem himmelsk, djævel eller u-døde inden for 60 fod. <b>Anvendelse:</b> 1 + Charisma modifier, genvundet efter lang hvile.<br><b>Læg på Hænder:</b> Helbred væsener eller neutraliser gift og sygdomme.<br><b>Kampstil:</b> Forsvar: +1 AC med rustning. Duellering: +2 skader med enhånds nærkampsvåben. <br><b>Great Weapon Fighting:</b> Reroll 1 eller 2 på skades-terning med tohånds nærkampsvåben.<br><b> Beskyttelse:</b> Ulempe ved angreb mod mål inden for 5 fod, skal bære skjold. <br><b>Spellcasting:</b> Besværgelser forberedt: Charisma modifier + halvt paladin niveau. Spellcasting evne: Karisma. Spell save DC: 8 + færdighedsbonus + Charisma modifier. <br><b>Det Guddommelige Slag:</b> Ekstra strålende skade med nærkampsvåbenangreb.<br><b>Guddommelig Sundhed:</b> Immunitet mod sygdom.<br><b>Channel Divinity:</b> Brug guddommelig energi til magiske effekter. <br><b>Forbedring af Evnescore:</b> Øg evnescore med 2 eller to med 1, maksimalt 20.<br>Ekstra Angreb: Angreb to gange med angrebshandling."; 
    }
    else if (newText == "Ranger") {
        overskrift.innerText="Ranger";
        tekst.innerHTML="<b>Hitterninger:</b> 1d10/niveau. <br><b>Start HP:</b> 10 + Con modifier. For højere niveauer: 1d10 (eller 6) + Con modifier/niveau efter 1. <br><b>Panser:</b> Let, medium, skjolde. <b>Våben:</b> Simpelt, martial.<br><b>Færdigheder:</b> Vælg 3 fra Dyrehåndtering, Atletik, Indsigt, Efterforskning, Natur, Perception, Stealth, Overlevelse. <br>Udstyr: Langbue, kogger af 20 pile. <br>Vælg: <b>(a)</b> vægtpost eller <b>(b)</b> læderpanser. <br>Vælg: <b>(a)</b> to kortsværd eller <b>(b)</b> to simple nærkampsvåben.<br>   Vælg: <b>(a)</b> dungeoneer's pack eller <b>(b)</b> explorer's pack. <br><b>Foretrukne fjende:</b> Fordel ved Survival for at spore, Int for at genkalde info. <br><b>Natural Explorer:</b> Fordoblet færdighedsbonus for relaterede Int/Wis-checks. <br><b>Rejsefordele:</b> ingen vanskeligt terræn, ingen fare for at fare vild, opmærksomhed, snigende bevægelse, dobbelt mad fundet, præcis sporing af skabninger.<br><b>SKampstil:</b> <br>Vælg: Bueskydning, Forsvar, Duellering, Kamp med to våben.<br><b>Spellcasting:</b> Visdom baseret. Primær bevidsthed: Fornem tilstedeværelsen af visse væsner inden for 1 mile (op til 6 miles i foretrukket terræn) i 1 minut pr. spell-slotniveau. <br><b>Forbedring af evnescore:</b> Niveauer 4, 8, 12, 16, 19: Øg evnescore eller få en bedrift. <br>   <b>Ekstra angreb:</b> Niveau 5: Angreb to gange med angrebshandling."; 
    }
    else if (newText == "Rogue") {
        overskrift.innerText="Rogue";
        tekst.innerHTML="<b>Hitterninger:</b> 1d8/niveau. Start HP: 8 + Con modifier. Højere niveauer: 1d8 (eller 5) + Udholdenhed modifikator/niveau efter 1. <br><b>Panser:</b> Let. <br> Våben: Simpelt, armbrøst, langsværd, gribere, kortsværd. <br><b>Færdigheder:</b> Vælg 4 fra Akrobatik, Atletik, Bedrag, Indsigt, Intimidation, Efterforskning, Perception, Præstation, Overtalelse, Sleight of Hand, Stealth. <br><b>Udstyr:</b> Læderrustning, to dolke, tyveværktøj. <br> Vælg: <b>(a)</b> griber eller <b>(b)</b> kortsværd. <br>Vælg: <B>(a)</b> kortbue og kogger med 20 pile eller <b>(b)</b> kortsværd. <br>Vælg: <b>(a)</b> indbrudstyvspakke, <B>(b)</b> dungeoneer-pakke eller <b>(c)</b> opdagelsesrejsendes pack. <br><b>Ekspertise:</b> Vælg 2 færdigheder eller 1 færdighed og tyvenes værktøjer; dobbelt færdighedsbonus for udvalgte færdigheder. <br><b>Snig angreb:</b> Ekstra 1d6 skade én gang pr. tur, hvis du har fordel på angrebsrullen eller en fjende er inden for 5 fod uden ulemper.<br><b>Tyvenes cant:</b> Hemmeligt sprog og tegn til skjulte beskeder.<br> Udspekuleret handling: Start på 2. niveau, brug bonushandling til at Dash, Disengage eller Hide.<br>       <b>Forbedring af evnescore:</b> Niveauer 4, 8, 10, 12, 16, 19: Øg evnescore eller få en bedrift. <br><b>Uncanny Dodge:</b> Start på 5. niveau, halver skade fra en angriber, du kan se, med en reaktion."; 
    }
  
    else if (newText == "Sorcerer") {
        overskrift.innerText="Sorcerer";
        tekst.innerHTML="<b>Hitterninger:</b> 1d6/niveau. Start HP: 6 + Udholdenhed modifier.<br> Højere niveauer: 1d6 (eller 4) + Con modifier/niveau efter 1. <br><b>Rustning:</b> Ingen. <br><b>Våben:</b> Dolke, dartpile, slynger, kvartstave, lette armbrøster. <br><b>Sparekast:</b> Con, Cha. Vælg 2 færdigheder fra Arcana, Bedrag, Indsigt, Intimidation, Overtalelse, Religion.<br> <b>Udstyr:</b> To dolke. <br>Vælg: <b>(a)</b> let armbrøst og 20 bolte eller <b>(b)</b> et hvilket som helst simpelt våben. <br>Vælg: <b>(a)</b> komponentpose eller <b>(b)</b> mystisk fokus. <br>Vælg: <b>(a)</b> dungeoneer's pack eller <b>(b)</b> explorer's pack. <br>Spellcasting: Kend 4 cantrips på 1. niveau. Genvind spell slots efter lang hvile. Kend 2 besværgelser på 1. niveau, lær flere senere. <br><b>Evne:</b> Karisma; spell save DC = 8 + færdighedsbonus + karisma modifier; spell attack modifikator = færdighedsbonus + karisma modifikator. <b>Fokus</b>: Arkan fokus.<br><b>Font of Magic:</b> 2 trolddomspoint, genvind efter lang hvile. <br><b>Fleksibel støbning:</b> Brug trolddomspoint til at oprette trylleformularslots eller ofre trylleformularslots for at få trolddomspoint.<br><b>Meta magi:</b> Gevinst på 3. niveau. Vælg 2 muligheder, få flere senere. Kan bruge én Metamagic-indstilling pr. besværgelseskast. <br><b>Twinned Spell:</b> Brug trolddomspoint svarende til stav eniveau for at målrette mod et andet væsen med samme magi."; 
    }
    else if (newText == "Warlock") {
        overskrift.innerText="Warlock";
        tekst.innerHTML="<b>Hitterninger:</b> 1d8/niveau. <br><b>Start HP:</b> 8 + Udholdenhed-modifikator. Højere niveauer: 1d8 (eller 5) + Udholdenhed-modifikator/niveau efter 1. <br>Rustning: Let. <br><b>Våben:</b> Simple. <br><b>Værktøj:</b> Ingen. <br> <b>Sparekast:</b> Visdom, karisma. <br>Vælg to færdigheder fra Arcana, Bedrag, Historie, Intimidation, Efterforskning, Natur, og Religion.<br><b>Udstyr:</b> Læderrustning, ethvert simpelt våben, to dolke.<br> Vælg: <b>(a)</b> let armbrøst og 20 bolte eller <b>(b)</b> et hvilket som helst simpelt våben. <br>Vælg: <b>(a)</b> komponentpose eller <b>(b)</b> mystisk fokus. <br>Vælg: <b>(a)</b> lærdes pakke eller <b>(b)</b> dungeoneer's pack.<br> <b>Overjordisk protektor:</b> Vælg en kilde på 1., 6., 10., og 14. niveau. <br> <b>Pagtmagi:</b> Se Spells Regler for en trylleformularliste. <br> <b>Cantrips:</b> Kend to, få mere senere. <br> <b>Stave spilleautomater:</b> Brug Warlock-tabellen for spell slots, genvind efter hvile. Besværgelser kendt: Kend to på 1. niveau, lær flere senere. <br> <b>Spellcasting evne:</b> Brug karisma til besværgelser, redningskast, og angreb. <br><b>Spellcasting Fokus:</b> Brug mystisk fokus til troldmandsbesværgelser. Eldritch påkaldelser: Få to på 2. niveau, flere senere. <br><b>Pagt Boon:</b> Vælg Pact of the Blade, Chain eller Tome på 3. niveau. <br><b>Forbedring af evnescore:</b> Forøg på 4., 8., 12., 16., og 19. niveau.<br><b>Mørkes velsignelse:</b> Få midlertidige hitpoint svarende til Charisma-modifikator + warlock-niveau, når du nedlægger et fjendtligt væsen. "; 
    }
    else if (newText == "Troldmand") {
        overskrift.innerText="Troldmand";
        tekst.innerHTML="<b>Hitterninger:</B> 1d6 pr. wizard-niveau <br>1. niveau: 6 + Udholdenhed-modifikator        Højere niveauer: 1d6 (eller 4) + Udholdenhedsmodifikator pr. wizard-niveau efter 1. færdigheder. <br> <b>Rustning:</b> Ingen <br> <b>Våben:</b> Dolke, pile, slynger, kvartstave, lette armbrøster <br><B>Værktøj:</b> Ingen <br><b>Redningskast: </b>Intelligens, <br><b>Visdomsfærdigheder:</b> Vælg to fra Arcana, Historie, Indsigt, Efterforskning, Medicin og Religionsudstyr <br>Vælg: <br><b>(a)</b> kvartstang eller <b>(b)</b> dolk <br><b>(a)</b> komponentpose eller <b>(b)</b> mystisk fokus <br><b>(a)</b> lærds pakke eller <b>(b)</b> opdagelsesrejsendes pakke Spellbook indeholder besværgelser, lær mere på højere niveauer. <br><b>Cantrips:</b>Kend tre cantrips, lær mere på højere niveauer.<br> <b>Stavebog:</b> indeholder seks troldmands-besværgelser på 1. niveau. Forberedelse og besværgelser<br> Wizard tabellen viser spell slots. Forberedte besværgelser svarende til Intelligens modifieren + wizard niveau. Kan ændre sig efter lang hvile. <br> Spellcasting er Intelligens baseret.<br><b> Rituel støbning</b> Kan kaste rituelle besværgelser fra tryllebog med rituel tag uden at forberede dem.<br> <b>Spellcasting Fokus:</b> brug mystisk fokus til troldmands-besværgelser.<br> <b>Besværgelser: </b>få to troldmands.besværgelser gratis på hvert niveau, de skal matche spell slots."; 
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
    the_dice.style.transform = "translate(-50%, -50%) scale(0)";
    dice_img.style.transition = "ease-in-out 1s";
    dice_img.style.transform = 'rotate(360deg)';

    setTimeout(function(){
        the_dice.textContent = randomnumber;
        the_dice.style.transform = "translate(-50%, -50%) scale(1)";

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
        //fjern autoplay
        video_element.removeAttribute("autoplay")
    }
    else{
        video_element.setAttribute("src", "forklarings_videoer/" + video);
        popup_element.style.top = "50%";
        popup_overskrift.innerText = overskrift;

        //set autoplay efter animation
        setTimeout(function(){
            video_element.setAttribute("autoplay","autoplay");
            video_element.load();
        },1500);
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

//finder input felterne
const save_data_points = document.querySelectorAll(".save_data");

//på ændring af et input felt, gem ændringerne
save_data_points.forEach(data_point => {
    data_point.addEventListener('change', save_karaktarark_data);
});

//funktionen for at gemme ændringerne
function save_karaktarark_data(){
    const data = {};
    

    save_data_points.forEach(data_point => {
        data[data_point.id] = data_point.value;
    });

    //vi bruger localstorage for at gemme 
    //vi gemmer et object så vi skal bruge JSON.stringify
    localStorage.setItem("prev_data_points", JSON.stringify(data));
}

//funktionen for at indlæse den gemte data
function load_karakterark_data(){
    const saved_data = localStorage.getItem("prev_data_points");
    //er der noget gemt data hvis ja indæls det
    if(saved_data != null || saved_data != undefined){
        save_data_points.forEach(data_point => {
            data_point.value = JSON.parse(saved_data)[data_point.id]
        });
    };
};
load_karakterark_data();
