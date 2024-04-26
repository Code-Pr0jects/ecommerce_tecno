//importa funzioni
import controlloNome from "./controlloNome.js";
import controlloCognome from "./controlloCognome.js";
import controlloEmail from "./controlloEmail.js";
import controlloPassword from "./controlloPassword.js";
import controlloIndirizzo from "./controlloIndirizzo.js";
import controlloNascita from "./controlloNascita.js";
import controlloCheckbox from "./controlloCheckbox.js";
import cancellaMessaggiErrore from "./cancellaMessaggiErrore.js";

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