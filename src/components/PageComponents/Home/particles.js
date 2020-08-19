import React from 'react';
import ReactDOM from 'react-dom';
import { Particles } from '@blackbox-vision/react-particles';

const ParticlesJs = ({ children }) => {
    return(
  <Particles
    id="simple"
    width="auto"
    height="100vh"
    style={{
      backgroundColor: 'black',
    }}
    params={{
      particles: {
        number: {
          value: 50,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
            mode: 'repulse',
          },
        },
      },
    }}
  >{children}</Particles>
);
}

export default ParticlesJs