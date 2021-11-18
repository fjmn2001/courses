import {shallow} from "enzyme";
import FirstApp from "../FirstApp";

describe('Testing FirstApp.js', function () {
    // test('should show a greeting: "Hi Francisco!"', () => {
    //     const greeting = `Hi Francisco!`
    //     const {getByText} = render(<FirstApp greeting={greeting}/>)
    //
    //     expect(getByText(greeting)).toBeInTheDocument()
    // })

    test('should show <FirstApp/> right', () => {
        const greeting = `Hi there!`
        const wrapper = shallow(<FirstApp greeting={greeting}/>)

        expect(wrapper).toMatchSnapshot()
    })
});