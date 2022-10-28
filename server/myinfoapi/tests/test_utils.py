import pytest
import json

from pathlib import Path

from myinfoapi.utils import format_myinfo_data


def test_format_myinfo_data():
    filepath = Path(__file__).parent / 'data/myinfo_person_data.json'
    data = json.load(filepath.open())

    expected = {
        'uinfin': 'S9812387C',
        'name': 'HOWARD CHEN YU SHENG',
        'sex': 'MALE',
        'dob': '1998-10-06',
        'birthcountry': 'SINGAPORE',
        'residentialstatus': 'CITIZEN',
        'nationality': 'SINGAPORE CITIZEN',
        'race': 'CHINESE',
        'mobileno': '',
        'email': '',
        'regadd_block': '101B',
        'regadd_street': 'PUNGGOL FIELD',
        'regadd_building': '',
        'regadd_unit': '58',
        'regadd_postal': '822101',
        'regadd_type': 'SG',
        'noas': [
            {
                'yearofassessment': '2021',
                'employment': 182500,
                'trade': 0,
                'interest': 32000,
                'rent': 0,
                'amount': 214500,
                'taxclearance': 'N',
            },
            {
                'yearofassessment': '2020',
                'employment': 172500,
                'trade': 0,
                'interest': 30000,
                'rent': 0,
                'amount': 202500,
                'taxclearance': 'N',
            },
        ],
        'ownerprivate': False,
        'cpfbalances_oa': 227700,
        'cpfbalances_sa': 59400,
        'cpfbalances_ma': 79200,
        'cpfcontributions': [
            {
                'month': '2021-08',
                'date': '2021-08-25',
                'amount': 3750,
                'employer': 'NEED ALL COMPANY',
            },
            {
                'month': '2021-09',
                'date': '2021-09-25',
                'amount': 3750,
                'employer': 'NEED ALL COMPANY',
            },
            {
                'month': '2021-10',
                'date': '2021-10-25',
                'amount': 9375,
                'employer': 'NEED ALL COMPANY',
            },
        ]
    }

    actual = format_myinfo_data(data)
    print(actual)
    assert actual == expected

