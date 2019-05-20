<template>
    <div class="footer">
        <div class="bool_line"></div>
        <div class="nobool_line"></div>
        <div class="content">
            <div class="address">
                西安欧亚琴岛艺术培训中心 地址：陕西省西安市长安区东仪路8号
            </div>
            <div class="erweima">
                <img src="../../common/imgage/erweima.jpg" height="100" widht="100" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.footer{
    height: 160px;
    min-width: 1000px;
    >.bool_line{
        height: 10px;
        background-color: #005ca1;
    }
    >.nobool_line{
        margin-top:2px;
        height: 4px;
        background-color: #005ca1;
    }
    >.content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .address{
            font-size: 14px;
            margin-right: 20px;
        }
    }
}
    

</style>
