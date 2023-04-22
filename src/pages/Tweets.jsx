import CardsGallery from 'components/CardsGallery/CardsGallery';
import { useState, useEffect } from 'react';
import { getUsers } from '../services/users-api';

export default function Tweets() {
  const [status, setStatus] = useState('idle');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([]);
    setStatus('pending');

    getUsers()
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject('Error');
      })
      .then(users => {
        if (users.length === 0) {
          setStatus('rejected');
          return;
        }
        setUsers(users);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, []);

  return (
    <div>
      {status === 'pending' && <h1>Loading...</h1>}
      {status === 'rejected' && (
        <h1>Something went wrong. Please, reload page</h1>
      )}
      {status === 'resolved' && <CardsGallery users={users} />}
    </div>
  );
}
