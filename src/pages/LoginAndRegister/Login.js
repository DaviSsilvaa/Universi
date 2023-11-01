import { Link } from 'react-router-dom';
import './login.css'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState("");

    const handleLoginClick = (e) => {
        //para evitar carregamento ao clicar no botão. Remover depois
        e.preventDefault();
        const info = {
            "login": login,
            "senha": senha
        };

        axios.post("http://localhost:8080/auth/login", info)
        .then(response => {
            setToken(response.data.token);
            console.log("Token:" + token);
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