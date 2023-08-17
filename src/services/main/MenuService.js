import instance from "@/services/interceptor/interceptor";
// import {env} from '@/environment/environment.js'

const baseURL = '/api/v1/user'
class MenuService{
    static getMenu(){
        console.log(`${baseURL}`)
        return instance.get(`${baseURL}`)
    }
    static addToMenu(name, description, price) {
        return instance.post(`${baseURL}/add`, {
            name:name,
            description:description,
            price:price
        })
    }
}

export default MenuService;