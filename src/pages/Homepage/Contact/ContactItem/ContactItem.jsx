import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Icon, TextInput, Dropdown } from "react-materialize";
import "./ContactItem.scss";
import { updateMessage, deleteContact } from "../../../../redux/contactSlice";
import EditMessageForm from "./EditMessageForm/EditMessageForm";

export default function ContactItem({ contact }) {
    const [edditing, setEditting] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };
    const handleUpdate = (newMessage) => {
        dispatch(updateMessage({ ...contact, message: newMessage }));
    };
    return (
        <div className="contact__item">
            <div>
                <div className="contact__item-info">
                    <span className="contact__item-name">
                        <Icon>account_circle</Icon> <span>{contact?.name}</span>
                    </span>
                    <div className="contact__item-subInfo">
                        <span className="contact__item-email">
                            <b>Email:</b> {contact?.email}
                        </span>
                        <span className="contact__item-phone">
                            <b>Phone:</b> {contact?.phone}
                        </span>
                    </div>
                </div>
                <div className="contact__item-message">
                    {!edditing ? (
                        <span className="contact__item-message-text">
                            {contact?.message}
                        </span>
                    ) : (
                        <EditMessageForm
                            defaultMessage={contact?.message}
                            handleUpdate={handleUpdate}
                            closeForm={() => {
                                setEditting(false);
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="contact__item-action">
                <Dropdown
                    id="Dropdown_8"
                    options={{
                        alignment: "left",
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250,
                    }}
                    trigger={<Icon>more_vert</Icon>}
                >
                    <div
                        className="dropdown__item"
                        onClick={() => {
                            setEditting(true);
                        }}
                    >
                        <span>Edit</span>
                    </div>
                    <div
                        className="dropdown__item"
                        onClick={() => {
                            handleDelete();
                        }}
                    >
                        <span>Delete</span>
                    </div>
                </Dropdown>
            </div>
        </div>
    );
}
