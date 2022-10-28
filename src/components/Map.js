import React, { useState, useEffect } from "react"
import { GoogleMap, InfoWindow, Marker, LoadScript } from "@react-google-maps/api"
const google = window.google = window.google ? window.google : {}

const center = {
  lat: -27.47,
  lng: 153.026
}

const markers = [
  {
    id: 1,
    name: "sasa",
    position: {
      lat: -27.47,
      lng: 153.026
    }
  }
]

function Map (props) {
  const google = window.google = window.google ? window.google : {}
  const [activeMarker, setActiveMarker] = useState(null)

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }

  async function sendID (id) {
    let res = await fetch(`/api/cam2?id=${id}`)
    let data = await res.json()
    return data
  }

  return (

    <GoogleMap
      zoom={12}
      center={center}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100", height: "500px" }}
    >
      {props.markers == null ? <p>Loading</p> : props.markers.map(({ id, name, position, img }) => (
        <Marker
          key={id}
          position={position}
          onMouseOver={() => handleActiveMarker(id)}
          onClick={() => sendID(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <div>{name}</div>
                <img src={img} />
              </div>

            </InfoWindow>
          ) : null}
        </Marker>
      ))
      }

    </GoogleMap >

  )
}

export default Map