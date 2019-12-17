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

  const { pathname, title } = props;

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
              selected={pathname === '/portafolio'}
              href="/portafolio"
            >
              Portafolio
            </LinkMobile>
          </ItemMobile>
          <ItemMobile>
            <LinkMobile selected={pathname === '/our-team'} href="/our-team">
              Our Team
            </LinkMobile>
          </ItemMobile>
          <ItemMobile>
            <LinkMobile
              selected={pathname === '/contact-us'}
              href="/contact-us"
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
  pathname: PropTypes.string.isRequired,
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
