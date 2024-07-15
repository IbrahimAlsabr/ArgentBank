import logo from "../../assets/img/argentBankLogo.png";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import UserProfile from "../userProfile/UserProfile";
import { useSelector } from "react-redux";

const NavBar = ({ userName }) => {
    const auth = useSelector((state) => state.auth);
    
    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
            </NavLink>
            <div>
                {auth.isAuthenticated ? (
                    <UserProfile name={userName} />
                ) : (
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
