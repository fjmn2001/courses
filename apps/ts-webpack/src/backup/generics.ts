import {genericFunction} from "../generics/generics";
import {Hero, Villain} from "../interfaces";
//
// printObject(1233)
//
// console.log(genericFunction(3.1416).toFixed(2))
// console.log(genericFunction('3.1416').toUpperCase())
//
// console.log(genericFunctionArrow(3.1416).toFixed(2))
// console.log(genericFunctionArrow('3.1416').toUpperCase())

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade',
    dangerLevel: 130
}

console.log(genericFunction<Hero>(deadpool).realName)
console.log(genericFunction<Villain>(deadpool).dangerLevel)