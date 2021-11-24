import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Testing GifGridItem', () => {
    test('should show the component right', () => {
        const gif = {id: 'custom-id', title: 'Custom title', url: 'https://custom-url'}
        const wrapper = shallow(<GifGridItem {...gif}/>)

        expect(wrapper).toMatchSnapshot()
    })

    test('should have a paragraph with the title', () => {
        const gif = {id: 'custom-id', title: 'Custom title', url: 'https://custom-url'}
        const wrapper = shallow(<GifGridItem {...gif}/>)

        const title = wrapper.find('p')

        expect(title.text().trim()).toBe(gif.title)
    })

    test('should have image and alt like the props', () => {
        const gif = {id: 'custom-id', title: 'Custom title', url: 'https://custom-url'}
        const wrapper = shallow(<GifGridItem {...gif}/>)

        const img = wrapper.find('img')

        expect(img.prop('src')).toBe(gif.url)
        expect(img.prop('alt')).toBe(gif.title)
    })

    test('should have a div with fadeIn className', () => {
        const gif = {id: 'custom-id', title: 'Custom title', url: 'https://custom-url'}
        const wrapper = shallow(<GifGridItem {...gif}/>)

        const div = wrapper.find('div')

        expect(div.hasClass('animate__fadeIn')).toBe(true)
    })
})