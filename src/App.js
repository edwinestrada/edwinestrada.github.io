import React, { Component } from 'react';
import './App.css';
import edwinFace from './assets/edwin-face.png';
import manFace from './assets/man-face.png';

class App extends Component {
  state = {
    faceHover: false,
  };

  handleEnter = () => {
    this.setState({ faceHover: true });
  }

  handleExit = () => {
    this.setState({ faceHover: false });
  }

  render() {
    return (
      <div className="container">
        <div id="bad-hombre" className="m4">
        <div className="max-width-4 mx-auto mb2">

          <div>
            <p id="nombre-grande" className="m0 pt4">Hola</p>
            <p>I'm Edwin.</p>
            <div className="clearfix py3 hide-on-desktop">
              <p>Just a bad hombre from Raleigh, NC.</p>
            </div>
            <div className="clearfix py3 hide-on-mobile">
              <p className="col col-4">Just a bad hombre.</p>
              <p className="col col-8 px3">Based in Raleigh, NC.</p>
            </div>
            <div className="clearfix pb3">
              {
                this.state.faceHover ?
                <img onMouseEnter={this.handleEnter} onMouseLeave={this.handleExit} id="mi-cabeza-de-verdad" className="col sm-col-2 md-col-3 lg-col-1" src={edwinFace} /> :
                <img onMouseEnter={this.handleEnter} onMouseLeave={this.handleExit} id="mi-cabeza" className="col sm-col-2 md-col-3 lg-col-1" src={manFace} />
              }
            </div>
          </div>

          <div>
            <p className="section-title m0 pt4">What I have done at Pixbit.</p>
            <div className="clearfix py3">
              <p className="bold">Real World Job</p><hr/>
              <p>I have been the co-founder of Pixbit for a little less than 5 years.</p>

              <a href="http://www.thinkpixbit.com" target="_blank">
                <button className="btn caps bold">See Company Site</button>
              </a>

              <ul className="list-reset">
                <li>Head of Engineering</li>
                <li>Consultant</li>
                <li>Developer</li>
                <li>Recruiter</li>
                <li>Teacher</li>
                <li>Trainer</li>
                <li>Sales</li>
                <li>R&amp;D</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Cisco's Customer Acquisition Tool</p><hr/>
              <p>Creating an interactive customer assessment tool to help Cisco funnel security leads.</p>

              <a href="http://www.thinkpixbit.com/portfolio/cisco-security-solutions" target="_blank">
                <button className="btn caps bold">See Project</button>
              </a>
              <button className="btn caps bold disabled">Ask me about it</button>

              <ul className="list-reset">
                <li>Interactive D3-powered infographics from Cisco's Annual Security Report</li>
                <li>Admin-editable questions, conditional logic, and KPIs</li>
                <li>Official Cisco Branding</li>
                <li>Firebase Backend</li>
                <li>Angular Webapp</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">SnapSnip</p><hr/>
              <p>A hair consultation tool that brings the principles of IT support ticket systems to the salon industry</p>

              <a href="http://www.thinkpixbit.com/portfolio/snapsnip-product-creation" target="_blank">
                <button className="btn caps bold">See Project</button>
              </a>
              {/* <a href="http://snapsnipapp.com" target="_blank">
                <button className="btn caps bold">See Landing Page</button>
              </a> */}
              <a href="https://s3.amazonaws.com/thinkpixbit/public/snapsnip-ecosystem.png" target="_blank">
                <button className="btn caps bold">See Ecosystem</button>
              </a>

              <ul className="list-reset">
                <li>300+ users consisting of receptionists, stylists, and salon owners</li>
                <li>3,200+ customer selfies taken by people wanting haircuts</li>
                <li>1,200+ salon guests funneled through ecosystem</li>
                <li>1,300+ consultations made through ecosystem</li>
                <li>1,800+ inspiration pictures uploaded</li>
                <li>Guest Wordpress Plugin</li>
                <li>Solo Artist iPhone app</li>
                <li>Guest iPhone app</li>
                <li>Guest Webapp</li>
                <li>Salon Webapp</li>
                <li>Entire API</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Bridge Social</p><hr/>
              <p>Helps brands tell their story. User-generated content has the ability to engage, inspire, and drive new communities around brands. We listen, curate, and then highlight the voice of your brand champions for your events and campaigns.</p>

              <a href="http://www.thinkpixbit.com/portfolio/bridge-visual-system" target="_blank">
                <button className="btn caps bold">See Project</button>
              </a>
              <button className="btn caps bold disabled">Ask me about it</button>

              <ul className="list-reset">
                <li>WYSIWYG custom theme builder/stylizer</li>
                <li>API powering stories</li>
                <li>Angular Webapp</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Azul</p><hr/>
              <p>Technology-focused courses and programs designed for our communities.</p>
              <a href="http://react.thinkpixbit.com" target="_blank">
                <button className="btn caps bold">See React Course</button>
              </a>
              <button className="btn caps bold disabled">Ask me about it</button>

              <ul className="list-reset">
                <li>React 101 and Rapid Prototyping Course</li>
                <li>Teaching minority high schoolers</li>
                <li>Providing veterans gap training</li>
                <li>User Testing Workshops</li>
                <li>Intro to HTML and CSS</li>
                <li>Intro to Javascript</li>
                <li>Intro to Github</li>
                <li>Internships</li>
              </ul>
            </div>

          </div>

          <div>
            <p className="section-title m0 pt4">What I have learned at Pixbit.</p>
            <div className="clearfix py3">
              <p className="bold">Development</p><hr/>
              <ul className="list-reset">
                <li>A whole lot of Javascript</li>
                <li>My new favorite: React</li>
                <li>Lots of Node + Express</li>
                <li>Phonegap/Cordova</li>
                <li>Some Objective-C</li>
                <li>PHP/Wordpress</li>
                <li>Lots of Angular</li>
                <li>Some Unity3d</li>
                <li>HTML + CSS</li>
                <li>Coffeescript</li>
                <li>jQuery</li>
                <li>Ionic</li>
                <li>Bash</li>
                <li>Git</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">TDD All Day, Everyday</p><hr/>
              <ul className="list-reset">
                <li>Sauce Labs</li>
                <li>Protractor</li>
                <li>Codeship</li>
                <li>Phantom</li>
                <li>Jasmine</li>
                <li>Mocha</li>
                <li>Karma</li>
                <li>Sinon</li>
                <li>Chai</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Project Management</p><hr/>
              <ul className="list-reset">
                <li>Getting customers, designers, and developers on the same page</li>
                <li>Customer communication to derive project requirements</li>
                <li>End of sprint customer presentations and user testing</li>
                <li>Project and budget planning</li>
                <li>Agile development</li>
                <li>SCRUM</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">UX + Design</p><hr/>
              <ul className="list-reset">
                <li>Moderating and training teams on Google's 5-day PDS</li>
                <li>Implementing Google X-lab's moonshots</li>
                <li>Rapid prototyping</li>
                <li>Marvel app</li>
                <li>Photoshop</li>
                <li>Indesign</li>
                <li>Sketch</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Sales</p><hr/>
              <ul className="list-reset">
                <li>Contract negotiating</li>
                <li>On-boarding training</li>
                <li>Pitch presentations</li>
                <li>Customer success</li>
                <li>Proposal writing</li>
                <li>Contract writing</li>
                <li>CRM setup</li>
                <li>Upselling</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">DevOps</p><hr/>
              <ul className="list-reset">
                <li>Heroku for multiple environments</li>
                <li>Codeship for CI/CD</li>
                <li>AWS S3</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Backend</p><hr/>
              <ul className="list-reset">
                <li>API Architecture</li>
                <li>Authentication</li>
                <li>Authorization</li>
                <li>CloudAMQP</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Express</li>
                <li>PubNub</li>
                <li>MySQL</li>
                <li>Node</li>
                <li>Redis</li>
                <li>Rails</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Hardware</p><hr/>
              <ul className="list-reset">
                <li>Jose and Son's photobooth powered by Raspberry Pi programmed in node, firebase backend, 2 angular webapps, and a big red button.</li>
                <li>LabVIEW Certified</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Frontend Frameworks I use regularly</p><hr/>
              <ul className="list-reset">
                <li>Material Design</li>
                <li>Gross Bootstrap</li>
                <li>Foundation</li>
                <li>D3</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">3rd-party APIs I use regularly</p><hr/>
              <ul className="list-reset">
                <li>Auth0 for authenticaiton/authorization, (contributer to node library)</li>
                <li>Mailchimp + Mandrill for email campaigns</li>
                <li>Twilio for SMS/text notifications</li>
                <li>Firebase for 3-way binding</li>
                <li>Stripe for getting monies</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Build stuff I use</p><hr/>
              <ul className="list-reset">
                <li>Webpack</li>
                <li>Grunt</li>
                <li>Gulp</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">What I constantly curious about</p><hr/>
              <ul className="list-reset">
                <li>Unity3d powered experiences like Monument Valley</li>
                <li>Docker (this site is deployed in a container)</li>
                <li>Digital experiences in autonomous cars</li>
                <li>Raspberry Pi's + Arduino</li>
                <li>Three-way data binding</li>
                <li>Virtual Reality</li>
                <li>WebVR</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Domain knowledge from projects I've worked on</p><hr/>
              <ul className="list-reset">
                <li>Hospitality Industry</li>
                <li>Social Marketing</li>
                <li>Music Industry</li>
                <li>Hair Industry</li>
                <li>IT Industry</li>
              </ul>
            </div>
          </div>

          <div id="dale-lari-section">
            <p className="section-title m0 pt4">How I use my powers for good.</p>
            <div className="clearfix py3">
              <p className="bold">A non-profit Kickstarter project I helped build in honor of my little sister</p><hr/>
              <ul className="list-reset">
                <li>Dale Lari - A Global Soccer Project</li>
              </ul>
              <a href="http://www.dalelari.com" target="_blank">
                <button className="btn caps bold">See Website</button>
              </a>
              <a href="https://www.kickstarter.com/projects/1301122510/dale-lari-a-global-soccer-project" target="_blank">
                <button className="btn caps bold">See Kickstarter</button>
              </a>
              <a href="https://vimeo.com/pixbit/dalelaridocumentary" target="_blank">
                <button className="btn caps bold">Watch Video</button>
              </a>
            </div>
          </div>

          <div>
            <p className="section-title m0 pt4">What I did before Pixbit.</p>
            <div className="clearfix py3">
              <p className="bold">Part-times I had at the same time while building Pixbit</p><hr/>
              <ul className="list-reset">
                <li>Pushing carts and packing groceries at Food Lion on Western Boulevard</li>
                <li>Selling phones and tablets Best Buy Mobile at Crabtree Valley Mall</li>
                <li>Changing batteries for free at Autozone off of Capital Boulevard</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Jobs while at NC State</p><hr/>
              <ul className="list-reset">
                <li>NCSU Libraries helping students and patrons with tech and secretly printing free stuff for friends</li>
                <li>NCSU IT department making Wordpress sites for all the genius researchers bad at computers</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Schools that I went to</p><hr/>
              <ul className="list-reset">
                <li>NC State University - Electrical Engineering</li>
                <li>Wake Tech  - Electrical Engineering</li>
                <li>NC School of Science and Math</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Manual labor my parents made me do to learn what it meant to work before college</p><hr/>
              <ul className="list-reset">
                <li>Unloading trucks at the Shipping and Recieving warehouse for Hog Slat in Newton Grove, NC</li>
                <li>Straight up cow, hog, and chicken farm stuff in Keener, NC</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="clearfix py3">
              <p className="section-title m0 pt4">What I truly believe.</p>
            </div>

            <div className="clearfix py3">
              <p className="bold">Ralph Waldo Emerson</p><hr/>
              <ul className="list-reset">
                <li>"The man who knows <span className="bold">how</span> will always have a job. But the man who knows <span className="bold">why</span> will be his boss".</li>
              </ul>
            </div>

            <div className="clearfix py3">
              <p className="bold">Jim Horning</p><hr/>
              <ul className="list-reset">
                <li>"Good judgement comes from experience. Experience comes from bad judgement".</li>
              </ul>
            </div>
          </div>

          <div className="pt3">
            <p className="h6">* incomplete sentences have periods because they look way better that way</p>
          </div>

        </div>
        </div>
      </div>
    );
  }
}

export default App;
