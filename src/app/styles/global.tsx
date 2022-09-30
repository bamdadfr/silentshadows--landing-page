import React, {ReactElement} from 'react';
import {createGlobalStyle} from 'styled-components';
import {mediaQueries} from './breakpoints';

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
    background: black;

    font-size: 90%;

    ${mediaQueries.above.tablet} {
      font-size: 120%;
    }

    ${mediaQueries.above.desktop} {
      font-size: 130%;
    }

    ${mediaQueries.above.widescreen} {
      font-size: 140%;
    }

    ${mediaQueries.above.fullhd} {
      font-size: 150%;
    }
  }
`;

export const Global = (): ReactElement => (
  <>
    <GlobalJSX />
    <GlobalStyled />
  </>
);
