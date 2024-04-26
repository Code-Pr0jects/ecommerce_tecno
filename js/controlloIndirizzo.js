/*controllo se indirizzo è vuoto oppure se rispetta
la regex passata come parametro*/
export default function controlloIndirizzo(findirizzo, regex){
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