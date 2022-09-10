
export const viewOneConversation = (id) => {

    return async (dispatch) => {
        dispatch({
            type: "VIEWUSERCHAT",
            payload: id
        })
    }
}
export const addChat = (body) => {

    return async (dispatch) => {
        dispatch({
            type: "ADDCHAT",
            payload: body
        })
    }
}




export const loginUser = (body) => {

    return async (dispatch) => {
        dispatch({
            type: "LOGINUSER",
            payload: body
        })
    }
}
