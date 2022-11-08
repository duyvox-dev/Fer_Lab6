import React from "react";
import Contact from "../../../../components/Contact/Contact";
export default function AddNewContactModal({
    toggleModal = () => {},
    isOpen = false,
    handleSubmit = () => {},
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
                                Contact Us
                            </h4>
                            <div>
                                <Contact
                                    toggleModal={toggleModal}
                                    handleSubmit={handleSubmit}
                                ></Contact>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a
                                href="#"
                                className="modal-close red-text"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleModal();
                                }}
                            >
                                Close
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
