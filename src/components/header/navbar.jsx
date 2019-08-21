import React from 'react';

const NavBar = () => (<>
  <div className="clearfix mt2">
    <a href="#work-history"><button className="btn caps bold mb1">Work History</button></a>
    <a href="#green-arrow-labs"><button className="btn caps bold ml1 mb1">What I worked on</button></a>
    <a href="#knowledge"><button className="btn caps bold ml1 mb1">Skills</button></a>
  </div>
  <div className="clearfix mt1">
    <a href="#giving-back"><button className="btn caps bold mb1">Giving Back</button></a>
    <a href="#before-tech"><button className="btn caps bold ml1 mb1">Before Tech</button></a>
  </div>
  <div className="clearfix mt1">
    <a href="#resume"><button className="btn caps bold mb1">Download Resume</button></a>
  </div>
</>);

export default NavBar;