((): void => {
    // store it in args-required.ts

    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`
    }

    console.log(fullName('Francisco', 'Marcano'))
})();

