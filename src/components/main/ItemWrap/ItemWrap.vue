<script setup>
import func from '../../../common'
import { defineProps, onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  sty:{
        type: Object,
    default: {},
  },
  imgPath: {
    type: String,
    default :"images/textbg.png"
  },
  sx: {
    type: String,
    default: ""
  }
});
onBeforeMount(() => {
  props.sty.backgroundImage = "url(" + func.loadResource(props.imgPath) + ")";
})
</script>
<template>
  <div class="wrap" :style="props.sty">
    <div class="title">{{ store.state[sx].itemName }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: center no-repeat;
  background-size: 100% 100%;
  padding-top: 20px;
  margin: 4px 0;
  position: relative;
  .title{
    color: #17caf0;
    box-sizing: border-box;
    letter-spacing:1.5px;
    font-weight: bold;
    font-size: 14px;
    height: 26px;
    margin-left: 24px;
    display: inline-block;
    border: 1px solid rgb(0,182,254);
    background-color: rgba(1,61,99,.8);
    line-height: 24px;
    padding-left: 8.5px;
    padding-right: 7px;
    border-radius: 5px;
  }
  .content{
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    height: 74%;
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50% ,-50%);
  }
}
</style>
