import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
     // withCredentials: true
})

// api
export const weatherAPI = {
    getWeatherByCity(city: string) {
            let promice = instance.get(`?q=${city}&lang=en&units=metric&APPID=787496ddb4e6e2128bbd57cb5ad34ac5`)
        return promice
            .then(response => response)

    },
}
