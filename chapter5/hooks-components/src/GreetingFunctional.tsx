import React from "react";

interface GreetingProps {
    enteredName: string;
    message: string;
    greetingDispatcher: React.Dispatch<{ type: string, payload: string }>
}

export default function Greeting(props: GreetingProps) {
    console.log("Rendering Greeting")

    const onNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.greetingDispatcher({ type: "enteredName", payload: e.target.value })
        props.greetingDispatcher({ type: "message", payload: e.target.value })
    }

    return (
        <div>
            <input value={props.enteredName} onChange={onNameInputChange} />
            <div>{props.message}</div>
        </div>
    )
}