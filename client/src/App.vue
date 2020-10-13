<template>
  <div>
    <div id="nav">
      <router-link to="/">Activities</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="appDiv">
      <h2>Timeline</h2>
      <autocomplete-search></autocomplete-search>
      <filter-by></filter-by>
      <month-section></month-section>
    </div>
  </div>
</template>

<script>
import AutocompleteSearch from './components/AutocompleteSearch.vue';
import FilterBy from './components/FilterBy.vue';
import MonthSection from './components/MonthSection.vue';

export default {
  components: {
    AutocompleteSearch,
    FilterBy,
    MonthSection,
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
