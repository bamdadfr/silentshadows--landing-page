import React, {ReactElement} from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalJSX = () => (
  // eslint-disable-next-line react/no-unknown-property
  <style jsx global>{`
    @font-face {
      font-family: Requiem;
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url('/fonts/requiem.regular.ttf') format('truetype');
    }
  `}</style>
);

export const GlobalStyled = createGlobalStyle`
  html {
    user-select: none;
    font-size: 150%;
  }
`;

export const Global = (): ReactElement => (
  <>
    <GlobalJSX />
    <GlobalStyled />
  </>
);
