// inmutabilidad

const arrayOriginal = [
  {},
  {},
  {},
  {},
];

Object.freeze(arrayOriginal);

//Para hacer un clo/copia de un objeto/array (NO FUNCIONA s adentro hay otros objetos)
const copiaDelArrayOrigial = [...arrayOriginal];
// spread o rest operator

/* metodos mutan el array original
 push, pop, unshift, shift, splice*/


const miObjeto = {};

Object.freeze(miObjeto)

const otroObjeto = {...miObjeto}
