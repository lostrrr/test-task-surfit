export default {
  methods: {
    transformDate(airDate) {
      const dict = {
        January: "Января",
        February: "Февраля",
        March: "Марта",
        April: "Апреля",
        May: "Мая",
        June: "Июня",
        July: "Июля",
        August: "Августа",
        September: "Сентября",
        October: "Октябрь",
        November: "Ноября",
        December: "Декабря",
      };
      airDate = airDate.split(" ").map((x) => x.replace(/[^\w]/, ""));

      let [month, date, year] = airDate;
      month = dict[month];
      return [date, month, year].join(" ");
    },
  },
};
