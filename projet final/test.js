    
    // Correction de l'id - Adaptation pour Json
    function idCorrect (id) {
        switch (id) {
            case '1' :
                return 1;

            case '2' :
                return 3;
            
            case '3':
                return 4;

            case '4':
                return 6;
            
            case '5': 
                return 7;
            
            case '6':
                return 8;

            case '7':
                return 2;
            
            case '8':
                return 9;

            case '9':
                return 5;

            case '10':
                return 0;
    }
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
    
    
    function prepareDataviz(ID, hero) {
    // Variable et ID correspondant à un héro
    if (hero === 'Iron Man') {
        var nom = 'Iron-Man';
    } 

    else if (hero === 'Ant Man') {
        var nom = 'Ant-Man';
    }
    else if (hero === 'Captain Marvel') {
        var nom = 'CaptainMarvel'
    }
    else if (hero === 'Spiderman') {
        var nom = 'Spider-Man'
    }
    else {
        var nom = hero;
    }
    
    
    var id = idCorrect(ID);
   


    //fetch("test.json")
    fetch("personnages.json")
        .then(function(resultat) {
        if (resultat.ok) {
            return resultat.json();
        }
        })
        .then(function(value) {
        console.log(value)
        // alert(value.comments[0].message);

        //Déclaration des variables nécessaires
        const augmentation = numberWithSpaces(value[id][nom].augmentation_salaire_film);
        const debutMcu = value[id][nom].annee_creation;
        const mort = value[id][nom].mort;
        const premierSalaire = value[id][nom].salaire_premier_film;
        const dernierSalaire = value[id][nom].salaire_dernier_film;
        const filmSolo = value[id][nom].nombre_films_solo;
        const filmMcu = value[id][nom].nombre_films_totaux - filmSolo;
        const envieContinuer = value[id][nom].envie_continuer;
        const nbPoints = value[id][nom].points;
        var currentYear = new Date().getFullYear();


        // Augmentation de salaire
        document.getElementById("augmentationSalaire").textContent = augmentation + "$";


        // Calcul du nombre d'année
        if (mort === null) {
            var Nb_annee = currentYear - debutMcu
            document.getElementById("Nb_annee").textContent = Nb_annee
            // Affichage date d'apparition et de mort 
            var anneeMort = currentYear + (nbPoints/2);
            document.getElementById('lifeTime').textContent = debutMcu + ' - ' + Math.round(anneeMort);

        }

        else {
            var Nb_annee =  mort - debutMcu

            document.getElementById("Nb_annee").textContent = Nb_annee;

            // Affichage date d'apparition et de mort 
            document.getElementById('lifeTime').textContent = debutMcu + ' - ' +  mort;
        }



        // Envie de continuer de l'acteur 
        let divEnvie = document.getElementById("envieActeur");
        if (envieContinuer === 'Y') {
            divEnvie.textContent = 'Oui';
        }
        else if (envieContinuer === 'N') {
            divEnvie.textContent = 'Non';
        }
        else {
            divEnvie.textContent = 'N/A';
        }

        // Création du graphique en Bar
        let dataBar = [premierSalaire, dernierSalaire];
        Graphique_Bar(dataBar);

        
        //Création du graphique 
        let dataDoughnut = [filmMcu, filmSolo];
        Graphique_Doughnut(dataDoughnut);
        
        })
        .catch(function(err) {
        // Une erreur est survenue
        });
    }