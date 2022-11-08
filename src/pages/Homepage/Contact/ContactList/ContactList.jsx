import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.scss";
export default function ContactList({ contacts = [] }) {
    return (
        <div className="contact__list">
            <h5>Contact list</h5>
            {contacts?.map((contact, index) => {
                return <ContactItem key={index} contact={contact} />;
            })}
        </div>
    );
}
