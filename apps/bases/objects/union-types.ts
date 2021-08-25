((): void => {
    // folder => objects
    // store it in union-types.ts

    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    };

    let myCustomVariable: string | number | Hero = 'Francisco'
    console.log(typeof myCustomVariable)

    myCustomVariable = 20
    console.log(typeof myCustomVariable)

    myCustomVariable = {
        name: 'Barry Allen',
        age: 24,
        powers: ['fast', 'time']
    }
    console.log(typeof myCustomVariable)
    
})();

