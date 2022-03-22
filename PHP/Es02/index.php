<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina 2</title>
</head>
<body>
    <h1>Risultato:</h1>
    <?php
    //contiene tutte le chiavi passate tipo get
        $n1 = $_GET["txtN1"];
        $n2 = $_GET["txtN2"];
        $n3 = $_GET["txtN3"];
        if($n1>$n2 && $n1>$n3)
        echo("Il maggiore è $n1");

        else if($n2>$n3)
        echo("Il maggiore è $n2");  
             
        else
        echo("Il maggiore è $n3");



    ?>
</body>
</html>