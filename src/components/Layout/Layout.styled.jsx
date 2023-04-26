import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LayoutContainer = styled.div`
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  border-bottom: 2px solid #471ca9;
  padding: 0;
  padding-bottom: 20px;
  margin: 4px 0 20px 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: #373737;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  margin-left: 10px;

  &.active {
    margin-left: 0;
    padding: 8px 16px;
    color: #ebd8ff;
    background-color: #4b2a99;
    border-radius: 10.3108px;
    cursor: pointer;
  }
`;
