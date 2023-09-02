"use client"
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser, setIsAuth, setIsLoading } from '@/redux/slices/UserSlice';
const SessionHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/verifyToken`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        if(res.data.status === 403){
          dispatch(setIsLoading(false))
          return Cookies.remove('token');
        }
        if(res.data.status === 200 && res.data.user){
          dispatch(setUser(res.data.user))
          dispatch(setIsAuth(true))
          setTimeout(() => {
            dispatch(setIsLoading(false))
          }, 1000);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        dispatch(setIsLoading(false))
      });

    } else {
      setTimeout(() => {
        dispatch(setIsLoading(false))
      }, 1000);
    }
  }, [dispatch]);

  return null;
};

export default SessionHandler;
