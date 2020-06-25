import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class Racalculator extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x300/?love,icons"
                        alt="First slide"
                        fluid="true"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x300/?hindu,marriage,hand"
                        alt="Second slide"
                        fluid="true"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x300/?love,valentine"
                        alt="Third slide"
                        fluid="true"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x300/?anime,naruto"
                        alt="Fourth slide"
                        fluid="true"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x300/?brother-sister"
                        alt="Fifth slide"
                        fluid="true"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Racalculator;