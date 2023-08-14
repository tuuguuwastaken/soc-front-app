import instance from "@/services/interceptor/interceptor";
import {env} from '@/environment/environment.js'

const baseURL = '/api/v1/qr/menu'
const api = env.api
class MenuService{
    static getMenu(){
        console.log(`${api}${baseURL}`)
        return instance.get(`${api}${baseURL}`)
    }
    static addToMenu(name, description, price) {
        return instance.post(`${api}${baseURL}/add`, {
            name:name,
            description:description,
            price:price
        })
    }
}

export default MenuService;