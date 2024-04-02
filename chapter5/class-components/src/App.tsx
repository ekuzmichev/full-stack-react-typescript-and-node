import React from 'react';
import './App.css';
import Greeting from './Greeting';
import logo from './logo.svg';

class App extends React.Component {
  constructor(props: any) {
    super(props)

    this.state = {
      enteredName: ""
    }

    this.onNameChange = this.onNameChange.bind(this)
  }

  state: { enteredName: string }

  onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value
    })
  }

  render() {
    console.log("Rendering App")
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input value={this.state.enteredName} onChange={this.onNameChange} />
          <Greeting name={this.state.enteredName} />
        </header>
      </div>
    );
  }
}

export default App;
