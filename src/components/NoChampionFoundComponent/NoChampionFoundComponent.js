import React from 'react'
import { Container, Row } from 'react-bootstrap'

import './NoChampionFoundComponent.css'

export const NoChampionFoundComponent = () => {
  return (
    <Container className='mt-5'>
        <Row className='justify-content-center'>
            <img src='/images/empty-list.png' className='non-found-image' alt='No Champion Found'/>
        </Row>

        <Row className='mt-3'>
            <p className='non-found-text'> 
              No Champion fits this search crtieria.
            </p>
        </Row>

    </Container>
  )
}
