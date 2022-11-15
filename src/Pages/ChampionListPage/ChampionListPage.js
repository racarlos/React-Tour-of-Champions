import { championService } from "../../services/championService";
import { React, useState, useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";

import { ChampionListComponent } from "../../components/ChampionListComponent/ChampionListComponent";
import './ChampionListPage.css'


export const ChampionListPage = (props) => {

	const [champions, setChampions] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [selectedRole, setSelectedRole] = useState('');

	const roles = ["Assassin","Fighter","Mage","Marksman","Support","Tank"];

	useEffect(() => {
		
		const getChampions = async() => {
			const receivedChampions = await championService.getChampions(selectedRole,searchString);
			setChampions(receivedChampions)
		}
		
		getChampions();
	}, [searchString, selectedRole])


	return (
		<Container className="pt-3">
		
			<Row className="col-9 ps-4">

				<Form method="get">
					<div className="row search faded-yellow col-9">

						Role
						<div className="input-group input-group-sm w-25">
							<Form.Select 
								className="input box form-control form-select" 
								onChange={(e) => setSelectedRole(e.target.value)}>

								<option key="All Roles" value=""> All Roles </option>
								{roles.map((role) => (
									<option key={role} value={role}> 
										{role} 
									</option>
								))}
								
							</Form.Select>
						</div>

						Name         
						<div className="input-group input-group-sm col">
							<Form.Control 
								type="text" 
								className="input box form-control input-sm" 
								placeholder="Search for a Champion" 
								onChange={(e) => setSearchString(e.target.value)}
							/>
								
						</div> 
					</div>
				</Form>
			</Row>

			<Row className='mt-3'>
				<ChampionListComponent champions={champions}/>
			</Row>

		</Container>
	)
}