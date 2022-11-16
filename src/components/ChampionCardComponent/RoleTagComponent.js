import React from 'react'
import { Image } from 'react-bootstrap';

import '../../index.css'
import './ChampionCardComponent.css'

export const RoleTagComponent = ({value}) => {

  const source = `/images/roles/${value.toLowerCase()}.svg`;

  return(
    <Image rounded className='tag-icon mx-1' src={source}/>
  )


}
