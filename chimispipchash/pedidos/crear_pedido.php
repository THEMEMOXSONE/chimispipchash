<?<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chimis";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Error de conexión: " . $conn->connect_error]));
}

$fecha = date("Y-m-d");
$hora = date("H:i:s");

$sql = "INSERT INTO pedidococina (fecha, hora) VALUES ('$fecha', '$hora')";

if ($conn->query($sql) === TRUE) {
    $idNuevoPedido = $conn->insert_id; 
    $idPedidoFormateado = str_pad($idNuevoPedido, 5, "0", STR_PAD_LEFT); 
    echo json_encode([
        "success" => "Pedido creado correctamente",
        "idpedido" => $idPedidoFormateado,
        "fecha" => $fecha,
        "hora" => $hora
    ]);
} else {
    echo json_encode(["error" => "Error al insertar el pedido: " . $conn->error]);
}

$conn->close();
?>