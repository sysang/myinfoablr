import axios from 'axios'

import { API_URLS } from '../constants'


async function getAuthoriseUrl() {
    const response = await axios.get(API_URLS.GET_AUTHORISE_URL)
    return response.data
}

export { getAuthoriseUrl }
