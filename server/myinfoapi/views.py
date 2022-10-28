import uuid
import json

from urllib.parse import quote, urlencode
from django.http import JsonResponse
from django.conf import settings

from .oauth.client import MyInfoClient
from .oauth import security


def get_authorise_url(request):

    callback_url = settings.MYINFO_CALLBACK_URL
    # generate random string as unique transaction id
    state = str(uuid.uuid4()).split("-")[0]

    authorise_url = MyInfoClient.get_authorise_url(state, callback_url)

    return JsonResponse({ 'authoriseUrl': authorise_url })

def get_myinfo(request):
    client = MyInfoClient()
    params = json.loads(request.body)
    code = params.get('code')
    uinfin = params.get('state')
    response = client.get_access_token(auth_code=code)
    access_token = response.get('access_token')
    decoded_access_token = security.get_decoded_access_token(access_token)
    sub = decoded_access_token.get('sub')

    response = client.get_person(access_token=access_token, uinfin=sub)
    person_data = security.get_decrypted_person_data(response)

    return JsonResponse(person_data)


