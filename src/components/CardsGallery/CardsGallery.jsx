import Card from 'components/Card';
import { List, ListItem } from './CardsGallery.styled';

export default function CardsGallery({ users }) {
  return (
    <List>
      {users.map(user => (
        <ListItem key={user.id}>
          <Card
            user={user.user}
            avatar={user.avatar}
            tweets={user.tweets}
            followers={user.followers}
          />
        </ListItem>
      ))}
    </List>
  );
}
