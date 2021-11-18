import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";

describe('Testing 08-imp-exp.js', function () {
    test('should return a hero by id', () => {
        const id = 1;
        const hero = getHeroeById(id)

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('should return undefined by invalid id', () => {
        const id = 'invalid-id';
        const hero = getHeroeById(id)

        expect(hero).toBe(undefined)
    })

    test('should return DC heroes array', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)

        expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ])
    })

    test('should return Marvel heroes array', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)

        expect(heroes).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ])
        expect(heroes.length).toBe(2)
    })
});