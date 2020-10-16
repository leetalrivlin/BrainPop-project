<template>
  <div class="zoomDiv">
    <p>icon</p>
    <h1>Activity name</h1>
    <p>date</p>
    <p>comment</p>
    <p>Score</p>
  </div>
</template>

<style scoped>
.zoomDiv {
  z-index: 99;
  background-color: white;
  border: 3rem solid;
  border-radius: 5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin:0;
  width: 55vw;
  height: 40%;
}
</style>
