import Icon from './UI/Icon';

export const cardData = [
  {
    id: 1,
    icon: 'fa-plane',
    title: 'Air freight',
    summary:
      'The earth brought forth vegetation: plants yielding seed, and fruit trees of every kind on earth that bear fruit with the seed in it.',
  },
  {
    id: 2,
    icon: 'fa-ship',
    title: 'Ocean freight',
    summary:
      "And God saw that it was a delight to the woman, Did God say, 'You shall not eat of the air and over every living thing that moves upon the ground of every kind.",
  },
  {
    id: 3,
    icon: 'fa-truck',
    title: 'Land transport',
    summary:
      'And it was so. The earth brought forth vegetation: plants yielding seed, and fruit trees of every kind on earth that bear fruit with the seed in it.',
  },
  {
    id: 4,
    icon: 'fa-building ',
    title: 'Warehousing',
    summary:
      'And God said, Let the waters that were under the sky be gathered together he called Night. And there was no one to till it and keep it.',
  },
  {
    id: 5,
    icon: 'fa-bell',
    title: 'Get notified',
    summary:
      'So when the woman he said, Because you have listened to the man he made into a woman and brought them to the man and put him in the garden of Eden, to till the ground.',
  },
  {
    id: 6,
    icon: 'fa-bug',
    title: 'No bugs',
    summary: 'Please do not leave any bugs in your code.',
  },
];

function Card(props) {
  return (
    <div className='card'>
      <Icon icon={props.icon} />
      <div className='card-content'>
        {props.title && <h3>{props.title}</h3>}
        {props.summary && <p>{props.summary}</p>}
        <a href='/'>Learn more</a>
      </div>
    </div>
  );
}

export default Card;
