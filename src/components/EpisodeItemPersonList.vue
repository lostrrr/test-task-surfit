<template>
  <div class="person_item">
    <div class="person_item_list">
      <div>Список персонажей серии</div>
      <ul>
        <li v-for="person in persons" :key="person.name">
          <span>{{ person.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "EpisodeItemPersonList",
  props: {
    persons: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.person_item {
  display: flex;
  margin-top: 15px;
}
.person_item_list {
  padding: 17px;
  background: #b6b6b6;
  width: 40%;
  border-radius: 10px;
}
.person_item_list ul {
  list-style-type: none;
}
.person_item_list li {
  background: #9e9e9e;
  margin-top: 5px;
  padding: 3px 10px 3px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
