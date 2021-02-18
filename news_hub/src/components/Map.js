import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function MapGoogle (props) {
    const mapStyles = {
        width: '100vw',
        height: '100vh'
    }
    const { data } = props
    const defaultCenter = { lat: -6.3, lng: 106.7 }

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyDWY2bW9byG04lbV0BS565xCsXt2m27Ez0'
            >
                <GoogleMap
                    mapContainerStyle={ mapStyles }
                    zoom={13}
                    center={defaultCenter}
                >
                    {
                        data.map(el => {
                            return(
                                <Marker 
                                key={el.nama} 
                                position={{lat: el.latitude,lng: el.longitude}}
                                label={el.nama}
                                />
                            )
                        })
                    }
                </GoogleMap>
        </LoadScript>
        
    )
}
