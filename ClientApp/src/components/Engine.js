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

export default class Engine extends Component {
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
            <div id="engine">
                <Row>
                    <h1>Engine</h1>
                    <Image style={{ "width": "100%", "cursor": "pointer" }} src='/img/carengine.jpg' onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}></Image>
                    <p>An engine or motor is a machine designed to convert one or more forms of energy into mechanical energy.</p>
                    <p>Available energy sources include potential energy (e.g. energy of the Earth's gravitational field as exploited in hydroelectric power generation), heat energy (e.g. geothermal), chemical energy, electric potential and nuclear energy (from nuclear fission or nuclear fusion). Many of these processes generate heat as an intermediate energy form, so heat engines have special importance. Some natural processes, such as atmospheric convection cells convert environmental heat into motion (e.g. in the form of rising air currents). Mechanical energy is of particular importance in transportation, but also plays a role in many industrial processes such as cutting, grinding, crushing, and mixing.</p>
                    <p>Mechanical heat engines convert heat into work via various thermodynamic processes. The internal combustion engine is perhaps the most common example of a chemical heat engine, in which heat from the combustion of a fuel causes rapid pressurisation of the gaseous combustion products in the combustion chamber, causing them to expand and drive a piston, which turns a crankshaft. Unlike internal combustion engines, a reaction engine (such as a jet engine) produces thrust by expelling reaction mass, in accordance with Newton's third law of motion.</p>
                    <p>Apart from heat engines, electric motors convert electrical energy into mechanical motion, pneumatic motors use compressed air, and clockwork motors in wind-up toys use elastic energy. In biological systems, molecular motors, like myosins in muscles, use chemical energy to create forces and ultimately motion (a chemical engine, but not a heat engine).</p>
                    <p>Chemical heat engines which employ air (ambient atmospheric gas) as a part of the fuel reaction are regarded as airbreathing engines. Chemical heat engines designed to operate outside of Earth's atmosphere (e.g. rockets, deeply submerged submarines) need to carry an additional fuel component called the oxidizer (although there exist super-oxidizers suitable for use in rockets, such as fluorine, a more powerful oxidant than oxygen itself); or the application needs to obtain heat by non-chemical means, such as by means of nuclear reactions.</p>
                    <p>All chemically fueled heat engines emit exhaust gases. The cleanest engines emit water only. Strict zero-emissions generally means zero emissions other than water and water vapour. Only heat engines which combust pure hydrogen (fuel) and pure oxygen (oxidizer) achieve zero-emission by a strict definition (in practice, one type of rocket engine). If hydrogen is burnt in combination with air (all airbreathing engines), a side reaction occurs between atmospheric oxygen and atmospheric nitrogen resulting in small emissions of NOx, which is adverse even in small quantities. If a hydrocarbon (such as alcohol or gasoline) is burnt as fuel, large quantities of CO2 are emitted, a potent greenhouse gas. Hydrogen and oxygen from air can be reacted into water by a fuel cell without side production of NOx, but this is an electrochemical engine not a heat engine.</p>
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