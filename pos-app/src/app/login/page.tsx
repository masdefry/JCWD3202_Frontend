'use client';
import Image from 'next/image';
import { LuShoppingCart } from 'react-icons/lu';
import { Formik, Form } from 'formik';

export default function LoginPage() {
  return (
    <section className='grid grid-cols-2 h-screen'>
      {/* Section-Left */}
      <section className='col-span-2 md:col-span-1 p-10'>
        {/* text: Smart POS */}
        <div className='flex gap-3 items-center text-pos-secondary'>
          <div className='p-3 rounded-full bg-gray-100'>
            <LuShoppingCart className='text-3xl bg-gray-100' />
          </div>
          <h1 className='font-bold text-xl'>Smart Point of Sale</h1>
        </div>
        {/* image */}
        <div className='flex justify-center'>
          <div className='relative w-[500px] h-[500px]'>
            <Image
              src='https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-4064.jpg?t=st=1740641608~exp=1740645208~hmac=8e26df4e1ec9dd4cee8052318f3c1abd6b5b47800a9d7e96edcf234a7aea50b5&w=900'
              alt='Point of Sales'
              fill
              className='object-cover'
            />
          </div>
        </div>
        {/* text: Description */}
        <div className='flex justify-center'>
          <h1 className='text-2xl max-w-[300px] text-center'>
            Manage sales, inventory and other transactions
          </h1>
        </div>
      </section>
      <section className='col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-gray-100 py-10'>
        {/* text: Welcome Back */}
        <div>
          <h1 className='text-3xl font-bold'>Welcome Back</h1>
          <p className='text-sm text-pos-gray'>Please sign in to continue</p>
        </div>
        {/* form: Formik, Form */}
        <div className='w-[50%] py-10'>
          <Formik>
            <Form>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>What is your email?</legend>
                <input
                  type='text'
                  className='input w-full'
                  placeholder='Type email here'
                />
                <p className='fieldset-label'>Optional</p>
              </fieldset>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>What is your password?</legend>
                <input
                  type='text'
                  className='input w-full'
                  placeholder='Type password here'
                />
                <p className='fieldset-label'>Optional</p>
              </fieldset>
              <button className='btn bg-pos-primary text-black w-full'>
                Sign In 
              </button>
            </Form>
          </Formik>
        </div>
        {/* button: Signup with Socmed */}
        <div></div>
        {/* text: Forgot Password */}
        <div></div>
      </section>
    </section>
  );
}
