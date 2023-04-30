import React, { useRef, useEffect } from 'react';

const Map = ({ center, zoom }) => {
  let map;

  async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary('maps');

    map = new Map(document.getElementById('map'), {
      center: center,
      zoom: 16,
    });
    let marker = new google.maps.Marker({
      position: center,
      map: map,
    });
  }
  initMap();
  return <div className='h-80 w-1/4' id='map'></div>;
};

export default Map;
