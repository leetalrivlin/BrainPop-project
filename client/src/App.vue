<template>
  <div class="appDiv">
    <h2>Timeline</h2>
    <autocomplete-search></autocomplete-search>
    <h3>Filter by:</h3>
    <filter-by :types="types"></filter-by>
    <div>
      <activity-box v-for="activity in activities"
        :key="activity.id"
        :type="activity.resource_type"
        :score="activity.score"
        :possible-score="activity.possible_score"
        :product="activity.product"
        :activity-name="activity.topic_data.name"
        :icon="activity.topic_data.icon_path"
        :jsn-date="activity.d_created"
        :comment="activity.comment">
      </activity-box>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import AutocompleteSearch from './components/AutocompleteSearch.vue';
import FilterBy from './components/FilterBy.vue';
import ActivityBox from './views/ActivityBox.vue';

Vue.use(axios);

export default {
  components: {
    AutocompleteSearch,
    FilterBy,
    ActivityBox,
  },
  data() {
    return {
      activities: [],
      icon: '',
      type: '',
      types: [
        'Challenge',
        'Make-a-Map',
        'Draw About It',
        'Easy Quiz',
        'Make-a-Movie',
        'Movie',
        'Quiz',
        'Related Reading',
        'Word Play',
      ],
    };
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/activities/v1');
      this.activities = res.data;
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    }
  },
};
</script>

<style>
.appDiv {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(63, 63, 63);
  align-items: center;
  text-align: left;
  width: 68%;
  margin: auto;
}
ul {
  padding-inline-start: 0px;
}
h3 {
  font-size: 0.8rem;
  font-weight: lighter;
}
</style>
