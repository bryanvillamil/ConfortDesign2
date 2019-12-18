import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Element } from 'react-scroll';

export const PageHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ContentCarousel = styled.div`
  display: flex;
  height: 88vh;
  width: 100%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  ${breakpoint('md')`
    height: 100vh;
  `}
`;

export const ImgHome = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const ContentProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  position: relative;
  padding: 5rem 10% 0;
  background: #fff;
`;

export const ContentTitle = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
`;

export const ContentSvgs = styled.div`
  display: flex;
`;

export const SvgSmall = styled.svg`
  fill: #fff !important;
  stroke: #fff;
  ${'' /* stroke-width: 4; */}
  position: absolute;
  bottom: -2px;
  left: 0;
  background: none;
  z-index: 99;
  pointer-events: none;
  height: 60px;
  ${breakpoint('xs')`
    height: 100px;
  `}
  ${breakpoint('sm')`
    height: 120px;
  `}
  ${breakpoint('lg')`
    height: 170px;
    bottom: -4px;
  `}
`;

export const SvgBig = styled.svg`
  fill: #fff !important;
  stroke: #fff;
  position: absolute;
  bottom: -2px;
  right: 0;
  background: none;
  z-index: 99;
  left: auto;
  pointer-events: none;
  height: 60px;
  ${breakpoint('xs')`
    height: 100px;
  `}
  ${breakpoint('sm')`
    height: 120px;
    bottom: -3px;
  `}
  ${breakpoint('lg')`
    height: 170px;
    bottom: -4px;
  `}
`;

export const Section = styled(Element)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  &[name='portafolio'] {
    padding-top: 8rem;
  }
`;
