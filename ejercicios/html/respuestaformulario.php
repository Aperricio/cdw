<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="../../img/Pablo.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gracias</title>
    <style>
        :root {
            min-height: 100vh;
            background: linear-gradient(120deg, black 40%, purple 80%);
            
        }
        body {
            padding: 30px;
            color: white;
        }

        main {
            display: table-cell;
            height: 90vh;
            width: 100vw;
            text-align: center;
            vertical-align: middle;
        }

        h1 {
            font-size: 6vw;
            border: 1vh solid rgb(240, 240, 240, 0.2);
            padding: 5px;
            border-radius: 10px;
            background: rgb(255, 255, 255, 0.05);
            box-shadow: 4px 2px 15px rgb(200, 200, 200, 0.3);
        }

        a {
            padding: 10px;
            transition: 1.5s;
        }
        a:hover {
            background-color: rgb(255, 255, 255, 0.1);
            color: white;
            border-radius: 10px;
            transition: 0.7s:
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

    <main>
        <h1>Gracias. Te contactaremos pronto</h1>
        <a href="../../index.html">Volver a la página principal</a>
    </main>

</body>
</html>
