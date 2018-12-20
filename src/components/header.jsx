import React, { Component } from 'react';
import edwinFace from '../assets/edwin-face.png';
import manFace from '../assets/man-face.png';

class Header extends Component {
  state = {
    faceHover: false,
  };

  handleEnterFace = () => this.setState({ faceHover: true });
  handleExitFace = () => this.setState({ faceHover: false });

  render() {
    return (
      <div>
        <p id="nombre-grande" className="m0 mt4">Hola</p>
        <p>I'm Edwin.</p>
        <div className="clearfix py3 hide-on-desktop">
          <p>Just a bad hombre from Raleigh, NC.</p>
        </div>
        <div className="clearfix py3 hide-on-mobile">
          <p className="col col-4">Just a bad hombre.</p>
          <p className="col col-8 px3">Based in Raleigh, NC.</p>
        </div>
        <div className="clearfix">
          {
            this.state.faceHover ?
            <img onMouseEnter={this.handleEnterFace} onMouseLeave={this.handleExitFace} id="mi-cabeza-de-verdad" className="col sm-col-2 md-col-3 lg-col-1" src={edwinFace} /> :
            <img onMouseEnter={this.handleEnterFace} onMouseLeave={this.handleExitFace} id="mi-cabeza" className="col sm-col-2 md-col-3 lg-col-1" src={manFace} />
          }
        </div>
      </div>
    );
  }
}

export default Header;