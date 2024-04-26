//controllo se nome è vuoto
export default function controlloNome(fnome){
    if(fnome.value == ''){        
        const errNome = document.createElement('span');                
        errNome.classList.add('errorMsg');
        errNome.textContent = 'Campo nome obbligatorio';
        fnome.after(errNome);                 
    }
}