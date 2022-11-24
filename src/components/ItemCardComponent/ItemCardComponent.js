import React from 'react'

import { Card } from 'react-bootstrap';

import { removeMarkup } from '../../utils/utilFunctions';

import '../../index.css'
import './ItemCardComponent.css'



export const ItemCardComponent = ({item, onClick}) => {



	const itemImageUrl = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img/item";

	return (
    <Card className='item-card mb-4 text-light' onClick={onClick}>
		<Card.Img variant='top' className='card-img-top h-100' src={`${itemImageUrl}/${item.image.full}`}  alt="Champion splash "/>
	
		<Card.Body className='p-0 h-100'>
			<p className='item-name'>
				{removeMarkup(item.name)}
			</p>
		</Card.Body>
	</Card>
  )
}
