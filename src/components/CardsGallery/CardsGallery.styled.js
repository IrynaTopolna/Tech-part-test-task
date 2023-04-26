import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 26px;
  padding: 0 20px 0 10px;
  margin: 26px 0;
`;

export const ListItem = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;
  border: 2px solid #471ca9;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
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

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export const Notification = styled.p`
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 24px;
  color: #373737;
`;
