import React, { FC, lazy } from 'react';

import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import 'src/index.css'
import aletheia from 'src/imgs/aletheiasm.png'
import duet from 'src/imgs/duet.png'
import dgov from 'src/imgs/dgov.png'

// import Header from 'src/components/Header'
// import Header from './Header'

const Header = lazy(() => import('src/components/Header'))


const Layout: React.FC = () => {
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Header></Header>
            </React.Suspense>
            <div className="bg">
                <Container>
                    <Row>
                        <Col className="body container-brandnew">
                            <div className="body">
                                <h1 className="h1 hero">Aletheia
                                    <span className="gradient"> aims to help you answer the "What If" question in mechanism design in an artificial world.</span>
                                </h1>
                                <p className='h2 cont'> 1. What if I change the system parameters;</p>
                                <p className='h2 cont'> 2. What if the user's behavior changes; </p>
                                <p className='h2 cont'>3. What if I am not sure whether the mechanism is effective.</p>
                            </div>
                        </Col>

                        <Col >

                            <img src={aletheia} alt="daorayaki dgov2.0" width="80%"></img>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg2">
                <Container>
                    <Row>
                        <p>
                            Aletheia is an effective tool for solving problems related to mechanism modeling, experimentation and decision-making in the decentralized governance system. The basic idea of Aletheia is to construct an artificial governance system by formally describing the static and dynamic characteristics of the decentralized governance system, and to interact with the actual governance system and closed-loop feedback.
                        </p>
                        <p>
                            Decentralized governance based on blockchain and smart contracts is a typical cyber-physical-social system of complex human behavior and group decision-making. It is difficult to verify its governance strategy by empirical decision-making, mathematical deduction or simulation. Aletheia, based on parallel modeling of real-world governance systems or governance mechanisms, observes and quantitatively evaluates various parameter configurations, effects and performances of various actual or virtual computing experimental scenarios, and predicts their evolution rules, so as to realize the two-way guidance and co-evolution of the actual governance system and Aletheia.
                        </p>
                    </Row>
                </Container>
            </div>

            <div className="bg">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <img src={duet} alt="duet-alethiea" width="80%"></img>
                            </Row>
                            <Row >

                                <p className="h3 cont">
                                    At the end of September 2021, Aletheia cooperated with DUET to complete its first experimental report.                            </p>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <img src={dgov} alt="dgov-alethiea" width="80%" height="250px"></img>
                            </Row>
                            <Row >

                                <p className="h3 cont" >
                                    Currently, Aletheia is collaborating with DAOrayaki to build and verify decentralized media governance tool components for it.                 </p>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}

export default Layout