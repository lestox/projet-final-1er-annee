
    
    // Variable par défaut - S'applique à tout le graph
    Chart.defaults.scale.gridLines.drawOnChartArea = false;
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontFamily = 'zekton';
    Chart.defaults.global.defaultFontSize = 14;
    

    // Création du graphique 
    function Graphique_Doughnut(dataDoughnut) {
        document.getElementById('doughnutContainer').innerHTML = '';
        var canv1 = document.createElement('canvas');
        canv1.id = 'doughnut';
        document.getElementById('doughnutContainer').appendChild(canv1);

      
    var ctx = document.getElementById("doughnut").getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Autre films", "Films solo"],
            datasets: [{
                barPercentage: 0.5, // Réglage de la largeur des bars - En % - Basé sur la taille du canva
                categoryPercentage: 0.6, // Réglage de l'espace entre les bars
                label: "Salaire ",
                data: dataDoughnut,// TODO PHP
                backgroundColor: ["#41BBC1", '#0C585B'], //Couleur des barres
                borderColor: ["#FFFFFF", "#FFFFFF"], 
                borderWidth: 2 // Epaisseur de la bordure 
            }]
        },

        
        // Option du graphique
        options: { 
            legend: {
                display: true,
                position: 'bottom'

            },
            scales: { // Echelle           
                yAxes: [{
                    display: false,
                }],
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawTicks: false,
                    },
                }]
            }
        },
    });
}


        function Graphique_Bar(dataBar) {
        ///Graphique en bar - Evol. salaire premier/dernier film
        // Récupération du canvas 
        document.getElementById('barContainer').innerHTML = '';
        var canv = document.createElement('canvas');
        canv.id = 'barChart';
        document.getElementById('barContainer').appendChild(canv);

        var ctx = document.getElementById("barChart").getContext("2d");

          
       // Création du graphique 
       var myChart = new Chart(ctx, {
           type: 'bar',
           data: {
               labels: ["Premier salaire", "Dernier salaire"],
               datasets: [{
                   barPercentage: 0.5, // Réglage de la largeur des bars - En % - Basé sur la taille du canva
                   categoryPercentage: 0.6, // Réglage de l'espace entre les bars
                   label: "Salaire ",
                   data: dataBar, // TODO PHP
                   backgroundColor: ["#41BBC1", '#0C585B'], //Couleur des barres
                   borderColor: ["", ""], 
                   borderWidth: 2 // Epaisseur de la bordure 
               }]
           },
           
           // Option du graphique
           options: { 
            // tooltips: {
            // callbacks: {
            //         label: function(tooltipItems, data) {
            //             return "$" + tooltipItems.yLabel.toString();
            //         }}},
            ticks: {
                padding: 20
            },
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
    }
    
