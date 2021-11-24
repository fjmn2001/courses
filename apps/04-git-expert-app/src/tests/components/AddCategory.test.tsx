import {shallow} from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Testing <AddCategory/>', function () {
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
});
