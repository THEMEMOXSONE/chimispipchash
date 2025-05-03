<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chimis";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["mensaje" => "Error de conexión: " . $conn->connect_error]));
}

$tipo = $_POST['tipo'] ?? '';
$id = intval($_POST['id'] ?? 0);

if (empty($tipo) || $id <= 0) {
    die(json_encode(["mensaje" => "Error: Datos inválidos."]));
}

if ($tipo === "producto") {
    $sql = "DELETE FROM productos WHERE idproducto = $id";
} elseif ($tipo === "usuario") {
    $sql = "DELETE FROM usuarios WHERE iduser = $id";
} else {
    die(json_encode(["mensaje" => "Tipo no válido."]));
}

if ($conn->query($sql) === TRUE) {
    echo json_encode(["mensaje" => "Elemento eliminado exitosamente."]);
} else {
    echo json_encode(["mensaje" => "Error al eliminar: " . $conn->error]);
}

$conn->close();
?>
