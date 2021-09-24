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

export default class Transmission extends Component {
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
            <div id="transmission">
                <Row>
                    <h1>Transmission</h1>
                    <Image style={{ "width": "100%", "cursor": "pointer" }} src='/img/cartransmission.jpg' onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}></Image>
                        <p>A transmission is a machine in a power transmission system, which provides controlled application of power. Often the term 5-speed transmission refers simply to the gearbox, that uses gears and gear trains to provide speed and torque block conversions from a rotating power source to another device.</p>
                        <p>The term transmission properly refers to the whole drivetrain, including clutch, gearbox, prop shaft (for rear-wheel drive vehicles), differential, and final drive shafts. In America the term is sometimes used in casual speech to refer more specifically to the gearbox alone, and detailed usage differs.</p>
                        <p>The most common use is in motor vehicles, where the transmission adapts the output of the internal combustion engine to the drive wheels. Such engines need to operate at a relatively high rotational speed, which is inappropriate for starting, stopping, and slower travel. The transmission reduces the higher engine speed to the slower wheel speed, increasing torque in the process. Transmissions are also used on pedal bicycles, fixed machines, and where different rotational speeds and torques are adapted.</p>
                        <p>Often, a transmission has multiple gear ratios (or simply "gears") with the ability to switch between them as the speed varies. This switching may be done manually (by the operator) or automatically (by a control unit). Directional (forward and reverse) control may also be provided. Single-ratio transmissions also exist, which simply change the speed and torque (and sometimes direction) of motor output.</p>
                        <p>In motor vehicles, the transmission generally is connected to the engine crankshaft via a flywheel or clutch or fluid coupling, partly because internal combustion engines cannot run below a particular speed. The output of the transmission is transmitted via the driveshaft to one or more differentials, which drive the wheels. While a differential may also provide gear reduction, its primary purpose is to permit the wheels at either end of an axle to rotate at different speeds (essential to avoid wheel slippage on turns) as it changes the direction of rotation.</p>
                        <p>Conventional gear/belt transmissions are not the only mechanism for speed/torque adaptation. Alternative mechanisms include torque converters and power transformation (e.g. diesel-electric transmission and hydraulic drive system). Hybrid configurations also exist. Automatic transmissions use a valve body to shift gears using fluid pressures in response to engine RPM, speed, and throttle input.</p>
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