import ContactInfo from './UI/ContactInfo';

function FormMoreInfo() {
  return (
    <div className='contact-info'>
      <ContactInfo
        title='Adress'
        text='203 Fake St. Mountain View, San Fransisco, California, USA'
      />
      <ContactInfo title='Phone' text='+1 232 3235 324' class='text-color' />
      <ContactInfo title='Email Address' text='youremail@domain.com' class='text-color' />
    </div>
  );
}

export default FormMoreInfo;
