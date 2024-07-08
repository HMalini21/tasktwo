import React from 'react';

export default function Square(props) {
  const style = {
    backgroundColor: props.on ? '#cccccc' : '#222222',
  };
  console.log('jhhhh');
  return <div className="box" onClick={() => props.handleClick(props.id)} style={style}></div>;
}
