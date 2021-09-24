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

export default class Suspension extends Component {
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
            <div id="suspension">
                <Row>
                    <h1>Suspension</h1>
                    <Image style={{ "width": "100%", "cursor": "pointer" }} src='/img/carsuspension.jpeg' onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}></Image>
                    <p>Suspension is the system of tires, tire air, springs, shock absorbers and linkages that connects a vehicle to its wheels and allows relative motion between the two. Suspension systems must support both road holding/handling and ride quality,[2] which are at odds with each other. The tuning of suspensions involves finding the right compromise. It is important for the suspension to keep the road wheel in contact with the road surface as much as possible, because all the road or ground forces acting on the vehicle do so through the contact patches of the tires. The suspension also protects the vehicle itself and any cargo or luggage from damage and wear. The design of front and rear suspension of a car may be different.</p>
                    <p>Automobiles were initially developed as self-propelled versions of horse-drawn vehicles. However, horse-drawn vehicles had been designed for relatively slow speeds, and their suspension was not well suited to the higher speeds permitted by the internal combustion engine.</p>
                    <p>The first workable spring-suspension required advanced metallurgical knowledge and skill, and only became possible with the advent of industrialisation. Obadiah Elliott registered the first patent for a spring-suspension vehicle; each wheel had two durable steel leaf springs on each side and the body of the carriage was fixed directly to the springs which were attached to the axles. Within a decade, most British horse carriages were equipped with springs; wooden springs in the case of light one-horse vehicles to avoid taxation, and steel springs in larger vehicles. These were often made of low-carbon steel and usually took the form of multiple layer leaf springs.</p>
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