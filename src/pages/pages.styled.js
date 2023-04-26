import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoArrowUndoSharp } from 'react-icons/io5';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 122px;
  border: 2px solid #471ca9;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  padding: 8px 20px;
  cursor: pointer;
  color: #373737;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  &:hover,
  &:focus {
    background-color: #5cd3a8;
    border: 2px solid transparent;
  }
`;

export const ArrowStyled = styled(IoArrowUndoSharp)`
  margin-right: 10px;
  width: 24px;
  fill: currentColor;
`;

export const Link1 = styled(Link)`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
`;

export const H1 = styled.h1`
  color: #471ca9;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
