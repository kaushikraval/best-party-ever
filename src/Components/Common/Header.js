import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/img/logo.png';
import { SlideMenu } from 'primereact/slidemenu';
import { Dialog } from 'primereact/dialog';
import $ from 'jquery';
import LocationPopup from './LocationPopup';
import GetCookies from 'hooks/GetCookies';
import { useDispatch } from 'react-redux';
import RemoveCookies from 'hooks/RemoveCookies';
import { showMessage } from 'store/reducers/common.slice';
import { setIsUserLogin } from 'store/reducers/auths.slice';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const GetCookiesToken = GetCookies('Token');

  const [visibleModal, setVisibleModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const items = [
    {
      label: 'Home',
      command: () => {
        navigate('/');
        setMenuOpenHandle();
      },
    },
    {
      label: 'Venue',
      items: [
        {
          label: 'London',
          className: 'clickabel_menu',
          items: [
            {
              label: 'London - Tobacco Dock',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-london');
                setMenuOpenHandle();
              },
            },
          ],
        },
        {
          label: 'South East',
          className: 'clickabel_menu',
          items: [
            {
              label: 'Ardingly',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-sussex');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Billericay - Essex',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-billericay');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Hampshire',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-hampshire');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Maidstone - Kent',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-maidstone');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Reading',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-reading');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Southampton',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-southampton');
                setMenuOpenHandle();
              },
            },
            {
              label: 'St Albans',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-st-albans');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Syon Park - West London',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-syon-west-london');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Windsor',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-windsor');
                setMenuOpenHandle();
              },
            },
          ],
        },
        {
          label: 'South West',
          className: 'clickabel_menu',
          items: [
            {
              label: 'Bristol',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-bristol');
                setMenuOpenHandle();
              },
            },
          ],
        },
        {
          label: 'Midlands',
          className: 'clickabel_menu',
          items: [
            {
              label: 'Bicester',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-bicester');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Milton Keynes',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-milton-keynes');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Nottingham',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-nottingham');
                setMenuOpenHandle();
              },
            },
          ],
        },
        {
          label: 'North',
          className: 'clickabel_menu',
          items: [
            {
              label: 'Liverpool',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-liverpool');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Manchester',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-manchester');
                setMenuOpenHandle();
              },
            },
            {
              label: 'Newcastle Racecourse',
              icon: 'pi pi-fw pi-map-marker',
              className: 'menu_link',
              command: () => {
                navigate('/christmas-parties-newcastle');
                setMenuOpenHandle();
              },
            },
          ],
        },
      ],
    },

    {
      separator: true,
    },
    {
      label: 'Exclusive Nights',
      command: () => {
        navigate('/exclusiveparties');
        setMenuOpenHandle();
      },
    },
    {
      label: 'About',
      className: 'clickabel_menu about_menu',
      items: [
        {
          label: 'Request a Brochure',
          icon: 'pi pi-file',
          className: 'menu_link',
          command: () => {
            navigate('/request-brochures');
            setMenuOpenHandle();
          },
        },
        {
          label: 'Contact Us',
          className: 'menu_link',
          icon: 'pi pi-phone',
          command: () => {
            navigate('/contact');
            setMenuOpenHandle();
          },
        },
        {
          label: 'Vacancies',
          className: 'menu_link',
          icon: 'pi pi-user-plus',
          command: () => {
            navigate('/vacancies');
            setMenuOpenHandle();
          },
        },
        {
          label: 'Sustainability',
          className: 'menu_link',
          icon: 'pi pi-check',
          command: () => {
            navigate('/sustainability');
            setMenuOpenHandle();
          },
        },
        {
          label: 'Privacy & Cookies',
          className: 'menu_link',
          icon: 'pi pi-lock',
          command: () => {
            navigate('/privacy');
            setMenuOpenHandle();
          },
        },
        {
          label: 'Feedback',
          className: 'menu_link',
          icon: 'pi pi-comment',
          command: () => {
            navigate('/feedback');
            setMenuOpenHandle();
          },
        },
        {
          label: 'Non-Christmas Parties',
          className: 'menu_link',
          icon: 'pi pi-calendar',
          url: 'https://tapenade.co.uk/',
          target: '_blank',
        },
        {
          label: 'Booking Terms',
          className: 'menu_link',
          icon: 'pi pi-sun',
          command: () => {
            navigate('/booking-terms');
            setMenuOpenHandle();
          },
        },
      ],
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const setMenuOpenHandle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
        $('body').addClass('scroll');
      } else {
        $('header').removeClass('fixed');
        $('body').removeClass('scroll');
      }
    });
  }, []);
  return (
    <>
      <header className={menuOpen === true ? 'menu_collapse' : ''}>
        <Row className="align-items-center">
          <Col xxl={4} xl={3} xs={6}>
            <div className="left_hedaer">
              <div
                className="menu_toggle"
                onClick={() => setMenuOpenHandle(true)}
              >
                <i
                  className={menuOpen === true ? 'pi pi-times' : 'pi pi-bars'}
                ></i>
              </div>
              <div className="logo_wrap">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
            </div>
          </Col>
          <Col xxl={8} xl={9} xs={6}>
            <div className="right_header" onClick={() => setMenuOpen(false)}>
              {location.pathname === '/' ? (
                ''
              ) : (
                <>
                  <div className="search_box">
                    <div className="input_Wrapper">
                      <div
                        className="location_icon"
                        onClick={() => setVisible(true)}
                      >
                        <span className="material-symbols-outlined">
                          my_location
                        </span>
                      </div>
                      <div className="search_input">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Enter a location"
                        />
                      </div>
                    </div>
                    <div className="submit_button">
                      <button className="btn_primary">
                        <span className="material-symbols-outlined me-1">
                          search
                        </span>
                        Search
                      </button>
                    </div>
                    <LocationPopup visible={visible} setVisible={setVisible} />
                  </div>
                  <div className="search_mobile">
                    <Button
                      className="search_btn"
                      onClick={() => setVisible(true)}
                    >
                      <i className="pi pi-search"></i>
                    </Button>
                  </div>
                </>
              )}
              <ul>
                <li>
                  <Link to="tel:01932359900" className="call_link">
                    01932 359900
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="btn_border"
                    onClick={() => setVisibleModal(true)}
                  >
                    <i className="pi pi-envelope me-2"></i> ENQUIRE
                  </Link>
                </li>
                <li>
                  {GetCookiesToken ? (
                    <Link to="/account" className="btn_border_white">
                      <i className="pi pi-user me-2"></i> My Bookings
                    </Link>
                  ) : (
                    <Link to="/login" className="btn_border_white">
                      <i className="pi pi-user me-2"></i> Sign In / Bookings
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        {menuOpen === true && (
          <div className="menu_wrapper pt-120 pb-80">
            <div className="menu_inner">
              <SlideMenu
                model={items}
                viewportHeight={220}
                menuWidth={560}
              ></SlideMenu>
            </div>
            <div className="bottom_menu">
              <ul>
                <li>
                  <Link to="/account" onClick={() => setMenuOpenHandle()}>
                    <i className="pi pi-user"></i>Manage Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/request-brochures"
                    onClick={() => setMenuOpenHandle()}
                  >
                    <i className="pi pi-download"></i>Request a Brochure
                  </Link>
                </li>
                <li>
                  <Link to="mailto:sales@bestpartiesever.com">
                    <i className="pi pi-envelope"></i>sales@bestpartiesever.com
                  </Link>
                </li>
                <li>
                  <Link to="tel:01932359900">
                    <i className="pi pi-phone"></i>01932 359900
                  </Link>
                </li>
                {GetCookiesToken ? (
                  <li>
                    <Link
                      onClick={() => {
                        RemoveCookies('UserSession');
                        RemoveCookies('Token');
                        dispatch(setIsUserLogin(false));
                        setTimeout(() => {
                          dispatch(
                            showMessage({
                              message: 'Logged out Successfully',
                              varient: 'success',
                            }),
                          );
                          navigate('/login');
                        }, 1000);
                        setMenuOpen(false);
                      }}
                    >
                      <i className="pi pi-lock"></i>Logout
                    </Link>
                  </li>
                ) : (
                  ''
                )}
              </ul>
            </div>
          </div>
        )}
      </header>
      <Dialog
        header="Contact"
        visible={visibleModal}
        onHide={() => setVisibleModal(false)}
        style={{ width: '600px' }}
        draggable={false}
        resizable={false}
      >
        <div className="contact_modal_wrap">
          <p>
            Please fill in the form below to send an enquiry to our team who
            will respond as soon as possible.
          </p>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3 form-group">
                  <Form.Label>First name*</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3 form-group">
                  <Form.Label>Last name*</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3 form-group">
                  <Form.Label>Post Code*</Form.Label>
                  <Form.Control type="text" placeholder="Post Code" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3 form-group">
                  <Form.Label>Email address*</Form.Label>
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3 form-group">
                  <Form.Label>Telephone Number*</Form.Label>
                  <Form.Control type="tel" placeholder="Telephone Number" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3 form-group">
                  <Form.Label>Venue*</Form.Label>
                  <Form.Select id="Tertiaryvenue">
                    <option>Please Select</option>
                    <option value="1">
                      Bicester, Bicester Heritage Park, Oxfordshire
                    </option>
                    <option value="2">Barleylands, Billericay, Essex</option>
                    <option value="3">Paintworks, Bristol</option>
                    <option value="4">Hampshire Arena, Hampshire</option>
                    <option value="5">Knowsley Safari Park, Liverpool</option>
                    <option value="6">Tobacco Dock</option>
                    <option value="7">Kent County Showground, Maidstone</option>
                    <option value="8">Old Trafford, Manchester</option>
                    <option value="9">
                      Willen Lake, Milton Keynes, Buckinghamshire
                    </option>
                    <option value="10">Newcastle Racecourse</option>
                    <option value="11">Beeston Hockey Club, Nottingham</option>
                    <option value="12">Kings Meadow, Reading, Berkshire</option>
                    <option value="13">
                      Trojans Club, Eastleigh/Southampton
                    </option>
                    <option value="14">Willows Farm, St Albans</option>
                    <option value="15">
                      Ardingly South of England, Haywards Heath, West Sussex
                    </option>
                    <option value="16">Syon Park, West London</option>
                    <option value="17">Royal Windsor Racecourse</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3 form-group">
                  <Form.Label>Number of guests*</Form.Label>
                  <Form.Control type="number" placeholder="Number of guests" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3 form-group">
                  <Form.Label>Budget per head*</Form.Label>
                  <Form.Control type="text" placeholder="Budget/Cost" />
                </Form.Group>
              </Col>
            </Row>
            <div className="submit_btn text-end">
              <Button className="btn_primary small">Submit</Button>
            </div>
          </Form>
        </div>
      </Dialog>
    </>
  );
}
