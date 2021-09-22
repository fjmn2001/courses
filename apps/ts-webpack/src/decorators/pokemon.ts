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

const checkValidaPokemonId = function () {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('Invalid Pokemon Id.')
            } else {
                return originalMethod(id)
            }
        }
    }
}

@closePrototype
@printToConsoleConditional(true)
export class Pokemon {
    constructor(
        public name: string,
        public publicApi: string = 'https://pokeapi.co'
    ) {
    }

    @checkValidaPokemonId()
    savePokemon(id: number) {
        console.log(`Pokemon saved ${id}`)
    }
}