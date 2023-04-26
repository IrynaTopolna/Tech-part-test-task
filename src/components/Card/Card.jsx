import { useEffect, useRef, useState } from 'react';
import { setNewUserData } from 'services/users-api';
import {
  Ellipse,
  UserImg,
  Rectangle,
  Section,
  Logo,
  BgImg,
  TextT,
  TextF,
  Div,
  TextBtn,
  BtnFollowing,
  BtnFollow,
} from './Card.styled';
import logo from './logo.png';
import bg from './picture.png';
import PropTypes from 'prop-types';

const savedIds = JSON.parse(localStorage.getItem('status')) || [];

export default function Card({ user, avatar, tweets, followers, id }) {
  const [newFollowers, setNewFollowers] = useState(followers);
  const isFirstRender = useRef(true);
  const haveId = savedIds.includes(id);

  const handleBtnClick = () => {
    if (!haveId) {
      setNewFollowers(state => state + 1);
      savedIds.push(id);
    }

    if (haveId) {
      setNewFollowers(state => state - 1);
      const ind = savedIds.indexOf(id);
      savedIds.splice(ind, 1);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setNewUserData({ followers: Number(`${newFollowers}`) }, `${id}`);
    localStorage.setItem('status', JSON.stringify(savedIds));
  }, [newFollowers]);

  return (
    <>
      <Section>
        <Logo src={logo} alt="go it logo" />
        <BgImg src={bg} alt="talks logo" />
        <Rectangle />
        <Ellipse />
        <UserImg src={avatar} alt={user} width="62" />
      </Section>

      <Div>
        <TextT>{tweets} tweets</TextT>
        <TextF>{newFollowers.toLocaleString('en-US')} followers</TextF>
        {haveId ? (
          <BtnFollowing type="button" onClick={handleBtnClick}>
            <TextBtn>following</TextBtn>
          </BtnFollowing>
        ) : (
          <BtnFollow type="button" onClick={handleBtnClick}>
            <TextBtn>follow</TextBtn>
          </BtnFollow>
        )}
      </Div>
    </>
  );
}

Card.propTypes = {
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
