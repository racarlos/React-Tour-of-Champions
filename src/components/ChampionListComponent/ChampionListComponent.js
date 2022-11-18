import {React, useState, useEffect } from 'react';
import { sleep } from '../../utils/utilFunctions';

import {Col, Row, Container} from 'react-bootstrap';
import { NoChampionFoundComponent } from '../NoChampionFoundComponent/NoChampionFoundComponent';
import {ChampionCardComponent} from '../ChampionCardComponent/ChampionCardComponent'
import { PaginationComponent } from "../../components/PaginationComponent/PaginationComponent";

import '../../index.css'
import './ChampionListComponent.css'
import { SpinnerComponent } from '../SpinnerComponent/SpinnerComponent';

export const ChampionListComponent = ({champions}) => {

  // Get Subset of Champions based on filters
	const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false)

	const itemsPerPage = 10;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentChampions = Object.entries(champions).slice(indexOfFirstItem, indexOfLastItem)

  const numberOfPages = Math.ceil(Object.keys(champions).length / itemsPerPage);

  const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	}

  useEffect(() => {
    document.title = "Champions";

    const reloadChampions = async() => {
      setIsLoading(true);
      setCurrentPage(1);
      await sleep(750);
      setIsLoading(false);
    }

    reloadChampions();
  }, [champions])

  if(isLoading){
    return (
      <SpinnerComponent/>
    ) 
  }
  if(champions.length === 0){
    return(
      <NoChampionFoundComponent/>
    )
  }
  return (
    // Outer Container
    <Container className="text-light">
      <Row className="">
        {currentChampions.map(([key,value]) => (
          <Col className='d-flex justify-content-center' key={key}>
            <ChampionCardComponent champion={value} />
          </Col>
        ))}
      </Row>

      { numberOfPages > 1 && 
         <Row>
          <PaginationComponent 
            itemsPerPage = {itemsPerPage} 
            totalItems = {Object.keys(champions).length} 
            currentPage = {currentPage}
            paginate={paginate}/>
        </Row>
      }

    </Container>
  )
};
