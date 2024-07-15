import { useState } from "react";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/auth";

const UserProfile = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    let name = auth.user.firstName + " " + auth.user.lastName;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        dispatch(logout());
        console.log("logged out!");
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar src="../../assets/img/man.png" alt={name} width="100px" />
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                {name}
            </span>
            <IconButton onClick={handleClick}>
                <ArrowDropDownIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default UserProfile;
