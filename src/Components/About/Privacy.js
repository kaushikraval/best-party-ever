import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="privacy_wrapper">
      <div className="inner_banner contact_banner">
        <div className="container">
          <h1>Privacy and Cookies Policy - Best Parties Ever</h1>
        </div>
      </div>
      <div className="privacy_inner pt-120 pb-120">
        <div className="container">
          <h2 className="h1 mb-3 text_dark">Privacy and Cookies Policy.</h2>
          <p>
            Best Parties Ever Ltd is committed to protecting your personal
            information. This page aims to help you to understand what
            information we may collect about you and how we use it.
          </p>
          <h3 className="text_dark">Cookies</h3>
          <p>
            Most websites you visit will use cookies in order to improve your
            user experience by enabling that website to 'remember' you, either
            for the duration of your visit (using a 'session cookie') or for
            repeat visits (using a 'persistent cookie'). This website
            (www.bestpartiesever.com) uses both session based cookies and
            persistent cookies. This site uses session based cookies to
            temporarily record your information from page to page when
            requesting party availability checks and reserving places. This
            information is not stored on your computer but on the webserver
            hosting this website. These session cookies are only available
            during the time you are on the site and are removed when your
            browsing session is finished (when you close your online browser) or
            once you have completed a booking request.
          </p>
          <p>
            This website (www.bestpartiesever.com) also uses persistent cookies
            which are small text files stored on your computer, to record your
            preferences between visits. These preferences are, for example, when
            you agree that this site can store cookies, that agreement is then
            stored in a cookie on your computer so you are not continually asked
            for agreement in subsequent visits.
          </p>
          <p>
            This website (www.bestpartiesever.com) may from time to time use
            other persistent cookies to record extra preferences or activity
            between visits. These cookies will never store personal information
            about you or your computer and you can clear them at any point by
            deleting your browser history – for more information about cookies
            you can visit:
            <Link to="https://www.aboutcookies.org/" target="_blank">
              http://www.aboutcookies.org/
            </Link>
          </p>
          <h4 className="text_dark">
            What to do if you don't want cookies to be set
          </h4>
          <p>
            If you find the idea of this website storing information on your
            computer or mobile device a bit intrusive, even though it is
            generally quite harmless, it is possible to block some or all
            cookies, or even to delete cookies that have already been set; but
            you need to be aware that you might lose some functions on this
            website. For information on how to control cookies being stored on
            your computer see:
            <Link to="https://www.aboutcookies.org/" target="_blank">
              http://www.aboutcookies.org/Default.aspx?page=1
            </Link>
          </p>
          <h4 className="text_dark">
            I agreed for this site to store cookies but have changed my mind
          </h4>
          <p>
            If you previously agreed to allow www.bestpartiesever.com to store
            cookies on your computer but have subsequently changed your mind
            then you can delete the cookie set by this choice – see
            <Link to="https://www.aboutcookies.org/" target="_blank">
              http://www.aboutcookies.org/Default.aspx?page=1
            </Link>
            to learn how to control and remove cookies stored on your computer.
          </p>
          <h4 className="text_dark">
            What do you do with the information you gather
          </h4>
          <p>
            The majority of information stored is captured when an online
            visitor fills out a booking or enquiry form – this information is
            stored on the webserver and also emailed to
            sales@bestpartiesever.com – this information is only used in
            response to the booking request or enquiry submitted. Visitors
            signing up to our email newsletter or making online
            enquiries/bookings will be added to our newsletter list and will
            receive emails from Best Parties Ever based on legitimate interest
            but not from other 3rd parties and affiliates.
          </p>
          <p>
            We do NOT sell your information and we do not supply it to third
            party companies for their own use.
          </p>
          <h4 className="text_dark">Where/how we store your Personal Data</h4>
          <p>
            All information you provide to us is stored on our secured servers
            in the UK. Any payment transactions are processed through
            <Link
              to="https://www.elavon.co.uk/privacy-policy.html"
              target="_blank"
            >
              SagePay
            </Link>
            using a secure server (HTTPS/SSL). Payment details and credit card
            inumbers submitted through SagePay are never seen or stored by Best
            Parties Ever.
          </p>
          <p>
            Unfortunately, the transmission of information via the internet is
            not completely secure. Although we will do our best to protect your
            personal data, we cannot guarantee the security of your data
            transmitted to our site; any transmission is at your own risk. Once
            we have received your information, we use strict procedures and
            security features to try to prevent unauthorised access. If you are
            at all hesitant to provide booking details online please contact our
            office by phone or email to arrange the booking.
          </p>
          <h4 className="text_dark">Visitor tracking</h4>
          <p>
            This site does make use of Google Analytics for online visitor
            tracking – you can read more about cookie privacy and Google
            Analytics at:
            <Link
              to="https://www.cookielaw.org/google-analytics-eu-cookie-law.aspx?404"
              target="_blank"
            >
              http://www.cookielaw.org/google-analytics-eu-cookie-law.aspx
            </Link>
          </p>
          <hr />
          <p>
            If you have any other questions relating to your online privacy with
            Best Parties Ever Limited please contact
            <Link to="mailto:sales@bestpartiesever.com">
              sales@bestpartiesever.com
            </Link>
            or call 0844 499 4040.
          </p>
        </div>
      </div>
    </div>
  );
}
