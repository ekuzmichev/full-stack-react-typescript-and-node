import { fireEvent, render } from "@testing-library/react"
import DisplayText from "./DisplayText"

describe("Test DisplayText", () => {
    it("renders without crashing", () => {
        const { baseElement } = render(<DisplayText />)
        console.log(baseElement.innerHTML)
        expect(baseElement).toBeInTheDocument()
    })
    it("matches snapshot", () => {
        const { baseElement } = render(<DisplayText />)
        expect(baseElement).toMatchSnapshot()
    })
    it("receives input text", () => {
        const testuser = "testuser"
        const { getByTestId } = render(<DisplayText />)
        const input = getByTestId("user-input")
        fireEvent.change(input, { target: { value: testuser } })
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue(testuser)
    })
    it("shows welcome message", () => {
        const testuser = "testuser"
        const msg = `Welcome to React testing, ${testuser}`
        const { getByTestId } = render(<DisplayText />)
        const input = getByTestId("user-input")
        const label = getByTestId("final-msg")
        fireEvent.change(input, { target: { value: testuser } })
        const btn = getByTestId("input-submit")
        fireEvent.click(btn)
        expect(label).toBeInTheDocument()
        expect(label.innerHTML).toBe(msg)
    })
})