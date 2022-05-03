import types from '../ActionType'
export default function (state=null,action)
{
 
    switch(action.type){
        case types.WEATHER_TYPE: return action.payload.weather
        default : return state
    }
}