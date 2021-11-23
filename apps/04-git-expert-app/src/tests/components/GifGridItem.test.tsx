import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Testing GifGridItem', () => {
    test('should show the component right', () => {
        const gif = {id: 'custom-id', title: 'Custom title', url: 'https://custom-url'}
        const wrapper = shallow(<GifGridItem {...gif}/>)

        expect(wrapper).toMatchSnapshot()
    })
})