import React, {ReactElement} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../public/images/title.png';
import {FadeAnimation} from '../animations/fade.animation';
import {mediaQueries} from '../app/styles/breakpoints';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(1rem) scale(1.3);
  z-index: 20;
`;

const Spacer = styled.div`
  width: 20%;

  ${mediaQueries.above.mobile} {
    width: 0;
  }
`;

export function TitleComponent(): ReactElement {
  return (
    <>
      <FadeAnimation delay={0}>
        <Container>
          <Spacer />
          <Image
            src={logo}
            alt=""
            // layout="responsive"
          />
          <Spacer />
        </Container>
      </FadeAnimation>
    </>
  );
}
