import styled from 'styled-components';

export const Rectangle = styled.div`
  width: 380px;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ellipse = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  //   border-radius: 13.1749px;
  border-radius: 50%;
`;

export const Img = styled.img`
  border-radius: 50%;
`;

export const Section = styled.div`
  height: 214px;
  background-image: url('./picture.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
