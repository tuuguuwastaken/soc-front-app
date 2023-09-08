<template>
  <a-row >  
    <a-col :span="24">
      <a-row :gutter="8" >
        <a-col>
          <img class="profile_pic" :src="env.api+'api/v1/file/'+profile_name">
        </a-col>
        <a-col>
          <p>{{ user.username }}</p>
        </a-col>
        <a-col style="padding-bottom: 10px" class="soc-dropdown">
          <a-dropdown >
            <a class="ant-dropdown-link" @click.prevent>
              public
              <DownOutlined/>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="javascript:;">1st menu item</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-col>
      </a-row>
      <a-divider> </a-divider>
      <a-row :justify="'center'"  > 
        <div class="drop-area">
          <textarea v-model="post_body" placeholder=" What's going on? " @input="maxChars" />
          <div v-if="droppedImage" class="image-container">
            <img class="img-preview" v-if="droppedImage" :src="droppedImage" alt="Dropped Image" />
            <i class="fa-solid fa-x" @click="deleteImg" style="color: #ef2929;"></i>
          </div>
        </div>
      </a-row>
      <a-row :justify="'end'" :align="'middle'" :gutter="5">
        <a-col class="soc-dropdown">
          <a-dropdown >
            <a class="ant-dropdown-link" @click.prevent>  
              anyone can reply
              <DownOutlined/>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="javascript:;">1st menu item</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-col>
        <a-col>
          <label class="custom-file-label" @click="handleClick">
            file input  
            <input type="file" ref="fileInput" @change="handleFileChange" />  
          </label>  
        </a-col>
        <a-col style="width: 4rem;">
          <p> {{ post_body.length }} | {{ maxcharacters }}</p>  
        </a-col>
        <a-col >
          <a-button type="default" @click="post"> post</a-button>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>


<script>
import {defineComponent} from "vue";
import { DownOutlined } from '@ant-design/icons-vue';
import  PostService  from "@/services/main/postService";
import { env } from "@/environment/environment";
import axios from "axios";

export default defineComponent({
    name:'new-post',
    components:{
      DownOutlined
    },
    data(){
      return {
        post_body:'',
        post_by:sessionStorage.getItem('token'),
        currentChars:0,
        maxcharacters:210,
        droppedImage: null,
        file:null,
        fileName:'',
        env,
      }
    },
    props:{
      user:Object,
      profile_name:{
        type:String,
      }
    },
    methods:{
      handleFileChange() {
        this.file = this.$refs.fileInput.files[0];
        if (this.file && this.file.type.startsWith('image/')) {
          const imageURL = URL.createObjectURL(this.file);
          this.droppedImage = imageURL;
        }
      },
      maxChars(){
        if(this.post_body.length >= this.maxcharacters){
          this.post_body = this.post_body.slice(0,this.maxcharacters)
        }
      },
      handleFileDrop(event) {
        event.preventDefault();
        this.file = event.dataTransfer.files[0];
        if (this.file && this.file.type.startsWith('image/')) {
          const imageURL = URL.createObjectURL(this.file);
          this.droppedImage = imageURL;
        }
        
      },  
      deleteImg(){
        this.droppedImage = null;
        this.file = null;
      },
      resetForm(){
        this.post_by = '';
        this.post_body = '';
      },
      post(){
        if(this.file){
          const formData = new FormData();
          formData.append('file', this.file);
          axios.post(`${env.api}api/v1/file/upload`,formData, {headers:{ 'Content-Type': 'multipart/form-data',}})
          .then(res=>{
            this.fileName = res.data.filename;
            PostService.addPost(this.post_by,this.post_body,this.fileName)
            .then(res =>{
              alert(res.data.message)
              this.post_by = '';
              this.post_body = '';
              this.droppedImage = null
              location.reload()
            })
          })
        }else {
          PostService.addPost(this.post_by,this.post_body)
            .then(res =>{
              alert(res.data.message)
              return true;
            })
        }
      },
    }, 
  });
</script>

<style scoped lang="scss">
  textarea{
    font-size: 24px;
    text-align: start;
    width: 100%;
    resize:none;
    min-height: 200px;
    border: 0px;
    overflow:hidden;
    &:focus{
      outline: none ;
    }
  }

  .drop-area{
    width: 100%;
    padding-left:10px
  }
  .soc-dropdown{
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }
  .profile_pic{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .img-preview{
    position: relative;
    width: 120px;
    height: 100px;
    padding: 5px;
    border: 1px solid black;
    opacity: 0.7;
    border-radius: 15px;
    width: 50%;
    height: 50%;
    color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  .custom-file-input {
  position: relative;
}

.custom-file-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 0.25rem;
}

/* Hide the input visually but not from accessibility */
.custom-file-label input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}     

</style>