import React, { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import Futurum1 from '../../../Assets/img/futurum_1.jpeg';
import Futurum2 from '../../../Assets/img/futurum_2.jpeg';
import Futurum3 from '../../../Assets/img/futurum_3.jpeg';
import Futurum4 from '../../../Assets/img/futurum_4.jpeg';
import Futurum5 from '../../../Assets/img/futurum_5.jpeg';
import Futurum6 from '../../../Assets/img/futurum_6.jpeg';
import Futurum7 from '../../../Assets/img/futurum_7.jpeg';
import Futurum8 from '../../../Assets/img/futurum_8.jpeg';
import Futurum9 from '../../../Assets/img/futurum_9.jpeg';
import Futurum10 from '../../../Assets/img/futurum_10.jpeg';
import Futurum11 from '../../../Assets/img/futurum_11.jpeg';
import Futurum12 from '../../../Assets/img/futurum_12.jpeg';
import PdfFile from '../../../Assets/img/TDX_FUTURUM_2023.pdf';
import FaqFile from '../../../Assets/img/BPE_2023_FREQUENTLY_ASKED_QUESTIONS_BRISTOL2.pdf';
import pdfIcon from '../../../Assets/img/pdf.png';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import '../../../Assets/css/lightgallery-bundle.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function Experience() {
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
    {
      id: '1',
      size: '1400-933',
      src: Futurum1,
      thumb: Futurum1,
    },
    {
      id: '2',
      size: '1400-933',
      src: Futurum2,
      thumb: Futurum2,
    },
    {
      id: '3',
      size: '1400-933',
      src: Futurum3,
      thumb: Futurum3,
    },
    {
      id: '4',
      size: '1400-933',
      src: Futurum4,
      thumb: Futurum4,
    },
    {
      id: '5',
      size: '1400-933',
      src: Futurum5,
      thumb: Futurum5,
    },
    {
      id: '6',
      size: '1400-933',
      src: Futurum6,
      thumb: Futurum6,
    },
  ]);

  const [items2, setItems2] = useState([
    {
      id: '1',
      size: '1400-933',
      src: Futurum7,
      thumb: Futurum7,
    },
    {
      id: '2',
      size: '1400-933',
      src: Futurum8,
      thumb: Futurum8,
    },
    {
      id: '3',
      size: '1400-933',
      src: Futurum9,
      thumb: Futurum9,
    },
    {
      id: '4',
      size: '1400-933',
      src: Futurum10,
      thumb: Futurum10,
    },
    {
      id: '5',
      size: '1400-933',
      src: Futurum11,
      thumb: Futurum11,
    },
    {
      id: '6',
      size: '1400-933',
      src: Futurum12,
      thumb: Futurum12,
    },
  ]);

  const onInit = useCallback(detail => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map(item => {
      return (
        <div key={item.id} className="gallery-item" data-src={item.src}>
          <img className="img-responsive" src={item.thumb} alt="" />
          <i className="pi pi-search-plus"></i>
        </div>
      );
    });
  }, [items]);

  const getItems2 = useCallback(() => {
    return items2.map(item2 => {
      return (
        <div key={item2.id} className="gallery-item" data-src={item2.src}>
          <img className="img-responsive" src={item2.thumb} alt="" />
          <i className="pi pi-search-plus"></i>
        </div>
      );
    });
  }, [items2]);

  useEffect(() => {
    $('.location_inner .btn_border_white').click(function () {
      var offset = 100;
      $('html, body').animate(
        {
          scrollTop: $('#date').offset().top - offset,
        },
        100,
      );
      return false;
    });
  }, []);

  useEffect(() => {
    lightGallery.current.refresh();
    console.log('videl', lgVideo);
  }, [items]);

  return (
    <div className="experience_wrapper pt-80">
      <div className="container">
        <div className="text-center mb-4">
          <h1>WELCOME TO FUTURUM AT TOBACCO DOCK</h1>
          <p>
            Enter into the unknown this Christmas... FUTURUM at Tobacco Dock
            transports you to the party of the decade where excitement and
            adventure await.
          </p>
        </div>
      </div>
      <div className="gallery_wrapper">
        <div className="image_lightbox">
          <LightGallery
            plugins={[
              lgVideo,
              lgZoom,
              lgThumbnail,
              lgFullscreen,
              lgAutoplay,
              lgShare,
            ]}
            elementClassNames="Gallery_image_wrapper"
            onInit={onInit}
          >
            {getItems()}
          </LightGallery>
        </div>
      </div>
      <div className="container">
        <div className="text-center py-5">
          <p>A bespoke theme for 2023, curated especially for Tobacco Dock.</p>
          <p>
            Explore a brand-new world where your senses are heightened as you
            are immersed in a kaleidoscope of colour.
          </p>
        </div>
      </div>
      <div className="gallery_wrapper">
        <div className="image_lightbox">
          <LightGallery
            plugins={[
              lgVideo,
              lgZoom,
              lgThumbnail,
              lgFullscreen,
              lgAutoplay,
              lgShare,
            ]}
            elementClassNames="Gallery_image_wrapper"
            onInit={onInit}
          >
            {getItems2()}
          </LightGallery>
        </div>
      </div>
      <div className="container">
        <div className="text-center py-5">
          <p>
            Your journey begins in our 'Q Dock' where guests will be greeted
            with arrival bubbles, before being transported to 'Phase X' to enjoy
            a delicious 3 course dinner, or a seasonal bowl food menu or themed
            street food stalls.
          </p>
          <p>
            Let the people of the future entertain and guide you through this
            strange and bright new landscape. Enjoy our exciting menus and
            activities as you explore and dance the night away with our amazing
            live band and DJ.
          </p>
          <p>
            You’re sure to experience a once in a lifetime trip into FUTURUM at
            Tobacco Dock London!
          </p>
        </div>
      </div>
      <div className="location_section_wrap">
        <div className="container">
          <Row>
            <Col lg={3} md={6}>
              <div className="location_inner">
                <h4>
                  <i className="pi pi-map-marker"></i> LOCATION
                </h4>
                <div className="ps-3">
                  <p>
                    Green Entrance, Lower Quayside, Wapping Lane, London E1W 2SF
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="location_inner download_box">
                <h4>
                  <i className="pi pi-download"></i> DOWNLOADS
                </h4>
                <ul className="ps-3">
                  <li>
                    <Link to={PdfFile} target="_blank" download>
                      <img src={pdfIcon} alt="pdf icon" /> PDF Brochure
                    </Link>
                  </li>
                  <li>
                    <Link to={FaqFile} target="_blank" download>
                      <img src={pdfIcon} alt="pdf icon" /> Frequently Asked
                      Questions
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="location_inner">
                <h4>
                  <i className="pi pi-tag"></i> PRICES FROM
                </h4>
                <div className="ps-3">
                  <h6>
                    £69.50 PP <sub>exc VAT</sub>
                  </h6>
                  <Link href="#date" className="btn_border_white">
                    Book Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
