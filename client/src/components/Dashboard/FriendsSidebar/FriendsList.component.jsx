import { styled } from "@mui/system"; 
import FriendsListItem from "./FriendListItem.component";
import {  useSelector } from "react-redux";

const MainContainer = styled("div")({
    flexGrow: 1,
    width: "100%"
})

// const checkOnlineUsers = (DUMMY_FRIENDS = [], onLineUsers = []) => {
//    DUMMY_FRIENDS.forEach((f) => {
//     console.log(f)
//     if(onLineUsers.length > 0){
//         const isUserOnline = onLineUsers.map((user) => user.data);
//         const isUseronline = isUserOnline.find((user) => user.find((u) => u.userId === f.id));
//         f.isOnline = isUseronline ? true : false
//     }
//     //    const isUserOnline = onLineUsers.find((user) => user.userId === f.id);
//     })
//      return DUMMY_FRIENDS
// }


const FriendsList = () => {
    const DUMMY_FRIENDS = useSelector((state) => state.friends);
    // const onLineUsers = useSelector((state) => state.onlineUser);  
    // console.log(checkOnlineUsers(DUMMY_FRIENDS, onLineUsers))
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