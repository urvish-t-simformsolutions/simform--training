import axios from  'axios'

const instance =axios.create({
    baseURL:"https://burger-db-5f571-default-rtdb.firebaseio.com/"
})

export default instance