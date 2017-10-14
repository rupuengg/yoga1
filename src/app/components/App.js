import React from 'react';

import { Head } from '../common/Head.js'
import { Foot } from '../common/Foot.js'
import { Section1 } from '../home/Section1.js'

export class App extends React.Component{
  render(){
    return(
      <div>
        <Head/>
        <Section1/>
        <Foot/>
      </div>
    );
  }
}
