
import axios from 'axios'

const axiosBase = axios.create({
    baseURL: "/api"  // ← Change this to relative path (remove http://localhost:5500)
})

export default axiosBase;