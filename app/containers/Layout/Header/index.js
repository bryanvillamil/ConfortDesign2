/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import HamburgerMenu from 'react-hamburger-menu';
import ImgLogo from '../../../images/Logo.png';

import {
  ContentHeader,
  HeaderLogo,
  HeaderTopMobile,
  HeaderTitle,
  Hamburger,
  MenuDesktop,
  List,
  Item,
  ItemLink,
} from './styledComponents';

function Header(props) {
  const {
    viewport: { isMobileView },
    pathname,
    OpenMenu,
    handleClick,
    titleHeader,
  } = props;

  const PageHome = pathname === '/';

  return (
    <ContentHeader>
      <HeaderLogo>
        {PageHome ? (
          <img src={ImgLogo} alt="Logo" />
        ) : (
          <a href="/">
            <img src={ImgLogo} alt="Logo" />
          </a>
        )}
      </HeaderLogo>
      {isMobileView ? (
        <HeaderTopMobile>
          {!PageHome ? (
            <HeaderTitle>
              <span>{titleHeader}</span>
            </HeaderTitle>
          ) : (
            ''
          )}

          <Hamburger className={OpenMenu ? 'isOpen' : ''}>
            <HamburgerMenu
              isOpen={OpenMenu}
              menuClicked={handleClick}
              width={24}
              height={17}
              strokeWidth={2}
              rotate={0}
              color="#fff"
              borderRadius={0}
              animationDuration={0.5}
              className="hamburger"
            />
          </Hamburger>
        </HeaderTopMobile>
      ) : (
        <MenuDesktop>
          <List>
            <Item>
              <ItemLink
                to="portafolio"
                spy
                smooth
                delay={100}
                duration={1000}
                activeClass="active"
              >
                Portafolio
              </ItemLink>
            </Item>
            <Item>
              <ItemLink
                to="team"
                spy
                smooth
                delay={100}
                duration={1000}
                activeClass="active"
              >
                Our Team
              </ItemLink>
            </Item>
            <Item>
              <ItemLink
                to="contact"
                spy
                smooth
                delay={100}
                duration={1000}
                activeClass="active"
              >
                Contact Us
              </ItemLink>
            </Item>
          </List>
        </MenuDesktop>
      )}
    </ContentHeader>
  );
}

Header.propTypes = {
  viewport: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  OpenMenu: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
