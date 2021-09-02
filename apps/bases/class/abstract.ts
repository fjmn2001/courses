(() => {

    abstract class Mutant {
        protected constructor(
            public name: string,
            public realName: string
        ) {
        }
    }

    class Xmen extends Mutant {
        constructor(name: string, realName: string) {
            super(name, realName);
        }

        saveWorld() {
            console.log('save world')
        }
    }

    class Villain extends Mutant {
        constructor(name: string, realName: string) {
            super(name, realName);
        }

        destroyWorld() {
            console.log('destroy world')
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan')
    const magneto: Villain = new Villain('Magneto', 'Magnus')

    console.log(wolverine, magneto)
    wolverine.saveWorld()
    magneto.destroyWorld()

    const printName = (character: Mutant) => {
        console.log(character.realName)
    }
    printName(wolverine)
    printName(magneto)

})()