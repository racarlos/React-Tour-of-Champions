import React from 'react'
import { Container, Row } from 'react-bootstrap'

import './NotFoundPage.css'

export const NotFoundPage = () => {

	return (
    <Container className='mt-4'>
      <Row className='justify-content-center'>
        <img src="/images/not-found.jpg" className='not-found-image' alt='Not Found' />
      </Row>
      
      <Row className='justify-content-center'>
        <p className='not-found-text'>
          Sorry, we can't find the page you were looking for.  
        </p>  
      </Row>
      
      <Row className='justify-content-center'>
        <a className='btn btn-primary not-found-button' href='/'>
          Go Home
        </a>        
      </Row>
    </Container>
  )
}