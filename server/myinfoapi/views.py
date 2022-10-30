import uuid
import json
import logging

from urllib.parse import quote, urlencode
from django.conf import settings

from rest_framework.status import (
    HTTP_500_INTERNAL_SERVER_ERROR,
    HTTP_400_BAD_REQUEST,
)
from rest_framework.decorators import api_view
from rest_framework.response import Response as RestResponse

from .oauth.client import MyInfoClient
from .oauth import security

from .utils import format_myinfo_data


db_logger = logging.getLogger('db')

@api_view(['GET'])
def get_authorise_url(request):

    callback_url = settings.MYINFO_CALLBACK_URL
    # generate random string as unique transaction id
    state = str(uuid.uuid4()).split("-")[0]

    authorise_url = MyInfoClient.get_authorise_url(state, callback_url)

    return RestResponse({ 'authoriseUrl': authorise_url })

@api_view(['POST'])
def login(request):
    code = ""
    decoded_access_token = None
    sub = ""

    params = json.loads(request.body)
    code = params.get('code')

    if not code:
        return RestResponse({'error': True, 'message': 'Bad Request'}, status=HTTP_400_BAD_REQUEST)

    try:
        client = MyInfoClient()

        response = client.get_access_token(auth_code=code)
        access_token = response.get('access_token')
        decoded_access_token = security.get_decoded_access_token(access_token)
        sub = decoded_access_token.get('sub')

        response = client.get_person(access_token=access_token, uinfin=sub)
        person_data = security.get_decrypted_person_data(response)

    except Exception as e:
        db_logger.error(f"Requesting to Mockpass got error. More information, \
                code: {code}, decoded_access_token: {decoded_access_token}, \
                sub: {sub}.", exc_info=e, stack_info=True)

        return RestResponse({'error': True, 'message': 'Bad Request'}, status=HTTP_400_BAD_REQUEST)

    try:
        formated_data = format_myinfo_data(person_data)
    except Exception as e:
        db_logger.error(f"Parsing person data got error. More information, \
                code: {code}, decoded_access_token: {decoded_access_token}, \
                sub: {sub}.", exc_info=e, stack_info=True)

        return RestResponse({'error': True, 'message': 'Server Error '}, status=HTTP_500_INTERNAL_SERVER_ERROR)

    return RestResponse(formated_data)


