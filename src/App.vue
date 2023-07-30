<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("fetchAllEpisodes");
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
body {
  background: #373737;
}
</style>
