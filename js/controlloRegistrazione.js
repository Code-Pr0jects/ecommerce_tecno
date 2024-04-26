//controllo se nome è vuoto
function controlloNome(fnome){
    if(fnome.value == ''){        
        const errNome = document.createElement('span');                
        errNome.classList.add('errorMsg');
        errNome.textContent = 'Campo nome obbligatorio';
        fnome.after(errNome);                 
    }
}

//controllo se cognome è vuoto
function controlloCognome(fcognome){
    if(fcognome.value == ''){                
        const errCognome = document.createElement('span');                
        errCognome.classList.add('errorMsg');
        errCognome.textContent = 'Campo cognome obbligatorio';            
        fcognome.after(errCognome);        
    }        
}

/*controllo se email è vuota oppure se rispetta
la regex passata come parametro*/
function controlloEmail(femail, regex){
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

/*controllo se password è vuota oppure se rispetta
la regex passata come parametro*/
function controlloPassword(fpassword, regex){
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

/*controllo se indirizzo è vuoto oppure se rispetta
la regex passata come parametro*/
function controlloIndirizzo(findirizzo, regex){
    if(findirizzo.value == '' || regex.test(findirizzo.value) == false){                
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
}

/*controllo data nascita vuota
e se età non è compresa tra i 18 e i 130*/
function controlloNascita(fnascita){
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
}

//controllo checkbox non cliccata
function controlloCheckbox(fcontrollo){
    if(fcontrollo.checked == false){
        const errControllo = document.createElement('span');                
        errControllo.classList.add('errorMsg');
        errControllo.textContent = 'Devi accettare le condizioni prima di proseguire';            
        fcontrollo.nextElementSibling.after(errControllo);         
    }         
}

//eliminazione di tutti i messaggi di errore
function cancellaMessaggiErrore(errorMsg){    
    for(let i = 0; i < errorMsg.length; i++){            
        errorMsg[i].remove();
    }            
}

//selezionamento form e relativi elementi
const formRegistrazione = document.querySelector('#formRegistrazione');
const fnome = document.querySelector('#fnome');
const fcognome = document.querySelector('#fcognome');
const femail = document.querySelector('#femail');
const fpassword = document.querySelector('#fpassword');
const findirizzo = document.querySelector('#findirizzo');
const fnascita = document.querySelector('#fnascita');
const fcontrollo = document.querySelector('#fcontrollo');

formRegistrazione.addEventListener('submit', function(evt){                                
    //seleziona e cancella eventuali vecchi messaggi di errore
    const errorMsg = document.querySelectorAll('.errorMsg');            
    cancellaMessaggiErrore(errorMsg);                
    
    //validazione form lato client -> stampa messaggi errore se input non valido
    controlloNome(fnome);
    controlloCognome(fcognome);
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    controlloEmail(femail, regexEmail);    
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;
    controlloPassword(fpassword, regexPassword);        
    const regexIndirizzo = /^(Via|via)\s(?:[a-zA-Z]+\s?)+,\s[1-9]\d?$/;        
    controlloIndirizzo(findirizzo, regexIndirizzo);        
    controlloNascita(fnascita);
    controlloCheckbox(fcontrollo);
    
    //se ci sono messaggi di errore non invia form
    if(document.querySelectorAll('.errorMsg').length > 0){                                
        evt.preventDefault();
    }                       
});