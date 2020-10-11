<template>
   <div class="monthSectionDiv">
       <h3>month</h3>
       <activity-box></activity-box>
   </div>
</template>

<script>
import ActivityBox from './ActivityBox.vue';

export default {
  components: {
    ActivityBox,
  },
};
</script>
