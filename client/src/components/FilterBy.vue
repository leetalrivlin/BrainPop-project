<template>
    <div class="filterByDiv">
        <ul class="filterByUl">
            <li class="typeBox">Type</li>
            <li class="typeBox">Type 2</li>
        </ul>
        <div class="allFilters">
        </div>
    </div>
</template>

<script>
export default {
  props: ['type'],
};
</script>

<style scoped>
.filterByUl {
  display:inline;
}
.typeBox {
  list-style: none;
  border: 1px solid rgb(10, 161, 167);
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  text-align: center;
  width: 200px;
}
</style>
