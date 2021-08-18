(() => {

    const characters: string[] = ['Goku', 'Vegeta', 'Trunks']
    const [goku, , trunk, goten = 'it does not have value'] = characters;

    const returnArray = (): [string, number] => {
        return ['ABC', 123]
    }
    const [letters, numbers] = returnArray()

    console.log(goku, trunk, goten)
    console.log(letters, numbers)
})()