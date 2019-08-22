import React from 'react';
import linkLogo from '../../assets/link-logo.png';

const History = () => (
  <div id="green-arrow-labs" className="clearfix">
    <p className="section-title m0 mt4">What I worked on</p>
    <p className="bold">while at Green Arrow Labs</p>
    <hr/>

    <div className="clearfix">
      <p className="bold mt3 mb1">Product</p>
      <img alt='logo' src={linkLogo} className="mt2" />
      <p className="mt2 mb1 italic">Supply Chain and Laboratory Testing Management Tool</p>
      <ul className="list-reset">
        <li>Provides a common platform for collaboration between the world's largest footwear/apparel brands, their suppliers, and testing laboratories as they manufacture, test, and import along the entire supply chain.</li>
      </ul>

      <div className="hide-on-mobile">
        <a href="https://www.greenarrowlabs.com" target="_blank" rel="noopener noreferrer">
          <button className="btn caps bold mt1">Company Site</button>
        </a>
        <a href="https://www.greenarrowlabs.com/Link-Services-Software" target="_blank" rel="noopener noreferrer">
          <button className="btn caps bold mt1 ml1">Product Site</button>
        </a>
      </div>

      <div className="hide-on-desktop">
        <ul className="list-reset mt2 no-bullets">
          <li>
            <a href="https://www.greenarrowlabs.com" target="_blank" rel="noopener noreferrer">
              <button className="btn caps bold mt1">Company Site</button>
            </a>
          </li>
          <li>
            <a href="https://www.greenarrowlabs.com/Link-Services-Software" target="_blank" rel="noopener noreferrer">
              <button className="btn caps bold mt1">Product Site</button>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p className="bold mt3 mb1">Role</p>
    <ul className="list-reset">
      <li>20% Product strategy and planning</li>
      <li>20% Design sessions with UX team</li>
      <li>20% Working with stakeholders</li>
      <li>20% Working with engineering</li>
      <li>5% Individually contributing</li>
      <li>5% Mentoring/Training</li>
      <li>5% Metrics/Analytics</li>
      <li>5% Sales/Support</li>
    </ul>

    <p className="bold mt3 mb1">Responsibilities during pre-build phases</p>
    <ul className="list-reset">
      <li>Selected as the primary contact for key account stakeholders that drove 40-60% of the product's roadmap</li>
      <li>Personally responsible for picking problems worth solving based on impact and scope size/cost factors</li>
      <li>Collaborated with stakeholders, experts, founder, design, and engineering in planning Epics/PRDs</li>
      <li>Developed ideas/features based on vision, XFN input, user feedback, and understanding space</li>
      <li>Led aligning solutions with competing goals and obtaining validation from subject experts</li>
      <li>Continually identified new users/stakeholders/markets encountered during interviewing</li>
      <li>Developed big bet (opportunities with acceptable risks) and quick win features/ideas</li>
      <li>Reported directly to and focused on understanding the vision of founder/CEO</li>
      <li>Personally responsible for picking features to solve real use case problems</li>
      <li>Led the gathering of real, detailed use cases to stress test prototypes with</li>
      <li>Analyzed metrics in legacy apps to inform lessons learned in new features</li>
      <li>Specialized in Risk analysis of features and ideas on the roadmap</li>
      <li>Researched the market and competition within the same vertical</li>
      <li>Exercised asking clarifying questions to understand user needs</li>
      <li>Provided on-site visit support to sales to close key accounts</li>
      <li>Acted as the facilitator for 3 to 5-day product design sprints</li>
      <li>Personally visited Chinese labs to gather requirements</li>
      <li>Responsible for doing Quantitative customer research</li>
      <li>Responsible for doing Qualitative customer research</li>
      <li>Led storyboarding, lo-fi, mid-fi, and hi-fi prototyping</li>
      <li>Personally visited US brands to gather requirements</li>
      <li>Managed and directed the product roadmap</li>
      <li>Led experimenting using rapid prototyping</li>
    </ul>

    <p className="bold mt3 mb1">Responsibilities during execution phases</p>
    <ul className="list-reset">
      <li>Helped balance the trade-offs to make everyone ~90% happy while meeting company goals/OKR</li>
      <li>Analyzing pain points at different times in the customer's lifecycle using the product</li>
      <li>Participated in standups to monitor progress and help if needed with micro-priorities</li>
      <li>Established, clarified, and verified delivery of features to key account stakeholders</li>
      <li>Answering questions customers have about various parts of the product lifecycle</li>
      <li>Collaborated in preparing agile sprint submission presentations and deliverables</li>
      <li>Led prioritizing between launch-blocking bugs and must-have features</li>
      <li>Helped Project Manager remove blockers for dev and design teams</li>
      <li>Individually contributed on straightforward, quick wins or bug fixes</li>
      <li>Collaborated with team leads in converting Epics into Jira tasks</li>
    </ul>

    <p className="bold mt3 mb1">Responsibilities during post-launch phases</p>
    <ul className="list-reset">
      <li>Collaborated with Customer Success, Marketing, Sales, and Legal to close sponsored features</li>
      <li>Personally gathered feedback from key account stakeholders and captured next phase needs</li>
      <li>Led workshop sessions that on-boarded users of key accounts on new features</li>
      <li>Collaborated on launch planning with key account organization heads</li>
    </ul>

    <p className="bold mt3 mb1">Feats accomplished during this project</p>
    <ul className="list-reset">
      <li>Launched the product from inception to operational across brands, suppliers, and labs and generating profit</li>
      <li>Harmonized the UX of the products without a full-time UI resource by leaning on Google Material Design</li>
      <li>Optimized feature releases through CI/CD pipeline powered by Redhat's OpenShift Kubernetes platform</li>
      <li>Reduced build costs by establishing free-tier level 3rd party solutions I used during my startup days</li>
      <li>Architected graph database solution to track relationships between brands, suppliers, &amp; labs</li>
      <li>Prepared and presented workshops to colleagues to develop their design awareness</li>
      <li>Migrated U.S. and overseas dev team to do work and releases using Docker</li>
      <li>Architected the micro-services architecture powering the platform</li>
      <li>Led the creation of the product's brand identity and messaging</li>
      <li>Migrated frontend dev team from Angular 1.x to React</li>
      <li>Modernized the company's brand identity</li>
    </ul>

    <p className="bold mt3 mb1">Team members that I got to work with day-to-day</p>
    <ul className="list-reset mt2">
      <li>3 Full-time Backend Java Developers</li>
      <li>1 Full-time Backend Node Developer</li>
      <li>2 Full-time Frontend Developers</li>
      <li>1 Customer Success Manager</li>
      <li>1 Full-time Neo4j Developer</li>
      <li>1 Full-time Dev Team Lead</li>
      <li>1 Full-time QA Developer</li>
      <li>3 Devops Consultants</li>
      <li>1 Full-time Designer</li>
      <li>1 Part-time Intern</li>
    </ul>
  </div>
);

export default History;