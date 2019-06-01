<template>
    <div class="tap">
        <ul class="tam_list"> 
            <li :class="index == 1? 'active':''" @click="toRoute(1,'index')">网站首页</li>
            <li :class="index == 2? 'active':''" @click="toRoute(2,'center')">中心介绍</li>
            <li :class="index == 3? 'active':''" @click="toRoute(3,'news')">新闻动态</li>
            <li :class="index == 4? 'active':''" @click="toRoute(4,'teacther')">师资力量</li>
            <li :class="index == 5? 'active':''" @click="toRoute(5,'project')">专业课程</li>
            <li :class="index == 6? 'active':''" @click="toRoute(6,'student')">学员风采</li>
            <li :class="index == 7? 'active':''" @click="toRoute(7,'history')">往届录取</li>
            <li :class="index == 8? 'active':''" @click="toRoute(8,'callme')">联系我们</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            index:1
        }
    },
    methods:{
        toRoute(index,value){
            this.index = index
            switch (value) {
                case 'index':
                    this.$router.push('/')
                    break;
                case 'center':
                    this.$router.push('/center')
                    break;
                case 'teacther':
                    this.$router.push('/teacther')
                    break; 
                case 'callme':
                    this.$router.push('/callme')
                    break;  
                case 'history':
                    this.$router.push('/history')
                    break;  
                case 'student':
                    this.$router.push('/student')
                    break;  
                case 'news':
                    this.$router.push('/news')
                    break;                     
                default:
                    break;
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
.tap{
    background-color: #005ca1;
    height: 35px;
    min-width: 1000px;
    >ul{
        display: flex;
        width: 1000px;
        margin:0 auto;
        line-height: 35px;
        color:#fff;
        font-size: 14px;
        .active{
            background-color:#e9951d;
        }
        >li{
            flex:1;
            cursor: pointer;
            &:hover{
                background-color:#e9951d !important;
                // border-bottom:3px solid #ffc000;
                // text-decoration: underline;
            }
        }
    }    
}
</style>
