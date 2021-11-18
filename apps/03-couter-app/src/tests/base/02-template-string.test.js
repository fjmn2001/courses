import {getSaludo} from "../../base/02-template-string";

describe('Testing 02-template-string.js', () => {
    test('getSaludo must return Hola Francisco', () => {
        const name = 'Francisco'

        const greeting = getSaludo(name)

        expect(greeting).toBe(`Hola Francisco`)
    })

    test('getSaludo must return Hola Coca Cola if there is no arguments', () => {
        const greeting = getSaludo()

        expect(greeting).toBe(`Hola Coca Cola`)
    })
})