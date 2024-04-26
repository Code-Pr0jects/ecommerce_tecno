//controllo checkbox non cliccata
export default function controlloCheckbox(fcontrollo){
    if(fcontrollo.checked == false){
        const errControllo = document.createElement('span');                
        errControllo.classList.add('errorMsg');
        errControllo.textContent = 'Devi accettare le condizioni prima di proseguire';            
        fcontrollo.nextElementSibling.after(errControllo);         
    }         
}