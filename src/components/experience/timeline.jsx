import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    const {
      events,
    } = this.props;

    return (<>
      <div className="clearfix py3">
        <div className="timeline-container">
          <ul className="timeline">
            {events && events.map(event => event)}
          </ul>
        </div>
      </div>
    </>);
  }
}

export default Timeline;