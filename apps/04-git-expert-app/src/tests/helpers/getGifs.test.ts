import {getGifs} from "../../helpers/getGifs";

describe('Testing getGifs fetch', function () {
    test('should get 10 items', async () => {
        const gifs = await getGifs('Samurai X')

        expect(gifs.length).toBe(10)
    })

    test('should get 0 items when category is empty', async () => {
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)
    })
});
