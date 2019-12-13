<template>
    <div class="home">
        <div class="banner">
            <img src="./../img/banner1.png" alt="" srcset="">
        </div>
        <div class="tab">
            <ul class="tabul father">
                <li class="tabli" v-for="(order, index) in orders" :key="index">
                    <p class="tabspan1">{{order.title}}</p>
                    <p class="tabspan2">{{order.summary}}</p>
                </li>
            </ul>
            <p class="btn" @click="Submission">提交</p>
        </div>
        <div class="dibu">
            <img class="img1" src="./../img/title.png" alt="" srcset="">
            <img class="img2" src="./../img/table1.png" alt="" srcset="">
            <p class="dibup">注：该业务为24个月合约期</p>
        </div>
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
            index:0,
            orders: [
                {title:'10元包',summary:'赠送礼品价值：85元'},
                {title:'20元包',summary:'赠送礼品价值：172元'},
                {title:'30元包',summary:'赠送礼品价值：253元'},
                {title:'50元包',summary:'赠送礼品价值：419元'}
            ]
        }
    },
    methods: {
        Submission (item,idx) {
          this.index=idx;
        }
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
    background-color: #ffefc4;
    color: #000000;
    text-align: center;
    padding-bottom: 50px;
    .banner {
        height: 414px;
        width: 100%;
        img {
        width: 100%;
        }
    }
    .tab {
        padding: 60px;
        .tabul {
            width: 100%;
            .tabli {
                float: left;
                width: 280px;
                // height: 75px;
                background-color: #fff;
                border: 2px solid #fe5f01;
                border-radius: 10px;
                margin-bottom: 20px;
                padding: 30px 0;
                margin-left: 20px;
                box-sizing: border-box;
                .tabspan1 {
                    font-size: 36px;
                    margin-bottom: 10px;
                }
                .tabspan2 {
                    font-size: 20px;
                }
            }
            .tabli:hover {
                border: 4px solid #fe5f01;
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
            margin-top: 30px;
        }
    }
    .dibu{
        padding: 0 50px;
        .img1{
            width: 388px;
            height: 87px;
            margin-right: 30px;
            margin-bottom: 30px;
        }
        .img2 {
            width: 100%;
            margin-bottom: 10px;
        }
        .dibup{
            font-size: 20px;
            text-align: left;
        }
    }
}
</style>
