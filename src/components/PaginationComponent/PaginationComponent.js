import React from 'react'
import { Pagination } from 'react-bootstrap';
import './PaginationComponent.css'

export const PaginationComponent = ({itemsPerPage, totalItems, currentPage, paginate}) => {
  
	const pageNumbers = [];
  
	for(let number=1; number <= Math.ceil(totalItems/itemsPerPage); number++){
		pageNumbers.push(
			<Pagination.Item 
				key={number} 
				onClick={() => paginate(number)} 
				active={number === currentPage}
				className='bg-dark mx-1 text-warn'
				>
					{number}
			</Pagination.Item>
		);
	}

	const nextPage = () => {
		if(currentPage !== pageNumbers.length) {
			paginate(currentPage + 1)
		}
	}
	const prevPage = () => {
		if(currentPage !== 1) {
			paginate(currentPage - 1)
		}
	}

	return (
		<Pagination className='justify-content-center' data-test="pagination-control">

			<Pagination.Prev 
				id='myid'
				onClick={prevPage} 
				disabled={currentPage === 1} 
				className='me-1'
			/>

			{pageNumbers}

			<Pagination.Next 
				onClick={nextPage} 
				disabled={currentPage === pageNumbers.length}
				className='ms-1'
				/>

		</Pagination>

  )
}