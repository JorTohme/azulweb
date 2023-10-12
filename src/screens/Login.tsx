import React, { useState } from 'react'

export default function Login (): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      const response = await fetch('http://192.168.1.94:3000/user/loginJWT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }).then(async res => await res.json())
      console.log(response)
    } catch (error: unknown) {
      setError(error as string)
    }
  }

  return (
    <div className='flex flex-col items-center h-screen'>
      <h1 className='
        md:text-8xl
        text-7xl
        text-blue-600
        font-bold
        mb-4
        tracking-tighter
      '>azulapp</h1>
      <div className='flex items-center justify-center mt-40'>
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
          <div className='mb-6'>
              <label className='block text-gray-500 font-bold mb-1 pr-4' htmlFor='email'>
                Email
              </label>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white'
                id='email'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
              />
          </div>
          <div className=' mb-6'>
              <label className='block text-gray-500 font-bold mb-1 pr-4' htmlFor='password'>
                Contraseña
              </label>
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
          <div className='md:flex md:items-center justify-center'>
            <button
              className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded'
              type='submit'
            >
              Iniciar sesión
            </button>
          </div>
          {error !== null && <p className='text-red-500 text-xs italic'>{error}</p>}
        </form>
      </div>
    </div>
  )
}
