import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './ChampionDetailsPage.css'

export const SkinCarouselComponent = ({championId,skins}) => {
  

    const [index, setIndex] = useState(0);
    
    const imageUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash`;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  
    return (
        <Container className='carousel-container d-flex justify-content-center'>
            <Carousel  activeIndex={index} onSelect={handleSelect}>

                {skins.map((skin) => (
                    <Carousel.Item key={skin.num}>
                        <img
                            className='image-holder'
                            src={`${imageUrl}/${championId}_${skin.num}.jpg`}
                            alt={skin.name}
                        />

                        <Carousel.Caption>
                            <h3> {skin.name}</h3>
                        </Carousel.Caption>

                    </Carousel.Item>
                ))}
             </Carousel>
        </Container>
    )
}
