<template>
  <section class="episode">
    <EpisodeItem :episodeId="episodeId"></EpisodeItem>
  </section>
</template>

<script>
import EpisodeItem from "@/components/EpisodeItem.vue";
export default {
  name: "EpisodeView",
  components: { EpisodeItem },
  props: {
    episodeId: {
      type: String,
      default: "1",
    },
  },
};
</script>

<style>
.episode {
  margin: 30px auto 0;
  padding: 20px;
  background: #555555;
  max-width: 1140px;
  border-radius: 20px;
  font-size: 17px;
}
</style>
