<template>
    <div class="header">
        <div class="logo">
            <div class="logo_img">
                <img src="../../common/imgage/logo.jpg" width="80" alt="">
                <h1>奥多艺术</h1>
            </div>
            <div class="name">
                <h3>西安欧亚琴岛艺考中心</h3>
            </div>
        </div>
        <div class="tel">
            <div class="call_head">
                <p>设为首页</p>|
                <p> 加入收藏</p>|
                <p> 联系我们</p>
            </div>
            <div class="call_tel">
                <h3>联系电话:</h3>
                <div class="tel_num">
                    <p>18876237643</p>
                    <p>18876237643</p>
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
    .header{
        width: 1000px;
        height: 120px;
        margin:0 auto;
        // background-color: #ccc;
        display: flex;
        >.logo{
            flex:1;
            display: flex;
            >.logo_img{
                margin:auto 0;
                h1{
                    margin-top:5px;
                    letter-spacing:5px;
                    font-weight: 600;
                    text-align: center;
                }
            } 

            >.name{
                margin:auto 10px;
                >h3{
                   font-weight: 700;
                    font-size: 28px;
                    color:#4f2f56;
                    font-family: 'KaiTi';
                }
            }  
           
        }
        >.tel{
                margin:auto 0px auto 10px;
                >.call_head{
                    display: flex;
                    font-size: 14px;
                    justify-content: flex-end;
                    >p{
                        font-size: 12px;
                        line-height: 20px;
                        vertical-align: top;
                        margin:0 5px;
                        cursor: pointer;
                    }
                }
                >.call_tel{
                    display: flex;
                    margin-top:20px;
                    align-items: center;
                    >h3{
                        font-weight: 700;
                        font-size: 24px;
                        font-family: 'KaiTi';
                        color:#4f2f56;
                    
                    }
                    >.tel_num{
                        >p{
                            font-size: 22px;
                            line-height: 30px;
                            font-weight: 500;
                            color:#b90000;
                        }
                    }
                }
        }
        
    }
</style>

