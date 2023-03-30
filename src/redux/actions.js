export const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR";
export const GET_APARTAMENTOS = "GET_APARTAMENTOS"
export const CLEAN_APARTAMENTOS = "CLEAN_APARTAMENTOS"
export const GET_DETAIL_APARTAMENTO = "GET_DETAIL_APARTAMENTO"

export const aumentarContador = () => {
    return { type: AUMENTAR_CONTADOR };
}

export const getApartamentos = () => {
    return function (dispatch) {
        // const apiURLocal = "http://localhost:3001/api/apartamentos"
        const apiURLWeb = "https://vengan-pues.onrender.com/api/apartamentos"

        fetch(apiURLWeb)
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

export const getApartamentoById = (id) => {

    return function (dispatch) {
        // const apiURLByIdLocal = `http://localhost:3001/api/apartamentos/${id}`
        const apiURLByIWeb = `https://vengan-pues.onrender.com/api/apartamentos/${id}`

        fetch(apiURLByIWeb)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: GET_DETAIL_APARTAMENTO,
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
