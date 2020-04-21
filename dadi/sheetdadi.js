// chidere all'utente un numero comreso tra 0 e 6
var user_number = parseInt(prompt('Inserire un numero compreso tra 0 e 6'));
//console.log(user_number);

//generare un numero casuale compreso tra 0 e 6
var random_number = Math.floor(Math.random() * 6) + 1;
//console.log(random_number);

//condizioni
if(isNaN(user_number) || user_number <= 0 || user_number > 6) {
    var achievement = 'ERRORE!'
    //console.log('Numero errato!');
} else if (user_number > random_number) {
    var achievement = 'HAI VINTO!'
    //console.log('HAI VINTO!');
} else if (user_number < random_number) {
    var achievement = 'HAI PERSO!'
    //console.log('HAI PERSO!');
} else if (user_number = random_number) {
    var achievement = 'PAREGGIO!'
    //console.log('PAREGGIO!');
}

document.getElementById('chosen-number').innerHTML = user_number;
document.getElementById('random-number').innerHTML = random_number;
document.getElementById('result').innerHTML = achievement;
