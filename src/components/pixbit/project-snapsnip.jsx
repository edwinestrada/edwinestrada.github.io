import React from 'react';

const Project = () => (
  <div className="clearfix py3">
      <p className="bold">Client Project - SnapSnip Salon Platform</p><hr/>
      <p>A hair consultation tool that brings the principles of IT support ticket systems to the salon industry. Multiple salons all over the country are still using this platform everyday.</p>

      <a href="http://www.thinkpixbit.com/portfolio/snapsnip-product-creation" target="_blank">
        <button className="btn caps bold">See Project</button>
      </a>
      {/* <a href="http://snapsnipapp.com" target="_blank">
        <button className="btn caps bold">See Landing Page</button>
      </a> */}
      <a href="https://s3.amazonaws.com/thinkpixbit/public/snapsnip-ecosystem.png" target="_blank">
        <button className="btn caps bold ml1">See Ecosystem</button>
      </a>

      <ul className="list-reset mt2">
        <li>300+ users consisting of receptionists, stylists, and salon owners</li>
        <li>3,200+ customer selfies taken by people wanting haircuts</li>
        <li>1,200+ salon guests funneled through ecosystem</li>
        <li>1,300+ consultations made through ecosystem</li>
        <li>1,800+ inspiration pictures uploaded</li>
        <li>Notification Center iPhone app</li>
        <li>Guest Wordpress Plugin</li>
        <li>Solo Artist iPhone app</li>
        <li>Guest iPhone app</li>
        <li>Guest Webapp</li>
        <li>Salon Webapp</li>
        <li>Entire API</li>
      </ul>
    </div>
);

export default Project;