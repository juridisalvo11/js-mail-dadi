// chiedere email utente
var email_utente = prompt('Inserire email utente')
console.log(email_utente);

//creare array con lista email
var email_consentite = ['andrea.rossi@gmail.com', 'marco.verdi@gmail.com', 'claudio75@hotmail.it']
console.log(email_consentite);

//genera messaggio appropriato

if (email_utente == email_consentite[0] || email_utente == email_consentite[1] || email_utente == email_consentite[2]) {
    console.log('sei in lista');
} else {
    console.log('non sei in lista');
}
