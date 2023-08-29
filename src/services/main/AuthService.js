import instance from "@/services/interceptor/interceptor";
import {env} from '@/environment/environment.js'

const api = env.api


class AuthService{
  static auth(uuid) {
    return instance.get(`${api}/api/v1/auth/${uuid}`)
  }
}


export default AuthService;