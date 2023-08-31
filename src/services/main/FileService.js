import instance from "@/services/interceptor/interceptor";
import {env} from '@/environment/environment.js';

const api = env.api;
const baseURl="api/v1/file"


class FileService {
  static sendFile(file,type){
    return instance.post(`${api}${baseURl}/upload`,file,{headers:{
      'Content-Type': type,
    },
  });
  }
}

export default FileService;