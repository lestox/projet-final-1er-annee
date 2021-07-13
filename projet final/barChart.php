<!DOCTYPE html>
<html lang="">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>

  <?php 
    //connexion à la bdd
    require_once("connexion_bdd.php"); 
  ?>

</head>

<style>
    #container{
        width: 40%;
    }
    </style>
    
<body>

 <div id="container">
  <canvas id="myChart"></canvas>
</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.0/Chart.bundle.js"></script>
    <script>
        
        // Variable par défaut - S'applique à tout le graph
        Chart.defaults.scale.gridLines.drawOnChartArea = false;
        
        // Récupération du canvas 
        var ctx = document.getElementById("myChart").getContext("2d");
        
        // Valeur des labels 
        //var labelValues = ["Iron Man", "Spider-Man : Far From home"]
    
        // Création du graphique 
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Premier salaire", "Dernier salaire"],
                datasets: [{
                    barPercentage: 1, // Réglage de la largeur des bars - En % - Basé sur la taille du canva
                    categoryPercentage: 0.6, // Réglage de l'espace entre les bars
                    label: "Salaire ",

                    data: [<?= $data["salaire_premier_film"],  $data["salaire_dernier_film"] ?>], // TODO PHP
      backgroundColor: ["#41BBC1", '#41BBC1'], //Couleur des barres
                    borderColor: ["#41BBC1", "#41BBC1"], 
                    borderWidth: 1.2 // Epaisseur de la bordure 
                }]
            },
            
            // Option du graphique
            options: { 
                legend: {
                    display: false,
                },
                scales: { // Echelle           
                    yAxes: [{
                        type: 'logarithmic', // Echelle logarithmic - TODO checker pour tous les persos
                        display: false,
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            color: "#00EBEC",
                            drawTicks: false,
                        },
                    }]
                }
            },
        });
        
    </script>
</body>
</html>
