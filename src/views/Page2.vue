<template>
<Layout>
  <template v-slot:main>
     <p class="mt-4 text-sm">
      <el-table :data=this.gridData>
      <el-table-column property="id" label="ID" width="50" />
      <el-table-column property="dialog_id" label="DialogID" width="200" />
      <el-table-column property="speaker" label="Speaker" width="120"/>
      <el-table-column property="utterance" label="Utterance" width="600"/>
      <el-table-column property="emotion" label="Emotion" width="120"/>
      <el-table-column property="dialog_action" label="DialogAction" width="120"/>
      <el-table-column property="user_id" label="UserID" width="120"/>
      <el-table-column property="model_name" label="Model" width="120"/>
      </el-table>
        <el-button :plain="true" @click="newDialog">开始新一轮对话</el-button>
            <!-- 生成回复 ：{{ai_response}} -->
        <el-button :plain="true" @click="changeAcc">对话历史清零</el-button>
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
import { h } from 'vue'
import { ElMessage } from 'element-plus'
// import axios from 'axios'
// Vue.prototype.$axios=axios //定义为全局
//测试用的jsons
export default {
  name: 'Page2',
  components: {
    Layout
  },
  data () {
    return {
        fapi: null,
        gridData : [
        {
          id: 0,
          dialog_id: '对话ID',
          speaker: '说话人ID',
          utterance:'对话',
          emotion:'情感标签',
          dialog_action:"对话行为",
          user_id:"你没开后端",
          model_name:"wudao_EVA"
        }],
        current_dialog_id:"",//当前的对话ID ，按钮或者刷新可更新
        show_all_history:true,//是否展示所有对话
        rule: formCreate.parseJson('\
        [{"type":"el-divider","wrap":{"show":false},"native":false,"children":[""],"_fc_drag_tag":"el-divider","hidden":false,"display":true},\
        {"type":"input","field":"user_message","title":"在这里开始对话","info":"请输入你的对话信息","props":{"placeholder":"","clearable":true,"resize":"vertical","autofocus":true,"type":"textarea","showWordLimit":true,"disabled":false,"rows":4,"autocomplete":"off","readonly":false,"maxlength":128},"_fc_drag_tag":"input","hidden":false,"display":true,"$required":"请输入您的回复"}]'),
        option: formCreate.parseJson('{"form":{"labelPosition":"top","size":"large","labelWidth":"200px","hideRequiredAsterisk":false,"showMessage":true,"inlineMessage":false},\
        "submitBtn":true,"resetBtn":true}')
    }
  },
  created() {
      // #创建时
      console.log("create")
      this.updateForm()
      this.newDialog()
  },
  methods: {
    changeAcc(){
      ElMessage({showClose: true,message: `换个账号吧`, type: 'success',})
    },
    newDialog(){//更新时间
      this.getTime()
      ElMessage({showClose: true,message: `获得新Dialog_ID`, type: 'success',})
    },
    updateForm(){
      console.log("更新表单")
      
      axios.get('/api/dialog/wudao_EVA/',{
        params:{
          speaker: store.state.username,
          dialog_id:"all"
        }
      })
      .then(res=>{
        console.log("get接收到数据!")
        console.log(res.data)
        this.gridData=res.data.results
      }).catch(Error=>{
          console.log("更新失败")
            // console.log(res.data)
          console.log(Error)
      })
    },
    onSubmit (formData) {
      //todo 提交表单 POST
      console.log(formData)
      ElMessage({showClose: true,message: `后端生成中`, type: 'success',})
      var jsonData={
        "user_message" : formData["user_message"],
        "speaker":store.state.username,
        "dialog_id":this.current_dialog_id,
      }
      console.log(jsonData)
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
      axios.post('/api/dialog/wudao_EVA/', jsonData)
      .then(res=>{//弹窗
            ElMessage({showClose: true,message: `后端返回信息：${res.data.data.outputText} `,type: 'success',})
            console.log(`接收到数据! ${res.data} `)
            this.$store.state.global_message=res.data.data.outputText
            this.updateForm()//成功-刷新表单
        })
        .catch(Error=>{
            console.log(`失败 `)
            ElMessage({showClose: true,message: `可能wudao_EVA后端还没有开`,type: 'error',})
            console.log(Error)//失败打印错误
        })
    },
    getTime(){ // 从前端获取当前的时间
      let yy = new Date().getFullYear();
      var mm =new Date().getMonth() + 1;
      var dd =new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes();
      let ss = new Date().getSeconds();
      this.current_dialog_id= yy + "-" + mm + "-" + dd + "-" + hh + ":" + mf + ":" + ss;
    }
  }
}
</script>

