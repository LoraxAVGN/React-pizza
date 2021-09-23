const initialState = {           // обязательные данные при инициализации
    items: [],
};

const pizzas = (state = initialState, action) =>{    // reducer, который принимает state и action и возвращает измененный state
    if(action.type === 'SET_PIZZAS'){
        debugger;
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}

export default pizzas;