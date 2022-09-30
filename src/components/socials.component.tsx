import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {Icon as BaseIcon} from '@iconify/react';

const Container = styled.div`
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

export function SocialsComponent(): ReactElement {
  return (
    <Container>
      <span>
        <a
          href="https://discord.gg/DyvqC3xX84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="fa-brands:discord" />
        </a>
      </span>
      <span>
        <a
          href="https://www.youtube.com/silentshadows"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="fa-brands:youtube" />
        </a>
      </span>
      <span>
        <a
          href="https://twitter.com/Silent_Shadows_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="fa-brands:twitter" />
        </a>
      </span>
    </Container>
  );
}
