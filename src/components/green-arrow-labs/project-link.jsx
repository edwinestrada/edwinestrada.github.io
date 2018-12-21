import React from 'react';
import linkLogo from '../../assets/link-logo.png';

const Project = () => (
  <div className="clearfix py3">
    <p className="bold">Our Product - Link Supply Chain Management Tool</p><hr/>
    <img alt='link logos' src={linkLogo} className="py2" />
    <p>Provides a common platform for collaboration between the world's largest footwear/apparel brands, their suppliers, and testing laboratories as they manufacture, test, and import along the entire supply chain.</p>
    <p>Below are some of the main things I do for the product team.</p>

    <a href="https://www.greenarrowlabs.com/Link-Services-Software" target="_blank" rel="noopener noreferrer">
      <button className="btn caps bold">See Project</button>
    </a>

    <ul className="list-reset mt2">
      <li>Architected graph database to track of relationships between brands, suppliers, &amp; labs</li>
      <li>Gather requirements from our footwear and apparel client brands</li>
      <li>Closely coordinate finance and resources throughout project</li>
      <li>Prepare sprint submission presentations and deliverables</li>
      <li>Lead storyboarding, lo-fi, mid-fi, and hi-fi prototyping</li>
      <li>Architect the micro-services powering the platform</li>
      <li>Go on-site to support sales and begin on-boarding</li>
      <li>Establish, clarify, and verify delivery of features</li>
      <li>Remove blockers for dev and design teams</li>
      <li>Build and maintain the CI/CD pipeline</li>
    </ul>
  </div>
);

export default Project;