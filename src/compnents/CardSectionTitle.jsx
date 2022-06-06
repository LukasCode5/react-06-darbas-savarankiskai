function CardSectionTitle(props) {
  return (
    <div className='main-title'>
      {props.title && <h1>{props.title}</h1>}
      {props.subTitle && <h2>{props.subTitle}</h2>}
      <div className='underline'></div>
    </div>
  );
}

export default CardSectionTitle;
