import { cleanup, fireEvent, render, waitFor } from "@testing-library/react"
import DisplayText from "./DisplayText"

jest.mock("./UserTodos")

afterEach(cleanup)

describe("Test DisplayText", () => {
    const userFullName = 'John Tester'

    const getUserFullNameMock = (username: string): jest.Mock<Promise<string>, [username: string]> => {
        const promise = new Promise<string>((resolve, reject) => resolve(userFullName))

        const getUserFullName = jest.fn(
            async (username: string): Promise<string> => promise
        )

        return getUserFullName
    }

    it("renders without crashing", () => {
        const username = "testuser"
        const getUserFullName = getUserFullNameMock(username)
        const { baseElement } = render(<DisplayText getUserFullName={getUserFullName} />)
        console.log(baseElement.innerHTML)
        expect(baseElement).toBeInTheDocument()
    })
    it("matches snapshot", () => {
        const username = "testuser"
        const getUserFullName = getUserFullNameMock(username)
        const { baseElement } = render(<DisplayText getUserFullName={getUserFullName} />)
        expect(baseElement).toMatchSnapshot()
    })
    it("receives input text", () => {
        const username = "testuser"
        const getUserFullName = getUserFullNameMock(username)
        const { getByTestId } = render(<DisplayText getUserFullName={getUserFullName} />)
        const input = getByTestId("user-input")
        fireEvent.change(input, { target: { value: username } })
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue(username)
    })
    it("shows welcome message", async () => {
        const username = "testuser"
        const getUserFullName = getUserFullNameMock(username)
        const msg = `Welcome to React testing, ${userFullName}`
        const { getByTestId } = render(<DisplayText getUserFullName={getUserFullName} />)
        const input = getByTestId("user-input")
        const label = getByTestId("final-msg")
        expect(label).toBeInTheDocument()
        fireEvent.change(input, { target: { value: username } })
        const btn = getByTestId("input-submit")
        fireEvent.click(btn)
        await waitFor(() => expect(label.innerHTML).toBe(msg))
    })
})