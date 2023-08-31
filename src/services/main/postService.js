import instance from "@/services/interceptor/interceptor";
import {env} from '@/environment/environment.js'

const baseURL = 'api/v1/post'
const api = env.api

class PostService{
  static getPosts(){
    return instance.get(`${api}${baseURL}`)
  }
  static addPost(uuid,body,filename=''){
    return instance.post(`${api}${baseURL}/create`,{
      body:body,
      by:uuid,
      filename:filename,
    })
  }
}

export default PostService;