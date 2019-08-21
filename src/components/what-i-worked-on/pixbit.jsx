import React from 'react';

const History = () => (
  <div id="pixbit">
    <div className="clearfix py3">
      <p className="section-title m0 mt4">What I worked on</p>
      <p className="bold">while at Pixbit</p><hr/>
      <p>My roles and responsibilities</p>

      <a href="http://www.thinkpixbit.com" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">See Company Site</button>
      </a>

      <p className="section-title">B2C</p>

      <ul className="list-reset mt2">
        <li>Head of Engineering</li>
        <li>Consultant</li>
        <li>Developer</li>
        <li>Recruiter</li>
        <li>Teacher</li>
        <li>Trainer</li>
        <li>Sales</li>
        <li>R&amp;D</li>
        <li>Mentor</li>
        <li>Trainer</li>
        <li>Established software best practices</li>
        <li>Daily code reviewer</li>
      </ul>
    </div>

    {/* <CiscoProject /> */}
    <div className="clearfix py3">
      <p className="bold">Client Project - Cisco's Customer Acquisition Tool</p><hr/>
      <p>Creating an interactive customer assessment tool to help Cisco funnel security leads.</p>

      <a href="http://www.thinkpixbit.com/portfolio/cisco-security-solutions" target="_blank" rel="noopener noreferrer">
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

    {/* <SnapsnipProject /> */}
    <div className="clearfix py3">
      <p className="bold">Client Project - SnapSnip Salon Platform</p><hr/>
      <p>A hair consultation tool that brings the principles of IT support ticket systems to the salon industry. Multiple salons all over the country are still using this platform everyday.</p>

      <a href="http://www.thinkpixbit.com/portfolio/snapsnip-product-creation" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">See Project</button>
      </a>
      {/* <a href="http://snapsnipapp.com" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">See Landing Page</button>
      </a> */}
      <a href="https://s3.amazonaws.com/thinkpixbit/public/snapsnip-ecosystem.png" target="_blank" rel="noopener noreferrer">
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

    {/* <PhotoboothProject /> */}
    <div className="clearfix py3">
      <p className="bold">Client Hardware Project - Photobooth</p><hr/>

      <p>Side project for <a href="http://www.joseandsons.com" target="_blank" rel="noopener noreferrer">Jose and Son's</a> restaraunt</p>

      <a href="http://holayall.com" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">See Photobooth</button>
      </a>

      <ul className="list-reset mt2">
        <li>Programmed completely in node</li>
        <li>Using a firebase backend</li>
        <li>Uses 2 angular webapps</li>
        <li>1 for the gallery</li>
        <li>1 for the booth</li>
        <li><a href="https://www.amazon.com/gp/product/B00CYGTH9I" target="_blank" rel="noopener noreferrer">Big red button</a></li>
      </ul>
    </div>

    {/* <BridgeSocialProject /> */}
    <div className="clearfix py3">
      <p className="bold">Our Product - Bridge Social</p><hr/>
      <p>Helps brands tell their story. User-generated content has the ability to engage, inspire, and drive new communities around brands. We listen, curate, and then highlight the voice of your brand champions for your events and campaigns.</p>

      <a href="http://www.thinkpixbit.com/portfolio/bridge-visual-system" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">See Project</button>
      </a>

      <ul className="list-reset mt2">
        <li>WYSIWYG custom theme builder/stylizer</li>
        <li>API powering stories</li>
        <li>Angular Webapp</li>
      </ul>
    </div>
  </div>
);

export default History;