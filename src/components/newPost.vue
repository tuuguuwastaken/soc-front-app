<template>
  <a-row>
    <a-col :span="24">
      <a-card>
        <a-row :gutter="10">
          <a-cols>
            <p>img here</p>
          </a-cols>
          <a-col>
            <p>usename here</p>
          </a-col>
          <a-col>
            <p>date</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col class="post-box">
            <p>lorem ipsum</p>
          </a-col>
        </a-row>
        <a-row :justify="'center'" :gutter="24">
          <a-col>
            <i class="fa fa-comment" aria-hidden="true"></i>
          </a-col>
          <a-col>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </a-col>
          <a-col>
            <i class="fa fa-heart-o fa-6" aria-hidden="true"></i>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name:'post-box',
  components:{

  },
  
}
</script>

<style lang="scss" scoped>
.post-box{
  padding-left: 30px;
  padding-right: 30px;
}
</style>