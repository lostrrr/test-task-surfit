<template>
  <div class="episode-item">
    <div class="episode-item_wrapper">
      <button class="episode-item back-btn">
        <router-link :to="{ name: 'seasons' }">К списку эпизодов</router-link>
      </button>
      <div class="episode-item_title">
        <div class="episode-item_text">
          Серия {{ episode.id }} {{ episode.name }} вышла
          {{ episode.air_date }}
        </div>
        <EpisodeItemPersonList :persons="persons"></EpisodeItemPersonList>
      </div>
    </div>
  </div>
</template>

<script>
import { getEpisode, getCharacters } from "@/api/api";
import EpisodeItemPersonList from "./EpisodeItemPersonList.vue";
import transformDate from "@/components/mixins/transformDate";
export default {
  mixins: [transformDate],
  name: "EpisodeItem",
  components: {
    EpisodeItemPersonList,
  },
  data() {
    return {
      episode: {},
      persons: [],
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
      getCharacters(ep.characters).then((chars) => (this.persons = chars));
    });
  },
  watch: {
    episode() {
      this.episode.air_date = this.transformDate(this.episode.air_date);
    },
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
  max-width: 800px;
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
