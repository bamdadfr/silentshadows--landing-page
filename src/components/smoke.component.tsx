import React, {ReactElement, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Canvas} from '../lib/smoke/canvas';
import {Smoke} from '../lib/smoke/smoke';

const SmokeContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 100vw;

  pointer-events: none;
`;

export function SmokeComponent(): ReactElement {
  const smokeContainer = useRef();

  useEffect(() => {
    const canvas = new Canvas(smokeContainer.current, window);
    const smoke = new Smoke(canvas);
    smoke.animate();
  }, []);

  return (
    <>
      <SmokeContainer ref={smokeContainer} />
    </>
  );
}
