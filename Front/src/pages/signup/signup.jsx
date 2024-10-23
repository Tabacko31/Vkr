import { Input } from '../../components/input'
import { Button } from '../../components/button/button'
import { useNavigate } from 'react-router'
import Close from '../../assets/xmark-solid.svg'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { signupFunc } from '../../redux/features/user/userSlices'
import { schema } from '../../helpers/yupSchema'

export const Signup = () => {

    const [user, setUser] = useState({ email: '', password: '' })
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [dataError, setDataError] = useState([]);
    const getUser = () => {
        schema.validate(user).then(() => {
            setDataError([]);
            console.log(user)
            dispatch(signupFunc(user))
            nav("/products")
        })
            .catch((error) => {
                setDataError(error.errors);

            });
    }
    return <div className="login">
        <div className='login-form'>
            <div className='close-icon' onClick={() => nav('/products')}>
                <img src={Close} alt="" />
            </div>
            <div className="login-form-title">
                Регистрация
            </div>
            <div className="login-form-label">Почта:</div>
            <Input value={user.email} setValue={e => { setUser({ ...user, email: e.target.value }) }} />
            <div className="login-form-label">Пароль:</div>
            <Input value={user.password} setValue={e => { setUser({ ...user, password: e.target.value }) }} />
            <div className="error">
                {dataError.map((i) => i)}
            </div>
            <Button name='Зарегестрироваться' onClick={getUser} />
            <div className='auth-router' onClick={() => nav('/login')}>Уже есть аккаунт?</div>
        </div>
    </div>
}