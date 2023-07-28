<template>
  <section class="seasons">
    <SeasonList />
  </section>
</template>

<script>
import SeasonList from "@/components/SeasonList.vue";
export default {
  name: "SeasonsView",
  components: { SeasonList },
};
</script>

<style>
.seasons {
  margin: 30px auto 0;
  padding: 20px;
  background: #555555;
  max-width: 1140px;
  border-radius: 20px;
}
</style>
