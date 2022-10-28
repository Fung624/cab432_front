import React, { useEffect, useState, useContext, createContext } from 'react'
import { useLoadScript } from "@react-google-maps/api"
import logo from './logo.svg'
import './css/App.css'
import Map from "./components/Map"
import List from "./components/List"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, NavbarBrand, Row, Col, InputGroup, Input, Button } from 'reactstrap'

const Context = createContext()


export default function App () {
  const [markers, setMarkers] = useState(null)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCQ1LyU9d52CXM2acseyFBFhU9SlHv9HXQ"
  })

  async function getData () {
    let res = await fetch("/api/cam1")
    let data = await res.json()
    return data.marker
  }

  useEffect(() => {
    (async () => {
      try {
        await setMarkers(await getData())
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <Context.Provider>
      <div className="App home">

        <header>
          <Navbar
            className="nav"
          >
            <NavbarBrand className="navfont">
              <img
                alt="logo"
                src={logo}
                style={{
                  height: 40,
                  width: 80,
                }}
              />
            </NavbarBrand>
          </Navbar>
        </header>

        <main>

          <section>
            <Container>
              <Row>
                <Col>
                  <h1 className="bigtitle">Title</h1>
                </Col>
              </Row>
            </Container>
          </section>
          <section>

            <Container>
              <Row>
                <Col>
                  <List />
                </Col>
                <Col>
                  {isLoaded ? <Map markers={markers} /> : null}
                </Col>
              </Row>
            </Container>
          </section>

        </main>

        <footer>
          <div className='container-fluid footer'>
            <div>Copyright © 2022 PINK</div>
          </div>
        </footer>

      </div>
    </Context.Provider>
  )
}
