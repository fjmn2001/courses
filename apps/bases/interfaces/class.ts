(() => {
    interface Xmen {
        name: string,
        realName: string,

        mutantPower(id: string): string
    }

    class Mutant implements Xmen {
        constructor(
            public name: string,
            public realName: string
        ) {
        }

        mutantPower(id: string): string {
            return "";
        }
    }

    console.log(Mutant)

})()