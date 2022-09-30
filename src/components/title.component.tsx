import React, {ReactElement} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../public/images/title.png';
import {FadeAnimation} from '../animations/fade.animation';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(1rem);
  z-index: 20;
`;

export function TitleComponent(): ReactElement {
  return (
    <>
      <FadeAnimation delay={0}>
        <Container>
          <Image
            src={logo}
            alt=""
            // layout="responsive"
          />
        </Container>
      </FadeAnimation>
    </>
  );
}
