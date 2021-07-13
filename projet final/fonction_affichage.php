<?php 
function affichage_personnage($bdd){?>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    // try{

    //     $bdd = new PDO("mysql:host=localhost:3306;dbname=marvel", "root", "");
    
    // }catch(Exception $e){
    //     die('Erreur : ' . $e->getMessage());
    // }

<?php
    $nom = "<script>recuperation_nom()</script>";
    $requete_affichage = $bdd->prepare("SELECT * FROM super_heros WHERE super_heros.nom = :nom");
    $requete_affichage->execute([
        "nom" => "Ant Man"
    ]);

    $reponse_affichage = $requete_affichage->fetch(PDO::FETCH_ASSOC);


    
}