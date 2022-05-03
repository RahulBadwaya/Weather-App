import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import loader from '../Components/loader.gif'
import Store from "../ReduxData/Store"
import { connect } from "react-redux";
import {WEATHER_ACTION, FORECAST_ACTION} from '../ReduxData/actions/Action'
import store from "../ReduxData/Store";
import {fetchData} from './Fetch'
function mapStateToProps (state)
{
  return {
    weather: state.weather,
    forecast : state.forecast
  }
}
const Dashboard =(props)=>{
   const {city} = useParams()
    useEffect(()=>{
          fetchData(city) 
    },[])
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    if(props.weather!=null && props.forecast!=null){
    var d = new Date()
    var sunrise =parseFloat((props.forecast.city.sunrise/86400000)-12).toFixed(2)
    var sunset = parseFloat((props.forecast.city.sunset/86400000)-12).toFixed(2)
    var temp = parseFloat(props.weather.main.temp - 273.15).toFixed(2)
    var maxTemp = parseFloat(props.weather.main.temp_max-273.15).toFixed(2)
    var minTemp = parseFloat(props.weather.main.temp_min-273.15).toFixed(2)

    const show =(i)=>{
      let data = props.forecast.list[i]
        store.dispatch({
          ...WEATHER_ACTION,
          payload:{
             weather:data
          }
        })
       
    }
    console.log(props.forecast)
    console.log(props.weather)
    return (
        <div className="dashboardContainer">
            <div className="container">
                <div className="row">
              <div className="col-md-5 banner">
                  <h1 className="title">{props.forecast.city.name}, {props.forecast.city.country}</h1>
                  <span>{d.getDate()}</span><span>-{d.getMonth()}</span><span>-{d.getFullYear()}</span>
                  <div className="tempBox">
                   {(temp>30)?<i className="bi bi-brightness-high"></i>:<i className="bi bi-cloud-sun"></i>}
                   <h1>{temp}<sup>o</sup></h1>
                  </div>
              </div>

              <div className="col-md-5 banner2">
                  <div className="item">
              <h1>{maxTemp}</h1>
                <span>High</span>
                  </div>
                  <div className="item">
              <h1>{props.weather.wind.speed}</h1>
                <span>Wind</span>
                  </div>
                  <div className="item">
              <h1>{sunrise}</h1>
                <span>Sunrise</span>
                  </div>
                  <div className="item">
              <h1>{minTemp}</h1>
                <span>Low</span>
                  </div>
                  <div className="item">
              <h1>{props.weather.main.humidity}</h1>
                <span>Humidity</span>
                  </div>
                  <div className="item">
              <h1>{sunset}</h1>
                <span>Sunset</span>
                  </div>
              </div>
                </div>
             
              <div className="forecastContainer">
                  <div className="row">
                  {array.map((ob,i)=>{
                     return <div className=" col-md-1 forecastBox" key={i} onClick={()=>show(i)}>
                     <h5>{props.forecast.list[i].dt_txt}</h5>
                  {(parseFloat(props.forecast.list[i].main.temp-273.15)>30)?<i className="bi bi-brightness-high"></i>:<i className="bi bi-cloud-sun"></i>}
                    <h2>{parseFloat(props.forecast.list[i].main.temp-273.15).toFixed(2)}<sup>o</sup></h2>
                   </div>
                      })}
                  </div>
                </div>
           
           
            </div>
        </div>
    )}
    else{
        return <div className="loader">
       <img src={loader}/>
        </div>
    }
}
export default connect(mapStateToProps)(Dashboard);