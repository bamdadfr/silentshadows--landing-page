import React, {ReactElement} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import background from '../../public/images/background.jpg';

const Container = styled.div`
  position: absolute;

  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

export function BackgroundComponent(): ReactElement {
  return (
    <Container>
      <Image
        src={background}
        alt=""
        objectFit="cover"
        layout="fill"
      />
    </Container>
  );
}
