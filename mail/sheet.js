// chiedere email utente
var user_email = prompt('Inserire email utente')
//console.log(user_email);

//creare array con database email
var email_list = ['andrea.rossi@gmail.com', 'marco.verdi@gmail.com', 'claudio75@hotmail.it', 'carlobianchi@gmail.com', 'max84@live.it']
//console.log(email_list);

//impostare variabile e utilizzare il for per verificare se l'email è nel database
var found_email = false;

for (var i = 0; i < email_list.length; i++) {

    if (user_email == email_list[i]) {
        found_email = true;
    }
}

//finita la verifica generare messaggio appropriato
if(found_email == true) {
    var result = 'Accesso Consentito';
    //console.log('sei in lista');
} else {
    var result = 'Accesso Negato';
    //console.log('non sei in lista');
}

document.getElementById('email').innerHTML = user_email;
document.getElementById('access').innerHTML = result;
