<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES01</title>
</head>
<body>
    <h1>Eserzio 01 PHP</h1>
    <?php
        $nome = "pippo";
        echo ("<p>Il mio nome è $nome <p><br>");
        visualizza ($nome);

        function visualizza($nome) {
        echo ("<p style='color:blue'>Il mio nome &egrave; $nome </p>");
    }
   ?>
   <h1>INFORMAZIONI SULLA CONFIGURAZIONE PHP</h1>
   <?php 
        echo(phpinfo());
   ?>

   <h1>visualizzazione del JSON $_SERVER</h1>
   <?php
        foreach($_SERVER as $key => $value){
            echo("$key : $value <br>");
        }
   ?>
</body>
</html>