import React from 'react';

const JobDescription = () => (
  <div>
    <p className="section-title m0 mt4">What I do now</p>
    <div className="clearfix py3">
      <p className="bold">My roles and responsibilities at Green Arrow Labs</p><hr/>
      <p>As a project manager, I work hard everyday to act as the superconductor between all of the software-related teams of the company.</p>

      <a href="https://www.greenarrowlabs.com" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">See Company Site</button>
      </a>

      <ul className="list-reset mt2">
        <li>Trained entire dev team to do work and releases in Docker</li>
        <li>On-site visits to Chinese labs to gather requirements</li>
        <li>On-site visits to US brands to gather requirements</li>
        <li>Migrated dev team from Angular 1.x to React</li>
        <li>Meeting facilitator for product design sprints</li>
        <li>Project manager for local and overseas team</li>
        <li>Established software best practices</li>
        <li>Daily code reviewer</li>
        <li>User research</li>
        <li>Scrum master</li>
        <li>Mentor</li>
        <li>Trainer</li>
      </ul>

      <p className="bold mt4">Team members that I help manage day-to-day</p><hr/>
      <ul className="list-reset mt2">
        <li>3 Full-time Backend Java Developers</li>
        <li>1 Full-time Backend Node Developer</li>
        <li>2 Full-time Frontend Developers</li>
        <li>1 Full-time Neo4j Developer</li>
        <li>1 Full-time Dev Team Lead</li>
        <li>1 Full-time QA Developer</li>
        <li>3 Devops Consultants</li>
        <li>1 Customer Success</li>
        <li>1 Full-time Designer</li>
        <li>1 Part-time Intern</li>
      </ul>

    </div>
  </div>
);

export default JobDescription;