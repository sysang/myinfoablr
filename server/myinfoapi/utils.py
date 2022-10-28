from datetime import datetime
from dpath.util import get as dpath_get


def format_myinfo_data(data):
    result = {}
    result['uinfin'] = dpath_get(data, 'uinfin/value')
    result['name'] = dpath_get(data, 'name/value')
    result['sex'] = dpath_get(data, 'sex/desc')
    result['dob'] = dpath_get(data, 'dob/value')
    result['birthcountry'] = dpath_get(data, 'birthcountry/desc')
    result['residentialstatus'] = dpath_get(data, 'residentialstatus/desc')
    result['nationality'] = dpath_get(data, 'nationality/desc')
    result['race'] = dpath_get(data, 'race/desc')
    result['mobileno'] = dpath_get(data, 'mobileno/nbr/value')
    result['email'] = dpath_get(data, 'email/value')
    result['regadd_block'] = dpath_get(data, 'regadd/block/value')
    result['regadd_street'] = dpath_get(data, 'regadd/street/value')
    result['regadd_building'] = dpath_get(data, 'regadd/building/value')
    result['regadd_unit'] = dpath_get(data, 'regadd/unit/value')
    result['regadd_postal'] = dpath_get(data, 'regadd/postal/value')
    result['regadd_type'] = dpath_get(data, 'regadd/type')
    result['noas'] = get_noas(data['noahistory'])
    result['ownerprivate'] = dpath_get(data, 'ownerprivate/value')
    result['cpfbalances_oa'] = dpath_get(data, 'cpfbalances/oa/value')
    result['cpfbalances_sa'] = dpath_get(data, 'cpfbalances/sa/value')
    result['cpfbalances_ma'] = dpath_get(data, 'cpfbalances/ma/value')
    result['cpfcontributions'] = get_cpfcontributions(data['cpfcontributions'])

    return result

def get_noas(noahistory):
    # guarantee list in descending order
    sorted_noahistory = sorted(noahistory['noas'],
        key=lambda item: int(item['yearofassessment']['value']), reverse=True)

    noas = []
    for item in sorted_noahistory:
        yearofassessment = dpath_get(item, 'yearofassessment/value')
        employment = dpath_get(item, 'employment/value')
        trade = dpath_get(item, 'trade/value')
        interest = dpath_get(item, 'interest/value')
        rent = dpath_get(item, 'rent/value')

        noas.append({
            'yearofassessment': dpath_get(item, 'yearofassessment/value'),
            'employment': dpath_get(item, 'employment/value'),
            'trade': dpath_get(item, 'trade/value'),
            'interest': dpath_get(item, 'interest/value'),
            'rent': dpath_get(item, 'rent/value'),
            'amount': dpath_get(item, 'amount/value'),
            'taxclearance': dpath_get(item, 'taxclearance/value'),
        })

    return noas

def get_cpfcontributions(cpfcontributions):
    # guarantee list in ascendint order
    sorted_cpfcontributions = sorted(cpfcontributions['history'],
        key=lambda item: datetime.strptime(item['date']['value'], '%Y-%m-%d'))

    history = []
    for item in sorted_cpfcontributions:
        history.append({
            'month': dpath_get(item, 'month/value'),
            'date': dpath_get(item, 'date/value'),
            'amount': dpath_get(item, 'amount/value'),
            'employer': dpath_get(item, 'employer/value'),
        })

    return history
