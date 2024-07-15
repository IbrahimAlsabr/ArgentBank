import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import UserHeader from "../components/UserHeader/UserHeader";
import Account from "../components/Account/Account";
import SignIn from "../components/SignIn/SignIn";

const UserPage = () => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate("/login");
        } else {
            setUserName(auth.user.firstName + " " + auth.user.lastName);
        }
    }, [auth.user, auth.isAuthenticated, navigate]);

    return (
        <div className="App">
            <NavBar userName={userName} />
            {auth.isAuthenticated ? (
                <main className="main bg-dark">
                    <UserHeader userName={userName} />
                    <h2 className="sr-only">Accounts</h2>
                    <Account
                        title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        description="Available Balance"
                    />
                    <Account
                        title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        description="Available Balance"
                    />
                    <Account
                        title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        description="Current Balance"
                    />
                </main>
            ) : (
                <SignIn />
            )}
            <Footer />
        </div>
    );
};

export default UserPage;
