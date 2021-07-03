<template>
  <div>
    <div class="logoBox">
      <img src="../assets/logo.png" alt="" width="100px" height="100px">
    </div>
    <van-form @submit="onSubmit" class="form">
      <van-field clearable v-model="loginData.username" name="username" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]">

        <template #label>
          <van-icon name="user-o" color="#1989fa" size="25" />
        </template>

      </van-field>
      <van-field clearable v-model="loginData.password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]">
        <template #label>
          <van-icon name="closed-eye" color="#1989fa" size="25" />
        </template>
        
      </van-field>
      <van-field clearable v-model.trim="loginData.Rcode" name="Rcode" placeholder="验证码" :rules="[{ required: true, message: '请填写验证码' }]">
          <template #label>
            <van-icon name="comment-o" color="#1989fa" size="25" />
          </template>
          <template #right-icon>
            <rcode-canvas></rcode-canvas>
              
          </template>
        </van-field>
      <div style="margin: 16px 0px;">
        <van-button  block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <div class="forget" style="padding: 0 1rem;">
        <router-link to="/forget" >忘记密码</router-link>
    </div>
    <div class="more">
        <router-link to="/register" >注册账号</router-link> <span>&nbsp;|&nbsp; </span>
        <router-link to="#" >遇到问题</router-link>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Form } from 'vant';
  import { Field } from 'vant';
  import { Button } from 'vant';
  import { Icon } from 'vant';
  import RcodeCanvas from '../components/RcodeCanvas.vue'
  Vue.use(Icon);
  Vue.use(Button)
  Vue.use(Form);
  Vue.use(Field);
  export default {
    data() {
      return {
        loginData: {
          username: '',
          password: '',
          Rcode:""
        },
       
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
    },
    components: {
        RcodeCanvas,
    },
  }
</script>

<style lang="less" scoped>
  .logoBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13rem;
  }

  .form {
    padding: 1rem;
  }

  .forget{
    display: flex;
    flex-direction: row-reverse;    
  }

  a{
    color: #1989fa;
  }
  .more{
      height: 13rem;
      display: flex;
      align-items: flex-end;
      justify-content: center;
  }
  .more > span{
      color:rgb(173, 172, 172);
      font-weight: bold;
  }
</style>