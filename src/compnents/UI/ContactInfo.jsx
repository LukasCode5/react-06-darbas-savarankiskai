function ContactInfo(props) {
  if (!props.title || !props.text) {
    return;
  }
  return (
    <div className={`info ${!props.class ? '' : props.class}`}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default ContactInfo;
