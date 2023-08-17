import instance from "@/services/interceptor/interceptor";
import {env} from '@/environment/environment.js'

const baseURL = '/api/v1/user'
const api = env.api

class UserService {
    static getUsers(){
        return instance.get(`${api}${baseURL}`)
    }

    static registerUser(username,password,email){
        return instance.post(`${api}${baseURL}/create`, {
            username:username,
            password:password,
            email:email,
        })
    }
}

export default UserService;