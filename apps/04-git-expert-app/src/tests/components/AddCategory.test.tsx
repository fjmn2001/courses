import {shallow} from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Testing <AddCategory/>', function () {

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('should show <AddCategory/> right', () => {
        const setCategories = () => true;
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

        expect(wrapper).toMatchSnapshot()
    })

    test('should update the input text', () => {
        const setCategories = () => true;
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>)
        const input = wrapper.find('input')
        const value = 'Hi there!';

        input.simulate('change', {target: {value}})

        expect(wrapper.find('input').prop('value')).toBe(value)
    })

    test('should not send the form when input is empty', () => {
        const setCategories = jest.fn();
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>)
        const form = wrapper.find('form')

        form.simulate('submit', {
            preventDefault() {
            }
        })

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should send the form and clear the input text', () => {
        const setCategories = jest.fn();
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

        const input = wrapper.find('input')
        const value = 'Hi there!';
        input.simulate('change', {target: {value}})

        const form = wrapper.find('form')
        form.simulate('submit', {
            preventDefault() {
            }
        })

        expect(setCategories).toHaveBeenCalled()
        expect(wrapper.find('input').prop('value')).toBe('')
    })
});
