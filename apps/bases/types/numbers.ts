(() => {
    let avengers: number = 1
    const villians = 20

    console.log({avengers})
    console.log({villians})

    if(avengers < villians){
        console.log('oppsss!')
    } else {
        console.log('wohooo')
    }

    avengers = 123
    console.log({avengers})

    avengers = Number('55A')
    console.log({avengers})
})()