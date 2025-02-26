'use client';
import { HiOutlineMail } from 'react-icons/hi';
import { TbLockPassword } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useState } from 'react';

export default function RegisterPage() {
  return (
    <>
      <section className='flex flex-col items-center py-10'>
        <div className='w-96 flex flex-col items-center gap-3'>
          <h1 className='text-2xl font-bold'>Register User</h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
              role: '',
            }}
            // validationSchema={authRegisterSchema}
            onSubmit={(values, { resetForm }) => {
            }}
          >
            <Form className='w-full flex flex-col gap-3'>
              <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
                <HiOutlineMail />
                <Field
                  name='email'
                  type='text'
                  className='grow'
                  placeholder='Type your email'
                />
              </label>
              <ErrorMessage
                name='email'
                component={'div'}
                className='text-red-500 mt-[-10px] text-sm font-light'
              />
              <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
                <TbLockPassword />
                <Field
                  name='password'
                  type='password'
                  className='grow'
                  placeholder='Type your password'
                />
              </label>
              <ErrorMessage
                name='password'
                component={'div'}
                className='text-red-500 mt-[-10px] text-sm font-light'
              />
              <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
                <FaRegUserCircle />
                <Field
                  name='name'
                  type='text'
                  className='grow'
                  placeholder='Type your name'
                />
              </label>
              <ErrorMessage
                name='name'
                component={'div'}
                className='text-red-500 mt-[-10px] text-sm font-light'
              />
              <Field
                as='select'
                name='role'
                className='select select-bordered rounded-full w-full text-gray-300'
              >
                <option
                  value=''
                  disabled
                >
                  User Role
                </option>
                <option value='STAFF'>STAFF</option>
                <option value='MANAGER'>MANAGER</option>
              </Field>
              <ErrorMessage
                name='role'
                component={'div'}
                className='text-red-500 mt-[-10px] text-sm font-light'
              />
              <button
                className='btn bg-green-700 text-white rounded-full w-full'
              >
                Register
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
}
