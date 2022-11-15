import React from 'react'
import { Spinner } from "react-bootstrap";

export const SpinnerComponent = () => {
  return (
    <div className="text-center align-middle h-100 w-100 mt-5"> 
        <Spinner animation="border" className='loading-spinner mt-5' variant="warning">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}
