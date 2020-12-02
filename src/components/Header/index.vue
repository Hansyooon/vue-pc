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
        <router-link class="logo" title="尚品汇" to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="searchText"
          />
          <button
            @click="search"
            class="sui-btn btn-xlarge btn-danger"
            type="button"
          >
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
  data() {
    return {
      searchText: "",
    };
  },
  //监视路径判断是否是search页面，不是search页面删除掉search栏中的内容
  watch:{
    $route(to){
      // console.log(to,from)
      if(to.name !== "search"){
        this.searchText=""
      } 
    }
  },
  methods: {
    // search(){
    //   const {searchText} = this
    //   const params = searchText ? `/${searchText}` : ""
    //   const location = "/search" + params
    //   this.$router.push(location)
    // }
    search() {
      const { searchText } = this;
      const location = {
        name: "search",
        //下面写法在没有searchText时search不会显示
        // params: {
        //   searchText,
        // },
        // query: {
        //   name: "jake",
        // },
      };
      //以下方式可以显示search
      if(searchText){
        location.params={
          searchText
        }
      }
      const {categoryName} = this.$route.query;
      if(categoryName){
        location.query=this.$route.query;
      }
      //在编程式导航时push和replace函数有三个参数，会返回promise函数，当多次跳转时会返回失败的promis，此时应该处理该失败状态。需要操作promise.then和promise.catch。或者在router中重新定义push以及replace方法
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
      // this.searchText=''
    },
  },
  mounted(){
    this.$bus.$on("clearKeyword",()=>{
      this.searchText=""
    })
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
.loginList p {
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
  color: #e1251b;
}

.typeList {
  float: right;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.typeList a {
  float: left;
  margin-top: 7px;
  height: 16px;
  line-height: 16px;
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
  color: #e1251b;
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
