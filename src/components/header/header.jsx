import React, { Component } from 'react';
import edwinFace from '../../assets/edwin-face.png';
import manFace from '../../assets/man-face.png';
import NavBar from './navbar';

class Header extends Component {
  state = {
    faceHover: false,
  };

  handleEnterFace = () => this.setState({ faceHover: true });
  handleExitFace = () => this.setState({ faceHover: false });
  getFace = () => this.state.faceHover ? edwinFace : manFace;

  render() {
    return (<>
      <p id="nombre-grande" className="m0 mt4">Hola</p>

      <ul className="list-reset">
        <li>I'm Edwin,</li>
        <li>startup tech founder</li>
        <li>turned product manager</li>
        <li>without a workplace to call home.</li>
      </ul>

      <div className="clearfix">
        <img id="edwins-face" onMouseEnter={this.handleEnterFace} onMouseLeave={this.handleExitFace} alt="face" className="col sm-col-2 md-col-3 lg-col-1" src={this.getFace()} />
      </div>

      <NavBar />
    </>);
  }
}

export default Header;