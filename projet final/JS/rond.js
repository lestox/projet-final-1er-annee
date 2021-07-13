// Sélecteur d'éléments directement dans le DOM
var herosName = document.querySelectorAll(".radar div.name p")
var tourHero = document.querySelector("div.radar")
// Liste dans laquelle nous regrouperons l'id des héros sur lesquels l'utilisateurs aura cliqué
var herosClicked = []

// Liste de toute les images des héros (flatdesign)
var herosPhoto = ["assets/hulk.png", "assets/captainamerica.png", "assets/blackwidow.png", "assets/doctorstrange.png", "assets/spiderman.png", "assets/blackpanthere.png", "assets/thor.png","assets/captainmarvel.png",
"assets/antman.png","assets/ironman.png"]

// Boucle parcourant la liste des images des héros
for (var i = 0; i < herosName.length ; i ++){

    herosName[i].onclick = function() {
        // Au clic, nous rajoutons l'id du héro cliqué à la liste
        herosClicked.push(this.id)
        console.log(herosClicked)


        // Pour seul but de récupérer le nom du héro sur lequel l'utilisateur à cliqué
        HerofullName =  this.textContent
        console.log(HerofullName)
        recuperation_nom(HerofullName)

        // Lancement de la page chart 
        var ID = this.id;
        prepareDataviz(ID, HerofullName)

        // Fonction compteur
        Rebour()

        // Sélection de la div qui contiendra l'image
        var myHeroRemainingTime = document.querySelector("div.remaining_time")
        blink()

        // Si je trouve dans mon DOM un élément avec la classe visible
        if (myHeroRemainingTime.className.match("visible")) {
            
            // Si le dernier élément de ma liste correspond à celui sur lequel je viens de cliquer, alors l'élément ne s'éfface pas
            if (this.id == herosClicked[herosClicked.length-2]) {
                document.querySelector("div#container > div.remaining_time").classList.toggle("visible")
                // Retour à la couleur du rect d'origine
                document.getElementById("rect" + herosClicked[herosClicked.length - 1]).style.fill = "#00EBEC";
                
            }
            else {
                // sinon si je clique sur un nouveau nom de hero
                // Retour à la couleur du précèdant héro séléctionné 
                document.getElementById("rect" + herosClicked[herosClicked.length - 2]).style.fill = "#00EBEC";
                // Coloration du néon en rouge - Différenciation 
                document.getElementById("rect" + herosClicked[herosClicked.length - 1]).style.fill = "#FF0000";
                //J'atttribue au src de l'image vide dans le DOM le src se trouvant dans ma liste à l'indice corespondant à l'id du hero
                document.querySelector("div#container > div.remaining_time img").src = herosPhoto[this.id - 1]
                
            }
            
            // Au clique visualisation de la data
            dataSpoiler()
            
        }
        // Si je n'ai jamais encore cliqué sur le nom d'un héro
        else {
            document.querySelector("div#container > div.remaining_time").classList.toggle("visible")
            document.querySelector("div#container > div.remaining_time img").src = herosPhoto[this.id - 1]
            var id_rect = "rect" + this.id
            // Coloration du néon en rouge - Différenciation 
            document.getElementById(id_rect).style.fill = '#FF0000';
            document.querySelector("div#onboarding").classList.add("end")
    }

    return HerofullName
        
}}

// Pour seul but de récupérer le nom du héro sur lequel l'utilisateur à cliqué


function recuperation_nom(HerofullName) {
    return HerofullName
}



function blink() {
    // Effet blink sur le bouton qui ouvre la data
    // Afin qu'il se répète à chaque clique sur un élément et pas 1 seul fois
    document.querySelector("div#container > div.remaining_time > div#all_infos > div.info_data").classList.toggle("spoiler")
            setTimeout(function() {
                document.querySelector("div#container > div.remaining_time > div#all_infos > div.info_data").classList.remove("spoiler")
            },1500)
        } 



// Fonction permettant de visualiser toutes la data autour d'un hero
    document.querySelector("div#container > div.remaining_time > div#all_infos > div.info_data").onclick = function dataSpoiler() {
    document.querySelector("div#container > div.remaining_time").classList.remove("visible")
    document.querySelector("body > div#wrapper > div#backgroundData").classList.toggle("visible")
    // 2crit dans la fenêtre le nom du héro sur lequel l'utilisateur à cliqué
    document.querySelector("body > div#wrapper > div#backgroundData > div#data > header > div > p:nth-child(1)").innerHTML = HerofullName

    closeData()

}

function closeData() {

    document.querySelector("body > div#wrapper > div#backgroundData > div#data > header > img").onclick = function () {
        document.querySelector("body > div#wrapper > div#backgroundData").classList.remove("visible")
        document.querySelector("div#container > div.remaining_time").classList.toggle("visible")
        
    }
}

// Fonctions du compté à rebours
var Affiche = document.getElementById("dDay");

// Fonction principale du compte à rebours
function Rebour() {
switch (HerofullName) {
    case 'Hulk':
        var date2 = new Date ("Jan 1, 2030 00:00:00");
        Calcul_compteur(date2);
        break;
    
    case 'Doctor Strange':
        var date2 = new Date ("Feb 1, 2037 00:00:00");
        Calcul_compteur(date2);
        break;

    case 'Spiderman':
        var date2 = new Date ("Aug 1, 2034 00:00:00");
        Calcul_compteur(date2);
        break;

    case 'Black Panther':
        var date2 = new Date ("Jul 1, 2033 00:00:00");
        Calcul_compteur(date2);
        break;

    case 'Thor':
        var date2 = new Date ("Mar 1, 2030 00:00:00");
        Calcul_compteur(date2);
        break;

    case 'Captain Marvel':
        var date2 = new Date ("Oct 1, 2036 00:00:00");
        Calcul_compteur(date2);
        break;

    case 'Ant Man':
        var date2 = new Date ("Aug 1, 2034 00:00:00");
        Calcul_compteur(date2);
        break;
    
    case 'Black Widow':
        var date2 = new Date ("Sep 1, 2021 00:00:00");
        Calcul_compteur(date2);
        break;

    default: Affiche.innerHTML = "Disparu du MCU";

}
}

// Fonction de calcul j : min : s
function Calcul_compteur(date2) {
var date1 = new Date();
var sec = (date2 - date1) / 1000;
var n = 24 * 3600;
if (sec > 0) {
    j = Math.floor (sec / n);
    h = Math.floor ((sec - (j * n)) / 3600);
    mn = Math.floor ((sec - ((j * n + h * 3600))) / 60);
    sec = Math.floor (sec - ((j * n + h * 3600 + mn * 60)));
    Affiche.innerHTML = j + " j "+ h +" h "+ mn +" min "+ sec + " s";
    window.status = "Temps restant : " + j +" j "+ h +" h "+ mn + " min " + sec + " s ";
}
tRebour = setTimeout ("Rebour();", 1000);
}
Rebour();
