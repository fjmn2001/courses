import {getHeroeByIdAsync} from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Testing 09-promesas.js', function () {
    test('should return an hero with async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual(heroes[0])
                done()
            })
    })

    test('should return an hero not found error with async', (done) => {
        const id = 'invalid-id';
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`Hero not found.`)
                done()
            })
    })
});