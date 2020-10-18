<template>
  <div class="activityBoxDiv">
      <div class="leftInfo">
        <img class="icon" :src="icon" />
        <div class="info">
          <h3 class="name">{{ activityName }}</h3>
          <p class="date">{{ jsnDate }}</p>
        </div>
      </div>
      <div class="rightInfo">
        <p class="score" v-if="score.length > 0">Score <b>{{ score }}/{{ possibleScore }}</b></p>
        <button class="viewButton" @click="open = !open">
        <PhEye/> View work</button>
          <zoom-view :open="open" @close="open = false">
            <template slot="zoom-name" v-if="open">{{ zoomInfo.zoomName }}</template>
            <template slot="zoom-date" v-if="open">{{ zoomInfo.zoomDate }}</template>
            <template slot="zoom-icon" v-if="open">{{ zoomInfo.zoomIcon }}</template>
            <template slot="zoom-comment" v-if="open">{{ zoomInfo.zoomComment }}</template>
            <template slot="zoom-score" v-if="open">{{ zoomInfo.zoomScore }}</template>
            <template slot="zoom-possible-score" v-if="open">{{ zoomInfo.zoomPossibleScore }}
            </template>
          </zoom-view>
      </div>
  </div>
</template>

<script>
import { PhEye } from 'phosphor-vue';
import ZoomView from '../views/ZoomView.vue';

export default {
  props: ['activityName', 'score', 'possibleScore', 'icon', 'jsnDate', 'comment', 'id', 'product'],
  data() {
    return {
      open: false,
      zoomInfo: {
        zoomIcon: this.icon,
        zoomName: this.activityName,
        zoomDate: this.jsnDate,
        zoomComment: this.comment,
        zoomScore: this.score,
        zoomPossibleScore: this.possibleScore,
      },
    };
  },
  components: {
    PhEye,
    ZoomView,
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      this.checkZoom();
    },
    // eslint-disable-next-line
    open(to, from) {
      if (to === false) {
        if (this.$route.params.zoomView) {
          this.$router.push('/');
        }
      }
    },
  },
  methods: {
    checkZoom() {
      if (this.$route.params.zoomView && this.zoomInfo[this.$route.params.zoomView]) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
    showZoom(theName) {
      this.$router.push(theName).catch(() => {});
    },
    convertTime(thetime) {
      Math.floor(new Date().getTime(thetime) / 1000.0);
    },
    /* getImgUrl(path) {
      (path) => {
        if (this.activityName === 'dogs') {
          return require('../assets/topics/dogs.png');
        } else if (this.activityName === 'cells') {
          return require('../assets/topics/cells.png');
        } else if (this.activityName === 'camouflage') {
          return require('../assets/topics/camouflage.png');
        } else if (this.activityName === 'ada lovelace') {
          return require('../assets/topics/adalovelace.png');
        } else if (this.activityName === 'dna') {
          return require('../assets/topics/dna.png');
        };
      }
    }, */
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
    width:20px;
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
.viewButton:focus {
  outline: none;
  color: rgb(111, 112, 112);
}
</style>
