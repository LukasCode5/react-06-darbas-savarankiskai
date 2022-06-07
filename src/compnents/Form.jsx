import InputField from './UI/InputField';
import TextArea from './UI/TextArea';
import Sbutton from './UI/Sbutton';
import { useState } from 'react';

function Form() {
  const [createdAtt, setCreatedAt] = useState('');

  async function postForm(data) {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const dataInJs = await response.json();
      console.log('dataInJs ===', dataInJs);
      setCreatedAt(dataInJs.createdAt);
    } catch (error) {
      console.log('error ===', error);
    }
  }

  async function takeAndPostData(event, data) {
    event.preventDefault();
    // console.log('event.target.children ===', event.target.elements.email.value);

    const formObj = {
      firstname: event.target.elements.firstName.value,
      lastname: event.target.elements.lastName.value,
      email: event.target.elements.email.value,
      subject: event.target.elements.subject.value,
      message: event.target.elements.message.value,
    };
    // console.log('formObj ===', formObj);
    postForm(formObj);
    event.target.reset();
    // console.log('createdAtt ===', createdAtt);
  }

  return (
    <div className='form-container'>
      {createdAtt && (
        <div className='success'>
          <h3 className='success-msg'>Gavome jusu uzklausa, netrukus susisieksime</h3>
        </div>
      )}
      {!createdAtt && (
        <form onSubmit={takeAndPostData}>
          <InputField inputLabel='First Name' type='text' classDiv='name' name='firstName' />
          <InputField inputLabel='Last Name' type='text' classDiv='name' name='lastName' />
          <InputField inputLabel='Email' type='email' class='wide' name='email' />
          <InputField inputLabel='Subject' type='text' class='wide' name='subject' />
          <TextArea inputLabel='Message' class='wide' name='message' />
          <Sbutton text='send message' type='submit' />
        </form>
      )}
    </div>
  );
}

export default Form;
