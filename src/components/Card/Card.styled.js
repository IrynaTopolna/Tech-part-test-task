import styled from 'styled-components';

export const Rectangle = styled.div`
  width: 380px;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  //   border-radius: 13.1749px;
  border-radius: 50%;
`;

export const UserImg = styled.img`
  position: absolute;
  top: 187px;
  left: 159px;
  border-radius: 50%;
`;

export const Section = styled.div`
  position: relative;
  height: 214px;
  margin-bottom: 62px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BgImg = styled.img`
  margin: 28px 36px 18px 36px;
`;

export const TextT = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0 0 16px 0;
`;

export const TextF = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0 0 26px 0;
`;

export const BtnFollow = styled.button`
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  padding: 0;
`;

export const BtnFollowing = styled.button`
  width: 196px;
  height: 50px;
  background-color: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  padding: 0;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBtn = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;
