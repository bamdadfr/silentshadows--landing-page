import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {DESCRIPTION} from '../constants';

const Container = styled.div`
  font-family: Requiem, sans-serif;
  z-index: 20;
`;

export function DescriptionComponent(): ReactElement {
  return (
    <>
      <Container>
        {DESCRIPTION}
      </Container>
    </>
  );
}
