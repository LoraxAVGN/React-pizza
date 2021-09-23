const initialState = {           // обязательные данные при инициализации
    category: 0,
    sortBy: 'popular',
};

const filters = (state = initialState, action) =>{    // reducer, который принимает state и action и возвращает измененный state
    if(action.type === 'SET_SORT_BY'){
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    return state;
}

export default filters;