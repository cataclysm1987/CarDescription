import React, { Component } from 'react';
import Intro from './Intro.js';
import Body from './Body.js';
import Engine from './Engine.js';
import Transmission from './Transmission.js';
import Suspension from './Suspension.js';
import Brakes from './Brakes.js';
import Battery from './Battery.js';
import Top10Cars from './Top10Cars.js';

export class Home extends Component {

  render () {
      return (
          <div>
              <Intro></Intro>
              <Top10Cars></Top10Cars>
              <Body></Body>
              <Engine></Engine>
              <Transmission></Transmission>
              <Suspension></Suspension>
              <Brakes></Brakes>
              <Battery></Battery>
              
          </div>
        
    );
  }
}
