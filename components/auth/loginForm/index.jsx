'use client'
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form'


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({});

  const formSubmiter = () => {
    const formData = {
      email: watch('email'),
      password: watch('password'),
    }
    console.log(formData);
  }
  return (
    <>
      <section className=' container mx-auto flex justify-center items-center'>
        <form action="" onSubmit={handleSubmit(formSubmiter)} method="post" className=' w-[30rem] bg-zinc-100 p-6 rounded-md flex flex-col gap-10 m-12'>
            <div className=" flex justify-center items-center gap-2">
              <h1 className=' text-xl text-center text-blue-400'>ورود به حساب کاربری</h1>
              <Link href={'/register'} className=' bg-indigo-500 text-white p-2 rounded-md'>ثبت نام درسایت</Link>
            </div>
            <div className=" flex flex-col gap-2">
              <input type="email" placeholder='ایمیل راوارد کنید' autoComplete='off' className=' outline-none border-zinc-400 focus:border-orange-400 border-2 p-2 rounded-md'
                {
                ...register('email', {
                  required: true,
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  },
                  minLength: 11,
                })
                }
              />
              {
                errors.email && errors.email.type == 'required' && <div className=' text-rose-500 text-sm'> ایمیل  را واردکنید</div>
              }
              {
                errors.email && errors.email.type == 'pattern' && <div className=' text-rose-500 text-sm'>فرمت ایمیل صحیح نیست</div>
              }
              {
                errors.email && errors.email.type == 'minLength' && <div className=' text-rose-500 text-sm'>تعدادکارکترهای ایمیل کم است</div>
              }
            </div>

            <div className=" flex flex-col gap-2">
              <input type="password" placeholder='رمزعبور' autoComplete='off' className=' outline-none border-zinc-400 focus:border-orange-400 border-2 p-2 rounded-md'
                {
                ...register('password', {
                  required: true,
                  maxLength: 20,
                  minLength: 6
                })
                }
              />
              {
                errors.password && errors.password.type == 'required' && <div className=' text-rose-500 text-sm'>رمزعبور واردنشده است</div>
              }
              {
                errors.password && errors.password.type == 'maxLength' && <div className=' text-rose-500 text-sm'>رمزعبور بایدکمتراز20کارکترباشد</div>
              }
              {
                errors.password && errors.password.type == 'minLength' && <div className=' text-rose-500 text-sm'>رمزعبور  بایدبیشتراز6کارکترباشد</div>
              }

            </div>
            <button type='submit' className=' w-full bg-indigo-500 hover:bg-indigo-600 hover:text-white p-2 rounded-md transition-all duration-300'>ورود به حساب کابری</button>
        </form>
      </section>
    </>
  )
}

export default LoginForm
