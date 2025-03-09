const array = [1, 2, 3, 4, 5, 6];
let arrayInvertido = [];

for (let i = 6; i >= array.length; i--) {
    for (let j = 0; j <= arrayInvertido.length; j ++) {
        arrayInvertido [j] = array [i];
    };
}

console.log (arrayInvertido)

