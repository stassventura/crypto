"use client"
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import axios from 'axios'
import { setUser, setIsAuth } from '@/redux/slices/UserSlice';

interface Props{
    email: string 
}

const RegistrationForm = ({email}: Props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if(error !== ''){
          setTimeout(() => {
            setError('')
          }, 2000);
        }
      }, [error])

    const handleSubmit = (e: any) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          setError('Password mismatch');
          return;
        }
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register/createUser`, {
            email,
            name,
            password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res)=>{
            if(res.data.status === 200){
                Cookies.set('token', res.data.token);
                setSuccess('Registration completed successfully!')
                setName('')
                setPassword('')
                setConfirmPassword('')
                setTimeout(() => {
                    dispatch(setUser(res.data.user))
                    dispatch(setIsAuth(true))
                    router.push('/')
                }, 1000);
            }
          })
      };

  return (
    <div className="auth-container">
        <h2>Almost done!</h2>
        <h3>Fill out your profile</h3>
      <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          onFocus={() => setError('')}
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

      <div className="input-group">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          onFocus={() => setError('')}
        />
      </div>

      <button type="submit">Create</button>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
    </form>
    </div>
  )
}

export default RegistrationForm
