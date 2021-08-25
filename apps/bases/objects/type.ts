((): void => {
    // folder => objects
    // store it in type.ts

    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    };

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['fast', 'time']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['fast', 'time'],
        getName: () => superman.name
    }


    console.log(flash, superman)
})();

