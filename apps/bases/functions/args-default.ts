((): void => {
    // store it in args-default.ts

    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase()
        }

        return `${firstName} ${lastName || ''}`
    }

    console.log(fullName('Francisco', 'Marcano', true))
    console.log(fullName('Edith'))
})();

