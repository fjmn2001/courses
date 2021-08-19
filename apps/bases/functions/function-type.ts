((): void => {
    // store it in function-type.ts

    const addNumbers = (a: number, b: number): number => a + b
    const greet = (name: string): string => `Hello ${name}`
    const saveTheWorld = (): string => `The world is saved`

    let myFunction: (a: number, b: number) => number;

    myFunction = addNumbers
    //myFunction = greet

    console.log(
        addNumbers(1, 2),
        greet('Francisco'),
        saveTheWorld(),
        myFunction(3, 4)
    )
})();

