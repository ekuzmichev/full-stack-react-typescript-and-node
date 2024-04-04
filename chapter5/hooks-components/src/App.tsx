import React, { useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';
import Greeting from './GreetingFunctional';
import ListCreator, { ListItem } from './ListCreator';
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
  const [{ message, enteredName }, dispatch] = useReducer(reducer, initialState)

  const [startCount, setStartCount] = useState(0)
  const [count, setCount] = useState(0)
  const [listItems, setListItems] = useState<ListItem[]>()

  const setCountCallback = useCallback(() => {
    const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc)
  }, [startCount])

  useEffect(() => {
    const li = []
    for (let i = 0; i < count; i++) {
      li.push({ id: i })
    }
    setListItems(li)
  }, [count])

  const onIncremrntBtnClick = () => {
    setCountCallback()
  }

  const onStartCountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value))
  }

  console.log("Render App.tsx")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting message={message} enteredName={enteredName} greetingDispatcher={dispatch} />
        <div style={{ marginTop: '10px' }}>
          <label>Enter a number and we will increment it</label>
          <br />
          <input value={startCount} onChange={onStartCountInputChange} style={{ width: '.75rem' }} />
          <br />
          <label>{count}</label>
          <br />
          <button onClick={onIncremrntBtnClick}>Increment count</button>
        </div>
        <div>
          <ListCreator listItems={listItems} />
        </div>
      </header>
    </div>
  );
}

export default App;
