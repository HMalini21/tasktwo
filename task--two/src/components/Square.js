import React from 'react';

export default function Square(props) {
  const [on, setOn] = React.useState(props.on);

  function colorChange() {
    setOn((prevOn) => !prevOn);
  }
  const style = {
    backgroundColor: on ? '#cccccc' : '#222222',
  };
  console.log(props.id);

  console.log(props.on);
  return (
    <div
      className="box"
      onClick={() => props.handleClick(props.id)}
      style={style}
      onClick={colorChange}
    ></div>
  );
}
