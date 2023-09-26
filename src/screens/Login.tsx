import React, { useState } from 'react'

export default function Login (): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<Error | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {

  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='w-full max-w-sm' onSubmit={handleSubmit}>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='email'>
              Email
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white'
              id='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(event) => { setEmail(event.target.value) }}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='password'>
              Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white'
              id='password'
              type='password'
              placeholder='******************'
              value={password}
              onChange={(event) => { setPassword(event.target.value) }
              }
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3' />
          <div className='md:w-2/3'>
            <button
              className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </div>
        {error && <p className='text-red-500 text-xs italic'>{error.message}</p>}
      </form>
    </div>
  )
}
