import React, { Component } from 'react';
// import edwinFace from '../../assets/edwin-face.png';
// import manFace from '../../assets/man-face.png';
// import edwinInBar from '../../assets/edwin-in-a-bar.jpg';
// import edwinNoBG from '../../assets/edwin-no-background.png';
// import edwinRedBG from '../../assets/edwin-profile-pic-red-bg.png';
import edwinGreenBG from '../../assets/edwin-profile-pic-green-bg.png';
import NavBar from './navbar';

class Header extends Component {
  state = {
    faceHover: false,
  };

  handleEnterFace = () => this.setState({ faceHover: true });
  handleExitFace = () => this.setState({ faceHover: false });
  // getFace = () => this.state.faceHover ? edwinFace : manFace;
  // getFace = () => this.state.faceHover ? edwinRedBG : edwinGreenBG;
  getFace = () => edwinGreenBG;

  render() {
    return (<>
      <p id="nombre-grande" className="m0 mt4">Hola</p>

      <ul className="list-reset no-bullets">
        <li>I'm Edwin,</li>
        <li>startup tech founder</li>
        <li>turned product manager.</li>
        {/* <li>without a workplace to call home.</li> */}
      </ul>

      <div className="clearfix">
        <img
          id="edwins-face"
          onMouseEnter={this.handleEnterFace}
          onMouseLeave={this.handleExitFace}
          alt="face"
          className="col col-4 md-col-3 lg-col-2"
          src={this.getFace()}
        />
      </div>

      <NavBar />
    </>);
  }
}

export default Header;