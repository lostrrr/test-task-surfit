<template>
  <section class="not-found">
    <div class="not-found title">Страница не найдена</div>
    <button class="back-btn">
      <router-link :to="{ name: 'seasons' }">К списку эпизодов</router-link>
    </button>
  </section>
</template>

<style>
.not-found {
  margin: 30px auto 0;
  padding: 20px;
  background: #555555;
  max-width: 1140px;
  border-radius: 20px;
  font-size: 17px;
  text-align: center;
}
.back-btn {
  background: #bdbdbd;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
}
</style>
