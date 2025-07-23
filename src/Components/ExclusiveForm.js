import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MultiSelect } from 'primereact/multiselect';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialLogo1 from '../Assets/img/bat-logo.png';
import TestimonialLogo2 from '../Assets/img/logo-accenture.jpeg';
import TestimonialLogo3 from '../Assets/img/1267_William_Reed_blue.jpeg';
import TestimonialLogo4 from '../Assets/img/sage.jpeg';
import TestimonialLogo5 from '../Assets/img/john-lewis-logo.jpeg';
import TestimonialLogo6 from '../Assets/img/NHS-RGB.jpeg';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ExclusiveForm() {
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
    { name: 'Bicester, Bicester Heritage Park, Oxfordshire', code: 'NY' },
    { name: 'Barleylands, Billericay, Essex', code: 'RM' },
    { name: 'Paintworks, Bristol', code: 'LDN' },
    { name: 'Hampshire Arena, Hampshire', code: 'IST' },
    { name: 'Knowsley Safari Park, Liverpool', code: 'PRS' },
    { name: 'Tobacco Dock', code: 'PRS' },
    { name: 'Kent County Showground, Maidstone', code: 'PRS' },
    { name: 'Old Trafford, Manchester', code: 'PRS' },
    { name: 'Willen Lake, Milton Keynes, Buckinghamshire', code: 'PRS' },
    { name: 'Newcastle Racecourse', code: 'PRS' },
    { name: 'Beeston Hockey Club, Nottingham', code: 'PRS' },
    { name: 'Kings Meadow, Reading, Berkshire', code: 'PRS' },
    { name: 'Trojans Club, Eastleigh/Southampton', code: 'PRS' },
    { name: 'Willows Farm, St Albans', code: 'PRS' },
    {
      name: 'Ardingly South of England, Haywards Heath, West Sussex',
      code: 'PRS',
    },
    { name: 'Syon Park, West London', code: 'PRS' },
    { name: 'Royal Windsor Racecourse', code: 'PRS' },
  ];
  return (
    <div className="exclusive_form_Wrapper">
      <div className="inner_banner login_banner">
        <div className="container">
          <h1>Welcome to Best Parties Ever</h1>
        </div>
      </div>
      <div className="exclusive_form_inner pt-120 pb-120">
        <div className="container">
          <h3>WELCOME TO BEST PARTIES EVER</h3>
          <h4>YOUR EXCLUSIVE CHRISTMAS PARTY BOOKING STARTS HERE</h4>
          <div className="welcome_part_exclusive_form">
            <Row>
              <Col md={6}>
                <p>
                  With 20 venues around the UK, our exclusive packages offer
                  something for everyone.
                </p>
                <p>
                  Browse our venues and discover our latest themes and
                  entertainment! With optional all inclusive drinks packages,
                  exquisite four course menus, entertainment, dancing and more,
                  our exclusive parties never fail to wow audiences.
                </p>
                <p>
                  Our exclusive parties are for sole use and private hire
                  events, if your booking numbers are for less than 300 guests
                  (or 100 at Bristol) please contact{' '}
                  <Link to="mailto:exclusives@bestpartiesever.com">
                    exclusives@bestpartiesever.com
                  </Link>
                  .
                </p>
                <p>
                  To find out more and speak to one of our dedicated Exclusive
                  Account Managers please complete the form below:
                </p>
              </Col>
              <Col md={6}>
                <p>Your Christmas Party includes:</p>
                <ul className="list_ul">
                  <li>
                    <i class="fa-regular fa-gem"></i> TAILORED PACKAGES
                  </li>
                  <li>
                    <i class="fa-solid fa-file-contract"></i> MENU UPGRADES
                  </li>
                  <li>
                    <i class="fa-solid fa-thumbs-up"></i> PRIORITY BOOKING
                  </li>
                  <li>
                    <i class="fa-solid fa-calendar-days"></i> PERSONALISED DATE
                    SELECTION
                  </li>
                  <li>
                    <i class="fa-solid fa-user"></i> DEDICATED ACCOUNT MANAGER
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="exclusive_form_button">
            <Row>
              <Col md={6}>
                <Form>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label>First name*</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Last name*</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control type="email" placeholder="Email address" />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Company Name*</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Telephone Number*</Form.Label>
                    <Form.Control type="tel" placeholder="Telephone Number" />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group multiselect_wrap">
                    <Form.Label>
                      Please select the venues you are interested in*
                    </Form.Label>
                    <MultiSelect
                      value={selectedCities}
                      onChange={e => setSelectedCities(e.value)}
                      options={cities}
                      optionLabel="name"
                      filter
                      display="chip"
                      placeholder="Select Cities"
                      className="w-full md:w-20rem"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label>Number of guests*</Form.Label>
                    <small className="d-block text_dark mb-2">
                      Exclusive hire is only available to parties of over 100
                      guests (or 300 at many venues). For parties with less than
                      100 guests please click{' '}
                      <span className="text_primary">"Party Venues"</span> at
                      the top, select your preferred venue and check
                      availability against your preferred date.
                    </small>
                    <Form.Control
                      type="number"
                      placeholder="Number of guests"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label>
                      Are you working to a budget/cost and what is it?
                    </Form.Label>
                    <Form.Control type="text" placeholder="budget/cost" />
                  </Form.Group>
                  <div className="submit_btn">
                    <Button className="btn_primary w-100">Submit</Button>
                  </div>
                </Form>
              </Col>
              <Col md={6}>
                <div className="testimonial_slider">
                  <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="testimonial_slide_wrap">
                        <img src={TestimonialLogo1} alt="" />
                        <p>
                          Thank you very much for an amazing party on Friday!!
                          We had a fantastic time and we received a lot of great
                          feedback!!
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial_slide_wrap">
                        <img src={TestimonialLogo2} alt="" />
                        <p>
                          Our Christmas party was a resounding success...your
                          staff were fantastic, polite, courteous and so
                          helpful!
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial_slide_wrap">
                        <img src={TestimonialLogo3} alt="" />
                        <p>
                          I just wanted to let you know that the party was
                          brilliant last night. Everyone I have spoken to has
                          not stopped talking about how much fun they had. So
                          much so that we would like to hold the same date for
                          next year.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial_slide_wrap">
                        <img src={TestimonialLogo4} alt="" />
                        <p>
                          The party was just fantastic and we’ve received
                          feedback that is was the ‘best one yet’, which really
                          says something. The layout of the venue, the
                          entertainment, and quality of food has been praised by
                          people here at Sage
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial_slide_wrap">
                        <img src={TestimonialLogo5} alt="" />
                        <p>
                          What an amazing night! Entertainment, food and service
                          was exceptional...the best party we’ve ever had!
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial_slide_wrap">
                        <img src={TestimonialLogo6} alt="" />
                        <p>
                          The event was absolutely fantastic! We have had
                          nothing but positive feedback about the venue,
                          entertainment, food and the event as a whole.
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
