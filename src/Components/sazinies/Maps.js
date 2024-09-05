import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '650px',
    height: '400px'
};

const center = {
    lat: 57.3151917255981,
    lng: 25.34974072101526
};

const Maps = () => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDGFckTaDnvd1ukWDsOOBKvDMR6BkwkXrQ" // Replace with your API key
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
            >
                <Marker
                    position={center} // Marker position is the same as map center
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default Maps;
