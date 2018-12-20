import React from 'react';

const JobDescription = () => (
  <div>
    <p className="section-title m0 mt4">What I used to do at Pixbit</p>
    <div className="clearfix py3">
      <p className="bold">My Roles and Responsibilities</p><hr/>
      <p>Co-founded a startup called Pixbit and grew it with love for 5 years.</p>

      <a href="http://www.thinkpixbit.com" target="_blank">
        <button className="btn caps bold">See Company Site</button>
      </a>

      <ul className="list-reset mt2">
        <li>Head of Engineering</li>
        <li>Consultant</li>
        <li>Developer</li>
        <li>Recruiter</li>
        <li>Teacher</li>
        <li>Trainer</li>
        <li>Sales</li>
        <li>R&amp;D</li>
      </ul>
    </div>
  </div>
);

export default JobDescription;