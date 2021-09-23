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

const readonly = function (isWritable: boolean = false): Function {
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                return 'Francisco'
            },
            set(this, value) {
                Object.defineProperty(this, propertyKey, {
                    value,
                    writable: isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor
    }
}

@closePrototype
@printToConsoleConditional(true)
export class Pokemon {

    @readonly(true)
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string,
        publicApi: string = 'https://pokeapi.co'
    ) {
        this.publicApi = publicApi;
    }

    @checkValidaPokemonId()
    savePokemon(id: number) {
        console.log(`Pokemon saved ${id}`)
    }
}