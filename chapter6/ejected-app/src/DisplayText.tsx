import React, { FC, useState } from "react"

interface DisplayTextProps {
    getUserFullName: (username: string) => Promise<string>
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullName }) => {
    const [txt, setTxt] = useState("")
    const [msg, setMsg] = useState("")
    const [todos, setTodos] = useState<React.JSX.Element[]>()

    const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value)
    }

    const onShowMsgBtnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setMsg(`Welcome to React testing, ${await getUserFullName(txt)}`)
        setUserTodos()
    }

    const setUserTodos = async () => {
        const userResponse: Response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (userResponse.ok) {
            const users = await userResponse.json()
            const userByName = users.find((user: any) => {
                return user.username.toLowerCase() === txt.toLowerCase()
            })
            console.log("user by username", userByName)
            const todosResponse: Response = await fetch('https://jsonplaceholder.typicode.com/todos')
            if (todosResponse.ok) {
                const todos = await todosResponse.json()
                const userTodos = todos.filter((todo: any) => todo.userId === userByName.id)
                console.log("user todos", userTodos)
                const todoList = userTodos.map((todo: any) => <li key={todo.id}>{todo.title}</li>)
                setTodos(todoList)
            }
        }
    }

    return (
        <form>
            <div>
                <label>Please, enter your name</label>
            </div>
            <div>
                <input data-testid="user-input" value={txt} onChange={onTextInputChange} />
            </div>
            <div>
                <button data-testid="input-submit" onClick={onShowMsgBtnClick}>Show Message</button>
            </div>
            <div>
                <label data-testid="final-msg">{msg}</label>
            </div>
            <ul style={{ marginTop: '1rem', listStyleType: 'none' }}>{todos}</ul>
        </form>
    )
}

export default DisplayText