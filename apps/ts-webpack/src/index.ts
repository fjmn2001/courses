import {Pokemon} from "./decorators/pokemon";


const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName = 'ddd';

console.log(charmander)

// charmander.savePokemon(5000)