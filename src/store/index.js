import { createStore } from "vuex";
import axios from 'axios'
const store = createStore({
    state:{
        apiKey: 'ceb3308577fd63877d37e38fd92e6caa',
        getFullWeather: null
    },
    mutations:{
        getWeather(state, payload){
            state.getFullWeather = payload
        }
    },
    actions:{
        async getWeather({commit, state}, city){
            try {
                let res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&units=metric&appid=${state.apiKey}`)
                let weather = res.data[0]
                console.log(weather);
                let town = city
                let { lon, lat } = weather
                let res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${state.apiKey}&units=metric&lang=ru`)
                let weatherInfo = res2.data
                console.log(weatherInfo);
                let weatherObj  = { ...weatherInfo, town: town }
                commit('getWeather', weatherObj)
                
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getDailyWeather: state => state.getFullWeather.daily,
        getWeekDayWeather: state => state.getFullWeather.weather[0]
    }
})
export default store