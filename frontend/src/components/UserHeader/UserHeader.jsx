import { useState } from "react";
import "./UserHeader.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../../services/auth";

const UserHeader = ({ userName }) => {
    const fN = useSelector((state) => state.auth.user.firstName);
    const lN = useSelector((state) => state.auth.user.lastName);

    const [editMode, setEditMode] = useState(false);

    const [firstName, setFirstName] = useState(fN);
    const [lastName, setLastName] = useState(lN);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        await dispatch(updateUserProfile(firstName, lastName));
        setEditMode(false);
    };

    const handleCancel = () => {
        setEditMode(false);
        setFirstName(fN);
        setLastName(lN);
    };

    return (
        <div className="header">
            {editMode ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                >
                    <div>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                        />
                    </div>

                    <div>
                        <button className="save-button" onClick={handleSave}>
                            Save
                        </button>
                        <button
                            className="cancel-button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h1>
                        Welcome back
                        <br />
                        {userName}!
                    </h1>
                    <button className="edit-button" onClick={handleEdit}>
                        Edit Name
                    </button>
                </>
            )}
        </div>
    );
};

export default UserHeader;
