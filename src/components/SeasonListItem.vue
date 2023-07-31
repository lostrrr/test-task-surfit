<template>
  <div>
    <template v-for="(season, i) in episodeList" :key="`season-${season}`">
      <div v-if="season.length > 0" class="seasonlist_item">
        <div>Сезон: {{ i + 1 }}</div>
        <ul>
          <li v-for="episode in season" :key="episode.id">
            <router-link :to="`/episode/${episode.id}`">
              Серия {{ getEpisodeNumber(episode.episode) }} "{{ episode.name }}"
              вышла
              {{ transformDate(episode.air_date) }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import transformDate from "@/components/mixins/transformDate";
export default {
  mixins: [transformDate],
  name: "SeasonListItem",
  props: {
    episodeList: {
      type: Array,
    },
  },
  methods: {
    // Метод заменяет строку вида "S01E01" на "1"
    getEpisodeNumber(ep) {
      return ep.match(/S\d+E(\d+)/)[1].replace(/0(\d+)/, "$1");
    },
  },
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
