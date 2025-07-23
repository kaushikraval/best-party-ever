import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { setSignupLoading, signupAction } from 'store/reducers/auths.slice';
import GetCookies from 'hooks/GetCookies';
import {
  getGooglePlaceListData,
  setGooglePlaceDetail,
} from 'store/reducers/googlePlaceApi.slice';
import Loader from 'Components/Common/Loader';

export default function CreateAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { signupLoading } = useSelector(({ auth }) => auth);
  const { googlePlaceDetail, googlePlaceLoading } = useSelector(
    ({ googlePlace }) => googlePlace,
  );

  const userData = GetCookies('UserSession');
  const userSession = userData ? JSON.parse(atob(userData)) : null;

  const [lookupAddress, setLookupAddress] = useState(false);
  const [autoSentenceCase, setAutoSentenceCase] = useState(false);
  const initialValues = {
    salutation: userSession?.salutation || '',
    first_name: userSession?.first_name || '',
    surname: userSession?.surname || '',
    email_primary: userSession?.email_primary || '',
    confirm_email_primary: userSession?.confirm_email_primary || '',
    address_line_1: userSession?.address_line_1 || '',
    telephone_primary: userSession?.telephone_primary || '',
    password: userSession?.password || '',
    confirm_password: userSession?.confirm_password || '',
    primary_event_location: userSession?.primary_event_location || '',
    post_code: userSession?.post_code || '',
    type: userSession?.type || '',
    city: userSession?.city || '',
    country: userSession?.country || '',
    source: userSession?.source || '',
    company_name: userSession?.company_name || '',
    address_line_2: userSession?.address_line_2 || '',
    address_line_3: userSession?.address_line_3 || '',
    _id: userSession?._id,
  };
  const [accountData, setAccountData] = useState(initialValues);
  useEffect(() => {
    return () => {
      dispatch(setGooglePlaceDetail({}));
    };
  }, [dispatch]);

  useEffect(() => {
    if (signupLoading) {
      setTimeout(() => {
        navigate(location?.pathname ? location.pathname : '/login', {
          replace: true,
        });
        dispatch(setSignupLoading(false));
      }, 1000);
    }
  }, [signupLoading]);

  const signupSchema = Yup.object().shape({
    salutation: Yup.string().required('*Salutation is a required field'),
    first_name: Yup.string().required('*First name is a required field'),
    // .matches(/^[^\s]/, '*Name cannot include leading spaces')
    surname: Yup.string().required('*Last name is a required field'),
    email_primary: Yup.string()
      .email('Invalid email')
      .required('*Email address is a required field')
      .matches(/^\w+([.]?\w+)@\w+([\\.-]?\w+)(\.\w{2,3})+$/, 'Invalid email'),
    confirm_email_primary: Yup.string()
      .email('Invalid email')
      .oneOf([Yup.ref('email_primary'), null], `Email Don't Match!`)
      .required('*Confirm email address is a required field')
      .matches(/^\w+([.]?\w+)@\w+([\\.-]?\w+)(\.\w{2,3})+$/, 'Invalid email'),
    telephone_primary: Yup.string().required(
      '*Phone number is a required field',
    ),
    password: Yup.string().required('*Password is a required field'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], `Passwords Don't Match!`)
      .required('*Confirm password is a required field'),
    primary_event_location: Yup.string().required(
      '*Preferred venue is a required field',
    ),
    post_code: Yup.string().required('*Post code is a required field'),
    address_line_1: Yup.string().required(
      '*Address line 1 is a required field',
    ),
    type: Yup.string().required('*Type is a required field'),
    city: Yup.string().required('*City is a required field'),
    source: Yup.string().required('*Source is a required field'),
    country: Yup.string().required('*Country is a required field'),
  });

  function capitalizeSentence(sentence) {
    const firstLetter = sentence?.charAt(0)?.toUpperCase();
    const restOfSentence = sentence?.slice(1);
    return firstLetter + restOfSentence;
  }
  return (
    <div className="login_wrapper register_wrapper">
      {(googlePlaceLoading || signupLoading) && <Loader />}
      <div className="inner_banner login_banner">
        <div className="container">
          <h1>
            {userSession?._id ? 'Modify your Account' : 'Create an Account'}
          </h1>
        </div>
      </div>
      <div className="register_inner_wrapper pt-120 pb-120">
        <div className="container">
          <Formik
            enableReinitialize={true}
            initialValues={accountData}
            validationSchema={signupSchema}
            onSubmit={values => {
              const capitalizedObject = {
                ...values,
                first_name: capitalizeSentence(values.first_name),
                surname: capitalizeSentence(values.surname),
              };
              let newValues = autoSentenceCase ? capitalizedObject : values;
              dispatch(signupAction({ ...newValues }));
            }}
          >
            {({ handleSubmit, handleChange, setFieldValue, values }) => (
              <Form onSubmit={handleSubmit}>
                <div className="register_form">
                  <form action="">
                    <Form.Check
                      type="checkbox"
                      id="capital"
                      label="I always forget about capital letters - please fix it for me!"
                      autocomplete="off"
                      checked={autoSentenceCase}
                      onChange={() => {
                        setAutoSentenceCase(!autoSentenceCase);
                      }}
                    />
                    <Row>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Select
                            aria-label="Title"
                            name="salutation"
                            value={values.salutation}
                            onChange={handleChange}
                          >
                            <option>Please Select</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                          </Form.Select>
                          <Form.Label>Title/Salutation*</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="salutation" />
                          </span>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            name="first_name"
                            value={
                              autoSentenceCase
                                ? capitalizeSentence(values.first_name)
                                : values.first_name
                            }
                            onChange={e =>
                              setFieldValue('first_name', e.target.value)
                            }
                          />
                          <Form.Label>First name*</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="first_name" />
                          </span>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            name="surname"
                            value={
                              autoSentenceCase
                                ? capitalizeSentence(values.surname)
                                : values.surname
                            }
                            onChange={e =>
                              setFieldValue('surname', e.target.value)
                            }
                          />
                          <Form.Label>Last name*</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="surname" />
                          </span>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Control
                            type="email"
                            placeholder="Enter email address"
                            name="email_primary"
                            value={values.email_primary}
                            onChange={handleChange}
                          />
                          <Form.Label>Email address*</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="email_primary" />
                          </span>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Control
                            type="email"
                            placeholder="Enter confirm email address"
                            name="confirm_email_primary"
                            value={values.confirm_email_primary}
                            onChange={handleChange}
                          />
                          <Form.Label>Enter your Email first</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="confirm_email_primary" />
                          </span>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Control
                            type="number"
                            placeholder="Enter phone number"
                            className="hide_arrow"
                            name="telephone_primary"
                            value={values.telephone_primary}
                            onChange={handleChange}
                          />
                          <Form.Label>Phone number*</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="telephone_primary" />
                          </span>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Control
                            type="password"
                            placeholder="Enter password"
                            id="password"
                            data-placement="bottom"
                            data-toggle="popover"
                            data-container="body"
                            data-html="true"
                            autoComplete="false"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                          <Form.Label>Enter a secure password</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="password" />
                          </span>
                          {/* <div id="popover-password">
                      <div className="progress">
                        <div
                          id="password-strength"
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div> */}
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Control
                            type="password"
                            placeholder="Enter confirm password"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                          />
                          <Form.Label>Enter your Password first</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="confirm_password" />
                          </span>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Select
                            aria-label="Title"
                            name="primary_event_location"
                            value={values.primary_event_location}
                            onChange={handleChange}
                          >
                            <option>Please Select</option>
                            <option value="64143a1471254aae9b9b4aa1">
                              Bicester, Bicester Heritage Park, Oxfordshire
                            </option>
                            <option value="64143a1471254aae9b9b4aa2">
                              Barleylands, Billericay, Essex
                            </option>
                            <option value="64143a1471254aae9b9b4aa3">
                              Paintworks, Bristol
                            </option>
                            <option value="64143a1471254aae9b9b4aa4">
                              Hampshire Arena, Hampshire
                            </option>
                            {/* <option value="5">
                              Knowsley Safari Park, Liverpool
                            </option>
                            <option value="6">Tobacco Dock</option>
                            <option value="7">
                              Kent County Showground, Maidstone
                            </option>
                            <option value="8">Old Trafford, Manchester</option>
                            <option value="9">
                              Willen Lake, Milton Keynes, Buckinghamshire
                            </option>
                            <option value="10">Newcastle Racecourse</option>
                            <option value="11">
                              Beeston Hockey Club, Nottingham
                            </option>
                            <option value="12">
                              Kings Meadow, Reading, Berkshire
                            </option>
                            <option value="13">
                              Trojans Club, Eastleigh/Southampton
                            </option>
                            <option value="14">Willows Farm, St Albans</option>
                            <option value="15">
                              Ardingly South of England, Haywards Heath, West
                              Sussex
                            </option>
                            <option value="16">Syon Park, West London</option>
                            <option value="17">Royal Windsor Racecourse</option> */}
                          </Form.Select>
                          <Form.Label>Preferred venue*</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="primary_event_location" />
                          </span>
                        </Form.Group>
                      </Col>
                    </Row>
                  </form>
                  <div className="address_lookup_wrap">
                    <h2 className="text-center mb-3">Your Address</h2>
                    <Row>
                      <Col sm={6}>
                        <Form.Group className="mb-3 form-group">
                          <Form.Control
                            type="text"
                            placeholder="Enter Your Postcode / Eircode"
                            name="post_code"
                            value={values?.post_code}
                            onChange={handleChange}
                          />
                          <Form.Label>Postcode / Eircode*</Form.Label>
                          <span className="d-block text-danger text_small">
                            <ErrorMessage name="post_code" />
                          </span>
                          <span className="note">
                            For Southern Ireland addresses please use the new
                            Eircode rather than your district code.
                          </span>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Button
                          className="btn_primary"
                          onClick={() => {
                            dispatch(
                              getGooglePlaceListData({
                                postcode: values?.post_code,
                              }),
                            );
                          }}
                        >
                          Lookup
                        </Button>
                      </Col>
                    </Row>
                    {googlePlaceDetail &&
                    Object.entries(googlePlaceDetail).length > 0 ? (
                      <div className="lookup_data_wrap">
                        <div className="lookup_data_inner">
                          {googlePlaceDetail?.address_components?.map(
                            (data, index) => (
                              <button
                                type="button"
                                key={index}
                                className="d-block lookup_data"
                                onClick={() => {
                                  setLookupAddress(true);
                                  let newArr =
                                    googlePlaceDetail?.formatted_address?.split(
                                      ',',
                                    );
                                  let finalArr = newArr
                                    ?.slice(0, -1)
                                    ?.join(',');
                                  setFieldValue('address_line_1', finalArr);
                                  setFieldValue(
                                    'country',
                                    newArr[newArr.length - 1],
                                  );
                                }}
                              >
                                {data?.long_name}
                              </button>
                            ),
                          )}
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    {lookupAddress === true && (
                      <div className="account_edit_wrap">
                        <p>
                          Please select your closest address - then edit below
                        </p>
                        <p className="mb-1">
                          <span>
                            Please check and ensure the details below are
                            correct
                          </span>
                        </p>
                        <p>
                          <small>
                            Remember: if you want to manually control your
                            capital letters then untick the box at the top of
                            this page
                          </small>
                        </p>
                        <Row>
                          <Col sm={6}>
                            <Form.Group className="mb-3 form-group">
                              <Form.Select
                                aria-label="Title"
                                name="type"
                                value={values?.type}
                                onChange={handleChange}
                              >
                                <option>Please Select</option>
                                <option value="1">Company</option>
                                <option value="2">Private Customer</option>
                              </Form.Select>
                              <Form.Label>Account Type*</Form.Label>
                              <span className="d-block text-danger text_small">
                                <ErrorMessage name="type" />
                              </span>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-3 form-group">
                              <Form.Control
                                type="text"
                                placeholder="Enter your organisation name"
                                name="company_name"
                                value={
                                  autoSentenceCase
                                    ? capitalizeSentence(values.company_name)
                                    : values.company_name
                                }
                                onChange={e =>
                                  setFieldValue('company_name', e.target.value)
                                }
                              />
                              <Form.Label>
                                Organisation Name (if applicable)
                              </Form.Label>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-3 form-group">
                              <Form.Control
                                type="text"
                                placeholder="Enter your street address"
                                name="address_line_1"
                                value={
                                  autoSentenceCase
                                    ? capitalizeSentence(values.address_line_1)
                                    : values.address_line_1
                                }
                                onChange={e =>
                                  setFieldValue(
                                    'address_line_1',
                                    e.target.value,
                                  )
                                }
                              />
                              <Form.Label>Address 1*</Form.Label>
                              <span className="d-block text-danger text_small">
                                <ErrorMessage name="address_line_1" />
                              </span>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-3 form-group">
                              <Form.Control
                                type="text"
                                name="address_line_2"
                                value={
                                  autoSentenceCase
                                    ? capitalizeSentence(values.address_line_2)
                                    : values.address_line_2
                                }
                                onChange={e =>
                                  setFieldValue(
                                    'address_line_2',
                                    e.target.value,
                                  )
                                }
                              />
                              <Form.Label>Address 2</Form.Label>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-3 form-group">
                              <Form.Control
                                type="text"
                                name="address_line_3"
                                value={
                                  autoSentenceCase
                                    ? capitalizeSentence(values.address_line_3)
                                    : values.address_line_3
                                }
                                onChange={e =>
                                  setFieldValue(
                                    'address_line_3',
                                    e.target.value,
                                  )
                                }
                              />
                              <Form.Label>Address 3</Form.Label>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-3 form-group">
                              <Form.Control
                                type="text"
                                placeholder="Enter your city"
                                name="city"
                                value={
                                  autoSentenceCase
                                    ? capitalizeSentence(values.city)
                                    : values.city
                                }
                                onChange={e =>
                                  setFieldValue('city', e.target.value)
                                }
                              />
                              <Form.Label>City</Form.Label>
                              <span className="d-block text-danger text_small">
                                <ErrorMessage name="city" />
                              </span>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-3 form-group">
                              <Form.Control
                                type="text"
                                placeholder="Enter your county"
                                name="country"
                                value={
                                  autoSentenceCase
                                    ? capitalizeSentence(values.country)
                                    : values.country
                                }
                                onChange={e =>
                                  setFieldValue('country', e.target.value)
                                }
                              />
                              <Form.Label>County*</Form.Label>
                              <span className="d-block text-danger text_small">
                                <ErrorMessage name="country" />
                              </span>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-3 form-group">
                              <Form.Select
                                aria-label="Title"
                                name="source"
                                value={values.source}
                                onChange={handleChange}
                              >
                                <option>Please Select</option>
                                <optgroup label="Email">
                                  <option value="64143a1471254aae9b9b4bb1">
                                    Birmingham Chamber of Commerce
                                  </option>
                                  <option value="64143a1471254aae9b9b4bb2">
                                    Blackstripe Marketing Email
                                  </option>
                                </optgroup>
                                {/* <optgroup label="Newspapers/Magazines">
                                  <option value="149">
                                    Mid Sussex Gazette
                                  </option>
                                  <option value="148">
                                    Mid Sussex and Burgess Hill Times
                                  </option>
                                  <option value="147">Mid Sussex Leader</option>
                                  <option value="146">City AM</option>
                                  <option value="145">
                                    Slough Eton &amp; Windsor Express
                                  </option>
                                  <option value="144">Slough Midweek</option>
                                  <option value="143">
                                    Woking News and Mail
                                  </option>
                                  <option value="142">The Wharf</option>
                                  <option value="141">Staines Informer</option>
                                  <option value="140">Surrey Comet</option>
                                  <option value="139">Swindon Star</option>
                                  <option value="138">
                                    Southampton/Eastleigh/Winchester News Exta
                                  </option>
                                  <option value="137">
                                    Maidenhead advertiser
                                  </option>
                                  <option value="136">
                                    Bracknell Midweek (Reading Midweek)
                                  </option>
                                  <option value="135">Reading Chronical</option>
                                  <option value="134">
                                    Newcastle Chronicle Extra
                                  </option>
                                  <option value="133">
                                    Guardian Event Pullout 2017
                                  </option>
                                  <option value="132">
                                    Northampton Chronicle and Echo
                                  </option>
                                  <option value="131">MK Citizen</option>
                                  <option value="130">
                                    Salford Weekly News
                                  </option>
                                  <option value="129">KM Extra Ashford</option>
                                  <option value="128">KM Extra Medway</option>
                                  <option value="127">
                                    KM Extra Maidstone
                                  </option>
                                  <option value="126">
                                    Yorkshire Eve Post
                                  </option>
                                  <option value="125">
                                    Warrington Midweek
                                  </option>
                                  <option value="124">
                                    Liverpool Metro (North West Metro)
                                  </option>
                                  <option value="123">
                                    Surrey/Hants Star Courier
                                  </option>
                                  <option value="122">Worcester Journal</option>
                                  <option value="121">
                                    Malvern Gazette &amp; Ledbury Reporter
                                  </option>
                                  <option value="120">
                                    Worcester and Great Malvern Observer
                                  </option>
                                  <option value="119">
                                    Around Town Magazine
                                  </option>
                                  <option value="118">
                                    Bristol Business Post
                                  </option>
                                  <option value="117">Bristol Observer</option>
                                  <option value="116">
                                    Halesowen Chronicle
                                  </option>
                                  <option value="115">
                                    Birmingham- Solihull Shirley &amp; Arden
                                    Observer
                                  </option>
                                  <option value="114">
                                    Barking &amp; Dagenham Yellow Advertiser
                                  </option>
                                  <option value="113">
                                    Chelmsford Weekly News
                                  </option>
                                  <option value="112">
                                    Castlepoint Yellow Advertiser
                                  </option>
                                  <option value="111">
                                    Brentwood Weekly News
                                  </option>
                                  <option value="110">
                                    Basildon Yellow Advertiser
                                  </option>
                                  <option value="109">Basildon Recorder</option>
                                  <option value="108">St Albans review</option>
                                  <option value="107">Herts Advertiser</option>
                                  <option value="106">
                                    Watford Free Observer{' '}
                                  </option>
                                  <option value="65">
                                    Barking and Dagenham Yellow Advertiser
                                  </option>
                                  <option value="64">Basildon Recorder</option>
                                  <option value="57">Bracknell Midweek</option>
                                  <option value="67">
                                    Brentwood Weekly News
                                  </option>
                                  <option value="79">Bristol Observer</option>
                                  <option value="68">
                                    Castlepoint Yellow Advertiser
                                  </option>
                                  <option value="69">
                                    Chelmsford Weekly News
                                  </option>
                                  <option value="75">City Am</option>
                                  <option value="60">Ealing Gazette</option>
                                  <option value="58">
                                    Gloucester Independant
                                  </option>
                                  <option value="56">Herts Advertiser</option>
                                  <option value="77">Kingston Guardian</option>
                                  <option value="63">KM Extra Ashford</option>
                                  <option value="62">KM Extra Maidstone</option>
                                  <option value="87">KM Extra Medway</option>
                                  <option value="55">Leicester Mercury</option>
                                  <option value="85">Merseymart Star</option>
                                  <option value="52">MK Citizen</option>
                                  <option value="49">MK News</option>
                                  <option value="73">
                                    Newcastle Chronicle
                                  </option>
                                  <option value="80">
                                    Northampton Chronicle
                                  </option>
                                  <option value="84">Nottingham Post</option>
                                  <option value="61">
                                    Reading Midweek Chronicle
                                  </option>
                                  <option value="70">
                                    Salford Weekly NEws
                                  </option>
                                  <option value="81">
                                    Slough Eton &amp; Windsor Express
                                  </option>
                                  <option value="86">
                                    Southampton, Eastleigh and Winchester News
                                  </option>
                                  <option value="78">St Helens Reporter</option>
                                  <option value="66">Staines Informer</option>
                                  <option value="71">
                                    Surrey/Hants Star Courier
                                  </option>
                                  <option value="72">Swindon Star</option>
                                  <option value="99">
                                    The Event in The Guardian
                                  </option>
                                  <option value="54">The Wharf</option>
                                  <option value="83">Uxbridge Gazette</option>
                                  <option value="53">Warrington Midweek</option>
                                  <option value="50">
                                    Watford Free Observer
                                  </option>
                                  <option value="76">
                                    Yorkshire Evening Post
                                  </option>
                                </optgroup>
                                <optgroup label="Search Engine">
                                  <option value="2">Google</option>
                                  <option value="3">Bing</option>
                                  <option value="4">Yahoo</option>
                                  <option value="5">Ask</option>
                                  <option value="7">Other Search Engine</option>
                                </optgroup>
                                <optgroup label="Email">
                                  <option value="23">Email from BPE</option>
                                  <option value="27">
                                    Email from other sources
                                  </option>
                                </optgroup>
                                <optgroup label="Radio">
                                  <option value="167">Radio FM</option>
                                  <option value="166">
                                    Heart West Country
                                  </option>
                                  <option value="165">
                                    Heart Thames Valley
                                  </option>
                                  <option value="164">
                                    Heart Sussex Surrey
                                  </option>
                                  <option value="163">Heart South Wales</option>
                                  <option value="162">Heart Solent</option>
                                  <option value="161">Heart Kent</option>
                                  <option value="160">Heart Essex</option>
                                  <option value="159">
                                    Capital East Midlands
                                  </option>
                                  <option value="158">
                                    Heart - Four Counties
                                  </option>
                                  <option value="157">Eagle 964</option>
                                  <option value="156">Radio Aire</option>
                                  <option value="155">Heart NW</option>
                                  <option value="154">Metro</option>
                                  <option value="153">Radio City</option>
                                  <option value="152">Key103</option>
                                  <option value="150">
                                    Capital South Wales
                                  </option>
                                  <option value="168">
                                    Other Radio / Streaming
                                  </option>
                                </optgroup>
                                <optgroup label="Social Media">
                                  <option value="28">Facebook</option>
                                  <option value="29">Twitter</option>
                                  <option value="30">LinkedIn</option>
                                  <option value="33">Google Plus</option>
                                  <option value="31">Other Social Media</option>
                                  <option value="181">Mindspace app </option>
                                </optgroup>
                                <optgroup label="Online Advert">
                                  <option value="185">Irish News</option>
                                  <option value="182">
                                    WeWork advertisement{' '}
                                  </option>
                                </optgroup>
                                <optgroup label="Word of Mouth/Recommendation">
                                  <option value="34">Recommendation</option>
                                </optgroup>
                                <optgroup label="Mail (Brochure/Flyer)">
                                  <option value="39">Brochures</option>
                                  <option value="40">Leaflet</option>
                                  <option value="42">Postcards</option>
                                </optgroup>
                                <optgroup label="Competitions">
                                  <option value="177">PA Event</option>
                                </optgroup>
                                <optgroup label="Event">
                                  <option value="178">PA Event Dublin </option>
                                  <option value="174">Office Show</option>
                                  <option value="101">
                                    London Christmas Party Show 2017
                                  </option>
                                </optgroup>
                                <optgroup label="Attended Previously">
                                  <option value="1">Previous Attendee</option>
                                </optgroup>
                                <optgroup label="Agent">
                                  <option value="184">GNI Big Gay Ball</option>
                                  <option value="91">
                                    Christmas Parties Unlimited
                                  </option>
                                  <option value="96">John Lewis</option>
                                  <option value="98">
                                    Newcastle Racecourse
                                  </option>
                                  <option value="92">
                                    Royal Windsor Racecourse
                                  </option>
                                  <option value="93">
                                    Beeston Hockey Club
                                  </option>
                                </optgroup>
                                <optgroup label="Other">
                                  <option value="190">
                                    PA Show Manchester 2019
                                  </option>
                                  <option value="36">
                                    Via the party venue directly
                                  </option>
                                  <option value="38">Supplier/Performer</option>
                                  <option value="88">
                                    Charity Organised Night
                                  </option>
                                  <option value="175">
                                    NHS Organised Night
                                  </option>
                                  <option value="189">
                                    London Christmas Party Show 2019
                                  </option>
                                  <option value="186">
                                    South13 Social Media
                                  </option>
                                  <option value="179">PA Club Awayday</option>
                                  <option value="95">Exclusive Client</option>
                                  <option value="97">Sales Mail Out</option>
                                </optgroup>
                                <optgroup label="Not On The List?">
                                  <option value="showall">Show All</option>
                                  <option value="other" id="othersource">
                                    Other
                                  </option>
                                </optgroup> */}
                              </Form.Select>
                              <Form.Label>
                                Where did you hear about us?*
                              </Form.Label>
                              <span className="d-block text-danger text_small">
                                <ErrorMessage name="source" />
                              </span>
                            </Form.Group>
                          </Col>
                        </Row>
                      </div>
                    )}
                    <p>
                      <small>
                        Please note: by signing up below you agree to receiving
                        email communication from Best Parties Ever regarding
                        your booking and future promotions. You can unsubscribe
                        from future marketing at any point using the links
                        contained at the bottom of the emails you are sent.
                      </small>
                    </p>
                    <div className="text-center">
                      <Button type="submit" className="btn_primary">
                        Sign Up!
                        {signupLoading && (
                          <Spinner className="ms-2" size="sm" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
