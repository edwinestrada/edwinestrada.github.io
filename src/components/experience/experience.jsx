import React, { Component } from 'react';
import Timeline from './timeline';
import Event from './event';

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
  />,
  <Event
    date="2017"
    title="Full-stack Developler"
    subtitle="Lithios"
  />,
  <Event
    date="2012 - 2017"
    title="Chief Product Officer"
    subtitle="Pixbit"
    bubbleText="This was when I had the biggest game-changer in my career so far. I met my co-founder who brought all
    the skills I did not have to the table. We combined his graphic/typography/photography skills (pixel as in design)
    my tech skills (bit as in code) to create our startup called 'Pixbit' to empower people through our products."
  />,
  <Event
    date="2012 - 2013"
    title="Wordpress Developer"
    subtitle="North Carolina State University"
    bubbleText="This was my first full-time job as a developer where I upped my Wordpress skills and toolbox while
    building project portfolio sites for researchers by the dozen. 👨🏻‍💻"
  />,
  <Event
    date="2008 - 2012"
    title="Library Technical Assistant II"
    subtitle="North Carolina State University"
    bubbleText="Convinced my boss to let me create a search-by-skills staff directory. This was the first time I tapped
    into the potential of using Wordpress as a powerful, out-of-the-box CMS platform that I could tweak to do my
    bidding..."
    bubbleGiphyId="xT77XWum9yH7zNkFW0"
  />,
  <Event
    date="2005 - 2008"
    title="Student Club Webmaster"
    subtitle="Society of Hispanic Engineers"
    bubbleText="Signed up to do this to try to impress a girl I had a crush on. 🤦🏻"
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