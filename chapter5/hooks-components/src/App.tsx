import { useReducer } from 'react';
import './App.css';
import Greeting from './GreetingFunctional';
import logo from './logo.svg';

const reducer = (state: any, action: any) => {
  console.log("enteredNameReducer")

  switch (action.type) {
    case "enteredName":
      if (state.enteredName === action.payload) {
        return state;
      }
      return { ...state, enteredName: action.payload }
    case "message":
      return { ...state, message: action.payload ? `Hello, ${action.payload}` : "" }
    default:
      throw new Error(`Invalid action type ${action.type}`)
  }
}

const initialState = {
  enteredName: "",
  message: ""
}

function App() {
  const [{ message, enteredName }, dispatch] =
    useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting message={message} enteredName={enteredName} greetingDispatcher={dispatch} />
      </header>
    </div>
  );
}

export default App;
