<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chimis";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["mensaje" => "Error de conexión: " . $conn->connect_error]));
}


$nombrep = $_POST['nombrep'] ?? '';
$categoria = $_POST['categoria'] ?? '';
$precio = $_POST['precio'] ?? 0;
$stock = $_POST['stock'] ?? 0;

if (empty($nombrep) || empty($categoria) || $precio <= 0 || $stock < 0) {
    die(json_encode(["mensaje" => "Error: Datos inválidos. Verifica que todos los campos sean correctos."]));
}


$sql = "INSERT INTO productos (nombrep, categoria, precio, stock) VALUES ('$nombrep', '$categoria', $precio, $stock)";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["mensaje" => "¡Producto agregado exitosamente!"]);
} else {
    echo json_encode(["mensaje" => "Error al insertar el producto: " . $conn->error]);
}

$conn->close();
?>