import './App.css';
import Boxes from './components/Boxes';
import React from 'react';
import Square from './components/Square';

function App(props) {
  const [squares, setSquares] = React.useState(Boxes);

  function toggle(id) {
    console.log(id);
  }

  const SquareElements = squares.map((square) => (
    <Square key={square.id} on={square.on} id={square.id} handleClick={toggle} />
  ));

  return (
    <div className="App">
      <main>{SquareElements}</main>
    </div>
  );
}

export default App;
