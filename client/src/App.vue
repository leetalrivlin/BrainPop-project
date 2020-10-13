<template>
  <div>
    <div class="appDiv">
      <h2>Timeline</h2>
      <autocomplete-search></autocomplete-search>
      <filter-by></filter-by>
      <month-section></month-section>
      <div>
        <ul>
          <li v-for="activity in exports" :key="activity.id">
            {{ activity.product }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import AutocompleteSearch from './components/AutocompleteSearch.vue';
import FilterBy from './components/FilterBy.vue';
import MonthSection from './components/MonthSection.vue';

Vue.use(axios);

export default {
  components: {
    AutocompleteSearch,
    FilterBy,
    MonthSection,
  },
  data() {
    return {
      exports: [],
    };
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/activities/v1');
      this.exports = res.data;
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
  color: gray;
  align-items: center;
  text-align: left;
}
ul {
  padding-inline-start: 0px;
}
</style>
