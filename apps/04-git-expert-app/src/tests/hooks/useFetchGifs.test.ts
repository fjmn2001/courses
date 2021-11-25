import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'

describe('Testing useFetchGifs.ts', function () {
    test('should return the initial state', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Samurai X'))
        const {data, loading} = result.current

        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('should return an images array and loading in false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Samurai X'))
        await waitForNextUpdate()

        const {data, loading} = result.current

        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })
});
