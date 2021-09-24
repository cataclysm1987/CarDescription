import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Container from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'

const images = [
    '/img/carbody.jpg',
    '/img/carengine.jpg',
    '/img/cartransmission.jpg',
    '/img/carsuspension.jpeg',
    '/img/carbrakes.jpg',
    '/img/carbattery.jpg'
];

export default class Body extends Component {
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
            <div id="body">
                <Row>
                    <h1>Body</h1>
                    <Image style={{ "width": "100%", "cursor": "pointer" }} src='/img/carbody.jpg' onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}></Image>
                    <p>Vehicle body – is most expensive part of a car. Vehicle body could be the main supporting structure or its particular element. The Vehicle Body of modern car consist of: engine section, saloon, trunk. </p>
                    <p>Vehicle body is the main supporting structure of a vehicle, to which all other components are attached. Truck uses a separate frame as chassis.</p>
                    <p>Vehicle body is designed for carry the goods (a truck) or for carriage of passengers (passenger car). There are some kinds of vehicle body which differ in: by purpose (trucks, passengers, cargo-passenger, special) and by construction (skeleton, half-skeleton, non-skeleton).</p>
                    <br />
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