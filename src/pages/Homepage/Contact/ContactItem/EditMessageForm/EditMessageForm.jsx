import React from "react";
import "./EditMessageForm.scss";
import { Formik, Form, Field } from "formik";
import {
    Container,
    TextInput,
    Textarea,
    Icon,
    Button,
} from "react-materialize";
import * as Yup from "yup";
const myTextAreaComponent = (props) => {
    return <Textarea type="text" {...props}></Textarea>;
};
export default function EditMessageForm({
    defaultMessage = "",
    closeForm = () => {},
    handleUpdate = () => {},
}) {
    // work

    const validationSchema = Yup.object().shape({
        message: Yup.string()
            .required("Required.")
            .min(10, "Must be 10 characters or more"),
    });
    const initialFormValue = {
        message: defaultMessage,
    };
    return (
        <div className="editMessage__form">
            <Formik
                initialValues={initialFormValue}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    // console.log(values);
                    handleUpdate(values.message);
                    closeForm();
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
                            className="blue-grey lighten-5 black-text"
                            node="button"
                            waves="light"
                            onClick={() => {
                                closeForm();
                            }}
                            style={{ marginRight: "1rem" }}
                        >
                            Cancel
                            <Icon left>do_not_disturb</Icon>
                        </Button>
                        <Button
                            className="blue darken-1"
                            node="button"
                            waves="light"
                            disabled={!isValid}
                        >
                            Submit Edit
                            <Icon right>done_all</Icon>
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
