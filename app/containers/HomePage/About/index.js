/**
 *
 * Box
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Title from '../../../components/Title';

import {
  AboutSection,
  AboutContent,
  AboutTitle,
  AboutDescription,
  AboutButton,
  Button,
} from './styledComponents';

function About() {
  return (
    <AboutSection>
      <AboutContent>
        <AboutTitle>
          <Title type={2} text="About Us" color="#333" align="center" />
        </AboutTitle>
        <AboutDescription>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            mattis mi quis tellus convallis, sit amet aliquet massa ornare. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.{' '}
          </p>
        </AboutDescription>
        <AboutButton>
          <Button href="/">
            Learn More <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </AboutButton>
      </AboutContent>
    </AboutSection>
  );
}

About.propTypes = {};

export default About;
