function InputField(props) {
  if (!props.inputLabel || !props.type) {
    return;
  }
  return (
    <div className={`input ${!props.classDiv ? '' : props.classDiv}`}>
      <p>{props.inputLabel}</p>
      <input
        className={`input ${!props.class ? '' : props.class}`}
        type={props.type}
        name={!props.name ? '' : props.name}
      />
    </div>
  );
}

export default InputField;
