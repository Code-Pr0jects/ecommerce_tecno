const formRegistrazione = document.querySelector('#formRegistrazione');
const fnome = document.querySelector('#fnome');
const fcognome = document.querySelector('#fcognome');
const femail = document.querySelector('#femail');
const fpassword = document.querySelector('#fpassword');
const findirizzo = document.querySelector('#findirizzo');
const fnascita = document.querySelector('#fnascita');
const fcontrollo = document.querySelector('#fcontrollo');

formRegistrazione.addEventListener('submit', function(evt){                                
    const errorMsg = document.querySelectorAll('.errorMsg');        
    if(errorMsg.length > 0){
        for(let i = 0; i < errorMsg.length; i++){            
            errorMsg[i].remove();
        }        
    }        
    if(fnome.value == ''){        
        const errNome = document.createElement('span');                
        errNome.classList.add('errorMsg');
        errNome.textContent = 'Campo nome obbligatorio';
        fnome.after(errNome);                 
    }
    if(fcognome.value == ''){                
        const errCognome = document.createElement('span');                
        errCognome.classList.add('errorMsg');
        errCognome.textContent = 'Campo cognome obbligatorio';            
        fcognome.after(errCognome);     
    }
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(femail.value == '' || regexEmail.test(femail.value) == false){                
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
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;
    if(fpassword.value == '' || regexPassword.test(fpassword.value) == false){                
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
    const regexIndirizzo = /^(Via|via)\s(?:[a-zA-Z]+\s?)+,\s[1-9]\d?$/;        
    if(findirizzo.value == '' || regexIndirizzo.test(findirizzo.value) == false){                
        const errIndirizzo = document.createElement('span');                
        errIndirizzo.classList.add('errorMsg');
        if(findirizzo.value == ''){
            errIndirizzo.textContent = 'Campo indirizzo obbligatorio';
        }
        else{
            errIndirizzo.textContent = 'Indirizzo non valido';
        }
        findirizzo.after(errIndirizzo);         
    }
    if(fnascita.value == ''){                
        const errNascita = document.createElement('span');
        errNascita.classList.add('errorMsg');
        errNascita.textContent = 'Campo nascita obbligatorio';
        fnascita.after(errNascita);         
    }
    else{        
        const dataOdierna = new Date();        
        const dataNascita = new Date(fnascita.value);        
        let age = dataOdierna.getFullYear() - dataNascita.getFullYear();
        let diffMesi = dataOdierna.getMonth() - dataNascita.getMonth();
        let diffGiorni = dataOdierna.getDate() - dataNascita.getDate();    
        if(diffMesi < 0 || diffMesi == 0 && diffGiorni < 0){
            age--;
        }         
        if(age < 18 || age > 130){
            const errNascita = document.createElement('span');
            errNascita.classList.add('errorMsg');
            errNascita.textContent = 'Data nascita non valida';
            fnascita.after(errNascita);         
        }
    }
    if(fcontrollo.checked == false){
        const errControllo = document.createElement('span');                
        errControllo.classList.add('errorMsg');
        errControllo.textContent = 'Devi accettare le condizioni prima di proseguire';            
        fcontrollo.nextElementSibling.after(errControllo);         
    }     
    if(document.querySelectorAll('.errorMsg').length > 0){                                
        evt.preventDefault();
    }                   
});