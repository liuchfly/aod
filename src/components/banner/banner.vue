<template>
    <div class="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img @load="loadImage" src="../../common/imgage/banner1.jpg" height="500"  width="1380" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img @load="loadImage" src="../../common/imgage/banner2.jpg" height="500"  width="1380" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img @load="loadImage" src="../../common/imgage/banner3.jpg" height="500"  width="1380" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img @load="loadImage" src="../../common/imgage/banner4.png" height="500"  width="1380" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import Slider from '../../base/slider/slider'
export default {
    methods:{
        loadImage(){
            if(this.checkLoading){
                this.$refs.scroll.refresh();
                // this.checkLoading = true;
            }
                
        }
    },
    components:{
        Slider
    }
}
</script>
<style lang="less" scoped>
.banner{
    height: 500px;
    .recommend-content{
        height: 500px;
        >.slider{
            display: flex;
        }
    }
}
</style>
