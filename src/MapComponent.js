// MapComponent.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import locationImg from './images/icon-location.svg'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet's CSS is imported


function MyComponent() {
    const map = useMapEvents({
        click: () => {
            map.locate()
        },
        locationfound: (location) => {
            console.log('location found:', location)
        },
    })
    return null
}

function MapComponent() {

    const customIcon = L.icon({
        iconUrl: locationImg,
        iconSize: [25, 41], // adjust according to your image size
    });

    const [position, setPosition] = useState(null)

    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "calc(100vh - 7.6rem)", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <MyComponent></MyComponent>
            </MapContainer>
        </div>
    );
}

export default MapComponent;
