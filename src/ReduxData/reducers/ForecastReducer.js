import types from '../ActionType'
export default function (state=null,action)
{
    switch(action.type){
        case types.FORECAST_TYPE: return action.payload.forecast
        default : return state
    }
}