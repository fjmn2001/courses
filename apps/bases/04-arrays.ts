(() => {
    const arrayOne = [1, 2, 3, 4]
    arrayOne.push(5)

    const arrayTwo = [...arrayOne]
    arrayTwo.push(6)

    const arrayThree = arrayTwo.map(number => number * 2)
    arrayThree.push(14)

    console.log(arrayOne, arrayTwo, arrayThree);
})()