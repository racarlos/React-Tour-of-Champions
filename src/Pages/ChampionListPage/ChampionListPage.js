import { championService } from "../../services/championService";
import { React, useState, useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";
import  { useSearchParams} from 'react-router-dom';

import { ChampionListComponent } from "../../components/ChampionListComponent/ChampionListComponent";
import './ChampionListPage.css'


export const ChampionListPage = (props) => {

	const [champions, setChampions] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams({searchString: '', selectedRole: ''});

	const searchString = searchParams.get('searchString');
	const selectedRole = searchParams.get('selectedRole');



	const roles = ["Assassin","Fighter","Mage","Marksman","Support","Tank"];

	useEffect(() => {
		
		const getChampions = async() => {
			const receivedChampions = await championService.getChampions(selectedRole, searchString);
			setChampions(receivedChampions)
		}
		
		getChampions();
	}, [searchString, selectedRole])


	const handleSearchStringChange = (e) => {
		if(e.target.value !== undefined){
			setSearchParams({searchString : e.target.value, selectedRole: selectedRole});
		}
	}

	const handleRoleChange = (e) => {
		if(e.target.value !== undefined){
			setSearchParams({searchString : searchString, selectedRole: e.target.value});
		}
	}

	return (
		<Container className="pt-3">
		
			<Row className="col-9 ps-4">

				<Form method="get">
					<div className="row search faded-yellow col-9">

						Role
						<div className="input-group input-group-sm w-25">
							<Form.Select 
								className="input box form-control form-select" 
								onChange={handleRoleChange}>

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
								onChange={handleSearchStringChange}
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