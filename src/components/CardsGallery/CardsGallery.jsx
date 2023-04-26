import Card from 'components/Card';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  Button,
  Flex,
  List,
  ListItem,
  Notification,
} from './CardsGallery.styled';

const perPage = 3;

export default function CardsGallery({ users, filter }) {
  const [next, setNext] = useState(perPage);

  const loadMore = () => {
    setNext(next + perPage);
  };

  useEffect(() => {
    setNext(perPage);
  }, [filter]);

  return (
    <>
      {users.length > 0 ? (
        <>
          <List>
            {users.slice(0, next).map(user => (
              <ListItem key={user.id}>
                <Card
                  user={user.user}
                  avatar={user.avatar}
                  tweets={user.tweets}
                  followers={user.followers}
                  id={user.id}
                />
              </ListItem>
            ))}
          </List>
          <Flex>
            {next < users.length && (
              <Button type="button" onClick={loadMore}>
                Load more
              </Button>
            )}
          </Flex>
        </>
      ) : (
        <Notification>There is no one here :(</Notification>
      )}
    </>
  );
}

CardsGallery.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
