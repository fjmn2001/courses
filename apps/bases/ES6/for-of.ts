(() => {
    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armor suit'
    }

    const avenger: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, avenger]

    for (const a of avengers) {
        console.log(a.name, a.weapon)
    }
})()