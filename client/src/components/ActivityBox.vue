<template>
  <div class="activityBoxDiv">
      <div class="leftInfo">
        <div>
          <p class="icon">{{ icon }}</p>
        </div>
        <h3 class="name">{{ activityName }}</h3>
        <p class="date">{{ date }}</p>
      </div>
      <div class="rightInfo">
        <p class="score" v-if="score.length > 0">Score <b>{{ score }}/{{ possibleScore }}</b></p>
        <button class="viewButton">View work</button>
      </div>
  </div>
</template>

<script>
export default {
  props: ['activityName', 'score', 'possibleScore', 'icon', 'date'],
  data() {
    return {
    };
  },
};
/*
(data) => {
  const activitiesData = [];
    for (const id in data) {
      activitiesData.push({
        id: data[id],
        resource_type: data[id].resourceType,
        score: data[id].score,
        possible_score: data[id].possibleScore,
        product: data[id].bp,
        d_created: data[id].dateNumber,
        topic_data: {
          name: data[id].iconName,
          icon_path: data[id].iconPath,
        },
        comment: data[id].comment,
      });
    }
    this.activitiesData = activitiesData;
}); */
</script>

<style scoped>
.activityBoxDiv {
    border: 1px solid rgb(199, 198, 198);
    border-radius: 5px;
    height: 60px;
    padding: 5px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
}
.leftInfo {
    display: inline;
}
.rightInfo {
    justify-content: flex-end;
    color: rgb(10, 161, 167);
    display: inline-block;
}
.icon ,
.name ,
.date ,
.score ,
.viewButton {
    margin: 0px;
}
.name ,
.viewButton
 {
    font-weight: bold;
}
.viewButton {
    text-decoration: none;
    border: none;
    background: none;
    color: rgb(10, 161, 167);
    cursor: pointer;
}
</style>
