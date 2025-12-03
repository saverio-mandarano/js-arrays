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
const reversedTeachers = teachers.slice().reverse(); //ATTENZIONE -- slice()
console.log(`Array invertito con reverse():`);
for ( i=0; i<teachers.length; i++){
  console.log(`indice: ${i}, valore: ${reversedTeachers[i]}`);
}

console.log(`Array originale per verifica che slice() abbia funzionato:`);
for ( i=0; i< teachers.length; i++){
  console.log(`indice: ${i}, valore:${teachers[i]}`);
}

// Alternativa senza usare reverse() - sfruttando un ciclo For
const reversedTeachersAlternative = [];

for ( i=teachers.length - 1; i>=0; i--){
  reversedTeachersAlternative.push(teachers[i]);
}

console.log(`Array invertito:`)
for ( i=0; i < reversedTeachersAlternative.length; i++){
  console.log(reversedTeachersAlternative[i]);
}

// Terza alternativa sfruttando unshift anzichè push
const reversedTeachersAlternative2 = [];

for (let i = 0; i < teachers.length; i++) {
  reversedTeachersAlternative2.unshift(teachers[i]);
}

console.log(reversedTeachersAlternative2);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
const longNamesAlternative = [];

for ( i=0; i<teachers.length; i++){
  if(teachers[i].length >= 5){
    longNames.push(teachers[i]);
    
    // Alternativa
    longNamesAlternative.splice(longNamesAlternative.length, 0, teachers[i]);
  }
}

console.log(`Insegnati con un nome di lunghazza >= 5 caratteri: `);
for ( i=0; i<longNames.length; i++){
  console.log(`indice: ${i}, valore: ${longNames[i]}`);
}
console.log(`metodo alternativo: `);
for ( i=0; i<longNamesAlternative.length; i++){
  console.log(`indice: ${i}, valore: ${longNamesAlternative[i]}`);
}


// 3. Rimuovi 'Ed' dall'array teachers
// const indexOfEd = teachers.indexOf(`Ed`)

if (indexOfEd !== -1) {      //check - Ed esiste ?    
  console.log(`Indice di Ed: ${indexOfEd}`);
  teachers.splice(indexOfEd, 1); 
  console.log(`Array dopo la rimozione di Ed: `);
  for (i=0; i<teachers.length; i++){
    console.log(`indice: ${i}, valore: ${teachers[i]}`);
  }
}
else {
  console.log(`Ed non trovato nell'array.`);
}

// Alternativa senza usare indexOf
let indexOfAlternative = -1;

for (i=0; i<teachers.length; i++){
  if (teachers[i] === `Ed`){
    indexOfAlternative = i;
    i = teachers.length; //end loop
  }
}

if (indexOfAlternative !== -1) {      //check - Ed esiste ?    
  console.log(`Indice di Ed: ${indexOfAlternative}`);
  teachers.splice(indexOfAlternative, 1); 
  console.log(`Array dopo la rimozione con metodo2: `);
  for (i=0; i<teachers.length; i++){
    console.log(`indice: ${i}, valore: ${teachers[i]}`);
  }
}
else {
  console.log(`Ed non trovato nell'array.`);
}


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio') !== -1;
console.log(`Fabio è presente ? : ${isFabioPresent} `);

// Alternativa con ciclo For, senza usare indexOf
let isFabioPresentAlternative = false;

for (i=0; i<teachers.length; i++){
  if (teachers[i] === `Fabio`){
    isFabioPresentAlternative = true;
    i = teachers.length; //end loop
  }
}

console.log(`Fabio è presente ? : ${isFabioPresentAlternative} `);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole
//e salvala nella variabile teachersString
let teachersString = ``;
let teachersStringAlternative = ``;

for ( i=0; i<teachers.length; i++){
  if (i === 0) {
    teachersString += `${teachers[i]}`;
  }
  else {
    teachersString += `, ${teachers[i]}`;
  }

  // Alternativa

  teachersStringAlternative += teachers[i] 
  if (i < teachers.length -1) {
    teachersStringAlternative += `, `;
  }
}

console.log(`Stampo la stringa degli insegnanti: ${teachersString}`);
console.log(`Stampo la stringa degli insegnanti alternativa: ${teachersStringAlternative}`);