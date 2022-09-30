import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {TitleComponent} from '../components/title.component';
import {DescriptionComponent} from '../components/description.component';
import {SocialsComponent} from '../components/socials.component';
import {SmokeComponent} from '../components/smoke.component';
import {BackgroundComponent} from '../components/background.component';
import {SeoComponent} from '../components/seo.component';
import {DESCRIPTION} from '../constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  padding: 1rem;

  color: white;

  gap: 2rem;
  transform: translateY(-1rem);
`;

export default function Index(): ReactElement {
  return (
    <>
      <SeoComponent
        canonical=""
        description={DESCRIPTION}
      />

      <BackgroundComponent />
      <SmokeComponent />

      <Container>
        <TitleComponent />
        <DescriptionComponent />
        <SocialsComponent />
      </Container>
    </>
  );
}
