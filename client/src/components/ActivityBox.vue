<template>
  <div class="activityBoxDiv">
    <li class="activityData">
      <div>
          <p>src= {{ icon }}</p>
      </div>
      <div>
        <h3>{{ activityName }}</h3>
        <p>{{ date }}</p>
      </div>
      <div>
        <p>Score {{ score }} / {{ possibleScore }}</p>
        <button>View work</button>
      </div>
    </li>
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
    padding: 10px;
}
.activityData {
    display: flex;
    align-items: center;
    list-style: none;
}
</style>
