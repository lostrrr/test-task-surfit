<template>
  <div class="seasonlist">
    <SeasonListFilter v-model:filter="filter"></SeasonListFilter>
    <SeasonListItem :episodeList="filteredEpisodeList"></SeasonListItem>
  </div>
</template>

<script>
import SeasonListItem from "./SeasonListItem.vue";
import SeasonListFilter from "./SeasonListFilter.vue";
export default {
  name: "SeasonList",
  components: { SeasonListItem, SeasonListFilter },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    episodeList() {
      return this.$store.state.episodeList;
    },
    loweredFilter() {
      return this.filter.toLowerCase();
    },
    filteredEpisodeList() {
      return this.episodeList.map((season) =>
        season.filter((episode) =>
          episode.name.toLowerCase().includes(this.loweredFilter)
        )
      );
    },
  },
};
</script>

<style scoped></style>
