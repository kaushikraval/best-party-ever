import React from 'react';
import { Link } from 'react-router-dom';

export default function Sustainability() {
  return (
    <div className="sustainability_wrapper">
      <div className="inner_banner contact_banner">
        <div className="container">
          <h1>Sustainability Policies</h1>
        </div>
      </div>
      <div className="sustainability_inner pt-120 pb-120">
        <div className="container">
          <h2 className="h1 text_dark mb-3">Sustainability</h2>
          <p>
            We're committed to minimising our impact on the environment, for
            this reason we have dramatically reduced our carbon footprint and
            have completely overhauled:
          </p>
          <ul className="list_ul">
            <li>
              The way we purchase goods and services, using only those that
              share our concern for the environment;
            </li>
            <li>
              Our waste management process, implementing recycling at our
              offices and party venues;
            </li>
            <li>
              The way in which we educate our staff, offering regular seminars
              and focus groups to share ideas and convey any new processes
              implemented;
            </li>
            <li>
              Our stakeholder communication lines; gaining feedback from those
              that our heavily involved in our business;
            </li>
            <li>
              Our induction process for new employees, with each new starter
              attending a comprehensive seminar conveying the companies stance
              towards sustainability and the environment;
            </li>
            <li>
              The way in which we undertake business travel, using car sharing
              schemes and alternative environmentally friendly modes of
              transport where feasible.
            </li>
          </ul>
          <p>
            As a result, Best Parties Ever we are working towards BS8901, the
            new sector specific British Standard for achieving sustainability in
            the events industry. Please view the following documents which
            clearly outline our stance and attitude towards the environment:
          </p>
          <ul className="list_ul">
            <li>
              <Link tp="">Environmental Management Policy;</Link>
            </li>
            <li>
              <Link tp="">Sustainability Policy;</Link>
            </li>
            <li>
              <Link tp="">Code of Conduct;</Link>
            </li>
            <li>
              <Link tp="">Procurement Policy.</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
