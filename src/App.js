import './App.css';
import CardSectionTitle from './compnents/CardSectionTitle';
import { cardData } from './compnents/Card';
import CardList from './compnents/CardList';

function App() {
  return (
    <div className='App container'>
      <CardSectionTitle title='our services' subTitle='Lorem ipsum dolor sit amet' />
      <CardList data={cardData} />
    </div>
  );
}

export function Ok() {
  return <h1>Hello</h1>;
}

export default App;
