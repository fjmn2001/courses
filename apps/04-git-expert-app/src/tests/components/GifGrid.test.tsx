import {shallow} from "enzyme";
import GifGrid from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";
import {CustomGif} from "../../interfaces";

jest.mock('../../hooks/useFetchGifs')

describe('Testing <GifGrid/>', function () {
    test('should show <GifGrid/> right', () => {
        (useFetchGifs as jest.Mock).mockReturnValue({
            data: [],
            loading: true
        })

        const category = 'Samurai X';
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot()
    })

    test('should show gifs when loading is done', () => {
        const gifs: CustomGif[] = [{
            id: 'customId',
            title: 'Title',
            url: 'https://title.local'
        }];
        (useFetchGifs as jest.Mock).mockReturnValue({
            data: gifs,
            loading: false
        })

        const category = 'Samurai X';
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
});
