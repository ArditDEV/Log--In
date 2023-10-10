import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Foooter from './Foooter';



function LoginUser() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();


  
    // Dergo te Databaza a egziston ky user

    axios.post('http://localhost:5000/kontrolloUser', { email, password })
      .then((res) => {

        if (res.data.userEgziston) {
          alert('Faleminderit që u kyqet.');
          navigate('/');

        } else {
          alert('Ky User nuk egziston. Ju lutem kontrolloni email dhe password ose krijo nje User te ri.');
        }
        })
        .catch((err) => {
          console.log('Error:', err);
          alert('Problem per tu kyqur.');
        });
    };
  
  

  return (


    <div className='d-flex vh-100 justify-content-center align-items-center' style={{
          backgroundImage: 'linear-gradient(to right, #1AEAB5 50%, white 50%)',
          backgroundSize: '100% 50%',
          }}>

        <div className=' w-25 rounded p-3' style={{backgroundColor:'white' }}>
              <form onSubmit={handleLogin}>
              <h2>Log in</h2>


              <div className='mb-2'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='text'
                    id='email'
                    placeholder='Enter Email'
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
              </div>

              <div className='mb-2'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    id='password'
                    placeholder='Enter Password'
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
              </div>

                
              <div className='d-flex justify-content-center align-items-center flex-column'>
                  <button className=' w-100 btn  btn-lg' style={{ backgroundColor:' #17D4A4', margin: '10px' }}>Log in</button>
                  <p>or</p>
                  <Link to='/create' className=' w-100 btn  btn-lg' style={{ backgroundColor:' #317C64', margin: '10px' }}>
                    Create your account
                  </Link> 
             </div>


            </form>

        </div>
        <Foooter/>

    </div>
  );
}

export default LoginUser;
