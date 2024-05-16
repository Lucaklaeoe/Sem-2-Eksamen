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
        race_tekst.innerHTML=" Evneniveau: Din intelligens stiger med 1, og din karisma stiger med 2. <br>Alder: Tieflings modnes som mennesker, men lever lidt længere. <br>Størrelse: Tieflings er omtrent samme størrelse som mennesker. Du er Medium. <br>Hastighed: Din basisganghastighed er 30 fod. <br>Mørkesyn: Takket være din infernalske arv har du overlegen syn i mørke og svagt oplyste områder. <br>Helvedes Modstand: Du er resistent over for brandskader.<br>Infernalt Eftermæle: Du kender thaumaturgy cantrip'en og kan kaste Helvedes Reprimande og Mørke magi som en del af dine evner, brugende karisma som din trylleformular.<br>Sprog: Du taler, læser og skriver Common og Infernalsk."; 
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
        race_tekst.innerHTML="Evneniveau: Din Smidighed øges med 2. <br>Alder: Elvere modnes som mennesker, tager voksenstatus omkring 100 år og lever op til 750 år. <br>Størrelse: Elvere varierer i højde og har slanke bygninger. Du er Medium. <br>Hastighed: Din basisganghastighed er 30 fod. <br>Mørkesyn: Du har overlegen vision i mørke og svagt oplyste områder.<br>Skarpe Sanser: Dygtig i Fornemmelse færdigheden.<br>Fey Ancestry: Immun over for fortryllelse og magi kan ikke få dig til at sove.<br>Trance: Mediterer i 4 timer om dagen og får samme fordele som 8 timers søvn.<br>Sprog: Udover Common taler, læser og skriver du Elvish. Elvish er flydende med rig litteratur."; 
    }
    else if (newText == "Halv_Elver") {
        race_overskrift.innerText="Halv Elver";
        race_tekst.innerHTML="Evneniveau: Dit karisma stiger med 2, og to andre stats efter eget valg stiger med 1.<br>Alder: Halv-elvere modnes som mennesker og lever ofte over 180 år.<br>Størrelse: Cirka samme størrelse som mennesker, 5 til 6 fod høj. Du er Medium.<br>Hastighed: Din basis ganghastighed er 30 fod.<br>Mørkesyn: Overlegen syn i mørke og svagt oplyste områder.<br>Fey Ancestry: Immun over for fortryllelse, kan ikke søvnmagi påvirke dig.<br> Færdighedsfleksibilitet: Får færdighed i to valgte færdigheder.<br>Sprog: Udover Common, taler, læser og skriver du Elvish og et ekstra sprog efter eget valg."; 
    }
    else if (newText == "Halv_Ork") {
        race_overskrift.innerText="Halv Ork ";
        race_tekst.innerHTML="Evneniveau: Din styrke stiger med 2, og din konstitution stiger med 1.<br>Alder: Halv-orker modnes hurtigere end mennesker og lever sjældent over 75 år.<br>Størrelse: Lidt større og kraftigere end mennesker, 5 til over 6 fod høj. Du er Medium.<br>Hastighed: Din basis ganghastighed er 30 fod.<br>Mørkesyn: Overlegen syn i mørke og svagt oplyste områder.<br>Truende: Dygtig i intimidation.<br>Urokkelig Udholdenhed: Ved at falde til 0 hit points kan du i stedet falde til 1 hit point, men kun en gang før en lang hvile.<br>Voldsomme Angreb: Ved et kritisk slag med et melee våben kan du kaste en ekstra skadeterning.<br>Sprog: Udover Common, taler, læser og skriver du Ork. Ork er barsk og skrives på dværgisk skrift."; 
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
        tekst.innerHTML="Hit Dice: 1d12 per barbar-level. <br>Hit Points ved 1. niveau: 12 + din Konstitutionsmodifier. For højere niveauer: 1d12 (eller 7) + din Konstitutionsmodifier per barbar-niveau efter 1. level.<br> Rustning: Let, medium, skjolde. <br> Våben: Simple, krigsvåben. <br>Redningskast: Styrke, Konstitution. <br>Vælg to færdigheder fra håndtering af dyr, Atletik, Intimidation, Natur, Opfattelse og Overlevelse. <br>Udstyr: Rejserygsæk og fire kastespyd. <br>Vælg: Start med (a) en stor økse eller (b) et hvilket som helst krigsvåben i nærkamp. <br>(a) To håndøkser eller (b) et hvilket som helst simpelt våben. <br>Raseri: Bonusaktion for raseri i kamp. Får fordele på styrkechecks og -redninger, skadekast med melee-våben og modstand mod voldelige angreb. <br>Ubeskyttet Forsvar: Uden rustning er din Armor Class 10 + din Smidigheds- og Konstitutionsmodifikator. <br>Hensynsløst Angreb: Fra level 2 får du fordele på styrkebaserede melee-våbenangreb denne tur, men fjender får også fordel mod dig. <br>Sans for Fare: Fra level 2 får du fordele på Dexterity-redninger mod synlige fælder og spells. <br>Stat Forbedring: Fra level 4 kan du øge en stat med 2 eller to stats med 1, op til maksimalt 20. <br> Ekstra Angreb: Fra level 5 kan du angribe to gange i en tur. <br>Hurtig Bevægelse: Fra level 5 øges din hastighed med 10 fod uden tung rustning."; 
    }
    else if (newText == "Bard") {
        overskrift.innerText="Bard";
        tekst.innerHTML=" Hit Dice: 1d8/niveau. <br>HP: 8 + Styrke bonus. Højere niveauer: 1d8 (eller 5) + Styrke bonus/niveau efter 1. <br>Rustning: Let. <br>Våben: Enkle, armbrøster, langsværd, rapiers, kortsværd. <br>Værktøj: Tre musikinstrumenter. <br>Redningskast: Smidighed, Karisma. Vælg tre færdigheder. <br>Udstyr: Læderrustning og en dolk. <br>  Vælg: (a) rapier, (b) langsværd, eller (c) et enkelt våben. <br>(a) diplomatpakke eller (b) underholders pakke. <br>(a) lut eller (b) andet musikinstrument. <br>Cantrips og Magi fra level 1: Kender 4 level 1 besværgelser, udskift ved niveauforøgelse. <br>Magi: Din karisma styrer din magi. Brug den til angreb og healing. Kan bruge rituel magi. <br>Inspiration: Bonusaktion til at inspirere andre (indenfor 60 fod) med ord eller musik, giver ekstra D6 til deres kast i 10 min. <br>Håndværk (Jack of all trades): Fra level 2, halvdelen af din færdighedsbonus til andre stats. <br>Hvilesang: Fra level 2, musik eller tale helbreder allierede under et kort hvil. <br>Stat forbedring: På visse levels kan du forbedre dine stats. <br>Inspirationskilde: Fra level 5, får du alle brugte anvendelser af inspiration tilbage ved hvile."; 
    }
    else if (newText == "Cleric") {
        overskrift.innerText="Cleric";
        tekst.innerHTML="Hit Points: 1d8 per niveau (+Konstitution modifikator). <br>Rusning og Våben: Let og medium rustning, skjolde, simple våben. Vælg to færdigheder. <br>Udstyr: Morgenstjerne eller hammer, skalamail eller læder rustning eller kædemail, let armbrøst med 20 bolte eller ethvert simpelt våben, præstens pakke eller opdagelsespakke, skjold, helligt symbol. <br>Tryllekunst: Kast klerikerens besværgelser; kender tre cantrips på niveau 1. <br>Forberedelse og Kast af Besværgelser: Forbered klerikerens besværgelser svarende til visdomsmodifikator + klerikerniveau. Besværgelsespladser baseret på Klerikerens tabel. <br> Magi: Visdom baseret; besværgelses redningsværdi = 8 + færdighedsbonus + visdoms modifikator; besværgelses angrebts modifikator = færdighedsbonus + visdoms modifikator.<br>Ritualbesværgelse: Kast klerikerens besværgelser med ritual mærke som ritualer, hvis forberedt.<br>Besværgelsesfokus: Brug det hellige symbol som magisk fokus.<br> Gudeforfængelse: Vælg domæne, der giver domænebesværgelser og funktioner på niveau 1, yderligere Channel Divinity muligheder på niveau 2 og flere fordele på højere niveauer.<br> Channel Divinity: Få Vend de døde ved niveau 2 og yderligere effekter bestemt af domænet; brug to gange mellem hvil på niveau 6 og tre gange på niveau 18. <br>Forbedring af Evner: Øg evner på niveau 4, 8, 12, 16 og 19.<br> Ødelæg U-døde: Startende på niveau 5, ødelæg øjeblikkeligt u-døde af visse udfordringsklasser, når de mislykkes deres Vend de døde redningsrulle."; 
    }
    else if (newText == "Druid") {
        overskrift.innerText="Druid";
        tekst.innerHTML=" Hit Points: 1d8 pr. niveau (+Con modifier).<br>Færdigheder: Let og medium rustning, skjolde (ikke-metal), forskellige våben, urtesæt. Vælg to færdigheder. <br> Udstyr: Træskjold eller simpelt våben, scimitar eller simpelt nærkampsvåben, læderpanser, opdagelsesrejsendes pack, druidisk fokus. <br>Druidisk: Kend druidernes hemmelige sprog til skjulte beskeder. <br>Spellcasting: Kast trylleformularer fra druid-spell-listen.<br>Cantrips: Kend to cantrips på 1. niveau, få flere på højere niveauer.<br>Forberedelse og besværgelser: Forbered besværgelser svarende til Wisdom modifier + druide niveau. Stave slots baseret på Druid bord. <br>Spellcasting Evne: Visdom er staveevne; stave gem DC = 8 + færdighedsbonus + Visdomsmodifikator; staveangrebsmodifikator = færdighedsbonus + Visdomsmodifikator. <br>Rituel casting: Kast besværgelser med rituel tag som ritualer, hvis de er forberedt.<br>Spellcasting-fokus: Brug druidisk fokus som spellcasting-fokus. <br>Wild Shape: Forvandl dig til dyr, du har set, og genvind brug efter hvile, baseret på Druid-niveau."; 
    }
    else if (newText == "Fighter") {
        overskrift.innerText="Fighter";
        tekst.innerHTML="Hit Points: 1d10 pr. niveau (+Con modifier).<br>Færdigheder: Alle rustninger, skjolde, simple våben, kampvåben. Vælg to færdigheder. <br>Udstyr: Ringbrynje eller læderpanser, langbue, 20 pile; kampvåben og skjold eller to kampvåben; let armbrøst, 20 bolte eller to håndøkser; dungeoneer's pack eller explorer's pack. <br>Fighting Style: Vælg mellem Bueskydning, Forsvar, Duellering, Great Weapon Fighting, Protection eller To-Weapon Fighting. <br>Anden vind: Bonushandling for at genvinde hitpoint svarende til 1d10 + fighter-niveau, én gang pr. kort eller lang pause. <br>        Action Surge: Start på 2. niveau, tag en ekstra handling én gang pr. kort eller lang hvile. På 17. niveau, brug to gange før hvile, men én gang pr. omgang. <br>Martial Archetype: Vælg Champion, Battle Master eller Eldritch Knight på 3. niveau, og få funktioner på forskellige niveauer. <br>Forbedring af evnescore: Forøg evnescore på bestemte niveauer, kan ikke overstige 20.<br>Ekstra angreb: Begyndende på 5. niveau, angreb to gange, når du tager angrebshandlingen."; 
    }
    else if (newText == "Munk") {
        overskrift.innerText="Munk";
        tekst.innerHTML="Hit Points: 1d8 per niveau (+konstitution modifikator).<br>Færdigheder: Ingen rustning, simple våben, kortsverd; vælg et værktøj til kunst eller et musikinstrument. Vælg to færdigheder. <br>Udstyr: Kortsverd eller ethvert simpelt våben, fangekælderpakke eller opdagelsespakke, 10 dartpile. <br>Urustet Forsvar: AC = 10 + Fingerfærdighed modifikator + Visdom modifikator uden rustning eller skjold. <br>Martial Arts: Brug fingerfærdighed for angrebs- og skadedrulninger med umvæbne slag og munkekamps-våben; kast d4 for væbne slag eller munkekamps-våben skade; udfør bonusaktion umvæbent slag efter Angrebsaktion. <br>Ki: Få ki-punkter til munkefunktioner, startende med Storm af Slag, Tålmodig Forsvar og Vinden Trin; genvind efter kort eller lang hvile. <br>Urustet Bevægelse: Hastighed +10 ft. uden rustning eller skjold; får yderligere bonusser på højere niveauer. <br>Afbøje Missiler: Brug reaktion til at reducere skade fra fjernvåbenangreb; kan fange og kaste tilbage missil hvis skaden reduceres til 0. <br>Forbedring af Evner: Øg evnepoint på visse niveauer, kan ikke overstige 20. <br>Langsom Fald: Reducer faldskade med munkeniveau x 5 som reaktion på 4. niveau.<br>Ekstra Angreb: Angrib to gange, når du udfører Angrebsaktionen på 5. niveau.<br>Forbløffende Slag: Brug 1 ki-punkt på hit for at forsøge forbløffende slag, der forårsager konstitutions-redning eller forbløffende effekt på 5. niveau."; 
    }

    else if (newText == "Paladin") {
        overskrift.innerText="Paladin";
        tekst.innerHTML="Hitterninger: 1d10 pr. niveau. 1. niveau: 10 + Konstitutionsmodifikator. For højere niveauer: 1d10 (eller 6) + Konstitutionsmodifikator pr. niveau efter 1.<br>Kompetencer: Alle panser og skjolde. Simpelt og martial våben. Vælg to færdigheder fra atletik, indsigt, intimidering, medicin, overtalelse og religion. <br>Udstyr: Ringbrynje, helligt symbol. <br>Vælg: (a) kampvåben og skjold eller (b) to kampvåben. <br>Vælg: (a) fem spydkast eller (b) et simpelt nærkampsvåben. <br>Vælg: (a) præstens pakke eller (b) opdagelsesrejsendes pakke. <br>Guddommelig Sans: Fornem himmelsk, djævel eller u-døde inden for 60 fod. Anvendelse: 1 + Charisma modifier, genvundet efter lang hvile.<br>Læg på Hænder: Helbred væsener eller neutraliser gift og sygdomme.<br>Kampstil: Forsvar: +1 AC med rustning. Duellering: +2 skader med enhånds nærkampsvåben. Great Weapon Fighting: Reroll 1 eller 2 på skades-terning med tohånds nærkampsvåben. Beskyttelse: Ulempe ved angreb mod mål inden for 5 fod, skal bære skjold. <br>Spellcasting: Besværgelser forberedt: Charisma modifier + halvt paladin niveau. Spellcasting evne: Karisma. Spell save DC: 8 + færdighedsbonus + Charisma modifier. <br>Det Guddommelige Slag: Ekstra strålende skade med nærkampsvåbenangreb.<br>Guddommelig Sundhed: Immunitet mod sygdom.<br>Channel Divinity: Brug guddommelig energi til magiske effekter. <br>Forbedring af Evnescore: Øg evnescore med 2 eller to med 1, maksimalt 20.<br>Ekstra Angreb: Angreb to gange med angrebshandling."; 
    }
    else if (newText == "Ranger") {
        overskrift.innerText="Ranger";
        tekst.innerHTML="Hitterninger: 1d10/niveau. <br>Start HP: 10 + Con modifier. For højere niveauer: 1d10 (eller 6) + Con modifier/niveau efter 1. <br>Panser: Let, medium, skjolde. Våben: Simpelt, martial.<br>Færdigheder: Vælg 3 fra Dyrehåndtering, Atletik, Indsigt, Efterforskning, Natur, Perception, Stealth, Overlevelse. <br>Udstyr: Langbue, kogger af 20 pile. <br>Vælg: (a) vægtpost eller (b) læderpanser. <br>Vælg: (a) to kortsværd eller (b) to simple nærkampsvåben.<br>   Vælg: (a) dungeoneer's pack eller (b) explorer's pack. <br>Foretrukne fjende: Fordel ved Survival for at spore, Int for at genkalde info. <br>Natural Explorer: Fordoblet færdighedsbonus for relaterede Int/Wis-checks. <br>Rejsefordele: ingen vanskeligt terræn, ingen fare for at fare vild, opmærksomhed, snigende bevægelse, dobbelt mad fundet, præcis sporing af skabninger.<br>Kampstil: <br>Vælg: Bueskydning, Forsvar, Duellering, Kamp med to våben.<br>Spellcasting: Visdom baseret. Primær bevidsthed: Fornem tilstedeværelsen af visse væsner inden for 1 mile (op til 6 miles i foretrukket terræn) i 1 minut pr. spell-slotniveau. <br>Forbedring af evnescore: Niveauer 4, 8, 12, 16, 19: Øg evnescore eller få en bedrift. <br>        Ekstra angreb: Niveau 5: Angreb to gange med angrebshandling."; 
    }
    else if (newText == "Rogue") {
        overskrift.innerText="Rogue";
        tekst.innerHTML="Hitterninger: 1d8/niveau. Start HP: 8 + Con modifier. Højere niveauer: 1d8 (eller 5) + Con modifikator/niveau efter 1. <br>Panser: Let. <br> Våben: Simpelt, armbrøst, langsværd, gribere, kortsværd. <br>Færdigheder: Vælg 4 fra Akrobatik, Atletik, Bedrag, Indsigt, Intimidation, Efterforskning, Perception, Præstation, Overtalelse, Sleight of Hand, Stealth. <br>Udstyr: Læderrustning, to dolke, tyveværktøj. <br> Vælg: (a) griber eller (b) kortsværd. <br>Vælg: (a) kortbue og kogger med 20 pile eller (b) kortsværd. <br>Vælg: (a) indbrudstyvspakke, (b) dungeoneer-pakke eller (c) opdagelsesrejsendes pack. <br>Ekspertise: Vælg 2 færdigheder eller 1 færdighed og tyvenes værktøjer; dobbelt færdighedsbonus for udvalgte færdigheder. <br>Snig angreb: Ekstra 1d6 skade én gang pr. tur, hvis du har fordel på angrebsrullen eller en fjende er inden for 5 fod uden ulemper.<br>Tyvenes cant: Hemmeligt sprog og tegn til skjulte beskeder.<br> Udspekuleret handling: Start på 2. niveau, brug bonushandling til at Dash, Disengage eller Hide.<br>       Forbedring af evnescore: Niveauer 4, 8, 10, 12, 16, 19: Øg evnescore eller få en bedrift. <br>Uncanny Dodge: Start på 5. niveau, halver skade fra en angriber, du kan se, med en reaktion."; 
    }
  
    else if (newText == "Sorcerer") {
        overskrift.innerText="Sorcerer";
        tekst.innerHTML="Hitterninger: 1d6/niveau. Start HP: 6 + Con modifier.<br> Højere niveauer: 1d6 (eller 4) + Con modifier/niveau efter 1. <br>Rustning: Ingen. <br>Våben: Dolke, dartpile, slynger, kvartstave, lette armbrøster. <br>Sparekast: Con, Cha. Vælg 2 færdigheder fra Arcana, Bedrag, Indsigt, Intimidation, Overtalelse, Religion.<br> Udstyr: To dolke. <br>Vælg: (a) let armbrøst og 20 bolte eller (b) et hvilket som helst simpelt våben. <br>Vælg: (a) komponentpose eller (b) mystisk fokus. <br>Vælg: (a) dungeoneer's pack eller (b) explorer's pack. <br>Spellcasting: Kend 4 cantrips på 1. niveau. Genvind spell slots efter lang hvile. Kend 2 besværgelser på 1. niveau, lær flere senere. <br>Evne: Karisma; spell save DC = 8 + færdighedsbonus + Charisma modifier; spell attack modifikator = færdighedsbonus + Charisma modifikator. Fokus: Arkan fokus.<br>Font of Magic: 2 trolddomspoint, genvind efter lang hvile. <br>Fleksibel støbning: Brug trolddomspoint til at oprette trylleformularslots eller ofre trylleformularslots for at få trolddomspoint.<br>Meta magi: Gevinst på 3. niveau. Vælg 2 muligheder, få flere senere. Kan bruge én Metamagic-indstilling pr. besværgelseskast. <br>Twinned Spell: Brug trolddomspoint svarende til stav eniveau for at målrette mod et andet væsen med samme magi."; 
    }
    else if (newText == "Warlock") {
        overskrift.innerText="Warlock";
        tekst.innerHTML="Hitterninger: 1d8/niveau. <br>Start HP: 8 + Konstitution-modifikator. Højere niveauer: 1d8 (eller 5) + Konstitution-modifikator/niveau efter 1. <br>Rustning: Let. <br>Våben: Simple. <br>Værktøj: Ingen. <br> Sparekast: Visdom, karisma. <br>Vælg to færdigheder fra Arcana, Bedrag, Historie, Intimidation, Efterforskning, Natur, og Religion.<br>Udstyr: Læderrustning, ethvert simpelt våben, to dolke.<br> Vælg: (a) let armbrøst og 20 bolte eller (b) et hvilket som helst simpelt våben. <br>Vælg: (a) komponentpose eller (b) mystisk fokus. <br>Vælg: (a) lærdes pakke eller (b) dungeoneer's pack.<br> Overjordisk protektor: Vælg en kilde på 1., 6., 10., og 14. niveau. <br> Pagtmagi: Se Spells Regler for en trylleformularliste. <br> Cantrips: Kend to, få mere senere. <br> Stave spilleautomater: Brug Warlock-bordet for spell slots, genvind efter hvile. Besværgelser kendt: Kend to på 1. niveau, lær flere senere. <br> Spellcasting evne: Brug karisma til besværgelser, redningskast, og angreb. <br>Spellcasting Fokus: Brug mystisk fokus til troldmandsbesværgelser. Eldritch påkaldelser: Få to på 2. niveau, flere senere. <br>Pagt Boon: Vælg Pact of the Blade, Chain eller Tome på 3. niveau. <br>Forbedring af evnescore: Forøg på 4., 8., 12., 16., og 19. niveau.<br>Mørkes velsignelse: Få midlertidige hitpoint svarende til Charisma-modifikator + warlock-niveau, når du nedlægger et fjendtligt væsen. "; 
    }
    else if (newText == "Troldmand") {
        overskrift.innerText="Troldmand";
        tekst.innerHTML="Hitterninger: 1d6 pr. wizard-niveau <br>1. niveau: 6 + Konstitution-modifikator        Højere niveauer: 1d6 (eller 4) + Konstitution-modifikator pr. wizard-niveau efter 1. færdigheder. <br> Rustning: Ingen <br> Våben: Dolke, pile, slynger, kvartstave, lette armbrøster <br>Værktøj: Ingen <br>Redningskast: Intelligens, <br>Visdomsfærdigheder: Vælg to fra Arcana, Historie, Indsigt, Efterforskning, Medicin og Religionsudstyr <br>Vælg: <br>(a) kvartstang eller (b) dolk <br>(a) komponentpose eller (b) mystisk fokus <br>(a) lærds pakke eller (b) opdagelsesrejsendes pakke Spellbook </br>Indeholder besværgelser, lær mere på højere niveauer. Cantrips<br>Kend tre cantrips, lær mere på højere niveauer. Stavebog<br>Indeholder seks troldmands-besværgelser på 1. niveau. Forberedelse og besværgelser<br> Wizard tabel viser spell slots. Forbered besværgelser svarende til Intelligence modifier + wizard niveau. Kan ændre sig efter lang hvile. <br> Spellcasting <br>Intelligens baseret. Rituel støbning <br>Kan kaste rituelle besværgelser fra tryllebog med rituel tag uden at forberede dem. Spellcasting Fokus <br>Brug mystisk fokus til troldmands-besværgelser. Lære besværgelser<br>Få to troldmands.besværgelser gratis på hvert niveau, skal matche spell slots."; 
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