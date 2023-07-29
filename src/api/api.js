const BASE_URL = "https://rickandmortyapi.com/api/";

// Функция запроса к серверу API
const getResource = (url) => {
  return fetch(`${BASE_URL}${url}`)
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
};

// Функция создает массив номеров эпизодов на основе их количестива
const getCountsArray = (counts) => {
  return Array.from({ length: counts }, (_, i) => i + 1);
};

// Запрос на сервер, возвращает текущее количества эпизодов
const getEpisodeCount = () => {
  return getResource("episode").then((episode) => {
    return getCountsArray(episode.info.count);
  });
};

// Получение списка всех эпизодов
const getAllEpisodes = () => {
  return getEpisodeCount().then((count) => {
    return getResource(`episode/${count}`);
  });
};

export { getAllEpisodes };
