import Card from './Card';

function CardList(props) {
  return (
    <div className='card-container'>
      {props.data.map((cardObj) => (
        <Card
          key={cardObj.id}
          icon={cardObj.icon}
          title={cardObj.title}
          summary={cardObj.summary}
        />
      ))}
    </div>
  );
}

export default CardList;
