const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE


// 1. Utilizzando un indice sull'array teachers, cambia il valore della 
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array.
const fourthTeacher = teachers [3];
console.log("Il quarto insegnante è: " + fourthTeacher);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick');
console.log("Il quinto insegnante è: " + teachers[4]);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher=teachers.splice(teachers.length - 1, 1)[0];
console.log("L'ultimo insegnante è: " + lastTeacher);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.splice(0, 1)[0];
console.log("Il primo insegnante è: " + firstTeacher);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.splice(teachers.length, 0, "Vanessa");
console.log("Ultimo insegnante aggiunto è: " + teachers[teachers.length - 1]);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;