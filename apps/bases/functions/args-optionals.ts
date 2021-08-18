((): void => {
    // store it in args-optionals.ts

    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || ''}`
    }

    console.log(fullName('Francisco', 'Marcano'))
    console.log(fullName('Edith'))
})();

