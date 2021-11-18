import {getUser, getActiveUser} from "../../base/05-funciones";

describe('Test 05-funciones.js', function () {
    test('getUser must return an object', () => {
        const user = getUser()

        const otherUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        expect(user).toEqual(otherUser)
    })

    test('getUsuarioActivo must return an object', () => {
        const name = 'Francisco'
        const user = getActiveUser(name)

        const otherUser = {
            uid: 'ABC567',
            username: name
        };

        expect(user).toEqual(otherUser)
    })
});