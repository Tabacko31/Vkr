import './login.css'
import { Input } from '../../components/input'
import { Button } from '../../components/button/button'
import { useNavigate } from 'react-router'
import Close from '../../assets/xmark-solid.svg'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { loginFunc } from '../../redux/features/user/userSlices'

export const Login = () => {
    const [user,setUser]=useState({email:'',password:''})
    const nav=useNavigate()
    const dispatch=useDispatch()
    const getUser=()=>{
        console.log(user)
        dispatch(loginFunc (user))
    }
    return <div className="login">
        <div className='login-form'>
            <div className='close-icon' onClick={()=>nav('/products')}>
               <img src={Close} alt="" />
            </div>
            <div className="login-form-title">
                Войти
            </div>
            <div className="login-form-label">Почта:</div>
            <Input value={user.email} setValue={e=>{setUser({...user,email:e.target.value})}}/>
            <div className="login-form-label">Пароль:</div>
            <Input value={user.password} setValue={e=>{setUser({...user,password:e.target.value})}} />
            <Button name='Войти' onClick={getUser}/>
            <div className='auth-router' onClick={()=>nav('/signup')}>Нет аккаунта?</div>
        </div>
    </div>
}