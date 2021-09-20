function printToConsole(constructor: Function) {
    console.log(constructor)
}

const printToConsoleConditional = (mustPrint: boolean): Function => {
    if (mustPrint) {
        return printToConsole
    }

    return () => {
    }
}

const closePrototype = function (constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@closePrototype
@printToConsoleConditional(true)
export class Pokemon {
    constructor(
        public name: string,
        public publicApi: string = 'https://pokeapi.co'
    ) {
    }
}