<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chimis";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => $conn->connect_error]));
}

$sql = "SELECT idpedido FROM pedidococina";
$result = $conn->query($sql);

$pedidos = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $pedidos[] = $row; 
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($pedidos);
?>