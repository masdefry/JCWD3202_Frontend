Hello, JCWD3202!

1.  How to Install NextJS Latest Version (> Version 13)

                npx create-next-app@latest project-name

                - Would you like to use TypeScript? No / Yes

                - Would you like to use ESLint? Yes

                - Would you like to use Tailwind CSS? Yes

                - Would you like to use `src/` directory? Yes

                - Would you like to use App Router? Yes

                - Would you like to customize the default import alias (@/*)? Yes

                - What import alias would you like configured? @/*

2.  Install Dependencies

                npm i axios react-icons

                npm i formik yup @types/yup

                npm i -D daisyui

3.  How to Setup DaisyUI?

                See Documentation Here: https://daisyui.com/docs/install/

4.  How to Run NextJS Project?

                npm run dev

5.  Using JSON-SERVER as Fake API

        0. Install JSON-SERVER (Install on Global/System Computer)

                npm i -g json-server

        1. Create New Directory `db` and New File `db.json` Inside Your React Project

        2. Running JSON-SERVER on Your Terminal CMD. Makesure Your Terminal Already Inside `db` Directory

                json-server --watch db.json --port 5000

6.  How to Create Form Validation using Formik & Yup?

        - Create Validation Schema

                import * as Yup from 'yup';

                export const registerSchema = Yup.object().shape({
                    username: Yup.string().required('Username must be filled'),
                    email:Yup.string().email('Email invalid').required('Email must be filled'),
                    password: Yup.string().required('Password must be filled')
                })

        - Wrap Your Input and Submit Button with Formik Component. Also Import and Use Your
          Validation Schema

                <Formik
                    initialValues={{
                        username: ''
                    }}

                    validationSchema={registerSchema}

                    onSubmit={(values) => {
                        `Call HTTP Post Function`
                    }}
                >
                    <Form className='flex flex-col items-center gap-3 p-10 w-full'>
                        <label className='form-control w-full max-w-xs'>
                            <Field name='username' type='text' placeholder='Username' className='input input-bordered w-full max-w-xs rounded-none' />
                            <ErrorMessage component={'div'} className='text-red-500' name='username' />
                        </label>
                        <label className='form-control w-full max-w-xs'>
                            <Field name='email' type='text' placeholder='Email' className='input input-bordered w-full max-w-xs rounded-none' />
                            <ErrorMessage name='email' />
                        </label>
                        <label className='form-control w-full max-w-xs'>
                            <Field name='password' type='text' placeholder='Password' className='input input-bordered w-full max-w-xs rounded-none' />
                            <ErrorMessage name='password' />
                        </label>
                        <button className='btn bg-black text-white rounded-none w-full max-w-xs'>
                            Create Account
                        </button>
                    </Form>
                </Formik>

7.  How to Create `Route API` in Next.js >14 using PostgreeSql as Database with Prisma ORM? - Login into Supabase > Create New Organization > Create New Project

        - Install Prisma ORM:

                        1. npm i prisma @prisma/client bcrypt

                        2. npx prisma init

        - Setup Prisma ORM:

                        1. Create Model on File `schema.prisma`:

                                // This is your Prisma schema file,
                                // learn more about it in the docs: https://pris.ly/d/prisma-schema

                                // Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
                                // Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

                                generator client {
                                    provider = "prisma-client-js"
                                }

                                datasource db {
                                    provider = "postgresql"
                                    url      = env("DATABASE_URL")
                                    directUrl = env("DIRECT_URL")
                                }

                                model User{
                                    id        String      @id @default(uuid())
                                    username  String
                                    password  String
                                    email     String
                                    role      RoleUser    @default(STAFF)
                                }

                                enum RoleUser{
                                    STAFF
                                    MANAGER
                                }

                        2. Add `DATABASE_URL` and `DIRECT_URL` from Supabase to `.env` File

                        3. Migrate:

                                npx prisma migrate dev --name add_model_user

        - Create Directory `api` Inside `app` Directory:

                        `/app/api`

        - Create New Directory Inside `api` Directory:

                        `/app/api/register`

        - Create New File Inside `/app/api/register/` with Name `route.ts`

        - Write This Code Inside `app/api/register/route.ts`:

                        import { NextRequest, NextResponse } from 'next/server';
                        import { PrismaClient } from '@prisma/client';
                        const prisma = new PrismaClient();

                        export async function POST(req: NextRequest) {
                            try{
                                const {username, password, email, role} = await req.json();

                                const createdUser = await prisma.user.create({
                                    data: {
                                        username,
                                        password,
                                        email,
                                        role
                                    }
                                })

                                return NextResponse.json(createdUser, { status: 201, statusText: 'Register user success' });
                            }catch(error){
                                if (error instanceof Error) {
                                    return NextResponse.json({ error: error.message }, { status: 500 });
                                } else {
                                    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
                                }
                            }
                        }
