import { styled } from "@mui/system"; 
import FriendsListItem from "./FriendListItem.component";
import {  useSelector } from "react-redux";

const MainContainer = styled("div")({
    flexGrow: 1,
    width: "100%"
})

const checkOnlineUsers = (DUMMY_FRIENDS = [], onLineUsers = []) => {
   DUMMY_FRIENDS.forEach((f) => {
    if(onLineUsers.length > 0){
        const isUserOnline = onLineUsers.map((user) => user.data);
        // const isUseronline = isUserOnline.find((user) => user.map((u) => console.log(u)))
    }
    //    const isUserOnline = onLineUsers.find((user) => user.userId === f.id);
    //    f.isOnline = isUserOnline ? true : false
    })
     return DUMMY_FRIENDS
}


const FriendsList = () => {
    const DUMMY_FRIENDS = useSelector((state) => state.friends);
    const onLineUsers = useSelector((state) => state.onlineUser);  
    return (
        <MainContainer>
             {DUMMY_FRIENDS ? DUMMY_FRIENDS.map((f) => (
                <FriendsListItem 
                  key={f.id}
                  id={f.id}
                  username={f.username}
                  isOnline={f.isOnline}
                />
            )) : null } 
        </MainContainer>
    )
}
export default FriendsList