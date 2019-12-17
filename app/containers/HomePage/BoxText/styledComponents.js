import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Typed from 'react-typed';

import { centerFlex } from '../../../global-styles';

export const ContentText = styled.section`
  ${centerFlex};
  position: absolute;
  left: 0;
  right: 0;
  top: -12%;
  bottom: 0;
  margin: auto;
  z-index: 9;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

export const Title = styled.h2`
  ${centerFlex};
  color: #fff;
  font-size: 2.5rem;
  width: 100%;
  margin: 0 0 0.5rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px #333;
  ${breakpoint('md')`
    font-size: 4.5rem;
  `}
`;

export const TextAnimation = styled(Typed)`
  color: #fff;
  font-size: 1.8rem;
  text-shadow: 5px 0px 10px #333;
  ${breakpoint('md')`
    font-size: 2.7rem;
  `}
`;