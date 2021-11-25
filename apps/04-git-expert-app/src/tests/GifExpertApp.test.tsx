import {shallow} from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Testing GifExpertApp.tsx', function () {
    test('should show <GifExpertApp/> right', () => {
        const wrapper = shallow(<GifExpertApp/>)

        expect(wrapper).toMatchSnapshot()
    })

    test('should some a list of categories', () => {
        const wrapper = shallow(<GifExpertApp defaultCategories={['Samurai X', 'Ninja']}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(2)
    })
});
