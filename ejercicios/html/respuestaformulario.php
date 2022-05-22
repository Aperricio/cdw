<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="/img/Pablo.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gracias</title>
    <style>
        html {
            min-height: 100vh;
            background: linear-gradient(105deg, black 40%, purple 80%);
            
        }
        body {
            text-align: center;
            padding: 30px;
            color: white;
            margin-top: 20%;
        }
    </style>
</head>
<body>
    <?php
        $cuerpo = "Mensaje enviado desde su formulario: " . PHP_EOL ;
        foreach ( $_POST as $casilla => $rellenado )
            {
                $cuerpo = $cuerpo . $casilla . ": " . utf8_decode($rellenado) . PHP_EOL ;
            }

            mail ( "pablo@tomateun.com" , "Datos recibidos desde la web" , $cuerpo )
            ?>

    <h1>Gracias. Te contactaremos pronto</h1>
    <a href="/index.html">Volver a la página principal</a>

</body>
</html>
