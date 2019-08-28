import React from 'react';
import bridgeLogo from '../../assets/bridge-logo.png';
import ciscoLogo from '../../assets/cisco-logo.png';
import pixbitLogo from '../../assets/pixbit-logo.png';
import snapsnipLogo from '../../assets/snapsnip-logo.png';

const History = () => (
  <div id="pixbit">
    <p className="section-title m0 mt4">What I worked on</p>
    <p className="bold">while at Pixbit</p>
    <hr/>

    <p className="bold mt3 mb1">Role that pushed me to literally do 110%</p>
    <ul className="list-reset">
      <li>25% Business/Product strategy and planning</li>
      <li>25% Design sessions with UX team</li>
      <li>25% Working with stakeholders</li>
      <li>25% Working with engineering</li>
      <li>5% Sales/Accounting</li>
      <li>2.5% Recruiting</li>
      <li>2.5% Mentoring</li>
    </ul>

    {/* Snapsnip */}
    <p className="bold mt3 mb1">Product that pushed us into the big leagues</p>
    <div className="clearfix">
      <img alt='logo' src={snapsnipLogo} className="mt2" />
      <p className="mt2 mb1 italic">Hair Salon Virtual Consultation Tool</p>
      <ul className="list-reset">
        <li>Customer and salon team platform that allows guests to take photos of themselves, upload inspirations, and then have stylists assess their snaps to ensure accurate pricing and properly booked appointments.</li>
      </ul>

      <div className="hide-on-mobile">
        <a href="https://www.salontoday.com/375406/the-virtual-consultation-tool" target="_blank" rel="noopener noreferrer">
          <button className="btn caps bold">News</button>
        </a>
        <a href="http://www.thinkpixbit.com/portfolio/snapsnip-product-creation" target="_blank" rel="noopener noreferrer">
          <button className="btn caps bold ml1">Portfolio Site</button>
        </a>
        <a href="http://snapsnipapp.com" target="_blank" rel="noopener noreferrer">
          <button className="btn caps bold ml1">Product Site</button>
        </a>
        <a href="https://s3.amazonaws.com/thinkpixbit/public/snapsnip-ecosystem.png" target="_blank" rel="noopener noreferrer">
          <button className="btn caps bold ml1">Tech Stack</button>
        </a>
      </div>

      <div className="hide-on-desktop">
        <ul className="list-reset mt2 no-bullets">
          <li>
            <a href="https://www.salontoday.com/375406/the-virtual-consultation-tool" target="_blank" rel="noopener noreferrer">
              <button className="btn caps bold">News</button>
            </a>
          </li>
          <li>
            <a href="http://www.thinkpixbit.com/portfolio/snapsnip-product-creation" target="_blank" rel="noopener noreferrer">
              <button className="btn caps bold">Portfolio Site</button>
            </a>
          </li>
          <li>
            <a href="http://snapsnipapp.com" target="_blank" rel="noopener noreferrer">
              <button className="btn caps bold">Product Site</button>
            </a>
          </li>
          <li>
            <a href="https://s3.amazonaws.com/thinkpixbit/public/snapsnip-ecosystem.png" target="_blank" rel="noopener noreferrer">
              <button className="btn caps bold">Tech Stack</button>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p className="bold mt3 mb1">Feats accomplished during this project</p>
    <ul className="list-reset mt2">
      <li>Signed up 600+ users consisting of receptionists, stylists, and salon owners</li>
      <li>Obtained 18,000+ customer selfies taken by people wanting haircuts</li>
      <li>Funneled 6,000+ salon guests through consultation tool</li>
      {/* <li>Powered 1,300+ consultations made through the tool</li> */}
      <li>Captured 10,000+ inspiration pictures uploaded</li>
      <li>Launched micro-service API to power clients</li>
      <li>Launched Notification Center iPhone app</li>
      <li>Launched Guest Wordpress Plugin</li>
      <li>Launched Artist iPhone app</li>
      <li>Launched Guest Webapp</li>
      <li>Launched Salon Webapp</li>
    </ul>

    {/* Wordpress Products */}
    <p className="bold mt4 mb1">Wordpress products that were our bread and butter</p>
    <img alt='logo' src={pixbitLogo} className="mt2" />
    <div className="clearfix">
      <p className="mt2 mb1 italic">Hair Salon Site Builder</p>
      <ul className="list-reset">
        <li>Custom Wordpress interface made for salons to share their social media content, culture, and offerings to get guests to make hair appointments with them. This product allowed behind the desk staff to build and manage their website without having to code. They could control template pages created for showing off their stylist profiles, stylist levels, stylist availability, services, receptionists, and device-specific menus.</li>
        <li className="mt2">Worked directly with and interviewed stylists, receptionists, owners, and guests to find out what needs we needed to resolve with this product.</li>
        <li className="mt2"><a href="http://www.justblo.com" target="_blank" rel="noopener noreferrer">Blo Salon</a>, one of the salons using the product won the <a href="https://www.salontoday.com/368082/stamp-2014-blos-website" target="_blank" rel="noopener noreferrer">National Best Salon Website of the Year</a> given out by Salon Today Magazine.</li>
      </ul>
    </div>

    <div className="clearfix mt1">
      <p className="mt2 mb1 italic">Hospitality Site Builder</p>
      <ul className="list-reset">
        <li>Custom Wordpress interface for restaurant owners and employees to share their menus, dietary options, staff, origin story, galleries, operating hours, locations, events, and social media content to get visitors to make reservations or online orders.</li>
        <li className="mt2">Worked directly with and interviewed employees, managers, owners, and guests to find out what needs we needed to resolve with this product.</li>
        <li className="mt2"><a href="https://www.joseandsons.com" target="_blank" rel="noopener noreferrer">Jose &amp; Sons</a>, one of the restaurants we <a href="https://medium.com/@iamsaul_/rebranding-jose-sons-3fc3d844fc05" target="_blank" rel="noopener noreferrer">rebranded</a> and launched using the product appeared in a <a href="https://time.com/5349518/southern-food-culture" target="_blank" rel="noopener noreferrer">New York Times article</a>.</li>
      </ul>
    </div>

    {/* Other products */}
    <p className="bold mt3 mb1">Other products that had short lifespans</p>
    <div className="clearfix">
      <img alt='logo' src={ciscoLogo} className="mt2" />
      <p className="mt2 mb1 italic">Customer Acquisition Tool</p>
      <ul className="list-reset">
        <li>Interactive customer assessment tool to help Cisco capture more information funnel security leads, present them with tier-specific data visualizations, send results to correct sales team, and leave with final Youtube video.</li>
      </ul>
      <a href="http://www.thinkpixbit.com/portfolio/cisco-security-solutions" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">Portfolio Site</button>
      </a>
    </div>

    <div className="clearfix mt4">
      <img alt='logo' src={bridgeLogo} className="mt2" />
      <p className="mt2 mb1 italic">News reader and publisher</p>
      <p>Helps brands tell their story. User-generated content has the ability to engage, inspire, and drive new communities around brands. We listen, curate, and then highlight the voice of your brand champions for your events and campaigns.</p>
      <a href="http://www.thinkpixbit.com/portfolio/bridge-visual-system" target="_blank" rel="noopener noreferrer">
        <button className="btn caps bold">Portfolio Site</button>
      </a>
    </div>

  </div>
);

export default History;