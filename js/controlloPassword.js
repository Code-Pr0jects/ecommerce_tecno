/*controllo se password è vuota oppure se rispetta
la regex passata come parametro*/
export default function controlloPassword(fpassword, regex){
    if(fpassword.value == '' || regex.test(fpassword.value) == false){                
        const errPassword = document.createElement('span');                
        errPassword.classList.add('errorMsg');
        if(fpassword.value == ''){
            errPassword.textContent = 'Campo password obbligatorio';
        }
        else{
            errPassword.textContent = 'Password non valida';
        }
        fpassword.after(errPassword);         
    }
}