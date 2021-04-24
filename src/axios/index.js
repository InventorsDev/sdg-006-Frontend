import axios from 'axios';

const axiosBase = axios.create({
    baseURL: "http://medhouse.herokuapp.com/api/v1"
})

axiosBase.defaults.headers.common['Accept'] = 'application/json';

export default axiosBase