<template>
   <div class="monthSectionDiv">
      <h3>month</h3>
      <ul class="monthUl">
        <activity-box></activity-box>
      </ul>
   </div>
</template>

<script>
import ActivityBox from './ActivityBox.vue';

export default {
  components: {
    ActivityBox,
  },
  /* getData() {
      fetch('https://10.0.2.2:3000/activities/v1/module.exports.json').then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
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
      });
    },
  }, */
};
</script>

<style scoped>
  .monthUl {
    list-style: none;
  }
</style>
