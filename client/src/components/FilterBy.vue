<template>
  <div>
    <ul class="filterByUl">
        <li class="typeBox">All work</li>
        <li class="typeBox" v-for="type in types"
        :key="type.id">{{ type }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['types'],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.filterByUl {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.typeBox {
  list-style: none;
  border: 1.5px solid rgb(6, 138, 143);
  border-radius: 3px;
  padding: 6px 10px;
  margin-right: 5px;
  text-align: center;
  width: auto;
  max-height: 1rem;
  background: none;
  color: rgb(6, 138, 143);
  font-size: 0.7rem;
  font-weight: bold;
}
.typeBox:hover {
background-color: rgb(10, 161, 167, 0.1);
cursor: pointer;
}
</style>
