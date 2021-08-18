((): void => {
    // store it in functions/functions.ts

    const hero: string = 'Flash'

    const makeName = (): string => {
        return hero;
    }

    const activateBatiSignal = (): string => {
        return 'Activated'
    }

    const heroName = makeName()

    console.log(makeName())
    console.log(activateBatiSignal())
    console.log(typeof activateBatiSignal)
})();

