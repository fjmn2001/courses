(() => {
    type Person = {
        name: string
        age: number,
        codeName: string,
        power: string | undefined
    }

    const person: Person = {
        name: 'Tony',
        age: 45,
        codeName: 'Ironman',
        power: undefined
    }

    const {name, age, codeName} = person

    console.log(person.name)
    console.log(person.age)
    console.log(person.codeName)

    console.log(name, age, codeName)

    const createHero = ({name, age, codeName, power}: Person) => ({
        id: 123,
        name,
        age,
        codeName,
        power
    })

    console.log(createHero(person))
})()