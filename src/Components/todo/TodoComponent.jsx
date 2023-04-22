import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {createTodoApi, retrieveTodoByIdApi, updateTodoApi} from "./api/TodoApiService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useAuth} from "../secruity/AuthContext";
import moment from "moment";

export default function TodoComponent() {
    const {id} = useParams();
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');

    const {username} = useAuth()

    const navigate = useNavigate();
    useEffect(
        () => retrieveTodo(id), [id]
    )

    function retrieveTodo(id) {
        if (id !== -1) {
            retrieveTodoByIdApi(id)
                .then(response => {
                    console.log(response)
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                })
                .catch(error => console.log(error))
        }
    }

    function onSubmit(values) {
        const todo = {
            id,
            username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        console.log(todo)

        if (id == -1) {
            console.log(todo)
            createTodoApi(username, todo)
                .then(() => {
                    navigate("/todos")
                })
                .catch(error => console.log(error))
        } else {
            updateTodoApi(id, todo)
                .then(() => {
                    navigate("/todos")
                })
                .catch(error => console.log(error))
        }


    }

    function validate(values) {
        const errors = {}
        if (values.description.length < 5) {
            errors.description = "Description at least 5 characters."
        }
        if (values.targetDate === '' || !moment(values.targetDate).isValid()) {
            errors.targetDate = "Target Date Required."
        }
        return errors

    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>

                <Formik
                    initialValues={{description, targetDate}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                >
                    {(props) => (
                        <Form>
                            <ErrorMessage name={"description"} component={"div"}
                                          className={"alert alert-warning"}></ErrorMessage>
                            <ErrorMessage name={"targetDate"} component={"div"}
                                          className={"alert alert-warning"}></ErrorMessage>

                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="input" className="form-control" name="description"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"></Field>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}