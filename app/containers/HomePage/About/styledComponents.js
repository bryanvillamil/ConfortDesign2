import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { centerFlex } from '../../../global-styles';
import BgAbout from '../../../images/Home/bgAbout.jpg';

export const AboutSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background: url(${BgAbout});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 28rem;
  padding: 5rem 2rem;
  ${breakpoint('md')`
    background-size: cover;
    height: 32rem;
  `}
  ${breakpoint('lg')`
    height: 40rem;
  `}
`;

export const AboutContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  ${breakpoint('xs')`
    width: 35rem;
  `}
  ${breakpoint('sm')`
    width: 50rem;
  `}
`;

export const AboutTitle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  ${breakpoint('md')`
    width: 35%;
    flex-direction: column;
    align-items: flex-end;
    h2 {
      font-size: 3.5rem;
    }
  `}
`;

export const AboutDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    font-size: 1.5rem;
  }
  ${breakpoint('md')`
    width: 65%;
  `}
`;

export const AboutButton = styled.div`
  width: 100%;
  ${centerFlex};
  padding-top: 1rem;
`;

export const Button = styled.a`
  width: auto;
  color: #fff;
  background-color: #3d3d3d;
  border-color: #3d3d3d;
  padding: 13px 26px;
  text-decoration: none;
  transition: all 0.5s;
  ${centerFlex};
  svg {
    transition: all 0.5s;
    position: relative;
    left: 8px;
    font-size: 1.2rem;
  }
  &:hover {
    svg {
      left: 10px;
    }
  }
`;
