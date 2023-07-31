<template>
  <div class="person_item">
    <div class="person_item_list">
      <div>Список персонажей серии</div>
      <ul>
        <li
          v-for="person in persons"
          :key="person.name"
          @click="selectPerson(person)"
        >
          <span>{{ person.name }}</span>
        </li>
      </ul>
    </div>
    <EpisodeItemPersonListCard
      :selectedPerson="selectedPerson"
    ></EpisodeItemPersonListCard>
  </div>
</template>

<script>
import EpisodeItemPersonListCard from "./EpisodeItemPersonListCard.vue";
export default {
  name: "EpisodeItemPersonList",
  components: {
    EpisodeItemPersonListCard,
  },
  props: {
    persons: {
      type: Array,
    },
  },
  data() {
    return {
      selectedPerson: {},
    };
  },
  methods: {
    selectPerson(person) {
      this.selectedPerson = person;
    },
  },
  watch: {
    persons() {
      this.selectedPerson = this.persons[0];
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
  margin-top: 7px;
  padding: 4px 10px 4px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
