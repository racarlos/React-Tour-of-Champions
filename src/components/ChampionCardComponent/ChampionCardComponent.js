import React from 'react';

import { Row, Col , Card } from 'react-bootstrap';
import { RoleTagComponent } from './RoleTagComponent'

import '../../index.css'
import './ChampionCardComponent.css'

export const ChampionCardComponent = ({champion}) => {

  const loadingImgUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
	
  return (
	<a href={`champions/${champion.id}`} className='link mb-4'>
		<Card className='champion-card' data-test={champion.id}>

		<Card.Img variant='top' className='champion-card-img-top' src={loadingImgUrl + champion.id + '_0.jpg'}  alt="Champion splash "/>

		<Card.Body className='p-2'>
			<Row>
				<Col>
					<Card.Title className="text-light champion-name"> {champion.id} </Card.Title>
				</Col>

				<Col className='d-flex flex-row-reverse'>
					{champion.tags.map((value) => (
						<RoleTagComponent key={value} value={value} />
					))}
				</Col>

			</Row>

			<Row>
				<div className='faded-yellow champion-title'>
					{champion.title}
				</div>
			</Row>

		</Card.Body>

		</Card>
	</a>
  )
}
