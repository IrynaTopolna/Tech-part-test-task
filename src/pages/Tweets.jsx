import CardsGallery from 'components/CardsGallery';
import Filter from 'components/Filter';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getUsers } from 'services/users-api';
import { ArrowStyled, StyledLink, TopSection } from './pages.styled';

export default function Tweets() {
  const [status, setStatus] = useState('idle');
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [renderUsers, setRenderUsers] = useState([]);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

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
        setRenderUsers(users);
        setUsers(users);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, []);

  const onFilterChange = filterValue => {
    setFilter(filterValue);
  };

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('status')) || [];

    if (filter === 'follow') {
      const filteredUsers = users.filter(user =>
        savedIds.every(item => item !== user.id)
      );
      setRenderUsers(filteredUsers);
    } else if (filter === 'following') {
      const filteredUsers = users.filter(user => savedIds.includes(user.id));
      setRenderUsers(filteredUsers);
    } else {
      setRenderUsers(users);
    }
  }, [filter]);

  return (
    <div>
      <TopSection>
        <StyledLink to={backLinkRef.current}>
          <ArrowStyled />
          <span>Back</span>
        </StyledLink>

        <Filter onFilterChange={onFilterChange} />
      </TopSection>

      {status === 'pending' && <h1>Loading...</h1>}
      {status === 'rejected' && (
        <h1>Something went wrong. Please, reload page</h1>
      )}
      {status === 'resolved' && (
        <CardsGallery users={renderUsers} filter={filter} />
      )}
    </div>
  );
}
