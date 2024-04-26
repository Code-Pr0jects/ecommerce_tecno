/*controllo data nascita vuota
e se età non è compresa tra i 18 e i 130*/
export default function controlloNascita(fnascita){
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