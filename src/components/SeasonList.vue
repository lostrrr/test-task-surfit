<template>
  <div class="seasonlist">
    <SeasonListItem></SeasonListItem>
  </div>
</template>

<script>
import SeasonListItem from "./SeasonListItem.vue";
export default {
  name: "SeasonList",
  components: { SeasonListItem },
};
</script>

<style scoped></style>
