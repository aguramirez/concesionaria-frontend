
export const autosReducer = (state = [], action) => {

    switch (action.type) {
        case 'addAuto':
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];
        case 'getDetail':
            return state.find(a => a.id == action.payload.id)
        case 'removeAuto':
            return state.filter(a => a.id !== action.payload)

        case 'updateAuto':
            return state.map(a => {
                if (a.id === action.payload.id) {
                    return {
                        ...action.payload,
                    };
                }
                return a;
            })
        case 'cargandoAutos':
            return action.payload;
        default:
            return state;
    }
}