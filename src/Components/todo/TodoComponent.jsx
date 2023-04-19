import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {retrieveTodoByIdApi} from "./api/TodoApiService";
import {Field, Form, Formik} from "formik";

export default function TodoComponent() {
    const {id} = useParams();
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');
    useEffect(
        ()=> retrieveTodo(id),[id]
    )
    function retrieveTodo(id) {
        retrieveTodoByIdApi(id)
            .then(response => {
                console.log(response)
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            })
            .catch(error => console.log(error))
    }

    function onSubmit(values){
        console.log(values)
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description,targetDate}} enableReinitialize={true} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
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