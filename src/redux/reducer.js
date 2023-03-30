import { AUMENTAR_CONTADOR, GET_APARTAMENTOS, GET_DETAIL_APARTAMENTO } from "./actions";


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

        case GET_DETAIL_APARTAMENTO:
            return {
                ...state,
                apartamento: action.payload
            }

        default:
            return { ...state }
    }

}

export default reducer;