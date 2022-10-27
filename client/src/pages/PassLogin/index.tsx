import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import styles from './index.module.scss';
import mockpassBg from './mockpass-bg.jpg'

import { BsButton } from '../../components/Buttons'

function PassLogin() {
  return (
    <div className="PassLogin vh-100 w-100 position-relative">
        <div className={`${styles.bg} position-absolute h-100 w-100 overflow-hidden`}>
            <img src={mockpassBg} className={styles.bg_img}/>
        </div>
        <Container as="section">
            <Row className="pt-sm-5">
                <Col sm={{ span: 4, offset: 8 }} className={`${styles.form} p-sm-4`}>
                    <h5>Mock pass login</h5>
                    <label>Select user</label>
                    <Form.Select className="my-sm-3">
                        <option>---</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <hr/>
                    <BsButton href="#" className="my-sm-1">Login</BsButton>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default PassLogin;
