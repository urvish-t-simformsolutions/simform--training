import axios from 'axios'

const instance = axios.create({
    baseURL: "https://auth-development-5a0c3-default-rtdb.firebaseio.com/"
})

export default instance