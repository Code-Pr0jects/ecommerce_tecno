<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrazione</title>
    <link rel="stylesheet" href="./css/style.css">    
    <script src="./js/controlloRegistrazione.js" defer></script>
</head>
<body>
    <h1>Registrazione</h1>
    <form id="formRegistrazione" action="./php/richiestaRegistrazione.php" method="POST">
        <div id="boxNome">
            <label for="fnome">Nome</label>
            <input type="text" id="fnome" name="fnome">            
        </div>
        <div id="boxCognome">
            <label for="fcognome">Cognome</label>
            <input type="text" id="fcognome" name="fcognome">
        </div>
        <div id="boxEmail">
            <label for="femail">Email</label>
            <input type="text" id="femail" name="femail">
        </div>
        <div id="boxPassword">
            <label for="fpassword">Password</label>
            <input type="password" id="fpassword" name="fpassword">
        </div>
        <div id="boxIndirizzo">
            <label for="findirizzo">Indirizzo</label>
            <input type="text" id="findirizzo" name="findirizzo">
        </div>
        <div>
            <label for="fnascita">Data di nascita</label>
            <input type="date" id="fnascita" name="fnascita">
        </div>
        <div>
            <input type="file">
        </div>
        <div id="boxControllo">
            <input type="checkbox" id="fcontrollo" name="fcontrollo">
            <span>Accetti termini e Condizioni</span>
        </div>
        <div>
            <label>Hai già un account? Accedi</label><br>
            <input type="submit" name="submit" value="Registrazione">
        </div>
    </form>    
</body>
</html>