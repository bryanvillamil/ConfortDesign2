import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-scroll';
import { colors } from '../../global-styles';

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4%;
  position: fixed;
  z-index: 9;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0,0,0, 0.4);
  box-shadow: 1px 1px 3px #333;
  ${breakpoint('md')`
    padding: 1rem 2rem;
  `}
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  img {
    width: 75%;
    transition: all 0.5s;
  }
  ${breakpoint('lg')`
    img {
      width: 80%;
    }
  `}
`;

export const HeaderTopMobile = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  position: relative;
  right: 3rem;
  span {
    text-transform: uppercase;
    color: ${colors.colorPrimary};
    font-size: 1.4rem;
    font-family: 'Frut Regular';
    letter-spacing: 0.4px;
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  right: 5%;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  & > div {
    cursor: pointer;
  }
`;

export const MenuDesktop = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: flex-end;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  position: relative;
  ${breakpoint('lg')`
    padding: 0 1.2rem;
  `}
`;

export const ItemLink = styled(Link)`
  display: flex;
  text-transform: uppercase;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.5s;
  padding: 0 0 0.5rem;
  color: #fff;
  position: relative;
  cursor: pointer;
  &.active {
    color: ${colors.colorPrimary};
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scale3d(0, 1, 1);
    transform-origin: center left;
    transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
    background: #fff;
    transition-delay: 0.4s;
  }
  &:hover {
    color: ${colors.colorPrimary};
    &:after {
      transform: scale3d(1, 1, 1);
      transition-delay: 0s;
    }
  }
  ${breakpoint('md')`
    letter-spacing: 0.5px;
  `}
`;
