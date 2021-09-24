import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Container from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';


const images = [
    '/img/carbody.jpg',
    '/img/carengine.jpg',
    '/img/cartransmission.jpg',
    '/img/carsuspension.jpeg',
    '/img/carbrakes.jpg',
    '/img/carbattery.jpg'
];

const carItems = [
    'Body',
    'Engine',
    'Transmission',
    'Suspension',
    'Brakes',
    'Battery'
]



export default class Intro extends Component {
    

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    
    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div id="home">
                <Row>
                    <h1>What is a car?</h1>
                    <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods. </p>
                    <p>A car typically consists of the following components: </p>
                    <br />
                </Row>
                
                <Row>
                    <Col>
                        <ul>
                            <li style={{ "cursor": "pointer" }} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}>{carItems[0]}</li>
                            <li style={{ "cursor": "pointer" }} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}>{carItems[1]}</li>
                            <li style={{ "cursor": "pointer" }} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}>{carItems[2]}</li>
                            
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li style={{ "cursor": "pointer" }} onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}>{carItems[3]}</li>
                            <li style={{ "cursor": "pointer" }} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}>{carItems[4]}</li>
                            <li style={{ "cursor": "pointer" }} onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}>{carItems[5]}</li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <p>Click each of the above items to see a picture of each part of the car. Scroll down for a full description and more information.</p>
                </Row>

                <hr class="separator" />
                
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            
            </div>
        );
    }
}