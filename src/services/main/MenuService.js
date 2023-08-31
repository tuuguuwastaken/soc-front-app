import instance from "@/services/interceptor/interceptor";
// import {env} from '@/environment/environment.js'

const baseURL = 'api/v1/user'

class MenuService{
    static getMenu(){
        console.log(`${URL}`)
        return instance.get(`${URL}`)
    }
    static addToMenu(name, description, price) {
        return instance.post(`${URL}/add`, {
            name:name,
            description:description,
            price:price
        })
    }
}

export default MenuService;