import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {FadeAnimation} from '../animations/fade.animation';
import {FREQ} from '../constants';

const Container = styled.div`
  font-family: Requiem, sans-serif;
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

const Small = styled.span`
  font-size: 0.8rem;
`;

export function DescriptionComponent(): ReactElement {
  return (
    <>
      <Container>
        <FadeAnimation delay={FREQ}>
          <span>
            The Burning Crusade Classic has come to an end.
          </span>
        </FadeAnimation>
        <FadeAnimation delay={2 * FREQ}>
          <Small>
            It is now time for our website to close its doors.
          </Small>
        </FadeAnimation>
      </Container>
    </>
  );
}
