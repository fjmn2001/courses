(() => {

    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    numbers.push(11)

    const villians: string[] = ['Red Omega', 'Other']

    console.log(numbers)
    villians.forEach(villian => console.log(villian.toUpperCase()))


})()