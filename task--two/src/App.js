import './App.css';
import Boxes from './components/Boxes';
import React from 'react';
import Square from './components/Square';

function App(props) {
  const [squares, setSquares] = React.useState(Boxes);

  function toggle(id) {
    setSquares((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
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
// function toggle(id) {
//   setSquares((prevSquares) => {
//     const newSquare = [];
//     for (let i = 0; i < prevSquares.length; i++) {
//       const currentSquare = prevSquares[i];
//       if (currentSquare.id === id) {
//         const updatedSquare = {
//           ...currentSquare,
//           on: !currentSquare.on,
//         };
//         newSquare.push(updatedSquare);
//       } else {
//         newSquare.push(currentSquare);
//       }
//     }
//     return newSquare;
//   });
