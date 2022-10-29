import axios from 'axios'

import { API_URLS } from '../constants'


async function getAuthoriseUrl() {
    const response = await axios.get(API_URLS.GET_AUTHORISE_URL)
    return response.data
}

async function login(code: String) {
    const data = { code: code }
    const response =  await axios.post(API_URLS.LOGIN_URL, data)
    return response.data
}

export { getAuthoriseUrl, login }
