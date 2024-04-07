import React, { FC, useState } from "react"

interface DisplayTextProps {
    getUserFullName: (username: string) => Promise<string>
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullName }) => {
    const [txt, setTxt] = useState("")
    const [msg, setMsg] = useState("")

    const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value)
    }

    const onShowMsgBtnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setMsg(`Welcome to React testing, ${await getUserFullName(txt)}`)
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
        </form>
    )
}

export default DisplayText