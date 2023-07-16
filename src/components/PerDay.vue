<template lang="pug">
.main-week-day
    h3 {{ getWeekDay}}
    h4 {{ getDay }} {{ getMonth }}
    img(src="@/assets/img/sun.svg", alt="alt" v-if="main == 'Clear'")
    img(src="@/assets/img/mainly_cloudy.svg", alt="alt" v-if="main == 'Clouds'")
    img(src="@/assets/img/rain.svg", alt="alt" v-if="main == 'Rain'")
    h5 {{ Math.round(day.temp.day) }}°
    h5 {{ Math.round(day.feels_like.day) }}°
    h6 +15° 
    p {{description}}
</template>
<script>
import unix from "@/store/unix";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["day"],
  computed: {
    ...mapGetters(["getWeekDayWeather"]),
    description() {
      for (const key in this.day.weather) {
        return this.day.weather[key].description;
      }
    },
    main() {
      for (const key in this.day.weather) {
        return this.day.weather[key].main;
      }
    },
    getWeekDay() {
      return unix(this.day.dt, "weekday");
    },
    getDay() {
      return unix(this.day.dt, "day");
    },
    getMonth() {
      return unix(this.day.dt, "month");
    },
  },
};
</script>
<style lang="scss"></style>
