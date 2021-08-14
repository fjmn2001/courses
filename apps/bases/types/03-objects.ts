(() => {
    const person = {
        firstName: 'Francisco',
        lastName: 'Marcano',
        age: 35,
        address: {
            country: 'Venezuela'
        }
    }

    const personTwo = {...person};
    personTwo.firstName = 'Other name';

    console.log(person);
    console.log(personTwo);
})()