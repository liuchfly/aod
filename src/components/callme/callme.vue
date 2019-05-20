<template>
    <div class="call_me">
        <div class="head">
            <h3>联系我们</h3>
            <p>您的当前位置 : 网站首页 > 联系我们</p>
        </div>
        <div class="call_content">
            <h3>欧亚琴岛艺考中心</h3>
            <div class="contact_info">
                <div class="infomation">
                    <p>联系人：汪老师</p>
                    <p>手机：18877776666</p>
                    <p>微信：91287398217</p>
                </div>
                <div class="infomation">
                    <p>联系人：汪老师</p>
                    <p>手机：18877776666</p>
                    <p>微信：91287398217</p>
                </div>
                <div class="infomation">
                    <p>邮箱：230983208@qq.com</p>
                    <p>地址： 说的就是来得及弗雷德萨房间里撒</p>
                </div>
            </div>
        </div>
        <div class="phone">
            <p>24小时咨询专线：1888727727</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.call_me{
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
    >.call_content{
        margin-top:20px;
        padding-left:20px;
        h3{
            text-align: left;
            font-size: 18px;
            color:#000;
        }
        >.contact_info{
            display: flex;
            margin:20px 0;
            >.infomation{
                flex:1;
                text-align: left;
                p{
                    line-height: 24px;
                    font-size: 14px;
                }
            }
        }
    }
    >.phone{
        text-align: left;   
        padding-left: 20px; 
        margin-bottom: 50px;
        color:#000;
    }
}
</style>
