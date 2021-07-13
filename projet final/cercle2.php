<?php // VA VERS REQUETS_POINTS
// décide placement néons
require_once("fonctions_positions.php");
//var_dump($total_points);
switch ($i){

    case 1 : 
        array_push($tableau_svg,'<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.672" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(162.195 310.153 313.847)" id="rect10" fill="#00EBEC"></rect>');
        break;

    case 2 : 
        array_push($tableau_svg, '<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.672" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(-161.983 310.153 313.847)" id="rect1" fill="#00EBEC"></rect>');
        break;

    case 3 : 
        array_push($tableau_svg,'<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.672" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(54.0612 310.153 313.847)" id="rect7" fill="#00EBEC"></rect>');
        break;

    case 4 : 
        array_push($tableau_svg, '<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.672" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(-125.835 310.153 313.847)" id="rect2" fill="#00EBEC"></rect>');
        break;

    case 5 : 
        array_push($tableau_svg, '<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="19.0025" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(-90 310.153 313.847)" id="rect3" fill="#00EBEC"></rect>');
        break;

    case 6 : 
        array_push($tableau_svg, '<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.672" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(125.964 310.153 313.847)" id="rect9" fill="#00EBEC"></rect>');
        break;

    case 7 : 
        array_push($tableau_svg, '<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.672" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(-53.7143 310.153 313.847)" id="rect4" fill="#00EBEC"></rect>');
        break;

    case 8 : 
        array_push($tableau_svg, '<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.672" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(-17.5918 310.153 313.847)" id="rect5" fill="#00EBEC"></rect>');
        break;

    case 9 : 
        array_push($tableau_svg, '<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.6738" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(18.1438 310.153 313.847)" id="rect6" fill="#00EBEC"></rect>');
        break;

    case 10 : 
        array_push($tableau_svg, '<rect x="301" y="' . placement_y($i, $data, $date, $total_points) . '" width="18.672" height="' . placement_height($i, $data, $date, $total_points) . '" transform="rotate(90 310.153 313.847)" id="rect8" fill="#00EBEC"></rect>');
        break;

}// fin case


