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
import { Formik, Form, Field } from "formik";
import useModal from "../../hooks/useModal";
// import ContactModal from "./ContactModal/ContactModal";
import _ from "lodash";
const myInputComponent = (props) => {
    return <TextInput type="text" {...props}></TextInput>;
};
const myTextAreaComponent = (props) => {
    return <Textarea type="text" {...props}></Textarea>;
};
export default function Contact({
    toggleModal = () => {},
    handleSubmit = () => {},
}) {
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
    return (
        <>
            {/* <ContactModal
                toggleModal={toggleModal}
                contactData={contactData}
                isOpen={modalVisible}
            ></ContactModal> */}
            <Container className="contact-container">
                <div>
                    <Formik
                        initialValues={initialFormValue}
                        validationSchema={validationSchema}
                        validateOnChange={true}
                        onSubmit={(values, actions) => {
                            // console.log(values);
                            handleSubmit(values);
                            toggleModal();
                            // handleAddNewUser(values);
                            // actions.resetForm({
                            //     values: initialFormValue,
                            // });
                            // same shape as initial values
                        }}
                    >
                        {({ errors, touched, isValid }) => (
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
                                <div>
                                    <Button
                                        className="blue darken-1"
                                        node="button"
                                        waves="light"
                                        disabled={!isValid}
                                    >
                                        Submit
                                        <Icon right>done_all</Icon>
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        </>
    );
}
