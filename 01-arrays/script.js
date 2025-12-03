const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

let i = 0;

// 1. Utilizzando un indice sull'array teachers, cambia il valore della 
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array.
const fourthTeacher = teachers [3];
console.log("Il quarto insegnante è: " + fourthTeacher);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick');
console.log("Il quinto insegnante è: " + teachers[4]);

console.log(`array dopo aggiunta Patrick:`);
for (i=0; i<teachers.length; i++){
   console.log(`indice: ${i}, valore: ${teachers[i]}`);
}

// Alternativa diretta
teachers[4] = `Patrick-2`;
console.log("Il quinto insegnante è: " + teachers[4]);

console.log(`array dopo sostituzione Patrick con Patrick-2:`);
for (i=0; i<teachers.length; i++){
   console.log(`indice: ${i}, valore: ${teachers[i]}`);
}


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher=teachers.splice(teachers.length - 1, 1)[0];
console.log("L'ultimo insegnante è: " + lastTeacher);

console.log(`array dopo rimozione ultimo insegnante:`);
for (i=0; i<teachers.length; i++){
   console.log(`indice: ${i}, valore: ${teachers[i]}`);
}

// Alternativa con pop
const lastTeacher2 = teachers.pop();
console.log("L'ultimo insegnante è: " + lastTeacher2);

console.log(`array dopo ulteriore rimozione ultimo insegnante:`);
for (i=0; i<teachers.length; i++){
   console.log(`indice: ${i}, valore: ${teachers[i]}`);
}


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.splice(0, 1)[0];
console.log("Il primo insegnante è: " + firstTeacher);

console.log(`array dopo rimozione primo insegnante:`);
for (i=0; i<teachers.length; i++){
   console.log(`indice: ${i}, valore: ${teachers[i]}`);
}

// Alternativa con shift
const firstTeacher2 = teachers.shift();
console.log(`Il primo insegnante (metodo 2) è: ${firstTeacher2}`);

console.log(`array dopo ulteriore rimozione primo insegnante:`);
for (i=0; i<teachers.length; i++){
   console.log(`indice: ${i}, valore: ${teachers[i]}`);
}


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.splice(teachers.length, 0, "Vanessa");
console.log("Ultimo insegnante aggiunto è: " + teachers[teachers.length - 1]);

// Alternativa con push
teachers.push(`Vanessa-2`);
console.log(`Add insegnante ala fine con metodo2: ${teachers[teachers.length - 1]}`);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.splice(0, 0, "Sarah");
console.log("Il primo insegnante aggiunto è: " + teachers[0]);

// Alternativa con unshift
teachers.unshift(`Sarah-2`);
console.log(`Insegnante aggiunto all'inizio con metodo2: ${teachers[0]}`);


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(`L'indice di Lewis è: ${lewisIndex}`);

// Alternativa con For - senza usare indexOf
let lewisIndexAlt = -1;
for (i=0; i<teachers.length; i++){
  if (teachers[i] === `Lewis`){
    lewisIndexAlt = i;
    i = teachers.length; //end loop
  }
}

console.log(`L'indice di Lewis (metodo 2) è: ${lewisIndexAlt}`);


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log(`L'array è vuoto? ${isTeachersEmpty}`);

// Alternativa con For 
let contatore = 0;
for (i=0; i<teachers.length; i++){
  contatore++;
}
const isTeachersEmptyAlternative = contatore === 0;
console.log(`L'array è vuoto? (metodo alternativo) ${isTeachersEmptyAlternative}`);
console.log(`La dimensioni dell'array è: ${contatore}`);
