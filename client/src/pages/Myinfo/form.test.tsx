import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../test-utils'

import MyinfoForm, {
    ContactInfo,
    PersonalInfo,
    IncomeInfo,
} from './form'


describe('ContactInfo', () => {
    test('renders ContactInfo component', () => {
        const myinfo = {
            "mobileno": "97399245",
            "email": "myinfotesting@gmail.com",
            "regadd_block": "102",
            "regadd_street": "BEDOK NORTH AVENUE 4",
            "regadd_building": "PEARL GARDEN",
            "regadd_unit": "",
            "regadd_postal": "",
            "regadd_type": "",
        }
        const readOnly = {
            "mobileno": true,
            "email": true,
            "regadd_block": true,
            "regadd_street": true,
            "regadd_building": true,
            "regadd_unit": false,
            "regadd_postal": false,
            "regadd_type": false,
        }

        const tree = render(<ContactInfo readOnly={readOnly} myinfo={myinfo}/>);

        expect(screen.getByTestId('mobileno')).toHaveValue('97399245')
        expect(screen.getByTestId('email')).toHaveValue('myinfotesting@gmail.com')
        expect(screen.getByTestId('regadd_block')).toHaveValue('102')
        expect(screen.getByTestId('regadd_building')).toHaveValue('PEARL GARDEN')
        expect(screen.getByTestId('regadd_unit')).toHaveValue('')
        expect(screen.getByTestId('regadd_postal')).toHaveValue('')
        expect(screen.getByTestId('regadd_type')).toHaveValue('')

        expect(tree).toMatchSnapshot();
    });
});


describe('PersonalInfo', () => {
    test('renders PersonalInfo component', () => {
        const myinfo = {
            "uinfin": "S9812381D",
            "name": "TAN XIAO HUI",
            "sex": "FEMALE",
            "dob": "1998-06-06",
            "birthcountry": "SINGAPORE",
            "residentialstatus": "CITIZEN",
            "nationality": "SINGAPORE CITIZEN",
            "race": "CHINESE",
        }
        const readOnly = {
            "uinfin": true,
            "name": true,
            "sex": true,
            "dob": true,
            "birthcountry": true,
            "residentialstatus": true,
            "nationality": true,
            "race": true,
        }

        const tree = render(<PersonalInfo readOnly={readOnly} myinfo={myinfo}/>);

        expect(screen.getByTestId('uinfin')).toHaveValue('S9812381D')
        expect(screen.getByTestId('name')).toHaveValue('TAN XIAO HUI')
        expect(screen.getByTestId('sex')).toHaveValue('FEMALE')
        expect(screen.getByTestId('dob')).toHaveValue('1998-06-06')
        expect(screen.getByTestId('birthcountry')).toHaveValue('SINGAPORE')
        expect(screen.getByTestId('residentialstatus')).toHaveValue('CITIZEN')
        expect(screen.getByTestId('nationality')).toHaveValue('SINGAPORE CITIZEN')
        expect(screen.getByTestId('race')).toHaveValue('CHINESE')

        expect(tree).toMatchSnapshot();
    });
});


describe('IncomeInfo', () => {
    test('renders IncomeInfo component', () => {
        const myinfo = {
            "noas": [
                {
                    "yearofassessment": "2021",
                    "employment": 64400,
                    "trade": 0,
                    "interest": 0,
                    "rent": 0,
                    "amount": 64400,
                    "taxclearance": "N"
                },
                {
                    "yearofassessment": "2020",
                    "employment": 36112.8,
                    "trade": 0,
                    "interest": 0,
                    "rent": 0,
                    "amount": 53700,
                    "taxclearance": "N"
                }
            ],
            "ownerprivate": false,
            "cpfbalances_oa": 58839.75,
            "cpfbalances_sa": 15349.5,
            "cpfbalances_ma": 20466,
            "cpfcontributions": [
                {
                    "month": "2021-08",
                    "date": "2021-08-25",
                    "amount": 1425,
                    "employer": "CRYSTAL HORSE INVEST PTE LTD"
                },
                {
                    "month": "2021-09",
                    "date": "2021-09-25",
                    "amount": 1425,
                    "employer": "CRYSTAL HORSE INVEST PTE LTD"
                }
            ]
        }
        const readOnly = {}

        const tree = render(<IncomeInfo readOnly={readOnly} myinfo={myinfo}/>);

        const naosSectionElm = screen.getByTestId('noas')

        expect(naosSectionElm).toHaveTextContent('2021')
        expect(naosSectionElm).toHaveTextContent('64400')
        expect(naosSectionElm).toHaveTextContent('36112.8')
        expect(naosSectionElm).toHaveTextContent('53700')

        expect(screen.getByTestId('cpfbalances_oa')).toHaveValue('58839.75')
        expect(screen.getByTestId('cpfbalances_sa')).toHaveValue('15349.5')
        expect(screen.getByTestId('cpfbalances_ma')).toHaveValue('20466')

        const cpfcontributionsElm = screen.getByTestId('cpfcontributions')

        expect(cpfcontributionsElm).toHaveTextContent('Aug 2021')
        expect(cpfcontributionsElm).toHaveTextContent('25 Aug 2021')
        expect(cpfcontributionsElm).toHaveTextContent('1425')
        expect(cpfcontributionsElm).toHaveTextContent('CRYSTAL HORSE INVEST PTE LTD')

        expect(tree).toMatchSnapshot();
    });
});

describe('MyinfoForm', () => {
    test('It should update myinfo data', () => {
        const readOnly = {
            "mobileno": false,
            "email": false,
            "regadd_block": false,
            "regadd_street": false,
            "regadd_building": false,
            "regadd_unit": false,
            "regadd_postal": false,
            "regadd_type": false,
        }

        const tree = renderWithProviders(
            <MyinfoForm readOnly={readOnly} />)

        let inputElm
        const inputVal = '123456789'

        for (let field in readOnly){
            inputElm = screen.getByTestId('email')
            fireEvent.change(inputElm, {
                target: { value: inputVal},
            });
            expect(inputElm).toHaveValue(inputVal)
        }
    })
})
