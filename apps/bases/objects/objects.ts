((): void => {
    // folder => objects
    // store it in objects.ts

    let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['fast', 'time']
    }

    let superman: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Clark Kent',
        age: 60,
        powers: ['fast', 'time']
    }


    console.log(flash, superman)
})();

