<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/" >
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
          />
          <button @click="search" class="sui-btn btn-xlarge btn-danger" type="button">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
      search(){
        this.$router.push("/search")
      }
  }
};
</script>

<style lang="less" scoped>
.top {
    width: 100%;
    height: 30px;
    background-color: #eaeaea;
    min-width: 1200px;
}

.container {
    margin: 0 auto;
    width: 1200px;
    height: 30px;
    line-height: 30px;
    /* border: 1px solid pink; */
}
.loginList p{
  display: inline-block;
}
.loginList {
    display: block;
    float: left;
    height: 30px;
    line-height: 30px;
}

.loginList a {
    text-decoration: none;
    color: #666;
    padding-left: 5px;
    padding-right: 5px;
    border-right: 1px solid #b3aeae;
}

.loginList a.register {
    border: transparent;
}

.loginList a:hover {
    color: #E1251B;
}

.typeList {
    float: right;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.typeList a {
    float: left;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px solid #b3aeae;
    color: #666;
    text-decoration: none;
}

.typeList a:last-child {
    border: transparent;
}

.typeList a:hover {
    color: #E1251B;
}

.bottom {
    width: 1200px;
    height: 106px;
    margin: 0 auto;
    /* border: 1px solid green; */
}

.logoArea {
    float: left;
    width: 265px;
    height: 106px;
    line-height: 106px;
    text-align: center;
}

.logoArea img {
    vertical-align: middle;
}

.searchForm {
    float: right;
    height: 106px;
    line-height: 106px;
    font-size: 0;
}

.searchForm input {
    width: 490px;
    height: 32px;
    border: 2px solid #ea4a36;
    box-sizing: border-box;
    outline: none;
    font-size: 12px;
    padding-left: 4px;
    padding-right: 4px;
    border-right: transparent;
    vertical-align: middle;
}

.searchForm button {
    width: 68px;
    height: 32px;
    font-size: 12px;
    background-color: #ea4a36;
    color: #ffffff;
    outline: none;
    border: 0;
    vertical-align: middle;
    cursor: pointer;
}
</style>
