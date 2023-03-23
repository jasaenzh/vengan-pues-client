export const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR";
export const GET_APARTAMENTOS = "GET_APARTAMENTOS"

export const aumentarContador = () => {
    return { type: AUMENTAR_CONTADOR };
}

export const getApartamentos = () => {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => dispatch({
                type: GET_APARTAMENTOS,
                payload: data
            }))
    }
}