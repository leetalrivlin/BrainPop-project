<template>
  <div>
    <ul class="filterByUl">
        <li class="typeBox">All work</li>
        <li class="typeBox">{{ activityType }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['activityType', 'allActivities'],
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
}
.typeBox {
  list-style: none;
  border: 1.5px solid rgb(10, 161, 167);
  border-radius: 3px;
  padding: 6px 10px;
  margin-right: 5px;
  text-align: center;
  width: auto;
  background: none;
  color: rgb(10, 161, 167);
  font-size: 0.75rem;
  font-weight: bold;
}
.typeBox:hover {
background-color: rgb(10, 161, 167, 0.1);
cursor: pointer;
}
</style>
