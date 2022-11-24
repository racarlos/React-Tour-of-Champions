import { React, useEffect, useState } from 'react'
import { Row, Col, Container, Form } from "react-bootstrap";
import  { useSearchParams} from 'react-router-dom';

import './ItemsPage.css'

import { itemService } from "../../services/itemService";
import { ItemCardComponent } from "../../components/ItemCardComponent/ItemCardComponent";
import { ItemModalComponent } from "../../components/ItemModalComponent/ItemModalComponent";
import { NoItemFoundComponent } from '../../components/NoItemFoundComponent/NoItemFoundComponent';

export const ItemsPage = () => {

  const [items, setItems] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams({searchString: ''});

  const [itemToShow, setItemToShow] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const searchString = searchParams.get('searchString');
  
	useEffect(() => {

    document.title = 'Items';

		const getItems = async() => {
			const receivedItems = await itemService.getItems(searchString);
      console.log(receivedItems.length)
			setItems(receivedItems) 
		}

    getItems();
    console.log(items.count)
	}, [searchString])


	const handleSearchStringChange = (e) => {
		if(e.target.value !== undefined){
			setSearchParams({searchString : e.target.value});
		}
	}

  const launchModal = (item) => {
    setModalShow(true)
    setItemToShow(item);
  }


  return (
    <Container className="pt-3">

      <Row className="col-6 ps-4">
				<Form method="get">
					<div className="row search faded-yellow col-9">

						Name         
						<div className="input-group input-group-sm col">
							<Form.Control 
								type="text" 
								className="input box form-control input-sm" 
								placeholder="Search for an Item" 
								onChange={handleSearchStringChange}
								data-test="name-input"
							/>
								
						</div> 
					</div>
				</Form>
			</Row>

      { items.length === 0 ?
        <NoItemFoundComponent/>
      : 
        <>
          <Row className='mt-4 d-flex justify-content-start ' data-test='item-list'>
            {items.map((item,index) => (
              <Col xs={1} className='d-flex align-items-stretch' key={index}>
                <ItemCardComponent item={item} onClick={() => launchModal(item)}/>
              </Col>
            ))}
          </Row>

          <ItemModalComponent
            item={itemToShow}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      }
      
    </Container>
  )
}
