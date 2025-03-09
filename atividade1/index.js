import {subtrai} from "./subtrai.js";
import {soma} from "./soma.js";
import {dividir} from "./dividir.js";
import {multiplica} from "./multiplica.js";

const nume1 = 10;
const nume2 = 8;
const escolha = 1;

switch (escolha){
    case (1):
        console.log (subtrai (nume1,nume2));
        break;
    case (2):
        console.log (soma (nume1,nume2));
        break;
    case (3):
        console.log (dividir (nume1,nume2));  
        break;
    case (4):
        console.log (multiplica (nume1,nume2));
        break;
};


