import React, { Component } from 'react';
import Header from './components/header/header';
import Experience from './components/work-history/work-history';
import GreenArrowLabs from './components/what-i-worked-on/green-arrow-labs';
import Knowledge from './components/what-i-have-learned/knowledge';
import Pixbit from './components/what-i-worked-on/pixbit';
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

            {/* Intro and Navbar */}
            <Header />

            {/* Work history */}
            <Experience />

            {/* What I have worked on */}
            <GreenArrowLabs />
            <Pixbit />

            {/* What I have learned */}
            <Knowledge />

            {/* How I used my powers for good */}
            <GivingBack />

            <BeforeTech />

            {/* What I believe */}
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
