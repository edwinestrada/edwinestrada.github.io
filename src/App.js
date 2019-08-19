import React, { Component } from 'react';
import Header from './components/header/header';
import Snapsnip from './components/snapsnip/snapsnip';
import GreenArrowLabs from './components/green-arrow-labs/green-arrow-labs';
import Knowledge from './components/knowledge/knowledge';
import Pixbit from './components/pixbit/pixbit';
import GivingBack from './components/giving-back/giving-back';
import BeforeTech from './components/before-tech/before-tech';
import Beliefs from './components/beliefs/beliefs';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div id="bad-hombre" className="m4">
          <div className="max-width-4 mx-auto mb2">

            <Header />
            <Snapsnip />
            <GreenArrowLabs />
            <Knowledge />
            <Pixbit />
            <GivingBack />
            <BeforeTech />
            <Beliefs />

            <div className="mb3">
              <p className="h6">* incomplete sentences have periods because they look way better that way</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
