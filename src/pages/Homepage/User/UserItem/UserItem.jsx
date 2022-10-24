import React, { useState } from "react";
import { Button, Icon, TextInput } from "react-materialize";
import { useDispatch } from "react-redux";
import "./UserItem.scss";
import { updateUsername, deleteUser } from "../../../../redux/userSlice";
export default function UserItem({ user }) {
    const dispatch = useDispatch();
    const [newUsername, setnewUsername] = useState("");
    const handleUpdateUser = () => {
        if (newUsername != "") {
            dispatch(
                updateUsername({
                    ...user,
                    username: newUsername,
                })
            );
            setnewUsername("");
        }
    };
    const handleDeleteUser = () => {
        dispatch(deleteUser(user.id));
    };
    const handleUsernameInputChange = (e) => {
        setnewUsername(e.target.value);
        // console.log(e.target.value);
    };
    return (
        <div className="user__item">
            <div className="user__avatar">
                <Icon medium>account_circle</Icon>
            </div>
            <div className="user__info">
                <h5>{user.username}</h5>
                <p>{user.name}</p>
            </div>
            <div className="user__input">
                <TextInput
                    placeholder="Type new Username"
                    onChange={(e) => {
                        handleUsernameInputChange(e);
                    }}
                    value={newUsername}
                ></TextInput>
            </div>
            <div className="user__action">
                <Button
                    waves="light"
                    className="blue darken-1"
                    onClick={() => {
                        handleUpdateUser();
                    }}
                >
                    Update
                </Button>

                <Icon
                    onClick={() => {
                        handleDeleteUser();
                    }}
                    className="user__delete "
                >
                    delete
                </Icon>
            </div>
        </div>
    );
}
