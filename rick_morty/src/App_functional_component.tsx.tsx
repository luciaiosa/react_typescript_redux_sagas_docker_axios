import React from 'react';

interface AppProps {
  color?: string;
}

// Si tengo un componente tipo function, tengo que pasarle AppProps interface!!
// LA FUNCIÓN DEVUELVE CÓDIGO JSX!!
const App = (props: AppProps): JSX.Element => {

    return (
      <div className="App">
        <h3>{props.color}</h3>
      </div>
    );
  }

export default App;
