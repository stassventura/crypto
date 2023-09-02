"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import RegistrationForm from '@/components/Auth/RegistrationForm';

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [tokenInvalid, setTokenInvalid] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(false)
  const [success, setSuccess] = useState('');
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const emailUrl = searchParams.get('email')
  

  useEffect(() => {
    
    if(token && emailUrl){
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register/verify`, {
          token, email: emailUrl
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          if(res.data.status === 400){
            return setTokenInvalid('The registration session has expired or the link is invalid. Please try again.')
          }
          if(res.data.status === 200){
            setIsTokenValid(true)
          }
        }).catch(err => {
          console.error(err);
        });
      }
  }, [token, emailUrl, router])

  useEffect(() => {
    if(error !== ''){
      setTimeout(() => {
        setError('')
      }, 2000);
    }
  }, [error])


  const handleSubmit = (e: any) => {
    e.preventDefault();
  
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register/start`, {
      email
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if(res.data.status === 400){
        return setError('Email already in use')
      }
      if(res.data.status === 200){
        setError('')
        setSuccess('Successfully sent. Please check your email to confirm.')
        setTimeout(() => {
          router.push('/')
        }, 1000);
      }
      
    })
    .catch(err => {
      setError("An error occurred while sending mail. Please try again.");
    });
  
  };
  

  return (
    <>
    <div className='auth-wrapper'>
      {!token && (
        <div className="auth-container">
        <h2>Welcome to BitList!</h2>
        <h3>To continue enter your email and follow the instructions</h3>
        

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
          <button type="submit">Continue</button>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        </form>
      </div>
      )}
      {token && tokenInvalid.length > 0 &&(
        <div className='auth-container'>
        <h2>{tokenInvalid} </h2>

        </div>
      )}
      {isTokenValid && emailUrl ? (<RegistrationForm email={emailUrl}/>): null}
    </div>
    </>
  )
}

export default Register;
