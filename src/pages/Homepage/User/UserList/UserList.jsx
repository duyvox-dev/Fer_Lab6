import React from "react";
import UserItem from "../UserItem/UserItem";

export default function UserList({ users }) {
    return (
        <>
            {users?.map((user) => {
                return <UserItem key={user.id} user={user} />;
            })}
        </>
    );
}
