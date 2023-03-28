export const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR";
export const GET_APARTAMENTOS = "GET_APARTAMENTOS"
export const CLEAN_APARTAMENTOS = "CLEAN_APARTAMENTOS"

export const aumentarContador = () => {
    return { type: AUMENTAR_CONTADOR };
}

export const getApartamentos = () => {
    return function (dispatch) {
        fetch("http://localhost:3001/api/apartamentos")
            .then((response) => response.json())
            .then((data) => dispatch({
                type: GET_APARTAMENTOS,
                payload: data
            }))
            .catch((error) => {
                console.log(error);
            });
    }
}

export const cleanApartamentos = () => {
    return { type: CLEAN_APARTAMENTOS };
}
