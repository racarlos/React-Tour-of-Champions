import React from "react";

import "./HomePage.css"

export const HomePage = (props) => {

    document.title = 'Home';
	
	return (
		<>
			<div className="banner">
			</div>
			<div className="container align-items-center">
				<p className="greeting text-center mb-0">
					WELCOME TO THE RIFT 
				</p>

				<div className="">
					<p className="sub-greeting text-center w-50">
						League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 150 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.
					</p>
				</div>

				<div className="row mt-3 mb-4">

					<div className="row mb-2">
						<p className="click text-center text-align-center w-50">
							Click below to Explore Runeterra
						</p>
					</div>

					<div className="row text-center">
						<div className="col">
							<a className="btn btn-home mx-3" data-test="navButton-champions" href="/champions">
								Champions
							</a>

							<a className="btn btn-home mx-3" data-test="navButton-items" href="/items">
								Items
							</a>

							<a className="btn btn-home mx-3" data-test="navButton-maps" href="/maps">
								Maps
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}