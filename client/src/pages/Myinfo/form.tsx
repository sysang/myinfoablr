import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import dayjs from 'dayjs'


import styles from './index.module.scss';
import { BsButton } from '../../components/Buttons'
import { setInfo } from './slice'

//@ts-ignore
const MyinfoForm = (props) => {
    const dispatch = useDispatch();
    //@ts-ignore
    const myinfo = useSelector((state) => state.myinfo)
    const { readOnly } = props
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Contact Info</Tab>
                <Tab>Personal Info</Tab>
                <Tab>Income Info</Tab>
            </TabList>
            <TabPanel>
                <ContactInfo
                    readOnly={readOnly}
                    myinfo={myinfo}
                    //@ts-ignore
                    setTabIndex={(index) => setTabIndex(index)}
                    //@ts-ignore
                    onChange={(data) => dispatch(setInfo(data))}
                />
            </TabPanel>
            <TabPanel>
                {/* @ts-ignore */}
                <PersonalInfo readOnly={readOnly} myinfo={myinfo} setTabIndex={(index) => setTabIndex(index)}/>
            </TabPanel>
            <TabPanel>
                <IncomeInfo readOnly={readOnly} myinfo={myinfo}/>
            </TabPanel>
        </Tabs>
    )
}

//@ts-ignore
const PersonalInfo = (props) => {
    const { readOnly, myinfo, setTabIndex } = props

    return (
        <div>
            <h5 className="my-4">Personal Info</h5>
            <Form.Label htmlFor="uinfin" className="text-black-50 mb-1">NRIC/FIN</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.uinfin || ''}
                    type="text"
                    id="uinfin"
                    data-testid="uinfin"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <Form.Label htmlFor="name" className="text-black-50 mb-1">Principal Name</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.name || ''}
                    type="text"
                    id="name"
                    data-testid="name"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <Form.Label htmlFor="sex" className="text-black-50 mb-1">Sex</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.sex || ''}
                    type="text"
                    id="sex"
                    data-testid="sex"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <Form.Label htmlFor="dob" className="text-black-50 mb-1">Date of Birth</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.dob}
                    type="text"
                    id="dob"
                    data-testid="dob"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <Form.Label htmlFor="birthcountry" className="text-black-50 mb-1">Country of Birth</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.birthcountry || ''}
                    type="text"
                    id="birthcountry"
                    data-testid="birthcountry"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <Form.Label htmlFor="residentialstatus" className="text-black-50 mb-1">Residential Status</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.residentialstatus || ''}
                    type="text"
                    id="residentialstatus"
                    data-testid="residentialstatus"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <Form.Label htmlFor="nationality" className="text-black-50 mb-1">Nationality</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.nationality || ''}
                    type="text"
                    id="nationality"
                    data-testid="nationality"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <Form.Label htmlFor="race" className="text-black-50 mb-1">Race</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.race || ''}
                    type="text"
                    id="race"
                    data-testid="race"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <div>
                <BsButton onClick={() => setTabIndex(2)} className="text-uppercase">Continue</BsButton>
            </div>
        </div>
    )
}

//@ts-ignore
const ContactInfo = (props) => {
    const { readOnly, myinfo, setTabIndex, onChange } = props

    return (
        <div>
            <h5 className="my-4">Contact Info</h5>
            <Form.Label htmlFor="mobileno" className="text-black-50 mb-1">Mobile Number</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.mobileno || ''}
                    type="tel"
                    id="mobileno"
                    data-testid="mobileno"
                    readOnly={readOnly.mobileno}
                    plaintext={readOnly.mobileno}
                    onChange={(e) => onChange({'mobileno': e.target.value})}
                />
            </InputGroup>
            <Form.Label htmlFor="email" className="text-black-50 mb-1">Email Address</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.email || ''}
                    type="email"
                    id="email"
                    data-testid="email"
                    readOnly={readOnly.email}
                    plaintext={readOnly.email}
                    onChange={(e) => onChange({'email': e.target.value})}
                />
            </InputGroup>
            <h5 className="my-4">Registered Address</h5>
            <Form.Label htmlFor="regadd_block" className="text-black-50 mb-1">Block Number</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.regadd_block || ''}
                    type="text"
                    id="regadd_block"
                    data-testid="regadd_block"
                    readOnly={readOnly.regadd_block}
                    plaintext={readOnly.regadd_block}
                    onChange={(e) => onChange({'regadd_block': e.target.value})}
                />
            </InputGroup>
            <Form.Label htmlFor="regadd_street" className="text-black-50 mb-1">Street Name</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.regadd_street || ''}
                    type="text"
                    id="regadd_street"
                    data-testid="regadd_street"
                    readOnly={readOnly.regadd_street}
                    plaintext={readOnly.regadd_street}
                    onChange={(e) => onChange({'regadd_street': e.target.value})}
                />
            </InputGroup>
            <Form.Label htmlFor="regadd_building" className="text-black-50 mb-1">Building Name</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.regadd_building || ''}
                    type="text"
                    id="regadd_building"
                    data-testid="regadd_building"
                    readOnly={readOnly.regadd_building}
                    plaintext={readOnly.regadd_building}
                    onChange={(e) => onChange({'regadd_building': e.target.value})}
                />
            </InputGroup>
            <Form.Label htmlFor="regadd_unit" className="text-black-50 mb-1">Floor & Unit No</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.regadd_unit || ''}
                    type="text"
                    id="regadd_unit"
                    data-testid="regadd_unit"
                    readOnly={readOnly.regadd_unit}
                    plaintext={readOnly.regadd_unit}
                    onChange={(e) => onChange({'regadd_unit': e.target.value})}
                />
            </InputGroup>
            <Form.Label htmlFor="regadd_postal" className="text-black-50 mb-1">Postal Code</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.regadd_postal || ''}
                    type="text"
                    id="regadd_postal"
                    data-testid="regadd_postal"
                    readOnly={readOnly.regadd_postal}
                    plaintext={readOnly.regadd_postal}
                    onChange={(e) => onChange({'regadd_postal': e.target.value})}
                />
            </InputGroup>
            <Form.Label htmlFor="regadd_type" className="text-black-50 mb-1">Type of Housing</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.regadd_type || ''}
                    type="text"
                    id="regadd_type"
                    data-testid="regadd_type"
                    readOnly={readOnly.regadd_type}
                    plaintext={readOnly.regadd_type}
                    onChange={(e) => onChange({'regadd_type': e.target.value})}
                />
            </InputGroup>
            <div>
                <BsButton onClick={() => setTabIndex(1)} className="text-uppercase">Continue</BsButton>
            </div>
        </div>
    )
}

//@ts-ignore
const IncomeInfo = (props) => {
    const { readOnly, myinfo, setTabIndex } = props

    return (
        <div>
            <h5 className="my-4">Notice of Assessment (History)</h5>
            <div data-testid='noas'>
                <Row className="mb-3">
                    <Col md={6} className="text-start fw-bolder">Year of Assessment</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[0] ? myinfo.noas[0].yearofassessment : ''}</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[1] ? myinfo.noas[1].yearofassessment : ''}</Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="text-start">Employment</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[0] ? myinfo.noas[0].employment : ''}</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[1] ? myinfo.noas[1].employment : ''}</Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="text-start">Trade</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[0] ? myinfo.noas[0].trade : ''}</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[1] ? myinfo.noas[1].trade : ''}</Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="text-start">Interest</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[0] ? myinfo.noas[0].interest : ''}</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[1] ? myinfo.noas[1].interest : ''}</Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="text-start">Rent</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[0] ? myinfo.noas[0].rent : ''}</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[1] ? myinfo.noas[1].rent : ''}</Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="text-start fw-bolder">Total income</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[0] ? myinfo.noas[0].amount : ''}</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[1] ? myinfo.noas[1].amount : ''}</Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="text-start fw-bolder">Tax Clearance</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[0] ? myinfo.noas[0].taxclearance : ''}</Col>
                    <Col md={3} className="text-end">{myinfo.noas && myinfo.noas[1] ? myinfo.noas[1].taxclearance : ''}</Col>
                </Row>
            </div>
            <h5 className="my-4">Other income Information</h5>
            <Form.Label htmlFor="ownerprivate" className="text-black-50 mb-1">Ownership of Private Residential Property</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    value={myinfo.ownerprivate ? 'Yes' : 'No'}
                    type="text"
                    id="ownerprivate"
                    data-testid="ownerprivate"
                    readOnly
                    plaintext
                />
            </InputGroup>
            <h5 className="my-4">CPF Account Balance</h5>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    Ordinary Account (OA)(S$)
                </InputGroup.Text>
                <Form.Control
                    value={myinfo.cpfbalances_oa || ''}
                    data-testid="cpfbalances_oa"
                    type="text"
                    aria-describedby="basic-addon1"
                    className="text-end"
                    readOnly
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                    Special Account (SA)(S$)
                </InputGroup.Text>
                <Form.Control
                    value={myinfo.cpfbalances_sa || ''}
                    data-testid="cpfbalances_sa"
                    type="text"
                    aria-describedby="basic-addon2"
                    className="text-end"
                    readOnly
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    Medisave Account (MA)(S$)
                </InputGroup.Text>
                <Form.Control
                    value={myinfo.cpfbalances_ma || ''}
                    data-testid="cpfbalances_ma"
                    type="text"
                    aria-describedby="basic-addon3"
                    className="text-end"
                    readOnly
                />
            </InputGroup>
            <h5 className="my-4">CPF Contributions History</h5>
            <Table
                striped hover
                borderless={true}
                bordered={false}
                className={styles.cpf_talbe}
                data-testid="cpfcontributions"
            >
                <thead>
                    <tr>
                        <th>For Month</th>
                        <th>Paid On</th>
                        <th className="text-end">Amount (S$)</th>
                        <th>Employer</th>
                    </tr>
                </thead>
                <tbody>
                    {/* @ts-ignore */}
                    {myinfo.cpfcontributions && myinfo.cpfcontributions.map((item) =>
                    <tr key={item.date}>
                        {/* @ts-ignore */}
                        <td>{dayjs(item.month).format('MMM YYYY')}</td>
                        {/* @ts-ignore */}
                        <td>{dayjs(item.date).format('DD MMM YYYY')}</td>
                        <td className='text-end'>{item.amount}</td>
                        <td>{item.employer}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
            <div>
                <BsButton onClick={() => alert('Submit')} className="text-uppercase">Submit</BsButton>
            </div>
        </div>
    )
}

export default MyinfoForm

export { IncomeInfo, ContactInfo, PersonalInfo }
