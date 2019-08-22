import React from 'react';

const DaleLari = () => (
  <div className="clearfix py3">
    <p className="bold">A non-profit Kickstarter project I helped build in honor of my little sister</p><hr/>
    <ul className="list-reset">
      <li>Dale Lari - A Global Soccer Project</li>
    </ul>

    <div className="hide-on-mobile">
      <a href="https://www.kickstarter.com/projects/1301122510/dale-lari-a-global-soccer-project" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">See Kickstarter</button>
      </a>
      <a href="https://vimeo.com/pixbit/dalelaridocumentary" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold ml1">Watch Video</button>
      </a>
    </div>

    <div className="hide-on-desktop">
      <ul className="list-reset mt2 no-bullets">
        <li>
          <a href="https://www.kickstarter.com/projects/1301122510/dale-lari-a-global-soccer-project" target="_blank" rel="noopener noreferrer">
            <button className="btn caps bold">See Kickstarter</button>
          </a>
        </li>
        <li>
          <a href="https://vimeo.com/pixbit/dalelaridocumentary" target="_blank" rel="noopener noreferrer">
            <button className="btn caps bold">Watch Video</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default DaleLari;