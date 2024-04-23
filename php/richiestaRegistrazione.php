<?php
require_once "./database.php";
if(isset($_POST['submit'])){    
    $fnome = $_POST['fnome'];
    $fcognome = $_POST['fcognome'];
    $femail = $_POST['femail'];
    $fpassword = $_POST['fpassword'];
    $fnascita = $_POST['fnascita'];
    $findirizzo = $_POST['findirizzo'];        
    $sql = 
        "INSERT INTO clienti(cl_nome, cl_cognome, cl_email, cl_password, cl_dt_nasc, cl_indi)
        VALUES ('" . $fnome . "','" . $fcognome . "','" . $femail . "','" . $fpassword . "','"
        . $fnascita . "','" . $findirizzo . "')";    
    $conn->query($sql);                    
}
$conn->close();
header("Location: ../registrazione.php");
?>