<template>
    <div class="student_style">
        <div class="head">
            <h3>学员风采</h3>
            <p>您的当前位置 : 网站首页 > 学员风采</p>
        </div>
        <div class="student_list">
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student1.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student2.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student3.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student4.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student5.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student6.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student7.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student8.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student9.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student10.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student11.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student12.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student13.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student14.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student15.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student16.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student17.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student18.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student19.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student20.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student21.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student22.jpg" width="400" alt="">
            </div>
            <div class="list_item">
                <img src="../../common/imgage/studentStyle/student23.jpg" width="400" alt="">
                <img src="../../common/imgage/studentStyle/student24.jpg" width="400" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less" scoped>
.student_style{
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
    .student_list{
        // background-color: red;
        >.list_item{
            margin:20px 0;
            img:first-of-type{
                margin-right: 20px;
                
            }
        }
    }
}    
</style>
