import uuid from "react-uuid";

const initialState = {

    isLoading: false,
    conversation: {},
    conversations: [
        {
            id: "c886ef08z223",
            name: " Stephen Benson",
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
                    sender: "me"
                }]
        },
        {
            id: "c886ef08223",
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
                    sender: "me"
                }]
        }
    ]
}




export const chatsReducers = (state = initialState, action) => {
    switch (action.type) {

        case "VIEWUSERCHAT":
            return {
                ...state,
                isLoading: false,
                chats: state.conversations.filter(item => item.id === action.payload)[0]
            }

        case "ADDCHAT":
            
        const newchat = state.conversations.filter(item => item.id === action.payload.receiver)[0];
        newchat.chatsList.push(action.payload.content)
        console.log(newchat);



        return {
            ...state
        }

        default:
            return state;
    }
}
