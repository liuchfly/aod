<template>
    <div class="news">
        <div class="head">
            <h3>新闻动态</h3>
            <p>您的当前位置 : 网站首页 > 新闻动态</p>
        </div>
        <div class="news_content">
            <div class="news_list">
                <div class="news_img">
                     <img src="../../common/imgage/xwbty_0.png" alt="">
                </div>
                <div class="news_item">
                    <p @click="toItem(1)">【免费系列课程1】中央音乐学院考级（钢琴）远程辅导视频课程</p>
                </div>
            </div>
            <div class="news_list">
                <div class="news_img">
                     <img src="../../common/imgage/xwbty_0.png" alt="">
                </div>
                <div class="news_item">
                    <p @click="toItem(1)">【免费系列课程1】中央音乐学院考级（钢琴）远程辅导视频课程</p>
                </div>
            </div>
            <div class="news_list noborder">
                <div class="news_img">
                     <img src="../../common/imgage/xwbty_0.png" alt="">
                </div>
                <div class="news_item">
                    <p @click="toItem(1)">【免费系列课程1】中央音乐学院考级（钢琴）远程辅导视频课程</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toItem(value){
            this.$router.push('newslist'+value)
        }
    },
}
</script>
<style lang="less" scoped>
.news{
    width: 1000px;
    margin:0 auto;
    >.head{
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        >h3{
            width: 74px;
            font-size: 18px;
            color: #333;
            border-bottom: #ff0f0f solid 2px;
        }
        >p{
            font-size: 12px;
        }
    }
    >.news_content{
        border-top: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
        margin: 20px 0;
        >.news_list{
            display: flex;
            height: 80px;
            border-bottom: 1px dashed #ccc;
            .news_img{
                margin-top: 20px;
            }
            .news_item{
                margin-top: 20px;
                font-size: 16px;
                line-height: 20px;
                cursor: pointer;
            }
            .news_item:hover{
                color:red;
            }
        }
        .noborder{
                border:none;
            }
    }
}    
</style>
