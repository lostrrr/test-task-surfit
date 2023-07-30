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

// Группировка списка эпизодов по сезонам
const groupBySeasons = (episodes) => {
  let arr = [];
  episodes.forEach((item) => {
    // Определение текущего сезона
    const currentSeason = item.episode
      .match(/S(\d+)E/)[1]
      .replace(/0(\d+)/, "$1");
    const s = currentSeason - 1;
    // Если сезон еще не существует, создать сезон и поместить эпизод, иначе поместить эпизод
    !arr[s] ? (arr[s] = [item]) : arr[s].push(item);
  });
  return arr;
};

// Получение сгруппированного списка эпизодов
const getEpisodesBySeason = () => {
  return getAllEpisodes().then((episodes) => {
    return groupBySeasons(episodes);
  });
};

// Получение эпизода
const getEpisode = (number) => {
  return getResource(`episode/${number}`);
};

// Получение персонажей
const getCharacters = (characterList) => {
  // Формирование массива из id персонажей, трансформация ссылки в id
  characterList = characterList.map((item) => item.match(/\/(\d+)/)[1]);
  return getResource(`character/${characterList}`);
};

export { getEpisodesBySeason, getEpisode, getCharacters };
