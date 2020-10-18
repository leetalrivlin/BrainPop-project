<template>
    <div class="autocomplete">
      <input
      class="inputClass"
      type="text"
      placeholder="Search Timeline"
      v-model="search"
      @input="onChange"/>
      <ul v-show="isOpen" class="autocomplete-results">
        <li v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result">{{ result }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'autocomplete-search',
  props: {
    types: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
    };
  },
  methods: {
    onChange() {
      this.isOpen = true;
      this.filterResults();
    },
    filterResults() {
      // eslint-disable-next-line
      this.results = this.types.filter(type => type.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
  },
};
</script>

<style>
  .autocomplete {
    position: relative;
    width: 26vw;
  }
  .inputClass {
    width:25vw;
  }
  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: auto;
    overflow: auto;
  }
  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }
  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>
