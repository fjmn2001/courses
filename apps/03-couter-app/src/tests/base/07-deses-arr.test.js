import {returnArray} from "../../base/07-deses-arr";

describe('Testing desc', function () {
    test('should return a string and a number', () => {
        const [string, number] = returnArray()

        expect(string).toEqual('ABC')
        expect(typeof string).toBe('string')

        expect(number).toEqual(123)
        expect(typeof number).toBe('number')
    })
});