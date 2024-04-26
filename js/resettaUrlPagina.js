//reset url per eliminare parametro GET 
let url = window.location.href.split('?')[0];
window.history.replaceState({}, document.title, url);