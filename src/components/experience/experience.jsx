import React, { Component } from 'react';
import Timeline from './timeline';
import Event from './event';
import GodDog from '../../assets/i-am-a-god-or-a-dog.png';

const events = [
  <Event
    date="Today"
    title="Product Manager"
    subtitle="In search for company to call home"
  />,
  <Event
    date="2017 - 2019"
    title="Product Manager"
    subtitle="Green Arrow Labs"
    bubbleParagraphs={[
      "Got the chance to work with the world's largest footwear & apparel brands to create a platform where they can manage quality, chemical, and physical testing among their suppliers and laboratories.",
      "It was great to be able to go do product design sprints and interviews on-site with the brand teams all over the US and the lab teams in China. ✈️",
    ]}
  />,
  <Event
    date="2017"
    title="Full-stack Developer"
    subtitle="Lithios"
    bubbleParagraphs={[
      "After many years of being a product manager with my startup, it was time to transition to more a stable work now that I had a family to look after.",
      "I went back to my developer roots for 6 month contract with a really great team making an exciting co-working space product.",
    ]}
  />,
  <Event
    date="2012 - 2017"
    title="Chief Product Officer"
    subtitle="Pixbit"
    bubbleParagraphs={[
      "My co-founder and I combined his design (pixel) skills with my tech (bit) skills to create our startup company called 'Pixbit'. 🤓",
      "We would start by sharing stories of business owners through creating their brands and then powering their businesses with the products we built on top of the Wordpress framework.",
      "This was the part of my career where I learned how to do analysis, research, techniques, and product design sprints with our customers so that I could come back to our engineering and design teams with the WHY behind what they needed to be successful.",
      "After some time, our products outgrew what the Wordpress framework could handle and we evolved into making full-scale, cloud-native webapps. ☁️",
    ]}
  />,
  <Event
    date="2012 - 2013"
    title="Wordpress Developer"
    subtitle="North Carolina State University"
    bubbleParagraphs={[
      "This was my first full-time job as a developer where I upped my Wordpress skills and toolbox while building project portfolio sites for researchers by the dozen. 👨🏻‍💻",
    ]}
  />,
  <Event
    date="2008 - 2012"
    title="Library Technical Assistant II"
    subtitle="North Carolina State University"
    bubbleParagraphs={[
      "Somehow I convinced my boss to let me create a search-by-skills staff directory webapp and iPad app with a Wordpress CMS.",
      "This was the first time I tapped into the potential of using Wordpress as a powerful, out-of-the-box CMS platform that I could tweak to do my bidding...",
    ]}
    bubbleGiphyId="xT77XWum9yH7zNkFW0"
  />,
  <Event
    date="2005 - 2008"
    title="Student Club Webmaster"
    subtitle="Society of Hispanic Engineers"
    bubbleParagraphs={[
      "I was barely learning, but my static html/css websites made me feel like I was on top of the world.",
    ]}
    bubbleImage={GodDog}
  />,
];

class Experience extends Component {
  render() {
    // const {} = this.props;

    return (<>
      <p className="section-title m0 mt4">How I got to today</p>
      <Timeline events={events} />
    </>);
  }
}

export default Experience;