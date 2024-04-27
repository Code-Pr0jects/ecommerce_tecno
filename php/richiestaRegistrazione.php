<?php
require "./database.php";
require "./controlloEmailDB.php";

if(isset($_POST['submit'])){    
    //raccolta variabili passate dal form
    $fnome = $_POST['fnome'];
    $fcognome = $_POST['fcognome'];
    $femail = $_POST['femail'];
    $fpassword = $_POST['fpassword'];
    $fnascita = $_POST['fnascita'];
    $findirizzo = $_POST['findirizzo'];                

    //password hash
    $fpasswordHashed = password_hash($fpassword, PASSWORD_DEFAULT);       

    //regular expression per email, password e indirizzo
    $regexEmail = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
    $regexPassword = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/";
    $regexIndirizzo = "/^(Via|via)\s(?:[a-zA-Z]+\s?)+,\s[1-9]\d?$/";        
    
    //calcolo età cliente
    $today = date("Y-m-d");
    $diff = date_diff(date_create($fnascita), date_create($today));    
    $age = $diff->format('%y');

    //validazione form lato server -> se esito positivo inserisci dati nel DB
    if(        
        $fnome != '' &&
        $fcognome != '' &&
        $femail != '' && preg_match($regexEmail, $femail) && controlloEmailDB($femail, $conn) &&
        $fpassword != '' && preg_match($regexPassword, $fpassword) &&
        $age >= 18 && $age <= 130 &&
        $findirizzo != '' && preg_match($regexIndirizzo, $findirizzo) 
    ){        
        $sql = 
            "INSERT INTO clienti(cl_nome, cl_cognome, cl_email, cl_password, cl_dt_nasc, cl_indi)
            VALUES(?, ?, ?, ?, ?, ?)";    
        
        $query = $conn->prepare($sql);                            
        $query->bind_param('ssssss', $fnome, $fcognome, $femail, $fpasswordHashed, $fnascita, $findirizzo);
        $query->execute();        
        $conn->close();
        header("Location: ../login.php");
    }
    else{
        $conn->close();
        header("Location: ../registrazione.php?errorEmail=true");        
    }
}
?>