import { styled } from "@mui/system";
import SideBar from "./Sidebar/Sidebar.component";
import FriendsSideBar from "./FriendsSidebar/FriendsSidebar.component";
import Messenger from "./Messenger/Messenger.component";
import AppBar from "./AppBar/AppBar.component";

const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex"
})

const Dashboard = () => {
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