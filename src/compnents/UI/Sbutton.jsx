function Sbutton(props) {
  if (!props.text) {
    return;
  }
  return (
    <button type={!props.type ? 'button' : props.type} className='btn'>
      {props.text}
    </button>
  );
}

export default Sbutton;
