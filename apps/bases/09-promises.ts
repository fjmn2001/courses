((): void => {
    // folder => objects
    // store it in union-types.ts

    const getHeroById = (id: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const hero = {id: '1'}
                resolve(hero)
            }, 1000)
        })
    }

    console.log(getHeroById('1').then(h => console.log(h)))

})();
