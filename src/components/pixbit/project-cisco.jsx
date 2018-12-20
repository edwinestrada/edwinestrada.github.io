import React from 'react';

const Project = () => (
  <div className="clearfix py3">
    <p className="bold">Client Project - Cisco's Customer Acquisition Tool</p><hr/>
    <p>Creating an interactive customer assessment tool to help Cisco funnel security leads.</p>

    <a href="http://www.thinkpixbit.com/portfolio/cisco-security-solutions" target="_blank">
      <button className="btn caps bold">See Project</button>
    </a>
    <button className="btn caps bold disabled ml1">Ask me about it</button>

    <ul className="list-reset mt2">
      <li>Interactive D3-powered infographics from Cisco's Annual Security Report</li>
      <li>Admin-editable questions, conditional logic, and KPIs</li>
      <li>Official Cisco Branding</li>
      <li>Firebase Backend</li>
      <li>Angular Webapp</li>
    </ul>
  </div>
);

export default Project;