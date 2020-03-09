import React from 'react';
import './App.css';

interface AppProps {
  // color? === PUEDE SER NULL
  color?: string;
}

interface AppState {
  counter: number
}

// Si tengo un componente tipo class, tengo que pasarle AppProps y AppState interfaces!!
class App extends React.Component<AppProps, AppState> {

  // state = {
  //   counter: 0
  // }

  // Another way that we can initialize state: using constructor function!!

  constructor(props: AppProps) {
    super(props);
    // initialize the state object:

    this.state = {
      counter: 0
    }
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  }

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.props.color}</h3>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }

}

export default App;
