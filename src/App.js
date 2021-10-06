import './App.css';
import React from 'react';

class Square extends React.Component {
    render() {
        return (
            <button className={this.props.className} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            squares: Array(this.props.length).fill(false),
        };

        this.handleClick = this.handleClick.bind(this);
        this.renderSquare = this.renderSquare.bind(this);
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = !this.state.squares[i];
        const sum = squares[i] ? this.state.sum + 1 : this.state.sum - 1
        this.setState({
            squares: squares,
            sum: sum
        });
    }

    renderSquare(i) {
        const isClicked = this.state.squares[i];
        return (
            <Square
                onClick={() => this.handleClick(i)}
                value={isClicked ? '1' : '0'}
                className = {isClicked ? 'square-active' : 'square-inactive'}
            />
        );
    }

    render() {
        const sum = this.state.sum;
        return (
            <div>
                <div>{sum}</div>
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
            </div>
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
          <Calc length={4} />
      </div>
    </div>
  );
}

export default App;
