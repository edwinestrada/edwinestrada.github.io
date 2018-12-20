import React from 'react';

const Project = () => (
  <div className="clearfix py3">
    <p className="bold">Non-profit Project - Azul</p><hr/>
    <p>Taught technology-focused courses and managed initiatives for our communities.</p>
    <a href="http://react.thinkpixbit.com" target="_blank">
      <button className="btn caps bold">See React Course</button>
    </a>
    <button className="btn caps bold disabled ml1">Ask me about it</button>

    <ul className="list-reset mt2">
      <li>React 101 and Rapid Prototyping Course</li>
      <li>Teaching minority high schoolers</li>
      <li>Providing veterans gap training</li>
      <li>User Testing Workshops</li>
      <li>Intro to HTML and CSS</li>
      <li>Intro to Javascript</li>
      <li>Intro to Github</li>
      <li>Internships</li>
    </ul>
  </div>
);

export default Project;