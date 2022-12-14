import uuid from "react-uuid";

const initialState = {

    isLoading: false,
    user: JSON.parse(localStorage.getItem('user')),

    conversation: {},
    conversations: JSON.parse(localStorage.getItem('conversations'))
}




export const chatsReducers = (state = initialState, action) => {
    switch (action.type) {

        case "LOGINUSER":
            const conversations= [
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
                        },]
                }
            ]
            return {
                ...state,
                user: localStorage.setItem('user',JSON.stringify(action.payload)),
                user: localStorage.setItem("conversations", JSON.stringify(conversations))
            }

        case "VIEWUSERCHAT":

            return {
                ...state,
                isLoading: false,
                chats: state.conversations.filter(item => item.id === action.payload)[0]
            }

        case "ADDCHAT":
            
        const newchat = state.conversations.filter(item => item.id === action.payload.receiver)[0];
        newchat.chatsList.push(action.payload.content);
        localStorage.setItem("conversations", JSON.stringify(state.conversations))
        return {
            ...state,
            chats:newchat
        }

        default:
            return state;
    }
}