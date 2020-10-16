<template>
  <div class="activityBoxDiv">
      <div class="leftInfo">
        <img class="icon" :src="icon" />
        <div class="info">
          <h3 class="name">{{ activityName }}</h3>
          <p class="date">{{ jsnDate | date }}</p>
        </div>
      </div>
      <div class="rightInfo">
        <p class="score" v-if="score.length > 0">Score <b>{{ score }}/{{ possibleScore }}</b></p>
        <button class="viewButton"><PhEye/> View work</button>
      </div>
  </div>
</template>

<script>
import { PhEye } from 'phosphor-vue';

export default {
  props: ['activityName', 'score', 'possibleScore', 'icon', 'jsnDate'],
  components: {
    PhEye,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.activityBoxDiv {
    border: 1px solid rgb(199, 198, 198);
    border-radius: 5px;
    height: 65px;
    padding: 5px;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.leftInfo {
    justify-content: left;
}
.rightInfo {
    color: rgb(6, 138, 143);
    justify-content: right;
}
.score ,
.viewButton ,
.icon ,
.info {
    display: inline-block;
}
.icon ,
.name ,
.date ,
.score ,
.viewButton {
    margin: 0px;
}
.icon {
    margin-left: 0.7rem;
    margin-right: 0.7rem;
}
.name {
    margin-bottom: 0.3rem;
}
.date {
    font-size: 0.7rem;
    margin-top: 0.3rem;
}
.name ,
.viewButton {
    font-weight: bold;
}
.viewButton {
    text-decoration: none;
    border: none;
    background: none;
    color: rgb(6, 138, 143);
    cursor: pointer;
    margin-right: 0.7rem;
    margin-left: 0.7rem;
}
</style>
