import {Link, useNavigate} from 'react-router-dom';
import './login.css'
import { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from "../../App";

const Login = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const {setUsername, setToken} = useContext(AppContext);

    const handleLoginClick = (e) => {
        e.preventDefault();
        const info = {
            "login": login,
            "senha": senha
        };

        axios.post("https://feed-api-deploy.onrender.com/auth/login", info)
        .then(response => {
            setToken(response.data.token);
            setUsername(response.data.login);
            navigate('/feed')
        })
        .catch(error => {
            console.error(error);
            console.log(info);
        })
    }

    return (
        
        <div className='login'>
            <h1>Realizar login</h1>

            <form className='loginForm'>
            <label htmlFor='login' className='loginLabel'>Nome de usuário</label>
            <input type='text' id='login' className='loginInput' onChange={(e) => setLogin(e.target.value)}/>

            <label htmlFor='senha' className='loginLabel'>Senha</label>
            <input type='password' id='senha'  className='loginInput' onChange={(e) => setSenha(e.target.value)}/>

            <button type='submit' className='loginButton' onClick={(e) => handleLoginClick(e)}>Entrar</button>
            </form>

            <Link to={{pathname:'/register'}} className='linkRegister'>
                Ainda não se registrou? Clique aqui para criar um usuário
            </Link>

        </div>
    );
}

export default Login;