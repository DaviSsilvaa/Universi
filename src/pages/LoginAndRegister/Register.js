import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
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
            navigate('/');
            viewClick();
          })
          .catch(error => {
            setMessage('Erro ao registrar o usuário. Tente novamente mais tarde.');
            console.error(error);
          });
      };

      const viewClick = () => {
        Swal.fire({
          icon: "success",
          title: "Usuário registrado com sucesso",
          showConfirmButton: true
        });
      }

    return (
        
        <div className='register'>
            <h1 className='TextRegister'>Cadastro</h1>

            <form className='registerForm'>
                <label htmlFor='login' className='registerLabel'>Nome de usuário</label>
                <input type='text' id='login' className='registerInput' onChange={(e) => setLogin(e.target.value)}/>

                <label htmlFor='senha' className='registerLabel'>Senha</label>
                <input type='password' id='senha' className='registerInput' onChange={(e) => setSenha(e.target.value)}/>

                <label htmlFor='role' className='registerLabel'>Função</label>
                <select id='role' className='registerInput' onChange={(e) => setRole(e.target.value)}>
                    <option value='USER'>USER</option>
                    <option value='ADMIN'>ADMIN</option>
                </select>

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