<template>
  <a-row >
    <a-col :span="5">
      image here
    </a-col>
    <a-col :span="19">
      <a-row >
        <a-col :span="24" style="padding-bottom: 10px" class="soc-dropdown">
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
      <a-row> 
        <div class="drop-area" @dragover.prevent @drop="handleImageDrop">
          <textarea v-model="post_body" placeholder=" What's going on? " @input="maxChars" />
          <div v-if="droppedImage" class="image-container">
            <img class="img-preview" v-if="droppedImage" :src="droppedImage" alt="Dropped Image" />
            <i class="fa-solid fa-x" @click="deleteImg" style="color: #ef2929;"></i>
          </div>
        </div>
      </a-row>
      <a-row :justify="'space-between'">
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
          <a-row :align="'middle'" :gutter="10">
            <a-col :span="12">
              <p> {{ post_body.length }} | {{ maxcharacters }}</p>
            </a-col>
            <a-col :span="12">
              <a-button type="default" @click="post"> post</a-button>
            </a-col>
          </a-row>
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
        post_by:'',
        currentChars:0,
        maxcharacters:210,
        droppedImage: null,
        file:null,
        fileName:'',
      }
    },
    methods:{
      maxChars(){
        if(this.post_body.length >= this.maxcharacters){
          this.post_body = this.post_body.slice(0,this.maxcharacters)
        }
      },
      handleImageDrop(event) {
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
        this.post_by = localStorage.getItem('token')
        if(this.file){
          const formData = new FormData();
          // formData.append('body',this.post_body)
          // formData.append('by',this.post_by)
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
  .soc-dropdown{
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }

  .img-preview{
    position: relative;
    width: 120px;
    height: 100px;
    padding: 5px;
    border: 1px solid black;
    opacity: 0.7;
    border-radius: 15px;
    width: 75%;
    height: 75%;
    color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

</style>