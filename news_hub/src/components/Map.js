import React, { useState } from 'react'
import { GoogleMap, PolygonProps, Marker, Polygon, InfoWindow, useLoadScript } from '@react-google-maps/api'
import jakartaDb from './../jakarta.json'
import { useSelector } from 'react-redux'

export default function MapGoogle (props) {
    const mapStyles = {
        width: '100vw',
        height: '80vh'
    }
    
    // let currentPosition = useSelector(state => state.maps.currentPosition)
    const { data } = props
    const { defaultCenter } = props
    const { mapApiKey } = props
    const { libraries } = props
    const currentPosition = useSelector(state => state.maps.currentPosition)

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: mapApiKey,
        libraries
    }) 

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading..."
    
    // let curLoc = new window.google.maps.LatLng(currentPosition.lat, currentPosition.lng)
    const clickArea = (e) => {
        // console.log(e.latLng);
        // console.log(window.google);
        // console.log(curLoc)
    }
    
    const changeColor = (coord, id) => {
        let curLoc = new window.google.maps.LatLng(currentPosition.lat, currentPosition.lng)
        let polygon = new window.google.maps.Polygon({paths: coord})
        const color = new window.google.maps.geometry.poly.containsLocation(curLoc, polygon) ? "#000000" : "#FF0000"
        console.log(color)
        return color
    }
    // console.log(currentPosition);
    // console.log(curLoc);
    // console.log(window.PolyGeometry)
    return (
        <div>
            <GoogleMap
                mapContainerStyle={ mapStyles }
                zoom={13}
                center={new window.google.maps.LatLng(defaultCenter)}
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
                            zIndex={7}
                            />
                        )
                    })
                }
                {
                    jakartaDb.features.map((el, i) => {
                        return (
                            <div key={i}>
                                {
                                    el.geometry.coordinates.map((li, i) => {
                                        return (
                                            <div key={i}>
                                                {
                                                    li.map((e,i) => {
                                                        let coord = []
                                                        // console.log(curLoc)
                                                        // console.log(typeof(curLoc.lat));
                                                        // console.log(resultColor);
                                                        return (
                                                            <div key={i}>
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
                                                                        strokeColor: changeColor(coord, el.properties.ID),
                                                                        strokeOpacity: 0.5,
                                                                        strokeWeight: 2,
                                                                        fillColor: changeColor(coord),
                                                                        fillOpacity: 0.2
                                                                    }}
                                                                    onClick = {clickArea}
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
