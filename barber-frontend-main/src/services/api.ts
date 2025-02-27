import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const apiKey = '95e51a37c6e94e1e95e165534241601'

interface forecastEndpointParams {
  cityName: string
  days?: string
}

const forecastEndpoint = ({ cityName, days }: forecastEndpointParams): string => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${days}&aqi=no&alerts=no`
const locationsEndpoint = ({ cityName }: forecastEndpointParams): string => `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`

const apiCall = async (endPoint: string): Promise<any> => {
  const options = {
    method: 'GET',
    url: endPoint
  }
  try {
    const response = await axios.request(options)
    return response.data
  } catch (err) {
    console.log('error', err)
    return null
  }
}

export const fetchWeatherForecast = async ({ cityName, days }: forecastEndpointParams): Promise<any> => {
  return await apiCall(forecastEndpoint({ cityName, days }))
}

export const fetchLocations = async ({ cityName }: forecastEndpointParams): Promise<any> => {
  return await apiCall(locationsEndpoint({ cityName }))
}

export default api;
