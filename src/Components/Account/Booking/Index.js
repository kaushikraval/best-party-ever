import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TabView, TabPanel } from 'primereact/tabview';
import Overview from './Overview';
import GuestList from './GuestList';
import EmailManagement from './EmailManagement';
import PartyEtickets from './PartyEtickets';
import HotelDetail from './HotelDetail';
import Location from '../../../Components/Venue/VenueCommon/Location';
import Drinks from '../../../Components/Venue/VenueCommon/Drinks';
import Gallery from './Gallery';
import Help from './Help';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBookingData,
  setBookingDetail,
  setIsBookingUpdated,
} from 'store/reducers/Booking/booking.slice';
import Loader from 'Components/Common/Loader';

export default function Booking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { bookingLoading, bookingDetail, isBookingUpdated } = useSelector(
    ({ booking }) => booking,
  );
  console.log('bookingDetail', bookingDetail);

  useEffect(() => {
    if (id) {
      dispatch(getBookingData(id));
      dispatch(setIsBookingUpdated(false));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (isBookingUpdated) {
      navigate('/account');
      dispatch(setBookingDetail({}));
      dispatch(setIsBookingUpdated(false));
    }
  }, [dispatch, isBookingUpdated, navigate]);

  return (
    <div className="booking_page_wrapper">
      {bookingLoading && <Loader />}
      <div className="inner_banner login_banner">
        <div className="container">
          <h1>Bookings</h1>
        </div>
      </div>
      <div className="booking_wrap_inner pt-120 pb-120">
        <div className="container">
          <div className="back_to_booking">
            <Link to="/account" className="btn_primary">
              <i className="pi pi-angle-left"></i> Back to Bookings
            </Link>
          </div>
          <div className="top_heading">
            <h2 className="h1">Party Booking</h2>
            <p>
              Booking Reference: <span>647812</span>
            </p>
          </div>
          <Alert key="primary" variant="primary">
            Oh no you've gone past your 10 day hold period!
          </Alert>
          <p>
            Quick quick, get your places confirmed before they are snapped up by
            someone else!
          </p>
          <Alert key="dark" variant="dark">
            <i className="pi pi-angle-double-down"></i> You can now manage your
            guest list here - click "Guest List" to find out more
          </Alert>
          <div className="booking_tab_wrapper">
            <TabView>
              <TabPanel header="Overview">
                <Overview />
              </TabPanel>
              <TabPanel header="Guest List">
                <GuestList />
              </TabPanel>
              <TabPanel header="Email Guests">
                <EmailManagement />
              </TabPanel>
              <TabPanel header="eTickets">
                <PartyEtickets />
              </TabPanel>
              <TabPanel header="Hotel Deals">
                <HotelDetail />
              </TabPanel>
              <TabPanel header="Venue">
                <Location />
              </TabPanel>
              <TabPanel header="Drinks">
                <Drinks />
              </TabPanel>
              <TabPanel header="Gallery">
                <Gallery />
              </TabPanel>
              <TabPanel header="Help">
                <Help />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </div>
  );
}
