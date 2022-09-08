import * as React from 'react';
import {  useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/userSlice';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    dispatch(logoutUser({
        data: null
    }))
    window.localStorage.removeItem("discord");
    navigate("/login")
    window.location.reload()
  }

  return (
    <div>
        <IconButton onClick={handleMenuOpen} style={{
            color: 'white'
        }}>
            <MoreVertIcon />
        </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownMenu;