import React from 'react';
import JobDescription from './job-description';
import CiscoProject from './project-cisco';
import SnapsnipProject from './project-snapsnip';
import PhotoboothProject from './project-photobooth';
import BridgeSocialProject from './project-bridge-social';

const History = () => (
  <div id="pixbit">
    <JobDescription />
    <CiscoProject />
    <SnapsnipProject />
    <PhotoboothProject />
    <BridgeSocialProject />
  </div>
);

export default History;