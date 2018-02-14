<?php header("Access-Control-Allow-Origin: *");
$cartitas = array(
    array(
    "nombre" => "Propietario de un arado", 
    "foto" => "fotitos/propietario.jpg",
    "mazo" => "E", 
    "info" => "Si tiene una casa de piedra, al principio de cada ronda puedes pagar como máximo 1 comida para arrar 1 campo."
),
    array(
    "nombre" => "Labriego", 
    "foto" => "fotitos/labriego.jpg",
    "mazo" => "I", 
    "info" => "Cada vez que siempre 1 solo campo coloca en él 2 recursos adicionales del tipo correspondiente. Si siembras 2 campos, coloca en cada uno 1 recurso adicional. Si siembras 3 o más campos, no coloques ningún recurso adicional."
),
    array(
    "nombre" => "Pocero", 
    "foto" => "fotitos/pocero.jpg",
    "mazo" => "I", 
    "info" => "Para ti el Pozo se considera una adquisición menor y sólo debes pagar 1 piedra y 1 madera para adquirirlo."
),
    array(
    "nombre" => "Peón", 
    "foto" => "fotitos/peon.jpg",
    "mazo" => "I", 
    "info" => "Al principio de la fase de Alimentación puedes coger como máximo 1 cereal del campo de otro jugador pagándole 2 comidas como compensación."
),
);
echo json_encode($cartitas);

?>
