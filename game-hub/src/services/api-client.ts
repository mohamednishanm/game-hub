import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'3a13e3bcda2d4a15a188b62a6e02eceb'
    }
})