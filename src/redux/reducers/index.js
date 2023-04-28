const initialState = {
    favourites: {
        list: [],
    },
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return {
              ...state,
                favourites: {
                  ...state.favourites,
                    list: [...state.favourites.list, action.payload],
                },
            }
        case 'REMOVE_FAVOURITE':
            return {
              ...state,
                favourites: {
                  ...state.favourites,
                    list: state.favourites.list.filter(item => item._id!== action.payload.id),
                },
            }
        default:
            return state
    }
}

export default mainReducer