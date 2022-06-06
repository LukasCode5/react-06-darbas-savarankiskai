import InputField from './UI/InputField';
import TextArea from './UI/TextArea';
import Sbutton from './UI/Sbutton';

function Form() {
  function logEvent(event) {
    event.preventDefault();
    console.log('event.target.children ===', event.target.elements.email.value);

    const formObj = {
      firstname: event.target.elements.firstName.value,
      lastname: event.target.elements.lastName.value,
      email: event.target.elements.email.value,
      subject: event.target.elements.subject.value,
      message: event.target.elements.message.value,
    };
    console.log('formObj ===', formObj);
  }
  return (
    <div className='form-container'>
      <form onSubmit={logEvent}>
        <InputField inputLabel='First Name' type='text' classDiv='name' name='firstName' />
        <InputField inputLabel='Last Name' type='text' classDiv='name' name='lastName' />
        <InputField inputLabel='Email' type='email' class='wide' name='email' />
        <InputField inputLabel='Subject' type='text' class='wide' name='subject' />
        <TextArea inputLabel='Message' class='wide' name='message' />
        <Sbutton text='send message' type='submit' />
      </form>
    </div>
  );
}

export default Form;
