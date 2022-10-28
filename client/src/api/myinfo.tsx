import axios from 'axios'

import { API_URLS } from '../constants'


async function getMyinfo(code: String) {
    const data = { code: code }
    const response =  await axios.post(API_URLS.GET_MYINFO, data)
    return response.data
}



export { getMyinfo }
