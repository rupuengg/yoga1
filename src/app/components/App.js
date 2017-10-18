import React from 'react';

import { Head } from '../common/Head.js';
import { Foot } from '../common/Foot.js';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Head/>
        {this.props.children}
        <Foot/>
      </div>
    );
  }
}
