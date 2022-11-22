import React from 'react'
import { Container, Row } from 'react-bootstrap'

import './NoItemFoundComponent.css'

export const NoItemFoundComponent = () => {
  return (
    <Container className='mt-5' >
        <Row className='justify-content-center'>
          
            <img src='/images/empty-list.png' 
              className='non-found-image' 
              data-test='no-item-image' 
              alt='No Item Found'
            />
        </Row>

        <Row className='mt-3'>
            <p className='non-found-text'> 
              No Item fits this search crtieria.
            </p>
        </Row>

    </Container>
  )
}
