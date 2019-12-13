<template>
  <div class="home">
    <div class="banner">
      <img src="./../img/banner1.png" alt="" srcset="">
    </div>
    <form action="" class="formSubmission">
      <p class="formP father">
        <label class="formlabel fl" for="" >用户姓名</label>
        <input class="forminput" type="text" placeholder="请输入姓名">
      </p>
      <p class="formP father">
        <label class="formlabel fl" for="" >办理号码</label>
        <input class="forminput" type="tel" placeholder="请输入办理号码">
      </p>
      <p class="formP father">
        <label class="formlabel fl" for="" >身份证号</label>
        <input class="forminput" type="tel" placeholder="请输入身份证号">
      </p>
      <p class="formP father">
        <label class="formlabel fl" for="" >用户地址</label>
        <span class="forminput forminput1" @click="area">{{address}}</span>
      </p>
      <p class="formP father">
        <label class="formlabel fl" for="" >详细地址</label>
        <input class="forminput" type="text" placeholder="如道路、门牌号、小区、单元室等">
      </p>
      <p class="btn">提交</p>
    </form>
    <van-popup v-model="showpopup" position="bottom">
      <van-area
        :value="val"
        :area-list="areaList"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        title="选择地址"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>

<script>
import { Area, Popup, } from 'vant'
import area from './../assets/area'

export default {
  name: 'home',
  components: {
    [Area.name]: Area,
    [Popup.name]: Popup
  },
  data(){
    return{
      areaList: {},
      showpopup: false,
      address: "",
      val: '370000'
    }
  },
  methods: {
    area () {
      this.showpopup = true
      this.areaList = area
    },
    // 确定
    confirm (picker) {
      let areaName = "";
      for (var i = 0; i < picker.length; i++) {
          areaName = areaName + picker[i].name + " ";
      }
      this.address = areaName;
      this.showpopup = false
      console.log(this.address)
    },
    // 取消
    cancel () {
      this.showpopup = false
    },
  }
}
</script>

<style lang="scss" scoped>
.father:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.father {
  zoom: 1;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
* {
  padding: 0;
  margin: 0 auto;
}
.home {
  height: 101vh;
  background-color: #ffefc4;
  color: #000000;
  .banner {
    height: 414px;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .formSubmission {
    padding: 60px;
    .formP {
      height: 60px;
      line-height: 60px;
      margin-bottom: 30px;
      .formlabel {
        font-size: 30px;
      }
      .forminput {
        height: 58px;
        width: 460px;
        border-radius: 10px;
        border: 2px solid #b3ab95;
        background-color: transparent;
        margin-left: 30px;
        padding-left: 10px;
        font-size: 28px;
        color: #4e4e4e;
      }
      .forminput1 {
        display: inline-block;
      }
    }
    .btn {
      height: 60px;
      line-height: 60px;
      font-size: 30px;
      color: #fff;
      background-color: #fe5f01;
      border-radius: 10px;
      text-align: center;
      margin-top: 60px;
    }
  }
}
</style>
