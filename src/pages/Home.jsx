import { Div, H1 } from './pages.styled';
import bg from 'components/Card/picture.png';

export default function Home() {
  return (
    <Div>
      <H1>Welcome to Tweets App</H1>
      <img src={bg} alt="talks" />
    </Div>
  );
}
