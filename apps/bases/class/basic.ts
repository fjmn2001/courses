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

        public bio() {
            return `${this.name} (${this.team})`
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang')

    console.log(
        antman,
        Avenger.averageAge,
        antman.bio()
    )
})()