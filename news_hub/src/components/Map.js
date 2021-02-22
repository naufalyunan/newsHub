import React from 'react'
import { GoogleMap, LoadScript, Marker, Polygon, InfoWindow, useLoadScript } from '@react-google-maps/api'
import jakartaDb from './../jakarta.json'

export default function MapGoogle (props) {
    const mapStyles = {
        width: '100vw',
        height: '80vh'
    }

    const { data } = props
    const { defaultCenter } = props
    const { mapApiKey } = props

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: mapApiKey
        
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading..."

    return (
        <div>
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
                            icon={{
                                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Red_Cross_icon.svg/64px-Red_Cross_icon.svg.png",
                                scaledSize: new window.google.maps.Size(20,20),
                                origin: new window.google.maps.Point(0,0),
                                anchor: new window.google.maps.Point(10,10)
                            }}
                            />
                        )
                    })
                }
                {
                    jakartaDb.features.map(el => {
                        return (
                            <div>
                                {
                                    el.geometry.coordinates.map(li => {
                                        return (
                                            <div>
                                                {
                                                    li.map(e => {
                                                        console.log(e);
                                                        let coord = []
                                                        return (
                                                            <div>
                                                                {
                                                                    e.map(element => {
                                                                        coord.push({
                                                                            lat: element[1],
                                                                            lng: element[0]
                                                                        })
                                                                    })
                                                                }
                                                                <Polygon
                                                                    key={el.properties.KEL_NAME}
                                                                    path={coord}
                                                                    options= {{
                                                                        strokeColor: "#FF0000",
                                                                        strokeOpacity: 0.8,
                                                                        strokeWeight: 2,
                                                                        fillColor: "#FF0000",
                                                                        fillOpacity: 0.2
                                                                    }}
                                                                />
                                                            </div>
                                                        )
                                                    })   
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </GoogleMap>
        </div>
        
    )
}
