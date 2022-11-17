<template>
  <Layout>
    <template v-slot:main>
      <!-- <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h3>
        目前可以使用的模型为wudao-api wudao_EVA2.0
      </h3>
      <h4>
        对实验室的介绍
      </h4>
      <h4>
        对团队的介绍
      </h4>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      <h1>欢迎来到中文开放域训练模型试用网站</h1>
      
       <h1>欢迎来到中文开放域训练模型试用网站</h1> -->
      <div class="container">
          <div class="content">
              <div class="markdown-body"
              link rel="stylesheet" href="..\markdown\github.css">
                <!-- markdown-body 一定要写这个class名 -->
                  <HomeMD />
              </div>
          </div>
      </div>
  </template>
  <!-- <button :on-click="TestMessage">测试按钮</button> -->
  
  </Layout>
</template>

<script>
// @ is an alias to /src

import Layout from "../views/Layout.vue";
import HomeMD from '../markdown/home.md'
import 'highlight.js/styles/github.css'
// 其他元素使用 github 的样式
import 'github-markdown-css'
import '../markdown/github-markdown-light.css'
export default {
  name: 'Home',
  components: {
    Layout,
    HomeMD
  },
  methods: {
    LiveMessage () {
      console.log("修改全局变量(old)",this.$store.state.global_message)
      
      this.$store.state.global_message=this.$store.state.global_message+"新新"
      console.log(this.$store.state.global_message)

    }
  }
}
</script>

<!-- <style lang="scss" scoped> -->
<style scoped>
.container   {
    height: 100%;
    background: #ffffff;
    
}
.content  {
        min-width: 800px;
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 50px;
        background: rgb(255, 255, 255);
        background-color:rgb(255, 255, 255);
        forced-color-adjust: rgb(72, 42, 193);
    }
    /* markdown-body这个名字是固定的 */
    /* https://github.com/sindresorhus/github-markdown-css */
    /* 所以这里我选择了github light作为css文件 */
    /* .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
        background-color:rgb(51, 201, 54);
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    } */
</style>
