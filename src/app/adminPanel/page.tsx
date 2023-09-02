"use client"
import React,  { useEffect, useState }  from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/redux/store';
import axios from 'axios';
import Image from 'next/image';
interface CryptoData {
    asset: string;
    display: boolean;
    symbol: string
  }

const AdminPanel = () => {
    const isAuth = useSelector((state: RootState) => state.User.isAuth);
    const user = useSelector((state: RootState) => state.User.user);
    const [asset, setAsset] = useState('')
    const [symbol,setSymbol] = useState('')
    const [isFormAddActive, setIsFormAddActive] = useState(false)
    const [isFormRemoveActive, setIsFormRemoveActive] = useState(false)
    const isLoading = useSelector((state: RootState) => state.User.isLoading);
    const [emailTransfer, setEmailTransfer] = useState('')
    const [amount, setAmount] = useState('')
    const [cryptoData, setCryptoData] = useState<{ [pair: string]: CryptoData }>({});
    const [errorInAddingCrypto,setErrorInAddingCrypto] = useState('')
    const [transferError, setTransferError] = useState('')
    const [transferSuccess, setTransferSuccess] = useState('')
    const [emailDelete, setEmailDelete] = useState('')
    const [deleteUserError, setDeleteUserError] = useState('')
    const [deleteUserSuccess, setDeleteUsetSuccess] = useState('')
    const fetchCrypto = () =>{
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/cryptoList`).then((res)=>{
            console.log(res.data)
            setCryptoData(res.data)
        })
    }
    useEffect(() => {
        if(errorInAddingCrypto !== ''){
            setTimeout(() => {
                setErrorInAddingCrypto('')
            }, 1000);
        }
        if(transferError !== ''){
            setTimeout(() => {
                setTransferError('')
            }, 1000);
        }
        if(transferSuccess !== ''){
            setTimeout(() => {
                setTransferSuccess('')
            }, 1000);
        }
        if(deleteUserError !== ''){
            setTimeout(() => {
                setDeleteUserError('')
            }, 1000);
        }
        if(deleteUserSuccess !== ''){
            setTimeout(() => {
                setDeleteUsetSuccess('')
            }, 1000);
        }
    }, [errorInAddingCrypto, transferError, transferSuccess, deleteUserError, deleteUserSuccess])
    
    useEffect(() => {
        fetchCrypto()
    }, [])
    

    if(!isLoading){
        if(!isAuth || user?.role !== 'admin'){
            return (
            <div className='admin-panel-wrapper'>
                <div className="container adminPanel">
                     <h2 className='title'>You do not have permission to view this page</h2>
                </div>
            </div>)
        }
    }

    const handleAddCryptoSubmit = (e: any) =>{
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/addCrypto`, {
           asset: asset,
           symbol: symbol
        }).then((res) => {
            fetchCrypto()
            setAsset('')
            setSymbol('')
        }).catch((error)=>{
            if (error.response && error.response.status === 409) {
                console.log(error.response.data); 
                setErrorInAddingCrypto(error.response.data)
                setAsset('')
                setSymbol('')
            }
        })

        console.log(asset, symbol)
    }
    const handleRemoveCryptoSubmit = (e: any) =>{
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/removeCrypto`, {
           asset: asset,
           symbol: symbol
        }).then((res) => {
            console.log(res.data);
            fetchCrypto()
            setAsset('')
            setSymbol('')
        })

        console.log(asset, symbol)
    }
    const transferMoney = (e: any) =>{
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/transferMoney`, {
           email: emailTransfer,
           currency: symbol,
           amount: amount
        }).then((res) => {
            console.log(res.data);
            if(res.data.status !== 200){
                setTransferError(res.data.message)
                setEmailTransfer('')
                setSymbol('')
                setAmount('')
            } else{
                setTransferSuccess(res.data.message)
                setEmailTransfer('')
                setSymbol('')
                setAmount('')
            }
        })

        console.log(emailTransfer, symbol, amount)
    }
    const deleteUser = (e: any) => {
        e.preventDefault();
        axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/deleteUser`, {
            data: {
                email: emailDelete
            }
        })
        .then(response => {
            console.log(response.data)
            setDeleteUsetSuccess(response.data)
        })
        .catch(error => {
            setDeleteUserError(error.response.data)
        });
        console.log(emailDelete)

    }
    
  return (
    <div className='admin-panel-wrapper'>
        <div className="container adminPanel">
            <h2 className='title'>Admin Panel</h2>
        <p className='list'>Available cryptocurrencies:</p>
        <div className="cryptolist">
        {Object.values(cryptoData).filter(item=>item.display === true).map((item: CryptoData) => {
            return (
                <div key={item.asset} className='cryptoItem'>
                    <Image src={`/images/crypto-icons/${item.symbol}.svg`} alt={`${item.asset}`} width={30} height={30}/>
                    {item.symbol}
                </div>
            );
        })}
        </div>
        <div className="actions">
        <div className={`cryptoItem ${isFormAddActive ? 'active' : ''}`}  onClick={()=>{
            setIsFormAddActive(!isFormAddActive),
            setIsFormRemoveActive(false)}}>
            <div className="plus">
                +
            </div>
            Add
        </div>
        <div className={`cryptoItem ${isFormRemoveActive ? 'active' : ''}`} onClick={()=>{
            setIsFormAddActive(false),
            setIsFormRemoveActive(!isFormRemoveActive)}}>
            <div className="plus">
                -
            </div>
            Remove
        </div>
        </div>
        
        {isFormAddActive && (
            <div className="form-add-crypto">
            <form onSubmit={handleAddCryptoSubmit}>
                <input 
                type="text" 
                placeholder='asset(Bitcoin)'  
                required
                value={asset}
                onChange={(e) => setAsset(e.target.value)} /> 

                <input 
                    type="text" 
                    placeholder='currency(btc)' 
                    required 
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)} /> 
                <button type="submit" className='addNewCryptoBtn'>Add new Crypto</button>

            </form>
            {errorInAddingCrypto.length > 0 && <p className='error'>{errorInAddingCrypto}</p>}

            </div>
        )}
        {isFormRemoveActive && (
            <div className="form-add-crypto">
            <form onSubmit={handleRemoveCryptoSubmit}>
                <input 
                type="text" 
                placeholder='asset(Bitcoin)'  
                required
                value={asset}
                onChange={(e) => setAsset(e.target.value)} /> 

                <input 
                    type="text" 
                    placeholder='currency(btc)' 
                    required 
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)} /> 
                <button type="submit" className='addNewCryptoBtn'>Remove Crypto</button>

            </form>
            </div>
        )}
       
        <p className='list'>Removed cryptocurrencies:</p>
        <div className="cryptolist">
        {Object.values(cryptoData).filter(item=>item.display === false).map((item: CryptoData) => {
            return (
                <div key={item.asset} className='cryptoItem hided'>
                    <Image src={`/images/crypto-icons/${item.symbol}.svg`} alt={`${item.asset}`} width={30} height={30}/>
                    {item.symbol}
                </div>
            );
        })}
        </div>
        <p className='list'>Transfer Money:</p>
        <div className="form-transfer-money">
            <form onSubmit={transferMoney}>
                <input 
                type="email" 
                placeholder='email'  
                required
                value={emailTransfer}
                onChange={(e) => setEmailTransfer(e.target.value)} /> 
                <input 
                    type="text" 
                    placeholder='currency(btc)' 
                    required 
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)} /> 
                <input 
                    type="number" 
                    placeholder='amount' 
                    required 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} /> 
                    <button type="submit" className='transerBtn'>Send</button>
                </form>
            </div>
            {transferError.length > 0 && <p className='error'>{transferError}</p>}
            {transferSuccess.length > 0 && <p className='success'>{transferSuccess}</p>}

            <p className='list'>Delete User:</p>
            <div className="delete-user-form">
            <form onSubmit={deleteUser}>
                <input 
                type="email" 
                placeholder='email'  
                required
                value={emailDelete}
                onChange={(e) => setEmailDelete(e.target.value)} /> 

                <button type="submit" className='deleteUserBtn'>Delete</button>
                </form>
            </div>
            {deleteUserError.length > 0 && <p className='error'>{deleteUserError}</p>}
            {deleteUserSuccess.length > 0 && <p className='success'>{deleteUserSuccess}</p>}
        </div>
    </div>
  )
}

export default AdminPanel
