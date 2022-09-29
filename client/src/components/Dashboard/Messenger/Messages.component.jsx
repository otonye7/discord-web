import { useRef, useEffect } from "react";
import { styled } from "@mui/system";
import MessageHeader from "./MessagesHeader.component";
import Message from "./Message.component";
import {  useSelector } from "react-redux";

const DUMMY_MESSAGES = [
    {
        _id: 1,
        content: "Hello",
        author: {
            username: "otonye7"
        },
        date: "25/09/2022",
        sameDay: false
    },
    {
        _id: 2,
        content: "Hello, once again",
        sameAuthor: true,
        author: {
            username: "otonye7"
        },
        date: "25/09/2022",
        sameDay: true
    },
    {
        _id: 3,
        content: "Please respond to me",
        sameAuthor: true,
        author: {
            username: "otonye7"
        },
        date: "26/09/2022",
        sameDay: false
    },
    {
        _id: 4,
        content: "Hello, from Miebaka",
        sameAuthor: false,
        author: {
            username: "miebaka7"
        },
        date: "26/09/2022",
        sameDay: true
    }
]

const MainContainer = styled("div")({
    height: "calc(100% - 60px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

const Messages = () => {
    const chosenName = useSelector((state) => state.chat);
    const messages = useSelector((state) => console.log(state))
    return (
        <MainContainer>
            <MessageHeader name={chosenName?.username} />
            {DUMMY_MESSAGES.map((message, index) => {
                return <Message 
                key={message._id} 
                content={message.content}
                username={message.author.username}
                sameAuthor={message.sameAuthor}
                date={message.date}
                sameDay={message.sameDay}
                />
            })}
        </MainContainer>
    )
}
export default Messages;