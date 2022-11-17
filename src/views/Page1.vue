<template>
<Layout>
  <template v-slot:main>
     <p class="mt-4 text-sm">
      <el-table :data=this.gridData>
      <el-table-column property="utterance_id" label="ID" width="250" />
      <el-table-column property="dialog_id" label="DialogID" width="250" />
      <el-table-column property="speaker" label="Speaker" width="250"/>
      <el-table-column property="utterance" label="Utterance" width="400"/>
      <el-table-column property="emotion" label="Emotion" width="250"/>
      <el-table-column property="dialog_action" label="DialogAction" width="250"/>
    </el-table>
        <!-- 生成回复 ：{{ai_response}} -->
      
    <form-create
    v-model="fapi"
    :rule="rule"
    :option="option"
    @submit="onSubmit"
  ></form-create>
  </p>
  </template>

</Layout>
</template>

<script>
// @ is an alias to /src

import Layout from "../views/Layout.vue";
import formCreate from "@form-create/element-ui";
import axios from 'axios'
import {reactive} from "vue";
import store from '../store'
// import axios from 'axios'
// Vue.prototype.$axios=axios //定义为全局
var jsons={  
    arr:["123"],
    user_message:'测试'
}

//测试用的jsons
export default {
  name: 'Page1',
  ai_response:"",
  
  
  components: {
    Layout
  },
  data () {
    return {
        fapi: null,
        gridData : [
  {
    utterance_id: '测试样例',
    dialog_id: '对话ID',
    speaker: '说话人ID',
    utterance:'对话',
    emotion:'情感标签',
    dialog_action:"对话行为",
  }],

        rule: formCreate.parseJson('\
        [{"type":"el-divider","wrap":{"show":false},"native":false,"children":[""],"_fc_drag_tag":"el-divider","hidden":false,"display":true},\
        {"type":"input","field":"user_message","title":"在这里开始对话","info":"请输入你的对话信息","props":{"placeholder":"","clearable":true,"resize":"vertical","autofocus":true,"type":"textarea","showWordLimit":true,"disabled":false,"rows":4,"autocomplete":"off","readonly":false,"maxlength":128},"_fc_drag_tag":"input","hidden":false,"display":true,"$required":"请输入您的回复"}]'),
        option: formCreate.parseJson('{"form":{"labelPosition":"top","size":"large","labelWidth":"200px","hideRequiredAsterisk":false,"showMessage":true,"inlineMessage":false},\
        "submitBtn":true,"resetBtn":true}')
    }
  },
  methods: {
    onSubmit (formData) {
      //todo 提交表单
      console.log(formData)
      var jsonData={
        "user_message" : "据了解来看" 
      }
      console.log("github上的")
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
      axios.post('/api/dialog/wudao/', jsonData)
      .then(res=>{
            console.log("接收到数据!")
            console.log(res.data)
            // ai_response
            // this.$ai_response=1
            const user_message={
                utterance_id: '测试1',
                dialog_id: '测试2',
                speaker: store.state.username,
                utterance:formData["user_message"],
                emotion:'无',
                dialog_action:"无",
              }
           this.gridData.push(user_message)
            // const ai_response_data=JSON.parse(res.data)
            // console.log(res.data["data"])
            // res.data是字符串形式log出来也没有引号，所以要解析他最好的方式就是JSON.parse
            
            // var api_json=JSON.parse(res.data)
            const ai_response={
                utterance_id: '测试1',
                dialog_id: '测试2',
                speaker: 'wudao_AI',
                utterance:res.data.data.outputText,
                emotion:'无',
                dialog_action:"无",
            }
            this.gridData.push(ai_response)

        })
        .catch(Error=>{
          console.log("失败")
            // console.log(res.data)
            console.log(Error)
        })
    //   axios({
    //         url:'http://127.0.0.1:5000/dialog/wudao/',
    //         data:jsons,
    //         header:{
    //             'Content-Type':'application/json'  //如果写成contentType会报错
    //         }
    //     }).then(res=>{
    //         console.log(res.data)
    //     })
    //     .catch(Error=>{
    //         console.log(Error)
    //     })
    }
  }
}
</script>

