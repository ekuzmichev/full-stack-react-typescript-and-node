
interface GreetingProps {
    message: string
}

export default function Greeting(props: GreetingProps) {
    console.log("Rendering Greeting")
    return <div>{props.message}</div>
}