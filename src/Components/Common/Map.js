import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';
import { useCallback, useMemo, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const defaultMapOptions = {
  mapId: '8914cb112547e41', //  more ids mapId: "b181cac70f27f5e6",
  controlSize: 35,
  streetViewControl: false, //streetViewControl don't show
  clickableIcons: false,
  fullscreenControl: false, // for fullscreen button
  fullscreenControlOptions: { position: 11 },
  mapTypeControl: false,
  motionTrackingControl: true,
  motionTrackingControlOptions: { position: 11 },
};

export const Map = ({ items, mapPosition, mapZoom, setVisible }) => {
  const mapRef = useRef();
  const navigate = useNavigate();
  const onLoad = useCallback(map => (mapRef.current = map), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAoLcXyxMSS0w2tibmM55iSH2pa07Tb1HY',
    libraries: ['places'],
  });

  const [activeMarker, setActiveMarker] = useState({});

  const handleActiveMarker = useCallback(
    (id, name, description, image, url) => {
      if (id === activeMarker?.id) return;
      const markerObj = {
        id,
        description,
        image,
        url,
        name: name.toString(),
      };
      setActiveMarker(markerObj);
    },
    [activeMarker?.id],
  );

  const map = useMemo(() => {
    if (isLoaded)
      return (
        <>
          <GoogleMap
            zoom={mapZoom}
            mapContainerClassName="map"
            mapContainerStyle={{ height: 'calc(100vh - 100px)', width: '100%' }}
            center={mapPosition}
            onLoad={onLoad}
            options={defaultMapOptions}
          >
            {items?.map((x, i) => (
              <MarkerF
                position={x?.position}
                key={i}
                animation="bounce"
                onClick={() => {
                  handleActiveMarker(
                    x?.id,
                    x?.name,
                    x?.description,
                    x?.image,
                    x?.url,
                  );
                }}
              >
                {activeMarker?.id === x?.id ? (
                  <InfoWindowF
                    onCloseClick={() => setActiveMarker(null)}
                    position={x?.position}
                  >
                    <div className="active_info_wrap">
                      <div
                        className="location_img_info"
                        onClick={() => {
                          navigate(activeMarker?.url);
                          setVisible(false);
                        }}
                      >
                        <img src={activeMarker?.image} alt="" />
                      </div>
                      <h4>{activeMarker?.name}</h4>
                      <h6>{activeMarker?.description}</h6>
                    </div>
                  </InfoWindowF>
                ) : null}
              </MarkerF>
            ))}
          </GoogleMap>
        </>
      );
  }, [
    activeMarker?.id,
    activeMarker?.name,
    activeMarker?.description,
    activeMarker?.image,
    activeMarker?.url,
    handleActiveMarker,
    isLoaded,
    onLoad,
    items,
  ]);

  return <>{map}</>;
};
