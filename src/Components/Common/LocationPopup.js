import React, { useEffect, useState } from 'react';

import { Sidebar } from 'primereact/sidebar';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LocationData } from './LocationData';
import { Map } from './Map';

export default function LocationPopup({ visible, setVisible }) {
  useEffect(() => {
    if (visible) {
      document.body.classList.add('modal_open');
    } else {
      document.body.classList.remove('modal_open');
    }
  }, [visible]);
  const navigate = useNavigate();
  const [items, setItems] = useState(LocationData);
  const [active, setActive] = useState('showAll');
  const [mapPosition, setMapPosition] = useState({
    lat: 52.93432606615551,
    lng: -1.1946590687727214,
  });
  const [mapZoom, setMapZoom] = useState(7);
  const filterItem = categItem => {
    const updateItems = LocationData.filter(curElem => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(categItem);
  };

  return (
    <Sidebar
      visible={visible}
      onHide={() => setVisible(false)}
      fullScreen
      className="location_sidebar"
    >
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <span
            className={active === 'showAll' ? 'nav-link active' : 'nav-link'}
            onClick={() => {
              setItems(LocationData);
              setActive('showAll');
              setMapPosition({
                lat: 52.93432606615551,
                lng: -1.1946590687727214,
              });
              setMapZoom(7);
            }}
          >
            Show All
          </span>
        </li>
        <li className="nav-item">
          <span
            className={active === 'London' ? 'nav-link active' : 'nav-link'}
            onClick={() => {
              filterItem('London');
              setMapPosition({
                lat: 51.502186083284876,
                lng: -0.20123088718146445,
              });
              setMapZoom(11);
            }}
          >
            London
          </span>
        </li>
        <li className="nav-item">
          <span
            className={active === 'South East' ? 'nav-link active' : 'nav-link'}
            onClick={() => {
              filterItem('South East');
              setMapPosition({
                lat: 51.51092091948389,
                lng: -0.13099243363250043,
              });
              setMapZoom(9);
            }}
          >
            South East
          </span>
        </li>
        <li className="nav-item">
          <span
            className={active === 'South West' ? 'nav-link active' : 'nav-link'}
            onClick={() => {
              filterItem('South West');
              setMapPosition({
                lat: 51.4434249944444,
                lng: -2.566457878338861,
              });
              setMapZoom(14);
            }}
          >
            South West
          </span>
        </li>
        <li className="nav-item">
          <span
            className={active === 'Midlands' ? 'nav-link active' : 'nav-link'}
            onClick={() => {
              filterItem('Midlands');
              setMapPosition({
                lat: 52.476144524165115,
                lng: -0.9266026791887235,
              });
              setMapZoom(9);
            }}
          >
            Midlands
          </span>
        </li>
        <li className="nav-item">
          <span
            className={active === 'North' ? 'nav-link active' : 'nav-link'}
            onClick={() => {
              filterItem('North');
              setMapPosition({
                lat: 54.27865660377397,
                lng: -2.2276982354206907,
              });
              setMapZoom(8);
            }}
          >
            North
          </span>
        </li>
      </ul>
      <div className="location_wrapper">
        <Row className="g-0">
          <Col xxl={5} lg={6} md={12}>
            <div className="location_box_inner">
              {items.map(elem => {
                const { id, name, image, description, url } = elem;

                return (
                  <div
                    className="location_box"
                    id={id}
                    onClick={() => {
                      navigate(url);
                      setVisible(false);
                    }}
                  >
                    <div className="location_img">
                      <img className="img-fluid" src={image} alt={name} />
                    </div>
                    <div className="Location_content">
                      <h6>{name}</h6>
                      <p>{description}</p>
                      <span>
                        Find out more <i className="pi pi-angle-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xxl={7} lg={6} className="d-none d-lg-block">
            <div className="map_wrapper">
              <Map
                items={items}
                mapPosition={mapPosition}
                mapZoom={mapZoom}
                setVisible={setVisible}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Sidebar>
  );
}
