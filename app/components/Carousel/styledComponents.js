import styled from 'styled-components';
import Slider from 'react-animated-slider';

export const ContentSlider = styled(Slider)`
  position: relative;
  height: 100%;
  overflow: hidden;
  width: 100%;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;
