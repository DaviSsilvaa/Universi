import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './register.css'

const Register = () => {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [role, setRole] = useState("");
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegisterClick = (e) => {
        e.preventDefault();
      
        // Crie um objeto com os dados do usuário
        const userData = {
          login: login,
          senha: senha,
          role: role
        };
      
        // Envie os dados do usuário para o servidor (usando Axios, como no seu componente de login)
        axios.post("https://feed-api-deploy.onrender.com/auth/register", userData)
          .then(response => {
            setMessage('Usuário registrado com sucesso');
            // Você pode redirecionar o usuário para a página de login ou outra página, se desejar
            navigate('/')
          })
          .catch(error => {
            setMessage('Erro ao registrar o usuário. Tente novamente mais tarde.');
            console.error(error);
          });
      };

    return (
        
        <div className='register'>
            <h1 className='TextRegister'>Cadastro</h1>

            <form className='registerForm'>
                <label htmlFor='login' className='registerLabel'>Nome de usuário</label>
                <input type='text' id='login' className='registerInput' onChange={(e) => setLogin(e.target.value)}/>

                <label htmlFor='senha' className='registerLabel'>Senha</label>
                <input type='password' id='senha' className='registerInput' onChange={(e) => setSenha(e.target.value)}/>

                <label htmlFor='role' className='registerLabel'>Função</label>
                <input type='text' id='role' className='registerInput' onChange={(e) => setRole(e.target.value)}/>

                <button type='submit' className='registerButton' onClick={(e) => handleRegisterClick(e)}>Registrar</button>
            </form>
            <div className='btn-back'>
                <Link to='/'>
                    <button className='buttonback'>Voltar para Login</button>
                </Link>
            </div>

        </div>
    );
}

export default Register;