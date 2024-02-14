// MapComponent.js
import React, { useEffect, useState } from 'react';
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import locationImg from './images/icon-location.svg'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet's CSS is imported


function MapComponent({responseData}) {

    const [center, setCenter] = useState([responseData.location.lat, responseData.location.lng])
    const [mapKey, setMapKey] = useState(0); // Key for re-rendering MapContainer

    const customIcon = L.icon({
        iconUrl: locationImg,
        iconSize: [25, 41], // adjust according to your image size
    });


    useEffect(() => {
        if (responseData && responseData.location) {
            setCenter([responseData.location.lat, responseData.location.lng]);
            setMapKey(prevKey => prevKey + 1);
        }
    }, [responseData]);

    return (
        <div>
            <MapContainer key={mapKey} center={center} zoom={13} style={{ height: "calc(100vh - 11.5rem)", width: "100%", zIndex:"1" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center} icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default MapComponent;
