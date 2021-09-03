(() => {

    interface Client {
        name: string
        age?: number,
        address?: Address,

        fullAddress(id: string): void
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Francisco',
        age: 25,
        address: {
            id: 125,
            zip: 'ddd',
            city: 'Kioto'
        },
        fullAddress(id: string) {
            console.log(id)
        }
    }

    //console.log(client)


})()