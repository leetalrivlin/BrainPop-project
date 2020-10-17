<template>
  <div class="zoomDiv" :class="{'open' : open}">
    <button class="closeButton" @click="$emit('close')">X</button>
    <div class="center">
      <p>icon</p>
      <h1 class="actName">{{ zoomName }}</h1>
      <p class="date">date</p>
    </div>
    <div class="left">
      <p class="comment">{{ zoomComment}}</p>
      <p class="score">Score</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['open', 'zoom-comment', 'zoom-name'],
};
</script>

<style scoped>
.zoomDiv {
  z-index: 99;
  background-color: white;
  border: 0.3rem solid rgb(199, 198, 198);
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
