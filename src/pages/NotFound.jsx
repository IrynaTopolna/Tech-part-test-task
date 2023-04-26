import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link1 } from './pages.styled';

export const NotFound = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <main style={{ textAlign: 'center' }}>
      <b style={{ fontSize: 64 }}>404</b>
      <p style={{ fontSize: 20 }}>Sorry, that page doesn't exist :(</p>
      <Link1 to={backLinkRef.current}>
        <span>To Home</span>
      </Link1>
    </main>
  );
};
