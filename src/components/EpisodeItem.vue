<template>
  <div class="episode-item">
    <div class="episode=item_wrapper">
      <button class="episode-item back-btn">
        <router-link :to="{ name: 'seasons' }">К списку эпизодов</router-link>
      </button>
      <div class="episode-item_title">
        <div class="episode-item_text">
          Серия {{ episode.id }} {{ episode.name }} вышла
          {{ episode.air_date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEpisode } from "@/api/api";
export default {
  name: "EpisodeItem",
  data() {
    return {
      episode: {},
    };
  },
  props: {
    episodeId: {
      type: String,
    },
  },
  created() {
    getEpisode(this.episodeId).then((ep) => {
      this.episode = ep;
    });
  },
};
</script>

<style scoped>
.episode-item .back-btn {
  background: #bdbdbd;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
}
.episode-item_wrapper {
  max-width: 960px;
  margin: 0 auto;
}
.episode-item_title {
  margin-top: 20px;
  padding: 20px;
  background: #c1c1c1;
  border-radius: 10px;
}
.episode-item_text {
  background: #b6b6b6;
  border-radius: 10px;
  padding: 10px;
}
</style>
