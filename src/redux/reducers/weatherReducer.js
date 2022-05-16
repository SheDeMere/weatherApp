const initialState = {
    weather: null,
    loading: false,
    error: false
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER_LOADING':
            return {
                ...state,
                loading: true
            }

        case 'GET_WEATHER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: false,
                weather: action.payload
            }

        case 'GET_WEATHER_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}