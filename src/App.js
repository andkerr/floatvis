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

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sign_bit: 0,
            exponent: 0,
            significand: 0,
            exponent_bits: Array(8).fill(false),
            significand_bits: Array(23).fill(false)
        };
    }

    handleClickSign() {
        const new_sign = this.state.sign_bit === 1 ? 0 : 1;

        this.setState({ sign_bit: new_sign });
    }

    handleClickExponent(i) {
        const exponents = this.state.exponent_bits.slice();
        exponents[i] = !this.state.exponent_bits[i];
        const len = this.props.length;
        const exponent = exponents[i] ? this.state.exponent + 2**(len - i - 1) :
                                      this.state.exponent - 2**(len - i - 1);
        this.setState({
            exponent_bits: exponents,
            exponent: exponent
        });
    }

    handleClickSignificand(i) {
        const significands = this.state.significand_bits.slice();
        significands[i] = !this.state.significand_bits[i];
        const new_significand = significands[i] ? this.state.significand + 2**(-i - 1) :
                                                  this.state.significand - 2**(-i - 1);

        this.setState({
            significand_bits: significands,
            significand: new_significand
        });
    }

    renderSign() {
        const isClicked = this.state.sign_bit === 1;
        return (
            <Square
                onClick={() => this.handleClickSign()}
                value={isClicked ? '1' : '0'}
                className = {isClicked ? 'square-active' : 'square-inactive'}
            />
        );
    }

    renderExponent(i) {
        const isClicked = this.state.exponent_bits[i];
        return (
            <Square
                onClick={() => this.handleClickExponent(i)}
                value={isClicked ? '1' : '0'}
                className = {isClicked ? 'square-active' : 'square-inactive'}
            />
        );
    }

    renderSignificand(i) {
        const isClicked = this.state.significand_bits[i];
        return (
            <Square
                onClick={() => this.handleClickSignificand(i)}
                value={isClicked ? '1' : '0'}
                className = {isClicked ? 'square-active' : 'square-inactive'}
            />
        );
    }

    render() {
        const sign = (-1)**this.state.sign_bit;
        const exponent = this.state.exponent;
        const num_exponents = this.state.exponent_bits.length;
        const bias = (2**num_exponents / 2) - 1;

        var exponent_bits = [];
        for (let i = 0; i < num_exponents; ++i) {
            exponent_bits.push(this.renderExponent(i));
        }

        var significand_bits = [];
        for (let i = 0; i < this.state.significand_bits.length; ++i) {
            significand_bits.push(this.renderSignificand(i));
        }

        return (
            <div>
                <div>
                    {sign} x 2<sup>{exponent - bias}</sup>
                    + {1 + this.state.significand}
                    = {sign * 2**(exponent - bias) * (1 + this.state.significand)}
                </div>
                <div>
                    {this.renderSign()}
                    ---
                    {exponent_bits}
                    ---
                    {significand_bits}
                </div>
            </div>
        );
    }

}

function App() {
  return (
    <div className="App">
      <div>
          <Calculator length={8} />
      </div>
    </div>
  );
}

export default App;
