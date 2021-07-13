<?php // VA VERS CERCLE


require_once("connexion_bdd.php");

//création tableau qui sera envoyé fichier json
$donnees_json = array();
//si reponse requete est présente 
if($reponse):
    $i = 1 ;


// WHILE -> tant que tous les personnages ne sont pas passés 
    while ($data = $reponse->fetch()):


// SECTION points anciennetée :

        //si vivant :
        if(!$data["mort"]):
            //anciennetee
            $anciennetee = $date - $data["annee_creation"];

            //calcul des points
            $points_anciennetee = 12.5 - $anciennetee * 1.25;

            //empeche inférieur à 0
            if($points_anciennetee < 0):
                $points_anciennetee = 0;
            endif;
            
        
        //si mort : 
        else:
            //durée de vie avant mort 
            $points_anciennetee = 0 ;
            
        endif;
// FIN section 



// SECTION points films solos  

        $points_films_solos = 3.75 - $data["nombre_films_solo"] * 0.375;

        // si point < 0 
        if($points_films_solos < 0):
            $points_films_solos = 0;
        endif;
//FIN section films solos
        


// SECTION films totaux

        $points_totaux_films =12.5 - $data["nombre_films_totaux"] * 1.25;


        //si point < 0 
        if( $points_totaux_films < 0 ):
            $points_totaux_films = 0;
        endif;
// FIN totaux films



// SECTION dernier film     


        $points_dernier_salaire = $data["salaire_dernier_film"] / 4375000;

        //si point < 0
        if ( $points_dernier_salaire < 0 ):
            $points_dernier_salaire = 0; 
        endif;
// FIN dernier salaire


//SECTION continuitee  

        switch ($data["envie_continuer"]){
            case "Y" : 
                $points_continuitee = 10;
                break;
            case "N" : 
                $points_continuitee = 0;
                break;
            default : 
                $points_continuitee = 5 ;
        } 
// FIN continuitee


//calcul des points totaux 
        $total_points = $points_anciennetee + $points_films_solos + $points_totaux_films + $points_dernier_salaire + $points_continuitee;

        //var_dump("while $i");
        require("cercle2.php");
        $i++;
        
//DEBUT remplissage JSON
    // Récupération données pour remplissage "$donnes_json" puis mise envoi dans fichier json 
    // chaque tour de boucle sera nouveau perso 
    $donnees_personnage = array( $data["nom"] => 
    array( "annee_creation" => $data["annee_creation"], 
    "nombre_films_solo" => $data["nombre_films_solo"],
    "nombre_films_totaux" => $data["nombre_films_totaux"], 
    "salaire_dernier_film" => $data["salaire_dernier_film"], 
    "envie_continuer" => $data["envie_continuer"], 
    "mort" => $data["mort"], 
    "salaire_premier_film" => $data["salaire_premier_film"], 
    "augmentation_salaire_film" => $data["augmentation_salaire_film"], 
    "points" => $total_points ));


    // va pousser données de chaque personnage dans dictionnaire $donnees_json pour envoi
    array_push($donnees_json, $donnees_personnage );

    endwhile; 
//FIN while 




    //encodage php en json
    $donnees_json = json_encode($donnees_json);

    //envois dans fichier json
    file_put_contents('personnages.json', $donnees_json);

else:
    echo "La reponse de la requete n'est pas présente. ";
endif;
