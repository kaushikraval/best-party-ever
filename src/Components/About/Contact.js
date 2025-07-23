import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="contact_us_wrap">
      <div className="inner_banner contact_banner">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact_wrapper_inner pt-120 pb-120">
        <div className="container">
          <h2 className="h1 text_dark">Contact Us</h2>
          <p>
            For sales please phone <span>0844 499 4040</span>.
          </p>
          <p>
            For customer support and help with your existing booking please call{' '}
            <strong>01932 359 900</strong>
          </p>
          <p>
            For email enquiries please email{' '}
            <Link to="mailto:sales@bestpartiesever.com">
              sales@bestpartiesever.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
