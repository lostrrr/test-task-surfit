<template>
  <div class="filter">
    <div class="filter_text">Поиск по эпизодам:</div>
    <input
      :value="filter"
      @input="$emit('update:filter', $event.target.value)"
      type="text"
      name="filter"
      placeholder=""
    />
  </div>
</template>

<script>
export default {
  name: "SeasonListFilter",
  props: {
    filter: String,
  },
  emits: ["update:filter"],
};
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  font-size: 20px;
}
.filter_text {
  display: flex;
  justify-content: center;
}
.filter input {
  display: flex;
  margin: 10px auto 0;
  max-width: 800px;
  width: 100%;
  height: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: #c9c9c9;
  border-style: none;
}
</style>
