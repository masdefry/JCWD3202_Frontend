'use client';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { createTodoSchema } from '@/features/formik-yup/schemas/createTodoSchema';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IFormikValues{
    activity: string, 
    activityPlace: string
}

export default function FormikYupPage(){
    const [activities, setActivities] = useState([])

    const handlePostActivity = async({activity, activityPlace}: IFormikValues) => {
        try {
            await axios.post('http://localhost:5000/activities', {activity, activityPlace})
            alert('Create Activity Success!')
            handleGetActivity()
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetActivity = async() => {
        try {
            const response = await axios.get('http://localhost:5000/activities')
            setActivities(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetActivity()
    }, [])

    if(activities.length === 0) return <h1>Loading...</h1>

    return(
        <>
            <Formik
                initialValues={{
                    activity: '',
                    activityPlace: ''
                }}
                validationSchema={createTodoSchema}
                onSubmit={(values: IFormikValues) => {
                    handlePostActivity(
                        {
                            activity: values.activity, 
                            activityPlace: values.activityPlace
                        }
                    )
                }}
            >
                <Form>
                    <Field type='text' name='activity' placeholder='Type your activity' className='input input-bordered w-full max-w-xs' />
                    <ErrorMessage name='activity' component={'p'} className='text-red-500 text-xs' />
                    <Field type='text' name='activityPlace' placeholder='Type your activity place' className='input input-bordered w-full max-w-xs' />
                    <ErrorMessage name='activityPlace' component={'p'} className='text-red-500 text-xs' />
                    <button type='submit' className='btn bg-green-700 text-white'>Submit</button>
                </Form>
            </Formik>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Activity</th>
                        <th>Activity Place</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            activities?.map((activity: IFormikValues, index) => {
                                return(
                                    <tr>
                                        <th>1</th>
                                        <td>{activity.activity}</td>
                                        <td>{activity.activityPlace}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}