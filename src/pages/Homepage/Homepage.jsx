import React from "react";
import { Container, Row, Col } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import AddNewUserForm from "./AddNewUserForm/AddNewUserForm";
import UserList from "./User/UserList/UserList";
export default function Homepage() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.value);
    return (
        <div>
            <Row>
                <Col
                    m={4}
                    s={12}
                    style={{ padding: "0.5rem" }}
                    className="z-depth-1"
                >
                    <AddNewUserForm></AddNewUserForm>
                </Col>
                <Col m={8} s={12} style={{ padding: "0.5rem" }}>
                    <div className="z-depth-1">
                        <UserList users={users}></UserList>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
