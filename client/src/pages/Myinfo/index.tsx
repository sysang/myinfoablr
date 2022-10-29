import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import { getAuthoriseUrl } from '../../api/auth'

import styles from './index.module.scss';
import banner from './banner-personal.png'

import { BsButton } from '../../components/Buttons'
import MyinfoForm from './form'
import { setInfo, fetchInfo } from './slice'

function Myinfo() {
    // const [ myinfo, setMyinfo ] = useState({})
    //@ts-ignore
    const myinfo = useSelector((state) => state.myinfo)
    const dispatch = useDispatch();

    const [ readOnly, setReadOnly ] = useState({})

    const login = async function () {
        const data = await getAuthoriseUrl()
        const { authoriseUrl } = data
        window.location.href = authoriseUrl;
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get('code')
        //@ts-ignore
        if (code && !myinfo.isLoading && !myinfo.isLoaded) {
            //@ts-ignore
            dispatch(fetchInfo(code))
        }
    })

    //@ts-ignore
    if (myinfo.uinfin && !readOnly.uinfin) {
        let _readOnly = {}
        for (let prop in myinfo) {
            //@ts-ignore
            _readOnly[prop] = !!myinfo[prop]
        }
        setReadOnly(_readOnly)
    }


    return (
        <Container className={`py-md-5 position-relative`} as="section">
            {myinfo.isLoading &&
            <div className={`${styles.overlay} d-flex justify-content-center align-items-center`}>
                <Spinner animation="border" variant="success" />
            </div>
            }
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
            <Row className="justify-content-around">
                <Col md={6}>
                    <MyinfoForm readOnly={readOnly} myinfo={myinfo}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Myinfo;
