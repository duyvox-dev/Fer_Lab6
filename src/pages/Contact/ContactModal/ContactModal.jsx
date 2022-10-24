import React from "react";
import { Button } from "react-materialize";
export default function ContactModal({
    contactData = {},
    toggleModal = () => {},
    isOpen = false,
}) {
    return (
        <>
            {isOpen && (
                <div className="modal-show">
                    <div
                        // id="modal1"
                        className="modal"
                        style={{ display: "block", top: "30%" }}
                    >
                        <div className="modal-content">
                            <h4 style={{ textTransform: "capitalize" }}>
                                Thanks for contacting us
                            </h4>
                            <div>
                                <p>
                                    <b>Name: </b>
                                    {contactData.name}
                                </p>
                                <p>
                                    <b>Phone: </b>
                                    {contactData.phone}
                                </p>
                                <p>
                                    <b>Email: </b>
                                    {contactData.email}
                                </p>
                                <p>
                                    <b>Message: </b>
                                    {contactData.message}
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Button
                                className="blue darken-1"
                                large
                                node="button"
                                waves="light"
                                onClick={() => {
                                    toggleModal();
                                }}
                            >
                                Ok
                            </Button>
                            {/* <a
                                href="#"
                                className="modal-close "
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleModal();
                                }}
                            >
                                Close
                            </a> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
