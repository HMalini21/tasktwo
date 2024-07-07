import React from 'react';

export default function Square(props) {
  const [on, setOn] = React.useState(props.on);
  const style = {
    backgroundColor: on ? '#cccccc' : '#222222',
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  console.log(props.on);
  return <div className="box" style={style} onClick={toggle}></div>;
}
