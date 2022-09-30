import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {Icon as BaseIcon} from '@iconify/react';
import {FadeAnimation} from '../animations/fade.animation';
import {FREQ} from '../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.4rem;
  z-index: 20;
`;

const Icon = styled(BaseIcon)`
  &:hover {
    color: #d6cd2a;
    transition: color 200ms ease;
  }
`;

const Text = styled.span`
  font-family: Requiem, sans-serif;
  font-size: 0.8rem;
`;

export function SocialsComponent(): ReactElement {
  return (
    <FadeAnimation delay={3 * FREQ}>
      <Container>
        <Text>
          You can find us here
        </Text>
        <ButtonsContainer>
          <FadeAnimation delay={3.2 * FREQ}>
            <span>
              <a
                href="https://discord.gg/DyvqC3xX84"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="fa-brands:discord" />
              </a>
            </span>
          </FadeAnimation>

          <FadeAnimation delay={3.4 * FREQ}>
            <span>
              <a
                href="https://www.youtube.com/silentshadows"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="fa-brands:youtube" />
              </a>
            </span>
          </FadeAnimation>
        </ButtonsContainer>
      </Container>
    </FadeAnimation>
  );
}
