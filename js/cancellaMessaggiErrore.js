//eliminazione di tutti i messaggi di errore
export default function cancellaMessaggiErrore(errorMsg){    
    for(let i = 0; i < errorMsg.length; i++){            
        errorMsg[i].remove();
    }            
}