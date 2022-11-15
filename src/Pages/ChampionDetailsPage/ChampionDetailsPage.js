import axios  from "axios";
import { sleep } from "../../utils/utilFunctions";
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { SkinCarouselComponent } from "./SkinCarouselComponent";
import { Badge, Col, Container, Row, Stack, Spinner } from 'react-bootstrap';


import { removeMarkup } from "../../utils/utilFunctions";
import './ChampionDetailsPage.css'
import '../../index.css'

export const ChampionDetailsPage = (props) => {

	const {championId} = useParams();
	const [champion, setChampion] = useState(null);	
	const [isLoading, setIsLoading] = useState(false);

	const splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash";
	const squareUrl = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion";
	const spellUrl = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell";

	useEffect(() => {

		const getChampions = async () => {
			setIsLoading(true);
			const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${championId}.json`);
			setChampion(res.data.data[championId]);
			
			await sleep(1000);
			setIsLoading(false);
		}
		getChampions();
	}, [championId]);
	
	if(isLoading){
		return(
			<div className="text-center align-middle h-100 w-100 mt-5"> 
					<Spinner animation="border" className='loading-spinner mt-5' variant="warning">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
			</div>
		);
	}

	else if (champion) 
	return (	

		<Container fluid className='text-light mb-3'>

			
			<Row className='p-4'>

				{/* Splash Art Section */}
				<Col>
					<img className='splash' 
					src={`${splashUrl}/${champion.id}_0.jpg`}  
					alt="Champion Splash" />
				</Col>

				{/* Details Column */}
				<Col className=''>

					<Row className='mb-2'>
						<Col className='px-4'>
							<Row className='detail-name yellow'>
								{champion.id}
							</Row>

							<Row className='detail-title '>
								{champion.title}
							</Row>
						</Col>

						<Col className='d-flex justify-content-end pt-2'>
							<img className='detail-icon' src={`${squareUrl}/${champion.id}.png`} alt="Champion icon"/>
						</Col>
					</Row>

					<Row className='p-0 mb-4'>
						<Stack direction="horizontal" gap={2}>
							{champion.tags?.map((value) => (
								<Badge className="detail-tag" bg="primary" key={value}>
									{value}
								</Badge>
							))}
						</Stack>
					</Row>

					<Row className='detail-lore px-3'>
						{champion.lore && removeMarkup(champion.lore)}
					</Row>

				</Col>
			</Row>

			<Row className='px-5'>

				<p className="header">
					CHAMPION ABILITIES
				</p>

				{champion.spells?.map((spell,index) => (
					<Row className="spell-row mb-3" key={spell.id}>

						<Col className="col-md-2 d-flex align-items-center">
							<div className="">
								<img className="align-self-center spell-icon" src={`${spellUrl}/${spell.image.full}`} alt={spell.image.full}/>   
							</div>
						</Col>

						<Col className="col-md-3 d-flex align-items-center">
							<div className=""> 
								<p className="spell-name">
									{spell.name}
								</p>
							</div>
						</Col>

						<Col className="col-md-7 d-flex align-items-center">
							<div className=""> 
								<p className="spell-description">
									{removeMarkup(spell.description)}
								</p>
							</div>
						</Col>
					</Row>
				))}

			</Row>

			<Row className='px-5'>
				{champion.allytips?.length > 0 &&  
					<Col sm={6}>

						<div className="header mx-3">
							<p className='text-center'>
								Tips when playing with {champion.name}
							</p>
						</div>

						<div className="row p-2 text-light m-3">
							<ul>
								{champion.allytips?.map((tip,index) => (
									<li key={index}>
										<div className="row d-flex  align-items-center">
											<div className=""> 
												<p className="tip-description">
													{removeMarkup(tip)}
												</p>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</Col>
				}

				{champion.enemytips?.length > 0 &&  
					<Col sm={6}>
						
						<div className="header mx-3">
							<p className='text-center'>
								Tips when playing against {champion.name}
							</p>
						</div>

						<div className="row p-2 text-light m-3">
							<ul>
								{champion.enemytips?.map((tip,index) => (
									<li key={index}>
										<div className="row d-flex  align-items-center">
											<div className=""> 
												<p className="tip-description">
													{removeMarkup(tip)}
												</p>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>

					</Col>
				}
			</Row>
			
			{ champion.skins?.length && <Row className='px-5 mb-5 image-carousel'>
				<p className="header"> CHAMPION SKINS </p>
				<SkinCarouselComponent championId={champion.id} skins={champion.skins} />
			</Row>}

								

		</Container>
	)
}