import {render} from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('Testing FirstApp.js', function () {
    test('should show a greeting: "Hi Francisco!"', () => {
        const greeting = `Hi Francisco!`
        const {getByText} = render(<FirstApp greeting={greeting}/>)

        expect(getByText(greeting)).toBeInTheDocument()
    })
});