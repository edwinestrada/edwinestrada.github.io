import React, { Component } from 'react';
import Header from './components/header';
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

            <div className="clearfix mt4">
              <a href="#green-arrow-labs"><button className="btn caps bold mb1">Current Job</button></a>
              <a href="#knowledge"><button className="btn caps bold ml1 mb1">Skills</button></a>
              <a href="#pixbit"><button className="btn caps bold ml1 mb1">Prev Startup Job</button></a>
              <a href="#giving-back"><button className="btn caps bold ml1 mb1">Giving Back</button></a>
              <a href="#before-tech"><button className="btn caps bold ml1 mb1">Before Tech</button></a>
            </div>

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
