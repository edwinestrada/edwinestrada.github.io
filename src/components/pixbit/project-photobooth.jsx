import React from 'react';

const Project = () => (
  <div className="clearfix py3">
    <p className="bold">Client Hardware Project - Photobooth</p><hr/>

    <p>Side project for <a href="http://www.joseandsons.com" target="_blank">Jose and Son's</a> restaraunt</p>

    <a href="http://holayall.com" target="_blank">
      <button className="btn caps bold">See Photobooth</button>
    </a>

    <ul className="list-reset mt2">
      <li>Programmed completely in node</li>
      <li>Using a firebase backend</li>
      <li>Uses 2 angular webapps</li>
      <li>1 for the gallery</li>
      <li>1 for the booth</li>
      <li><a href="https://www.amazon.com/gp/product/B00CYGTH9I" target="_blank">Big red button</a></li>
    </ul>
  </div>
);

export default Project;