import React from "react";
import { Container, Row, Col } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import AddNewUserForm from "./AddNewUserForm/AddNewUserForm";
import UserList from "./User/UserList/UserList";
import ContactList from "./Contact/ContactList/ContactList";
import { Button } from "react-materialize";
import useModal from "../../hooks/useModal";
import AddNewContact from "./Contact/AddNewContact/AddNewContactModal";
import { addContact } from "../../redux/contactSlice";
export default function Homepage() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contact.value);
    const { toggleModal, modalVisible } = useModal();
    const handleSubmitNewContact = (contactData) => {
        dispatch(addContact(contactData));
    };
    return (
        <Container>
            <AddNewContact
                toggleModal={toggleModal}
                isOpen={modalVisible}
                handleSubmit={handleSubmitNewContact}
            ></AddNewContact>
            <div style={{ margin: "1rem 0" }}>
                <Button
                    className="blue darken-1"
                    node="button"
                    waves="light"
                    onClick={() => {
                        toggleModal();
                    }}
                >
                    Add new contact
                </Button>
            </div>
            <ContactList contacts={contacts}></ContactList>
            {/* <Row>
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
            </Row> */}
        </Container>
    );
}
