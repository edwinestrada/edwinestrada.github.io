import React from 'react';
import linkLogo from '../../assets/link-logo.png';

const Project = () => (
  <div className="clearfix py3">
    <p className="bold">Snapsnip - Hair Salon Virtual Consultation Tool</p><hr/>
    <img alt='link logos' src={linkLogo} className="py2" />
    <p>Customer and salon team platform that allows guests to take photos of themselves, upload inspirations, and then have stylists assess their snaps to ensure accurate pricing and properly booked appointments.</p>

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