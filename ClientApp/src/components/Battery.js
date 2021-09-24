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

export default class Battery extends Component {
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
            <div id="battery">
                <Row>
                    <h1>Battery</h1>
                    <Image style={{ "width": "100%", "cursor": "pointer" }} src='/img/carbattery.jpg' onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}></Image>
                    <p>A brake is a mechanical device that inhibits motion by absorbing energy from a moving system. It is used for slowing or stopping a moving vehicle, wheel, axle, or to prevent its motion, most often accomplished by means of friction.</p>
                    <p>Most brakes commonly use friction between two surfaces pressed together to convert the kinetic energy of the moving object into heat, though other methods of energy conversion may be employed. For example, regenerative braking converts much of the energy to electrical energy, which may be stored for later use. Other methods convert kinetic energy into potential energy in such stored forms as pressurized air or pressurized oil. Eddy current brakes use magnetic fields to convert kinetic energy into electric current in the brake disc, fin, or rail, which is converted into heat. Still other braking methods even transform kinetic energy into different forms, for example by transferring the energy to a rotating flywheel.</p>
                    <p>Brakes are generally applied to rotating axles or wheels, but may also take other forms such as the surface of a moving fluid (flaps deployed into water or air). Some vehicles use a combination of braking mechanisms, such as drag racing cars with both wheel brakes and a parachute, or airplanes with both wheel brakes and drag flaps raised into the air during landing.</p>
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