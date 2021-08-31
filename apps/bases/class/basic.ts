(() => {
    console.log('basic')

    class Avenger {
        static averageAge: number = 35

        constructor(
            private name: string,
            private team: string,
            private realName?: string
        ) {
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang')

    console.log(antman, Avenger.averageAge)
})()