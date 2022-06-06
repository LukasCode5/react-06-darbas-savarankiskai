function TextArea(props) {
  if (!props.inputLabel) {
    return;
  }
  return (
    <div className='input'>
      <p>{props.inputLabel}</p>
      <textarea
        className={!props.class ? '' : props.class}
        cols={!props.cols ? '30' : props.cols}
        rows={!props.rows ? '10' : props.rows}
        name={!props.name ? '' : props.name}
      ></textarea>
    </div>
  );
}
export default TextArea;
