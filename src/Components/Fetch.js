import { useParams } from "react-router-dom"
import Store from "../ReduxData/Store"
import { WEATHER_ACTION , FORECAST_ACTION } from "../ReduxData/actions/Action"
export  const fetchData =(city)=>{
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b20334e32cec5ee6474493ca434e29cd`)
      .then(resp=>resp.json())
      .then(data=>{
         Store.dispatch({
           ...WEATHER_ACTION,
           payload:{
            weather:data
           }
         })
      })

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b20334e32cec5ee6474493ca434e29cd`)
      .then(resp=>resp.json())
      .then(data=>{
      Store.dispatch({
        ...FORECAST_ACTION,
        payload:{
          forecast:data
        }
      })
      })
} 