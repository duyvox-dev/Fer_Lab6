import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextInput, Button } from "react-materialize";
import { useDispatch } from "react-redux";
import "./AddNewUserForm.scss";
import { addUser } from "../../../redux/userSlice";
export default function AddNewUserForm() {
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required."),
        username: Yup.string()
            .required("Required.")
            .matches(
                /^[a-z0-9_-]{1,15}$/,
                "Username must in lowwercase format and can not contain space"
            ),
    });
    const initialFormValue = {
        name: "",
        username: "",
    };
    // const formik = useFormik({
    //     initialValues: {
    //         name: "",
    //         username: "",
    //     },
    //     onSubmit: (values) => {},
    //     validationSchema: Yup.object({
    //         name: Yup.string().required("Required."),
    //         username: Yup.string()
    //             .required("Required.")
    //             .matches(
    //                 /^[a-z0-9_-]{3,15}$/,
    //                 "Username can not contain space"
    //             ),
    //     }),
    // });
    const handleAddNewUser = (data) => {
        console.log(data);
        dispatch(addUser(data));
    };
    return (
        <div className="user__form">
            <h3>Add new user</h3>{" "}
            <Formik
                initialValues={initialFormValue}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    handleAddNewUser(values);
                    actions.resetForm({
                        values: initialFormValue,
                    });
                    // same shape as initial values
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="name" placeholder="Name" label="Name" />
                        {errors.name && touched.name ? (
                            <p className="form__error-message">{errors.name}</p>
                        ) : null}
                        <Field
                            name="username"
                            placeholder="Username"
                            label="Username"
                        />
                        {errors.username && touched.username ? (
                            <p className="form__error-message">
                                {errors.username}
                            </p>
                        ) : null}

                        <Button
                            className="blue darken-1"
                            type="submit"
                            waves="light"
                        >
                            Add User
                        </Button>
                    </Form>
                )}
            </Formik>
            {/* <form onSubmit={formik.handleSubmit}>
                <TextInput label="Name" name="name"></TextInput>
                {formik.errors.name && (
                    <p className="form__error-message">{formik.errors.name}</p>
                )}
                <TextInput name="username" label="Username"></TextInput>
                {formik.errors.username && (
                    <p className="form__error-message">
                        {formik.errors.username}
                    </p>
                )}
                <Button className="blue darken-1">Add User</Button>
            </form> */}
        </div>
    );
}
