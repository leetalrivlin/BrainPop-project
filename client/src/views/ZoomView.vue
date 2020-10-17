<template>
  <div class="zoomDiv" :class="{'open' : open}">
    <button class="closeButton" @click="$emit('close')"><PhXCircle/></button>
    <div class="center">
      <slot name="zoom-icon"><img class="icon" :src="zoomIcon" /></slot>
      <h1 class="actName"><slot name="zoom-name">{{ zoomName }}</slot></h1>
      <p class="date"><slot name="zoom-date">{{ zoomDate }}</slot></p>
    </div>
    <div class="left">
      <p class="comment"><slot name="zoom-comment">{{ zoomComment }}</slot>!</p>
      <p class="score">Score
        <slot name="zoom-score">{{ zoomScore }}</slot><span>/</span>
        <slot name="zoom-possible-score">{{ zoomPossibleScore }}</slot>
      </p>
    </div>
  </div>
</template>

<script>
import { PhXCircle } from 'phosphor-vue';

export default {
  props: ['open', 'zoom-comment', 'zoom-name', 'zoom-date', 'zoom-icon', 'zoom-score', 'zoom-possible-score'],
  components: {
    PhXCircle,
  },
};
</script>

<style scoped>
.zoomDiv {
  z-index: 99;
  background-color: white;
  border: 0.3rem solid rgb(158, 158, 158);
  border-radius: 1.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin:0;
  width: 45vw;
  height: 55%;
}
.zoomDiv:not(.open) {
  display: none;
}
.zoomDiv.open {
  /* animation: fadeup 250ms; */
  display: block;
}
.closeButton {
  float: right;
  margin-top: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 2.5rem;
  color: rgb(158, 158, 158);
}
.center {
  margin-top: 3rem;
  text-align: center;
  color: rgb(63, 63, 63);
}
.actName {
  font-size: 2rem;
}
.date {
  font-size: 1.3rem;
}
.left {
  margin-top: 2rem;
  margin-left: 2rem;
}
.comment {
  color: rgb(19, 19, 19);
  font-size: 1.8rem;
}
.score {
  margin-top: 3rem;
  font-size: 1.2rem;
}
</style>
