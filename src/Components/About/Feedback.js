import React from 'react';
import { Link } from 'react-router-dom';

export default function Feedback() {
  return (
    <div className="feedback_wrapper">
      <div className="inner_banner login_banner">
        <div className="container">
          <h1>Party Feedback</h1>
        </div>
      </div>
      <div className="feedback_inner pt-120 pb-120">
        <div className="container">
          <h2 className="h1 mb-3 text_dark">Phew, What a Night!</h2>
          <h3 className="text_dark fw_300 mb-4">
            So, it is now all over, but here's a few things you may need to
            know.
          </h3>
          <h4 className="h3 text_dark fw_400">Lost Property</h4>
          <p>
            We know all too well what it is like at the end of an epic party and
            sometimes things like coats, bags (and yes, even shoes!) get left
            behind at the venue. You'll be surprised what we find! If you have
            lost an item, please let us know at
            <Link to="mailto:feedback@bestpartiesever.com">
              feedback@bestpartiesever.com
            </Link>
            or call 01932 359 900 and we will do our best to reunite you with
            your left shoe!
          </p>
          <p>Please remember to quote your booking reference.</p>
          <p>
            Please Note: Our social media accounts are managed by our marketing
            team who are not able to respond to feedback, lost property and
            other post-party questions. Please contact the office team for help
            with these.
          </p>
          <h4 className="h3 text_dark fw_400">Party Feedback</h4>
          <p>
            Please be aware that during the party season, while our parties are
            running there will be a limited number of office support staff so
            please be patient with us during this time. We aim to respond to all
            emails within 72 hours. Please also be aware that the offices are
            closed over the Christmas period so between 24th December and 3rd
            January we will not have any support team available.
          </p>
          <p>
            Please visit our feedback page
            <Link
              to="https://www.bestpartiesever.com/feedback"
              target="_blank
            "
            >
              https://www.bestpartiesever.com/feedback
            </Link>{' '}
            or alternatively email us on{' '}
            <Link to="mailto:feedback@bestpartiesever.com">
              feedback@bestpartiesever.com
            </Link>
            .
          </p>
          <p>
            If your issue requires urgent attention then you can phone the
            office on 01932 359 900 and a member of the team will take note of
            your complaint and pass it on to an authorised complaints handler
            who will contact you back directly.
          </p>
          <p>
            If you are like the thousands of happy party goers and want to just
            express your enjoyment of the party then please feel free to Tweet
            or post on Facebook - and remember you may even win a FREE table of
            10 for next year if you post some epic pics!
          </p>
          <h4 className="h3 text_dark fw_400">
            Is it too early to book for next year?
          </h4>
          <p>
            Its never too early to book your spaces for Christmas 2024. We'll be
            sending out our new party line-up for next year in early March so
            watch your inbox! If you cannot wait until then, please get in touch
            with our team on
            <Link to="mailto:bookings@bestpartiesever.com">
              bookings@bestpartiesever.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
