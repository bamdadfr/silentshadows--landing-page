import React, {ReactElement} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../public/images/title.png';

const Container = styled.div`
  transform: translateY(1rem) scale(1.3);
  z-index: 20;
`;

export function TitleComponent(): ReactElement {
  return (
    <>
      <Container>
        <Image
          src={logo}
          alt=""
          // layout="responsive"
        />
      </Container>
    </>
  );
}
