import { React, useEffect, useState } from 'react'
import { Row, Col, Container } from "react-bootstrap";

import { itemService } from "../../services/itemService";
import { ItemCardComponent } from "../../components/ItemCardComponent/ItemCardComponent";
import { ItemModalComponent } from "../../components/ItemModalComponent/ItemModalComponent";

import './ItemsPage.css'

export const ItemsPage = () => {

  const [items, setItems] = useState([]);

  const [itemToShow, setItemToShow] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  
	useEffect(() => {
		const getItems = async() => {
			const receivedChampions = await itemService.getItems();
			setItems(receivedChampions) 
		}
		getItems();
	}, [])


  const launchModal = (item) => {
    setModalShow(true)
    setItemToShow(item);
  }

  return (
    <Container>
      <Row className='mt-4'>
        {items.map((item,index) => (
          <Col className='d-flex justify-content-center' key={index}>
            <ItemCardComponent item={item} onClick={() => launchModal(item)}/>
          </Col>
        ))}
      </Row>

      <ItemModalComponent
        item={itemToShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      
    </Container>
  )
}
