/**
 *
 * Layout
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import withViewportHandler from '../../components/withViewportHandler';
import makeSelectLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import Footer from './Footer';

import {
  GeneralContainer,
  Content,
  MenuMobile,
  ListMobile,
  ItemMobile,
  LinkMobile,
} from './styledComponents';

export const HeightContent = React.createContext();

export function Layout(props) {
  useInjectReducer({ key: 'layout', reducer });
  useInjectSaga({ key: 'layout', saga });

  const [openMenu, setOpenMenu] = useState(false);

  const { title } = props;

  return (
    <GeneralContainer className={openMenu ? 'MenuIsOpen' : ''}>
      <HeightContent.Provider value={{ title, openMenu, setOpenMenu }}>
        <Content>{props.children}</Content>
      </HeightContent.Provider>

      <Footer />

      <MenuMobile className={openMenu ? 'MenuIsOpen' : ''} id="menuMobile">
        <ListMobile>
          <ItemMobile>
            <LinkMobile
              to="portafolio"
              spy
              smooth
              delay={100}
              duration={1000}
              activeClass="active"
            >
              Portafolio
            </LinkMobile>
          </ItemMobile>
          <ItemMobile>
            <LinkMobile
              to="team"
              spy
              smooth
              delay={100}
              duration={1000}
              activeClass="active"
            >
              Our Team
            </LinkMobile>
          </ItemMobile>
          <ItemMobile>
            <LinkMobile
              to="contact"
              spy
              smooth
              delay={100}
              duration={1000}
              activeClass="active"
            >
              Contact Us
            </LinkMobile>
          </ItemMobile>
        </ListMobile>
      </MenuMobile>
    </GeneralContainer>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  layout: makeSelectLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withViewportHandler(injectIntl(Layout)));
