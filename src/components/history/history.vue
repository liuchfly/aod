<template>
    <div class="history">
        <div class="head">
            <h3>往届录取</h3>
            <p>您的当前位置 : 网站首页 > 往届录取</p>
        </div>
        <div class="history_list">
            <div class="history_item">
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn11.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn11.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn11.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn11.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
            </div>
            <div class="history_item">
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn1.jpg" width="180" height="130" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn12.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn13.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn14.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
            </div>
            <div class="history_item">
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn15.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn16.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn17.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn18.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
            </div>
            <div class="history_item">
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn19.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn11.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn11.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
                <div class="item">
                    <img src="../../common/imgage/student/xueshegn11.jpg" height="180" alt="">
                    <p>中国传媒大学</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.history{
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
    >.history_list{
        margin:30px 0;
        .history_item{
            display: flex;
            padding: 15px 0;
            border-bottom: 1px solid #ccc;
            >.item{
                flex: 1;
                display: flex;
                p{
                    line-height: 180px;
                    flex:1;
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }
}
</style>
