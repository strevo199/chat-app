
export const viewOneConversation = (id) => {

    return async (dispatch) => {
        dispatch({
            type: "VIEWUSERCHAT",
            payload: id
        })
    }
}
