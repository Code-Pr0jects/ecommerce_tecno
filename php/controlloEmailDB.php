<?php
function controlloEmailDB($email, $db){        
    $sql = "SELECT cl_email FROM clienti WHERE cl_email = ?";
    $query = $db->prepare($sql);           
    $query->bind_param('s', $email);                     
    $query->execute();
    $query->store_result();
    return $query->num_rows == 0;
}
?>