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
        <textarea v-model="post_body" placeholder=" What's going on? " @input="maxChars" />

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
              <p> {{post_body.length}} | {{maxcharacters}}</p>
            </a-col>
            <a-col :span="12">
              <a-button type="default"> post</a-button>
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
      }
    },
    methods:{
      maxChars(){
        if(this.post_body.length >= this.maxcharacters){
          this.post_body = this.post_body.slice(0,this.maxcharacters)
        }
      }
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
</style>