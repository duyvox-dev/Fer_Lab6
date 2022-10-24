import React from "react";
import { useEffect } from "react";
import {
    Container,
    TextInput,
    Textarea,
    Icon,
    Button,
} from "react-materialize";
import "./Contact.scss";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useModal from "../../hooks/useModal";
import ContactModal from "./ContactModal/ContactModal";
import { useState } from "react";
const myInputComponent = (props) => {
    return <TextInput type="text" {...props}></TextInput>;
};
const myTextAreaComponent = (props) => {
    return <Textarea type="text" {...props}></Textarea>;
};
export default function Contact() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required."),
        email: Yup.string()
            .required("Required.")
            .email("Please type correct email format (email@domain.com)"),
        phone: Yup.string()
            .required("Required.")
            .matches(
                /^0\d{9}$/,
                "Please type correct phone number format (start with 0 and contain 10 digit)"
            ),
        message: Yup.string()
            .required("Required.")
            .min(10, "Must be 10 characters or more"),
    });
    const initialFormValue = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };
    const { modalVisible, toggleModal } = useModal();
    const [contactData, setContactData] = useState();
    useEffect(() => {
        document.title = "Contact Us";
    }, []);
    const handleSubmit = (contact) => {
        // e.preventDefault();
        setContactData(contact);
        toggleModal();
    };

    return (
        <>
            <ContactModal
                toggleModal={toggleModal}
                contactData={contactData}
                isOpen={modalVisible}
            ></ContactModal>
            <Container className="contact-container">
                <h3>Contact Us</h3>
                <div>
                    <Formik
                        initialValues={initialFormValue}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            // console.log(values);
                            handleSubmit(values);
                            // handleAddNewUser(values);
                            actions.resetForm({
                                values: initialFormValue,
                            });
                            // same shape as initial values
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field
                                    name="name"
                                    label="Your Name"
                                    as={myInputComponent}
                                ></Field>
                                {errors.name && touched.name ? (
                                    <p className="form__error-message">
                                        {errors.name}
                                    </p>
                                ) : null}
                                <Field
                                    name="phone"
                                    label="Your Phone"
                                    as={myInputComponent}
                                ></Field>
                                {errors.phone && touched.phone ? (
                                    <p className="form__error-message">
                                        {errors.phone}
                                    </p>
                                ) : null}
                                <Field
                                    name="email"
                                    label="Email"
                                    as={myInputComponent}
                                ></Field>
                                {errors.email && touched.email ? (
                                    <p className="form__error-message">
                                        {errors.email}
                                    </p>
                                ) : null}
                                <Field
                                    name="message"
                                    label="Your Message"
                                    as={myTextAreaComponent}
                                ></Field>
                                {errors.message && touched.message ? (
                                    <p className="form__error-message">
                                        {errors.message}
                                    </p>
                                ) : null}
                                <Button
                                    className="blue darken-1"
                                    large
                                    node="button"
                                    waves="light"
                                >
                                    Submit
                                    <Icon right>send</Icon>
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        </>
    );
}
