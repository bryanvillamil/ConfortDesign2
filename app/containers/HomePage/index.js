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
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Header from '../../components/Header';
import Box from '../../components/Box';
import withViewportHandler from '../../components/withViewportHandler';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import { getDataProjects } from './actions';

import About from './About';
import Boxtext from './BoxText';

import BgHome from '../../images/Home/bgHome.jpg';
import { HeightContent } from '../Layout';

import {
  PageHome,
  ContentCarousel,
  ImgHome,
  ContentProjects,
  ContentSvgs,
  SvgSmall,
  SvgBig,
  Portafolio,
  Team,
} from './styledComponents';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  // const [OpenMenu, setOpenMenu] = useState(false);
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

      <Portafolio name="portafolio">
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
      </Portafolio>

      <Team name="team">
        <h1>Element Team</h1>
      </Team>

      <Element name="contact">
        <h1>Element Contact</h1>
      </Element>

      <About />
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
