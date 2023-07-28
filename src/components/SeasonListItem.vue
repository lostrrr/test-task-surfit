<template>
  <div class="seasonlist_item">
    <div>Сезон: 1</div>
    <ul>
      <li><a href="#">Серия № вышла</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SeasonListItem",
};
</script>

<style scoped>
.seasonlist_item {
  background: #cdcdcd;
  margin: 25px auto 0;
  padding: 15px;
  max-width: 800px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
}
.seasonlist_item ul {
  width: 100%;
  list-style: none;
}
.seasonlist_item li {
  background: #ededed;
  margin: 9px auto 0;
  padding: 4px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
