import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuthContext } from '../contexts/AuthContext';

type Props = {}

interface LoginFormInput {
    username: string;
    password: string;
}

const LoginPage = (props: Props) => {
    const navigate = useNavigate();

    const { isLoggedIn, login } = useAuthContext();

    const { register, handleSubmit } = useForm<LoginFormInput>();

    const onSubmit = (values: LoginFormInput) => {
        console.log('values', values);

        login();
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }

    }, [isLoggedIn])


    return (
        <div className='grid items-center justify-center h-screen container mx-auto'>

            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">username</label>
                <input {...register('username', { required: true })} className='text-black' type="text" placeholder='enter your username' />

                <label>password</label>
                <input {...register('password', { required: true })} className='text-black' type="password" placeholder='enter your password' />

                <button type='submit' className='mt-4 bg-green-500'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage