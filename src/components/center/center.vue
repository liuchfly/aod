<template>
    <div class="center">
        <div class="head">
            <h3>中心介绍</h3>
            <p>您的当前位置 : 网站首页 > 中心介绍</p>
        </div>
        <div class="center_content">
            <h1>西安欧亚琴岛艺考中心</h1>
            <p>前身为西安奥多艺术培训中心于2015年由陕西奥多文化传播有限公司出资成立。以促进国家艺术教育发展，培养专业艺术人才，提高全民艺术素养为主旨，开办多年来为全国各大艺术院校输送了大批优秀人才，深得社会各界一致好评。2016年并入陕西省教育协会、成为教育部门直属的艺术专业培训基地。
2019年与西安欧亚校企合作办学正式更名，西安欧亚琴岛艺考中心。中心以，音乐类，传媒类艺术考前培训为主。面向陕西省内招生，带食宿全日制封闭化教学模式。环境优美大学场地，占地约6000㎡，分为6幢独立式琴岛，每幢实用琴房8-10间，共56间，公共课教室3间，全部配备中央空调，教学设施齐全，师资雄厚。
中心现有在职老师25名其中教授1人，研究生学历15人，其余老师均为音乐学院本科毕业，教学经验丰富，教学方法新颖，多年来认真钻研针对艺术类考前集训总结出了一套完整有效的教学模式，让每个孩子都能学有所成，取得非凡成绩。
2019年我校艺术类成绩已见分晓，我们以98.3%的过关率和65％的高分率位列陕西省内艺考学校前列。2020年冲刺行动已经开始，届时我们将邀请西安音乐学院、陕西师范大学、西安美术学院等专业艺术院校知名老师、专家莅临指导！</p>
        </div>
        <div class="center_pic">
            <div class="pictuer">
                <div class="pic_show">
                    <img src="../../common/imgage/picture2.jpg" alt="">
                    <p>校园鸟瞰图</p>
                </div>
                <div class="pic_show">
                    <img src="../../common/imgage/picture1.jpg" alt="">
                    <p>校园一角</p>
                </div>
            </div>
            <div class="pictuer">
                <div class="pic_show">
                    <img src="../../common/imgage/picture5.jpg" alt="">
                    <p>校园一角</p>
                </div>
                <div class="pic_show">
                    <img src="../../common/imgage/picture6.jpg" alt="">
                    <p>校园一角</p>
                </div>
            </div>
            <div class="pictuer">
                <div class="pic_show">
                    <img src="../../common/imgage/picture4.jpg" alt="">
                    <p>练琴房</p>
                </div>    
                <div class="pic_show">
                    <img src="../../common/imgage/picture3.jpg" alt="">
                    <p>联系钢琴</p>
                </div>    
            </div>
            <div class="pictuer">
                <div class="pic_show">
                    <img src="../../common/imgage/picture7.jpg" alt="">
                    <p>学生餐厅</p>
                </div>
                <div class="pic_show">
                    <img src="../../common/imgage/picture8.jpg" alt="">
                    <p>学生教室</p>
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
.center{
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
    >.center_content{
        >h1{
            width: 100%;
            color: #000;
            font-size: 18px;
            text-align: center;
            line-height: 60px;
            font-weight: 500;
        }
        >p{
            font-size: 14px;
            text-align: left;
            line-height: 24px;
            text-indent: 30px;
        }
    }
    .center_pic{
        margin:30px 0;
        .pictuer{
            display: flex;
            justify-content: center;
            margin-top: 10px;
            img:first-of-type{
                margin-right: 20px;
            }
            p{
                font-size: 14px;
                line-height: 30px;
            }
        }
    }
}
</style>
