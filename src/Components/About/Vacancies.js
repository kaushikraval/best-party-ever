import React from 'react';
import { Link } from 'react-router-dom';

export default function Vacancies() {
  return (
    <div className="vacancies_wrapper">
      <div className="inner_banner contact_banner">
        <div className="container">
          <h1>Christmas Party and Events Jobs with Best Parties Ever</h1>
        </div>
      </div>
      <div className="vacancies_inner pt-120 pb-120">
        <div className="container">
          <h2 className="h1 text_dark mb-3">Jobs</h2>
          <p>
            <strong>Work with Us</strong>
          </p>
          <p>
            We’re always on the lookout for great new talent! Whether you are
            interested in freelance bar work, managing a venue or a full time
            sales role we would love to hear from you.
          </p>
          <p>
            If you are a creative, hard-working individual with great
            interpersonal skills and a passion for events then this could be the
            perfect opportunity for you!
          </p>
          <p>
            Please do contact us with your CV at{' '}
            <Link to="mailto:bookings@bestpartiesever.com">
              bookings@bestpartiesever.com
            </Link>{' '}
            if you are interested in working with us.
          </p>
        </div>
      </div>
    </div>
  );
}
