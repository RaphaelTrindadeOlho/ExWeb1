export function inverteArray (fila = [], size) {
    const arrayInverso = [];
    for (let i = size - 1; i >= 0; i--) {
        arrayInverso.push (fila [i]);
    }
    console.log (fila);
    console.log (arrayInverso);
}