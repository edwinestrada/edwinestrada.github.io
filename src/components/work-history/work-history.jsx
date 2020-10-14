import React, { Component } from 'react';
import Timeline from './timeline';
import Event from './event';
import YouCanDoIt from '../../assets/you-can-do-it.gif';
import WowClap from '../../assets/wow-clap.gif';
import GodDog from '../../assets/i-am-a-god-or-a-dog.png';

const events = [
  <Event
    key="0"
    date="2020"
    title="Product Manager"
    subtitle="Looking for a company to call home!"
  />,
  <Event
    key="2"
    date="2017 - 2019"
    title="Senior Technical Product Manager"
    subtitle="Green Arrow Labs"
    link="#green-arrow-labs"
    bubbleParagraphs={[
      "Engineered webapps and API's for the world's largest footwear & apparel brands so they could control quality, chemical, and physical testing among their suppliers and laboratories.",
      "Managed overseas team based out of India while attending to customers in China, Germany, and across the US. ✈️",
    ]}
  />,
  <Event
    key="3"
    date="2017"
    title="Full-stack Web Developer"
    subtitle="Lithios"
    bubbleParagraphs={[
      "It was time to transition to a more stable job now that I had a family to look after.",
      "I went back to my developer roots for a 6-month contract with a great team, making an exciting co-working space product while I was job hunting.",
    ]}
  />,
  <Event
    key="4"
    date="2012 - 2017"
    title="Co-founder, Product Manager"
    subtitle="Pixbit"
    link="#pixbit"
    bubbleParagraphs={[
      "My co-founder and I combined his design (pixel) skills with my tech (bit) skills to create our startup company called 'Pixbit.' 🤓",
      "We would start by uncovering the stories behind the businesses by creating their brands and then powering that content using our site builder products.",
      "After some time, our products outgrew what the Wordpress framework could handle, and we evolved into making full-scale, cloud-native web apps. ☁️",
    ]}
  />,
  <Event
    key="5"
    date="2012 - 2013"
    title="Wordpress Developer"
    subtitle="North Carolina State University"
    bubbleParagraphs={[
      "This position was my first full-time job as a developer, where I upped my Wordpress skills and toolbox while building project portfolio sites for researchers by the dozen. 👨🏻‍💻",
    ]}
  />,
  <Event
    key="6"
    date="2008 - 2012"
    title="Library Technical Assistant II"
    subtitle="North Carolina State University"
    bubbleParagraphs={[
      "Somehow I convinced my boss to let me create a search-by-skills staff directory web app and iPad app with a Wordpress CMS.",
      "This project was the first time I tapped into the potential of using Wordpress as a powerful, out-of-the-box CMS platform that I could tweak to do my bidding...",
    ]}
    bubbleImage={WowClap}
  />,
  <Event
    key="7"
    date="2005 - 2008"
    title="Student Club Webmaster"
    subtitle="Society of Hispanic Engineers"
    bubbleParagraphs={[
      "I was barely learning, but my static HTML/CSS and Flash websites made me feel like I was on top of the world.",
    ]}
    bubbleImage={GodDog}
  />,
];

class Experience extends Component {
  render() {
    // const {} = this.props;

    return (<>
      <p id="work-history" className="section-title m0 mt4">How I got to today</p>
      <p className="bold">my tech industry timeline</p>
      <hr/>
      <Timeline events={events} />
    </>);
  }
}

export default Experience;