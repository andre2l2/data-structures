import { SetElements } from './set';

// União
const setA = new SetElements();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new SetElements();
setB.add(3);
setB.add(4);
setB.add(5);

console.log('A união entre A e B é:', setA.union(setB));
/*
 * A união entre A e B é: [ 1, 2, 3, 4, 5 ]
 *
 * Repare que o 3 se repede tanto em setA quanto em setB
 */

// Intersecção
const setC = new SetElements();
setC.add(1);
setC.add(2);
setC.add(3);
setC.add(4);
const setD = new SetElements();
setD.add(3);
setD.add(4);
setD.add(5);

console.log('A intersecção entre C e D é:', setC.intersection(setD));
/*
 * A intersecção entre C e D é: [ 3, 4 ]
 *
 * Na intersecções apenas os valores que estão entre ambos os conjuntos são
 * retornados
 */

// Diferença
const setE = new SetElements();
setE.add(1);
setE.add(2);
setE.add(3);
const setF = new SetElements();
setF.add(2);
setF.add(3);
setF.add(4);

console.log('A diferença entre E e F é:', setE.deiference(setF));
/*
 * A diferença entre A e B é: [ 1 ]
 *
 * A diferença retrona apenas o que tiver em E e não em F
 */

// Subconjunto
const setG = new SetElements();
setG.add(1);
setG.add(2);
const setH = new SetElements();
setH.add(1);
setH.add(2);
setH.add(3);
const setI = new SetElements();
setI.add(2);
setI.add(3);

console.log('É um subconjunto de G e F?', setG.isSubSetOf(setH));
console.log('É um subconjunto de G e I?', setG.isSubSetOf(setI));
/*
 * É um subconjunto de G e F? true
 * É um subconjunto de G e I? false
 *
 */
