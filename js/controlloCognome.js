//controllo se cognome è vuoto
export default function controlloCognome(fcognome){
    if(fcognome.value == ''){                
        const errCognome = document.createElement('span');                
        errCognome.classList.add('errorMsg');
        errCognome.textContent = 'Campo cognome obbligatorio';            
        fcognome.after(errCognome);        
    }        
}