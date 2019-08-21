import React, { Component } from 'react';

class Event extends Component {
  render() {
    const {
      date,
      title,
      link,
      subtitle,
      buttons,
      bubbleParagraphs,
      bubbleGiphyId,
      bubbleImage,
    } = this.props;

    return (
      <li className="event">
        <label className="icon"></label>
        <div className="timeline-body">
          <button className="btn caps bold disabled">{date}</button>
          {title && <p className="bold mb0">
            {link ? <a href={link}>{title}</a> : title}
          </p>}
          {subtitle && <><p>{subtitle}</p></>}
          {buttons && buttons.map(button => button)}
          {(bubbleParagraphs || bubbleGiphyId) && <blockquote class="bubble">
            {bubbleParagraphs && bubbleParagraphs.map((p,i) => <p className={i === 0 ? "mb0" : "mb0 mt1"}>{p}</p>)}
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
            {bubbleImage && <img alt="bubble-pic" className="mt1" src={bubbleImage} /> }
          </blockquote>}
        </div>
      </li>
    );
  }
}

export default Event;