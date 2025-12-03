const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

let i=0;

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.slice().reverse(); //ATTENZIONE -- slice() -- per non modificare l'array originale
for ( i=0; i<teachers.length; i++){
  console.log("Array invertito: " + reversedTeachers[i]);
}


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for ( i=0; i<teachers.length; i++){
  if(teachers[i].length >= 5){
    longNames.splice(longNames.length, 0, teachers[i]);
  }
}

console.log(`Insegnati con un nome di lunghazza >= 5 caratteri: `);
for ( i=0; i<longNames.length; i++){
  console.log("Array indice: " + i + " valore: " + longNames[i]);
}


// 3. Rimuovi 'Ed' dall'array teachers
const indexOfEd = teachers.indexOf(`Ed`)
console.log("Indice di Ed: " + indexOfEd);

if (indexOfEd !== -1) {      //check - Ed esiste ?    
  teachers.splice(indexOfEd, 1); 
}
else {
  console.log(`Ed non trovato nell'array.`);
}

console.log("Array dopo la rimozione di Ed: ");
for (i=0; i<teachers.length; i++){
  console.log("Array indice: " + i + " valore: " + teachers[i]);
}

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio') !== -1;
console.log(`Fabio è presente ? : ${isFabioPresent} `);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole
//e salvala nella variabile teachersString
let teachersString = `${teachers[0]}`;

for ( i=1; i<teachers.length; i++){
    teachersString += `, ${teachers[i]}`;
}

console.log(`Stampo la stringa degli insegnanti: ${teachersString}`);