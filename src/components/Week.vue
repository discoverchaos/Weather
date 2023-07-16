<template lang="pug">
.main-week(v-if="getFullWeather")
    .main-week-btns
        button На неделю
        button Отменить
    .main-week-days(v-if="getDailyWeather")
        PerDay(v-for="(day,i) in getDailyWeather" :key="i" :day="day")
</template>
<script>
import PerDay from './PerDay.vue'
import { mapGetters,mapActions,mapState } from "vuex";
export default {
    components: { PerDay },
    computed: {
        ...mapGetters(['getDailyWeather']),
        ...mapState(['getFullWeather'])
    },
    methods: {
        ...mapActions(['getWeather'])
    },
    mounted(){
        this.getWeather('Tashkent')
    }
}
</script>
<style lang="scss">
    
</style>