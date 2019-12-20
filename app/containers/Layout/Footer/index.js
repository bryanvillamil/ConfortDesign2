import React from 'react';

import {
  ContentFooter,
  FooterLeft,
  Textinfo,
  FooterRight,
  FooterCenter,
  TitleFooter,
  Link,
} from './styledComponents';

function Footer() {
  return (
    <ContentFooter>
      <FooterLeft>
        <Textinfo>Medellin - Colombia</Textinfo>
        <Textinfo>instagram:</Textinfo>
        <Link href="mailto:confortdesign@gmail.com" className="emailDesktop2">
          confortdesign@gmail.com
        </Link>
      </FooterLeft>
      <FooterCenter>
        <TitleFooter>Confort Design</TitleFooter>
      </FooterCenter>
      <FooterRight>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Textinfo>Copyright © 2019</Textinfo>
      </FooterRight>
    </ContentFooter>
  );
}

export default Footer;
