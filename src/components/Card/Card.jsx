import { Ellipse, Img, Rectangle, Section } from './Card.styled';
import logo from './logo.png';
import bg from './picture.png';

export default function Card({ user, avatar, tweets, followers }) {
  return (
    <>
      <Section>
        <img src={logo} alt="go it logo" />
        <img src={bg} alt="talks logo" />
        <Rectangle />
        <Ellipse />
      </Section>

      <Img src={avatar} alt={user} width="62" />
      <div>
        <p>{tweets} tweets</p>
        <p>{followers} followers</p>
        <button type="button">follow</button>
      </div>
    </>
  );
}
