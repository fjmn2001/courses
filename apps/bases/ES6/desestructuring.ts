(() => {
    type Avenger = { nick: string; vision: string; ironman: string; active: boolean; power: number }

    const avengers: Avenger = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 1500
    }

    // const {power, vision} = avengers
    // console.log('desc.', power.toFixed(2), vision.toUpperCase())

    const printAvenger = ({power, vision, ...other}: Avenger) => {
        console.log(power, vision, other.nick)
    }
    printAvenger(avengers)

    const avengersArr: string[] = ['America', 'Ironman', 'Hulk']
    const [, ironman,] = avengersArr

    console.log(ironman)

})()