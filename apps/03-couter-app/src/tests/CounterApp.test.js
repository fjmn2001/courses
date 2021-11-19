import {shallow} from "enzyme";
import CounterApp from "../CounterApp";

describe('Testing CounterApp.js', function () {
    test(`should show <CounterApp/> right`, () => {
        const wrapper = shallow(<CounterApp/>)

        expect(wrapper).toMatchSnapshot()
    })

    test(`should show 100 like default value`, () => {
        const wrapper = shallow(<CounterApp value={100}/>)

        const counterText = wrapper.find(`h2`).text().trim();

        expect(counterText).toBe(`100`)
    })

    test(`should increment with +1 button`, () => {
        const wrapper = shallow(<CounterApp/>)
        wrapper.find(`button`).at(0).simulate('click');

        const counterText = wrapper.find(`h2`).text().trim();

        expect(counterText).toBe(`1`)
    })

    test(`should decrement with -1 button`, () => {
        const wrapper = shallow(<CounterApp/>)
        wrapper.find(`button`).at(2).simulate('click');

        const counterText = wrapper.find(`h2`).text().trim();

        expect(counterText).toBe(`-1`)
    })

    test(`should reset with reset button`, () => {
        const wrapper = shallow(<CounterApp value={100}/>)
        wrapper.find(`button`).at(0).simulate('click');
        wrapper.find(`button`).at(1).simulate('click');

        const counterText = wrapper.find(`h2`).text().trim();

        expect(counterText).toBe(`100`)
    })
});