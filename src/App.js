import './App.css';
import CardSectionTitle from './compnents/CardSectionTitle';
import { cardData } from './compnents/Card';
import CardList from './compnents/CardList';
import FormContactInfo from './compnents/FormContactInfo';
import FormMoreInfo from './compnents/FormMoreInfo';
import Form from './compnents/Form';

function App() {
  return (
    <div className='App'>
      <section className='hero main-container'>
        <CardSectionTitle title='our services' subTitle='Lorem ipsum dolor sit amet' />
        <CardList data={cardData} />
      </section>
      <section className='contact-us container'>
        <CardSectionTitle title='contact us' subTitle='See Our Daily News & Updates' />
        <div className='contact-us-content'>
          <Form />
          <div className='info-container'>
            <FormContactInfo />
            <FormMoreInfo
              title='More Info'
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi ipsam fugit consequuntur cumque assumenda ea, distinctio id dolores et.'
              buttonText='learn more'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
