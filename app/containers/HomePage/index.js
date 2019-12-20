/**
 *
 * HomePage
 *
 */

import React, { useRef, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Header from '../../components/Header';
import Box from '../../components/Box';
import withViewportHandler from '../../components/withViewportHandler';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';

// import { projects } from '../../data/home';

import { getDataProjects } from './actions';

import About from './About';
import Boxtext from './BoxText';
import Title from '../../components/Title';

import BgHome from '../../images/Home/bgHome.jpg';
import { HeightContent } from '../Layout';

import {
  PageHome,
  ContentCarousel,
  ImgHome,
  ContentTitle,
  ContentProjects,
  ContentSvgs,
  SvgSmall,
  SvgBig,
  Section,
} from './styledComponents';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const [isHeader, setIsHeader] = useState(false);
  const [valueHeight, setValueHeight] = useState(0);
  const { title, openMenu, setOpenMenu } = useContext(HeightContent);
  const {
    getProjects,
    homePage: { dataProjects },
    viewport,
    intl: { locale },
    location: { pathname },
  } = props;

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > valueHeight - 200) {
      setIsHeader(true);
    } else {
      setIsHeader(false);
      setOpenMenu(false);
    }
  };

  const outerRef = useRef(false);

  useEffect(() => {
    getProjects({
      lang: locale,
    });
  }, []);

  useEffect(() => {
    setValueHeight(outerRef.current.clientHeight);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <PageHome>
      <ContentCarousel ref={outerRef}>
        <ImgHome src={BgHome} alt="Bg Home" />

        <Boxtext />

        <ContentSvgs>
          <SvgSmall
            width="21%"
            viewBox="0 0 100 102"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L100 100 L0 10 Z" />
          </SvgSmall>
        </ContentSvgs>
        <ContentSvgs>
          <SvgBig width="80%" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L100 10 Z" />
          </SvgBig>
        </ContentSvgs>
      </ContentCarousel>

      {isHeader && (
        <Header
          viewport={viewport}
          handleClick={handleClick}
          OpenMenu={openMenu}
          pathname={pathname}
          titleHeader={title}
        />
      )}

      <Section name="portafolio">
        <ContentTitle>
          <Title type={2} text="Portafolio" color="#333" align="center" />
        </ContentTitle>
        <ContentProjects>
          {dataProjects.map(e => (
            <Box
              key={e.id}
              name={e.nombre}
              description={e.descripcion}
              image={e.image}
            />
          ))}
        </ContentProjects>
      </Section>

      <About />

      <Section name="team">
        <ContentTitle>
          <Title type={2} text="Team" color="#333" align="center" />
        </ContentTitle>
      </Section>

      <Section name="contact">
        <ContentTitle>
          <Title type={2} text="Contact" color="#333" align="center" />
        </ContentTitle>
      </Section>
    </PageHome>
  );
}

HomePage.propTypes = {
  getProjects: PropTypes.func,
  homePage: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getProjects: data => dispatch(getDataProjects(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withViewportHandler(injectIntl(HomePage)));
