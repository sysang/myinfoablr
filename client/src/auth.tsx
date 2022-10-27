import axios from 'axios'

import { API_URLS } from './constants'


const getEnv = () => {
    return axios.get(API_URLS.GET_ENV)
}


export { getEnv }
