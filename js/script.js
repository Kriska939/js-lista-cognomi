/*
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

-------------------------------------

STEPS:

1. Crea array cognomi
2. Chiedi all'utente il suo cognome (+ validazione)
3. Aggiungi il nuovo cognome all'array
4. Ordina l'array in ordine alfabetico e stampa la lista di cognomi in console/pagina
5. Stampa la posizione "umana" del cognome utente aggiunto in lista

*/

// Step 1 - Crea array cognomi

var surnamesList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

// Step 2 - Chiedi all'utente il suo cognome (+ validazione)

var surnameUser;

do {
    surnameUser = prompt("Inserisci il tuo cognome");
}
// ripeti "do" finché lascio surnameUser vuoto, oppure clicco annulla:
while (!surnameUser || surnameUser.trim() === "");

// tolgo comunque eventuali spazi all'input fornito dall'utente: 

surnameUser = surnameUser.trim();

// Step 3 - Aggiungi il nuovo cognome all'array

surnamesList.push(surnameUser);

// Step 4 - Ordina l'array in ordine alfabetico e stampa in console

surnamesList.sort();
console.log(surnamesList);

// stampa in pagina

var finalList = document.getElementById("result");
var listContent = "";

for (i = 0; i < surnamesList.length; i++) {
    listContent += "<li>" + surnamesList[i] + "</li>"
}

finalList.innerHTML = listContent;

// Step 5 - Stampa la posizione "umana" del cognome utente aggiunto in lista

var lastMessage = document.getElementById("lastMessage");

lastMessage.innerText = "Il cognome inserito è in posizione: " + (surnamesList.indexOf(surnameUser) + 1);
