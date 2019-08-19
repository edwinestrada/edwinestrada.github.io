import React, { Component } from 'react';
import moreIcon from '../../assets/more.svg';

class Event extends Component {
  render() {
    const {
      date,
      title,
      subtitle,
      buttons,
      bubbleText,
      bubbleGiphyId,
    } = this.props;

    return (
      <li className="event">
        <label className="icon"></label>
        <div className="timeline-body">
          <button className="btn caps bold disabled">{date}</button>
          {title && <p className="bold mb0">{title}</p>}
          {subtitle && <><p>{subtitle}</p></>}
          {buttons && buttons.map(button => button)}
          {(bubbleText || bubbleGiphyId) && <blockquote class="bubble">
            <p className="mb0">{bubbleText}</p>
            {/* <p>My A-HA moment...</p> */}
            {bubbleGiphyId && <div style={{ paddingBottom: "56%", position:"relative" }}>
              <iframe
                title="bubble-media"
                src={"https://giphy.com/embed/" + bubbleGiphyId}
                width="100%"
                height="100%"
                style={{ position:"absolute" }}
                frameBorder="0"
                className="giphy-embed mt1"
              />
            </div>}
          </blockquote>}
        </div>
      </li>
    );
  }
}

export default Event;