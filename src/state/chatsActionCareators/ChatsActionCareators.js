
export const Conversations = (body) => {
    return async (dispatch) => {
        dispatch({
            type: "USERSLOADINGCHAT",
            // payload: {token: data.token, user: data.user}
        })
    }
}
