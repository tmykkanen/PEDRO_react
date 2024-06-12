import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required('Please enter your full name.'),
    email: yup.string().email().required(),
    age: yup.number().positive('Age must be positive.').integer('Age must be an integer.').min(18).required('Please enter your age.'),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')]).required(),
  })
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  })
  
  const onSubmit = (data: FieldValues) => {
    console.log('hello world')
    console.log(data)
  }

  const errorMsg = (message: string) => {
    return (
      <p className='alert alert-error'>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        {message}
      </p>
    )
  }

 return (
   <form action="" className='flex flex-col w-2/3' onSubmit={handleSubmit(onSubmit)}>
    <input className='input input-bordered' type="text" placeholder='Full Name...' {...register('fullName')}/>
    {errors.fullName && errorMsg(errors.fullName.message!)}
    <input className='input input-bordered' type="text" placeholder='Email...' {...register('email')}/>
    {errors.email && errorMsg(errors.email.message!)}
    <input className='input input-bordered' type="number" placeholder='Age...' {...register('age')}/>
    {errors.age && errorMsg(errors.age.message!)}
    <input className='input input-bordered' type="password" placeholder='Password' {...register('password')}/>
    {errors.password && errorMsg(errors.password.message!)}
    <input className='input input-bordered' type="password" placeholder='Confirm Password' {...register('confirmPassword')}/>
    {errors.confirmPassword && errorMsg(errors.confirmPassword.message!)}
    <input className='btn' type="submit" />
   </form>
 )
}

export default Form