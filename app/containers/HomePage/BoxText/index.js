/**
 *
 * Box
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import { ContentText, Title, TextAnimation } from './styledComponents';

function BoxText() {
  const svgE = `<svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px">
  <g id="Chevron_Down_Circle">
    <path d="M16,0C7.164,0,0,7.163,0,16c0,8.836,7.164,16,16,16c8.837,0,16-7.164,16-16C32,7.163,24.837,0,16,0z M16,30   C8.28,30,2,23.72,2,16C2,8.28,8.28,2,16,2c7.72,0,14.031,6.28,14.031,14C30.031,23.72,23.72,30,16,30z" fill="#121313"/>
    <path d="M22.3,12.393l-6.285,6.195l-6.285-6.196c-0.394-0.391-1.034-0.391-1.429,0   c-0.394,0.391-0.394,1.024,0,1.414l6.999,6.9c0.384,0.38,1.044,0.381,1.429,0l6.999-6.899c0.394-0.391,0.394-1.024,0-1.414   C23.334,12.003,22.695,12.003,22.3,12.393z" fill="#121313"/>
  </g>
</svg>`;

  const scrollBottom = () => (
    <Link to="portafolio" spy smooth delay={100} duration={1000}>
      abajo
    </Link>
  );

  return (
    <ContentText>
      <Title>ConfortDesing</Title>
      <TextAnimation
        strings={[
          'Te Damos Alegria',
          'Te Damos Comodidad',
          'Te Damos Color',
          'Te Damos Hogar',
        ]}
        typeSpeed={80}
        // loop
        backSpeed={70}
        onComplete={() => scrollBottom()}
      />
    </ContentText>
  );
}

BoxText.propTypes = {};

export default BoxText;