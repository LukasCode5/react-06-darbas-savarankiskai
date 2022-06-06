import Sbutton from './UI/Sbutton';

function FormMoreInfo(props) {
  return (
    <div className='more-info'>
      {props.title && <h3>{props.title}</h3>}
      {props.content && <p>{props.content}</p>}
      <Sbutton text={!props.buttonText ? '' : props.buttonText} />
    </div>
  );
}

export default FormMoreInfo;
