/**
 *
 * Box
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import Title from '../../../components/Title';
import { ContentText, TextAnimation } from './styledComponents';

function BoxText() {
  const scrollBottom = () =>
    scroller.scrollTo('portafolio', {
      duration: 2500,
      delay: 1000,
      smooth: 'linear',
    });

  const functionEntry = () => {
    scrollBottom();
  };

  return (
    <ContentText>
      <Title type={1} text="ConfortDesing" color="#fff" align="center" />
      <TextAnimation
        strings={[
          'Te Damos Alegria',
          'Te Damos Comodidad',
          'Te Damos Color',
          'Te Damos Hogar',
          'Bienvenido',
        ]}
        typeSpeed={80}
        backSpeed={70}
        onComplete={functionEntry}
      />
    </ContentText>
  );
}

BoxText.propTypes = {};

export default BoxText;
