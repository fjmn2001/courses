(() => {

    const makeError = (message: string): (never | number) => {
        if (false) {
            throw new Error(message)
        }
        return 1;
    }

    const b = makeError('Wohooooop!')

    console.log(b)

})()