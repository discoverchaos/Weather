<template lang="pug">
.main-content(v-if="getFullWeather")
    .main-content-left
        p.main-content-left__degree {{ Math.round(getFullWeather.current.temp) }}°
        p.main-content-left__today Сегодня
        p.main-content-left__time Время: 21:54
        p.main-content-left__city Город: {{getFullWeather.town}}
        .main-content-left__image
            img(src="@/assets/img/sun.svg", alt="alt" v-if="description == 'ясно'")
            img(src="@/assets/img/rain.svg", alt="alt" v-else-if="description == 'дождь'")
            img(src="@/assets/img/mainly_cloudy.svg", alt="alt" v-else-if="description == 'пасмурно'")
            img(src="@/assets/img/small_rain_sun.svg", alt="alt" v-else-if="description == 'небольшой дождь и солнце'")
            img(src="@/assets/img/small_rain.svg", alt="alt" v-else-if="description == 'небольшой дождь'")
    .main-content-right
        img(src="@/assets/img/bg.svg", alt="alt")
        .main-content-right-item
            img(src="@/assets/img/icon-1.svg", alt="alt") 
            span Температура
            span {{ Math.round(getFullWeather.current.temp) }}° - ощущается как {{ Math.round(getFullWeather.current.feels_like) }}° 
        .main-content-right-item
            img(src="@/assets/img/icon-2.svg", alt="alt") 
            span Давление 
            span {{getFullWeather.current.pressure}} мм ртутного столба - нормальное
        .main-content-right-item
            img(src="@/assets/img/icon-3.svg", alt="alt") 
            span Влажность
            span {{getFullWeather.current.humidity}}%
        .main-content-right-item
            img(src="@/assets/img/icon-4.svg", alt="alt") 
            span Ветер
            span {{ getFullWeather.current.wind_speed }} м/с юго-запад - легкий ветер
</template>
<script>
    import { mapActions, mapState } from "vuex";
export default {
    computed: {
        ...mapState(['getFullWeather']),
        description(){
            return this.getFullWeather.current.weather[0].description
        }
    },
    methods: {
        ...mapActions(['getWeather'])
    },
    created(){
        this.getWeather('Tashkent')
    }
}
</script>
<style lang="scss">
    
</style>