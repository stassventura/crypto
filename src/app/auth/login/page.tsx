"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Cookies from 'js-cookie';
import { setUser, setIsAuth } from '@/redux/slices/UserSlice';
import Head from 'next/head';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const isAuth = useSelector((state: RootState) => state.User.isAuth);


  useEffect(() => {
    if(isAuth){
      router.push('/')
    }
  }, [isAuth, router])

  useEffect(() => {
    if(error !== ''){
      setTimeout(() => {
        setError('')
      }, 2000);
    }
  }, [error])

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`, {email, password}).then((res)=>{
      if(res.data.status === 401){
        setError('Incorrect login or password')
      }
      if(res.data.status === 200){
        Cookies.set('token', res.data.token);
        setSuccess('Authorization successful')
        setEmail('')
        setPassword('')
        setTimeout(() => {
          dispatch(setUser(res.data.user))
          dispatch(setIsAuth(true))
          router.push('/')
      }, 1000);
      }
    }).catch((err)=>console.error(err))
   
   
  };
  return (
    <>
    <Head>
      <title>Login | BitList</title>
      <meta name="description" content="Login on BitList and start trading today" />
    </Head>
    <div className='auth-wrapper'>
      <div className="auth-container">
      <h2>Welcome back!</h2>
      <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                onFocus={()=>setError('')}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onFocus={() => setError('')}
            />
          </div>
          <button type="submit">Login</button>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        </form>
      </div>
    </div>
    </>
  )
}

export default Login
