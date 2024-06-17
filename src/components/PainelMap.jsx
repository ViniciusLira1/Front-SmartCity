"use client"

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"
import { useState } from "react"
import axios from "axios"



export default function PainelMap({sensores, onClickMarker }) {

  
    const position = { lat: -22.914124605604947, lng: -47.068326004158656 }

    return (
        <>
            <div className='h-[24rem] w-full'>
               

                <APIProvider apiKey="AIzaSyC9IOLAvHYrb_7Fll1mEhGpD3aL2PmR29Y">
                    <div className="h-[24rem]">
                        <Map mapId="9d7613d58b1fae4c" styles="StyledMap" defaultZoom={20} defaultCenter={position} mapTypeControl={false} zoomControl={false}>
                            {sensores.map((sensor) => (
                                <AdvancedMarker key={sensor.id} position={{lat: sensor.latitude, lng: sensor.longitude}} onClick={() => onClickMarker(sensor)}>
                                    <Pin />
                                </AdvancedMarker>
                            ))}
                            <AdvancedMarker position={position}>
                                <Pin />
                            </AdvancedMarker>
                        </Map>
                    </div>
                </APIProvider>

            </div>

        </>
    )
}