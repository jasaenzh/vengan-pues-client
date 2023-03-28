import { AUMENTAR_CONTADOR, GET_APARTAMENTOS } from "./actions";


const initialState = {
    apartamentos: [],
    apartamento: {},
    contador: 0,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case AUMENTAR_CONTADOR:
            return {
                ...state,
                contador: state.contador + 1,
            }

        case GET_APARTAMENTOS:
            return {
                ...state,
                apartamentos: action.payload.docs
            }

        default:
            return { ...state }
    }

}

export default reducer;