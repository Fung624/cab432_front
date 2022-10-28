import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function List () {
  return (
    <div>
      <ListGroup numbered>
        <ListGroupItem>
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem>
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem>
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem>
          Porta ac consectetur ac
        </ListGroupItem>
        <ListGroupItem>
          Vestibulum at eros
        </ListGroupItem>
        <ListGroupItem>
          Vestibulum at eros
        </ListGroupItem>
        <ListGroupItem>
          Vestibulum at eros
        </ListGroupItem>
        <ListGroupItem>
          Vestibulum at eros
        </ListGroupItem>
        <ListGroupItem>
          Vestibulum at eros
        </ListGroupItem>
        <ListGroupItem>
          Vestibulum at eros
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
