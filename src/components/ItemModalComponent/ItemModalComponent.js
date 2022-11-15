import React from 'react'
import { Modal , Row, Col } from 'react-bootstrap'

import { removeMarkup } from '../../utils/utilFunctions';

import './ItemModalComponent.css'

export const ItemModalComponent = ({item,show,onHide}) => {

	const itemImageUrl = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img/item";

	if(item == null){
		return null
	}
	return (  
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			className=''
			centered

			>

			<Modal.Header className='light-gray-bg light-gray-border' closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className=''>
					<p className='text-light item-modal-title '>
						{item.name && removeMarkup(item.name)}
					</p>
				</Modal.Title>
			</Modal.Header>

			<Modal.Body className='dark-bg item-modal-body text-light'>
				<Row className='px-1'>
					
					<Col xs={2} className=''>
						<img className='item-image' src={`${itemImageUrl}/${item.image.full}`}  alt="Item icon"/>
					</Col>

					<Col className=''>

						<Row className= ''>
								{ (item.gold.base && item.gold.total) 
									? 
									<p className='m-0 pe-3 yellow item-modal-cost'>
										Base: {item.gold.base} Total: {item.gold.total} 
									</p>
									: 
									<p className='m-0 pe-3 yellow item-modal-cost'>
										Cost: {item.gold.base} gold
									</p>
								}
						</Row>

						<Row>
							<p className='m-0 pe-3 font-italic'>
								{item.plaintext && removeMarkup(item.plaintext)}
							</p>
						</Row>
					</Col>

				</Row>
		
				<Row className='mt-2 px-3'>
					{item.description && removeMarkup(item.description)}
				</Row>

				
				{item.from && 
					<Row>
						<h6 className='mt-2 px-3 modal-item-header'>
							Builds from: 
						</h6>

						{item.from.map((from) => (
							<Col className='mt-2 d-flex flex-row justify-content-around' key={from}>
								<img className='item-image' src={`${itemImageUrl}/${from}.png`}  alt="Item icon"/>
							</Col>
						))}
					</Row>
				}

				{item.into && 
					<Row className="">
						<h6 className='mt-2 px-3 modal-item-header'>
							Builds Into: 
						</h6>
						{item.into.map((into) => (
							<Col className='mt-2 d-flex flex-row justify-content-around' key={into}>

								<img 
									className='item-image' 
									src={`${itemImageUrl}/${into}.png`}  
									alt="Item icon"
									onClick={() => console.log({into})}
								/>

							</Col>
						))}
					</Row>
				}

			</Modal.Body>
	</Modal>
  )
}