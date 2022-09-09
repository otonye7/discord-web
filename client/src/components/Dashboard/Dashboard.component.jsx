import { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./Sidebar/Sidebar.component";
import FriendsSideBar from "./FriendsSidebar/FriendsSidebar.component";
import Messenger from "./Messenger/Messenger.component";
import AppBar from "./AppBar/AppBar.component";
import { connectWithSocketServer } from "../RealtimeCommunication/socketConnection";

const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex"
})

const Dashboard = () => {

    useEffect(() => {
        const userDetails = localStorage.getItem("discord");
        if(userDetails){
            connectWithSocketServer(JSON.parse(userDetails))
        }
    }, [])

    return (
        <Wrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />  
        </Wrapper>
    )
}
export default Dashboard;