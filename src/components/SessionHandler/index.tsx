"use client"
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setUser, setIsAuth, setIsLoading } from '@/redux/slices/UserSlice';
import LoadingPage from '../LoadingPage';
const SessionHandler = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.User.isLoading);

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

  return (
      <> 
        {isLoading &&  <LoadingPage/>}
      </>);
};

export default SessionHandler;
