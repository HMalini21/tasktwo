export default function Square(props) {
  const style = {
    backgroundColor: props.on ? '#cccccc' : '#222222',
  };
  console.log(props.on);
  return <div className="box" style={style}></div>;
}
