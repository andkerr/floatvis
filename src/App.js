import logo from './logo.svg';
import './App.css';
import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isClicked: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    }

    render() {
        return (
            <button className={this.state.isClicked ? 'square-active' : 'square-inactive'} onClick={this.handleClick}>
                {this.state.isClicked ? '1' : '0'}
            </button>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'OFF' : 'ON'}
            </button>
        );
    }
}

function App() {
  return (
    <div className="App">
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default App;
