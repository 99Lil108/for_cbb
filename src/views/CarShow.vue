<script setup>
import LeftLabel from '../components/MainItems/Labels/LeftLabel.vue';
import CenterLabel from '../components/MainItems/Labels/CenterLabel.vue'
import RightLabel from '../components/MainItems/Labels/RightLabel.vue'
</script>

<template>
    <div class="out">
        <img src="../assets/images/car.png" alt="car" class="car">
        <div class="bg"></div>
        <LeftLabel :position="{top:'140px',left:'10px'}" contents="垃圾丢弃"></LeftLabel>
        <LeftLabel :position="{top:'70px',left:'90px'}" contents="非机动车违规停放"></LeftLabel>
        <LeftLabel :position="{top:'0',left:'30px'}" contents="机动车违规停放及行人识别"></LeftLabel>
        <CenterLabel contents="道路积水检测" :position="{ top: '20px' }"></CenterLabel>
        <RightLabel contents="人流量监测" :position="{ top: '120px', right: '10px' }"></RightLabel>
        <RightLabel contents="非法小摊摆放" :position="{ top: '70px', right: '90px' }"></RightLabel>
        <RightLabel contents="路面坑洼检测" :position="{ top: '0', right: '30px' }"></RightLabel>
    </div>
</template>

<style lang="less" scoped>
.out{
    margin-top: 10px;
    width: 100%;
    position: relative;
    height: 90%;        
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 60px;
.car{
    width: 85%;
    transform: scale(1.2);
    margin-left: -12px;
}
.bg{
    position: absolute;
    height: 85%;
    width: 85%;
    top: 15px;
    background: url(../assets/images/light.png) no-repeat;
    background-size: contain;
}
}

</style>