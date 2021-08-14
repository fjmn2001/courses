(() => {
    const greet = (name: string) => `Hello ${name}`
    const name = 'Francisco';

    const user = () => ({uid: 'qwerty'})

    type Hero = {
        id: Number
        name: String
    }

    const heroes: Array<Hero> = [
        {id: 1, name: 'Batman'},
        {id: 2, name: 'Superman'}
    ]
    const existHero = (id: number): boolean => {
        return heroes.some(h => h.id === id)
    }

    console.log(greet(name))
    console.log(user())
    console.log(existHero(1))
})()