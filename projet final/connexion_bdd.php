<?php

try{

    $bdd = new PDO("mysql:host=localhost:3306;dbname=marvel", "root", "");

}catch(Exception $e){
    die('Erreur : ' . $e->getMessage());
}

// requete SQL
$requete = ("SELECT * FROM super_heros");
$reponse = $bdd->query($requete);


// try{
//     $bdd = new PDO("mysql:host=db5002899289.hosting-data.io:3306;dbname=dbs2325018", "dbu1981188", "Groupe062021+");
// }catch(Exception $e){
//     die('Erreur : ' . $e->getMessage());
// }

// // requete SQL
// $requete = ("SELECT * FROM super_heros");
// $reponse = $bdd->query($requete);
?>

