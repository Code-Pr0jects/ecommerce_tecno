<?php
function controlloEmailDB($email, $db){
    $sql = "SELECT cl_email FROM clienti WHERE cl_email = '" . $email . "'";
    $res = $db->query($sql);
    return $res->num_rows == 0;
}
?>