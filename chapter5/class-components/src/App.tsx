import React from 'react';
import './App.css';
import Greeting from './Greeting';
import logo from './logo.svg';

class App extends React.Component {
  constructor(props: any) {
    super(props)

    this.state = {
      enteredName: "",
      message: ""
    }

    this.onNameInputChange = this.onNameInputChange.bind(this)
  }

  state: { enteredName: string, message: string }

  onNameInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value: string = e.target.value;
    this.setState({
      enteredName: value,
      message: value === "" ? "" : `Hello from ${value}`
    })
  }

  render() {
    console.log("Rendering App")
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input value={this.state.enteredName} onChange={this.onNameInputChange} />
          <Greeting message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
