<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <h2>Timeline</h2>
      <autocomplete-search></autocomplete-search>
      <filter-by></filter-by>
      <month-section></month-section>
    </div>
    <router-view/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
