/******************************
        GENERAL INFO
******************************/

// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 2. Creare un array di oggetti di studenti. Cliccare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// 3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.


/***************************
        PUNTO  1 
***************************/

// Creazione oggetto con info studente
var studente = {
    nome: "Cristina",
    cognome: "D'Amico",
    eta: 27,
};

// Stampare tutte le proprietà dell'oggetto
for ( var key in studente ) {
    console.log(studente[key]);
}


/***************************
        PUNTO  2 
***************************/
// Creare un array di oggetti di studenti
var studenti = [
    {
        nome: "Dante",
        cognome: "Alighieri",
        eta: 42,
    },
    {
        nome: "Giacomo",
        cognome: "Leopardi",
        eta: 37,
    },
    {
        nome: "Alessandro",
        cognome: "Manzoni",
        eta: 23,
    },
];

// Cliccare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for ( var i = 0; i < studenti.length; i++ ) {
    console.log(studenti[i]);
    console.log('Studente: ' + studenti[i].nome + ' ' + studenti[i].cognome);
}

/***************************
        PUNTO  3 
***************************/
// Oggetto utente
var utente = {};

// Richiesta all'utente tramite prompt
var nome = prompt('Inserisci il tuo nome.');
utente.nome= nome;

var cognome = prompt('Inserisci il tuo cognome.');
utente.cognome = cognome;

var eta = parseInt( prompt('Inserisci la tua età.') );
utente.eta = eta;

console.log(utente);

// Inserimento nell'arrey
studenti.push(utente);
console.log(studenti);


