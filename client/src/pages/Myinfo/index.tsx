import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getEnv } from '../../auth'

import styles from './index.module.scss';
import banner from './banner-personal.png'

import { BsButton } from '../../components/Buttons'

function Myinfo() {
    const login = () => {
        getEnv().then((response) => {
            const {authApiUrl, clientId, attributes, purpose, state, redirectUrl} = response.data
            const authoriseUrl = authApiUrl + "?client_id=" + clientId +
                "&attributes=" + attributes +
                "&purpose=" + purpose +
                "&state=" + encodeURIComponent(state)  +
                "&redirect_uri=" + redirectUrl;

            window.location.href = authoriseUrl;
        })
    }

    return (
        <Container className="Myinfo" as="section">
            <Row>
                <Col md={6}>
                    <div className="vh-100 d-flex align-items-center">
                        <div>
                            <h1 className="my-md-4">MyInfo Demo Application</h1>
                            <p>This demo is an example of how your application should integrate with MyInfo.</p>
                            <hr />
                            <p className="my-md-3">To start the SingPass login and consent process, click on the "Retrieve MyInfo" button below.</p>
                            <BsButton onClick={login} className="text-uppercase">retrieve myinfo</BsButton>
                            <hr />
                            <p className={`${styles.note} font-monospace`} >
                                Note: refer to the Personas on the NDI Developer and Partner Portal for the test accounts to be used.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="vh-100 d-flex align-items-center position-relative">
                        <div className={`${styles.cirlce} ${styles.cirlce_left}`}></div>
                        <div className={`${styles.cirlce} ${styles.cirlce_right}`}></div>
                        <div>
                            <img src={banner} className="w-100"/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Myinfo;
