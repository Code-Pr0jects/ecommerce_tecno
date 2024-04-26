/*controllo se email è vuota oppure se rispetta
la regex passata come parametro*/
export default function controlloEmail(femail, regex){
    if(femail.value == '' || regex.test(femail.value) == false){                
        const errEmail = document.createElement('span');                
        errEmail.classList.add('errorMsg');
        if(femail.value == ''){
            errEmail.textContent = 'Campo email obbligatorio';
        }
        else{
            errEmail.textContent = 'Email non valida';
        }
        femail.after(errEmail);         
    }
}