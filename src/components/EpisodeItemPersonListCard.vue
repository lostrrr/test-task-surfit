<template>
  <div class="card">
    <div>
      <img :src="selectedPerson.image" alt="img" />
    </div>
    <div class="card_text">
      <div>Имя: {{ selectedPerson.name }}</div>
      <div>Статус: {{ selectedPerson.status }}</div>
      <div>Пол: {{ selectedPerson.gender }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EpisodeItemPersonListCard",
  props: {
    selectedPerson: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  margin-left: 30px;
  padding: 30px;
  width: 60%;
  height: fit-content;
  background: #b6b6b6;
  border-radius: 10px;
}
.card img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 10px;
}
.card_text {
  margin-left: 15px;
}
</style>
