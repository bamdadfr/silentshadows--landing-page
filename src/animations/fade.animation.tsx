import React, {ReactElement} from 'react';
import {animated, useSpring} from '@react-spring/web';

interface Props {
  children: ReactElement[] | ReactElement;
  delay?: number;
  isVisible?: boolean;
}

export function FadeAnimation({
  children,
  delay = 0,
  isVisible = true,
}: Props): ReactElement {
  const style = useSpring({
    from: {opacity: isVisible ? 0 : 1},
    to: {opacity: isVisible ? 1 : 0},
    delay: isVisible ? delay : 0,
    config: {
      mass: 20,
    },
  });

  return (
    <>
      <animated.div style={style}>
        {children}
      </animated.div>
    </>
  );
}
