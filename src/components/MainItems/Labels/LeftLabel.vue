<script setup>
import { defineProps } from "vue";
const props = defineProps({
    position: {
        type: Object,
        default: null
    },
    contents: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <div class="wrap" :style="position">
        <div class="contents">{{ contents }}</div>
    </div>
</template>

<style scoped lang="less">
.wrap{
    width: 160px;
    height: 66px;
    background: url(../../../assets/images/leftLabel.png) center no-repeat;
    background-size: contain;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    .contents{
        margin-left: -8px;
        width: 190px;
        text-align: center;
        margin-top: 3px;
        line-height: 33px;
        height: 33px;
        font-weight: 500;
        color: #17caf0;
        font-size: 14px;
        letter-spacing: 1.5px;
        white-space: nowrap;
        font-weight: bold;
    }
}
</style>