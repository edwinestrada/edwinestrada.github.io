import React from 'react';

const JobDescription = () => (
  <div>
    <p className="section-title m0 mt4">What I do now at Green Arrow Labs</p>
    <div className="clearfix py3">
      <p className="bold">My Roles and Responsibilities</p><hr/>
      <p>As a project manager, I work hard everyday to be the superconductor between all of the software-related teams at the company.</p>

      <a href="https://www.greenarrowlabs.com" target="_blank">
        <button className="btn caps bold">See Company Site</button>
      </a>

      <ul className="list-reset mt2">
        <li>Project Manager</li>
        <li>Code Reviewer</li>
        <li>User Research</li>
        <li>Scrum Master</li>
        <li>Mentor</li>
        <li>Trainer</li>
      </ul>


      <p className="bold mt4">Teams that I manage</p><hr/>
      <ul className="list-reset mt2">
        <li>Customer Success Team</li>
        <li>9 Overseas Developers</li>
        <li>Devops Consultants</li>
        <li>Local Developers</li>
        <li>Designers</li>
        <li>Sales</li>
      </ul>

    </div>
  </div>
);

export default JobDescription;