<template>
    <div class="activityBoxDiv">
        <ul class="activityData">
            <li>Name of activity</li>
            <li>Date</li>
            <li>Hour</li>
            <li>Score</li>
        </ul>
        <button>View work</button>
    </div>
</template>

<style scoped>
  .activityBoxDiv {
      border: 1px solid rgb(199, 198, 198);
      border-radius: 5px;
      height: 60px;
      width: 100%;
      padding: 20px;
  }
  .activityData {
      display: flex;
      align-items: center;
      list-style: none;
  }
</style>
