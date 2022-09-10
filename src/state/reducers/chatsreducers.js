import uuid from "react-uuid";

const initialState = {

    isLoading: true,
    Conversations: [
        {
            id: uuid(),
            name: " Mark Benson",
            chatsList: [
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "me"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "client"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "client"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "me"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "client"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset  was popularised in the 1960s with the release of Letraset",
                    sender: "client"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "me"
                }]
        },
        {
            id: uuid(),
            name: " Solomon Doe",
            chatsList: [
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "me"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "client"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "client"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "me"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "client"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset  was popularised in the 1960s with the release of Letraset",
                    sender: "client"
                },
                {
                    id: uuid(),
                    content: " It was popularised in the 1960s with the release of Letraset",
                    sender: "me"
                }]
        },
    ]
}




export const chatsReducers = (state = initialState, action) => {
    switch (action.type) {
        case "USERSLOADINGCHAT":
            return {
                ...state,
                isLoading: true
            }
        // case "VIEWUSERCHAT":
        //
        //     return {
        //         ...state,
        //         isLoading: true,
        //
        //     }
        default:
            return state;
    }
}
