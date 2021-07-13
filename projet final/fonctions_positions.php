<?php // VA VERS CERCLE2

// placement base du néon
function placement_y($i, $data){
    // 1ans = 6.875px
    // 10 ans = 68.75px
    // 1 trait = 275px
    $data["annee_creation"];
    $emplacement_y = (($data["annee_creation"] - 2000) * 7.875) + 313;

    if($emplacement_y >= 0){
        return $emplacement_y;
    }else{
        return 0;
    }
    
}

//placement hauteur du néon 
function placement_height($i, $data, $date, $total_points){
    if (isset($data["mort"])){
        $emplacement_height = ($data["mort"] - $data["annee_creation"]) * 7.875;// 7.8 px par annee 
        
    }else{
        $emplacement_height = ((($date - $data["annee_creation"]) + ($total_points /2)) * 7.875);
    }
    return $emplacement_height;
}