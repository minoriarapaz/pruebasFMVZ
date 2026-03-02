<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>prueba de envio</title>
</head>

<body>
	<h1>Envía tu nombre</h1>
	<form method="post" action="guardar.php" enctype="multipart/form-data">
		Nombre: <input type="text" name="nombre" size="20"> 
		<br>
		Foto: <input type="file" name="foto" size="30">
		<br>
		<input type="submit" value="ENVIAR">
	</form>
</body>
</html>