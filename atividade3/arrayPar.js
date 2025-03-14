export function arrayPar (fila = [], size) {
  for (let i = 2; i <= size; i++) {
    if (i % 2 == 0) {
      fila.push (i);
    }
  }
  console.log (fila);
};