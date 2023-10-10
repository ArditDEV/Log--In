import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Foooter';


function CreateUser() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordkontrolla, setPasswordKontrolla] = useState('');

  const navigate = useNavigate();



  const handlePasswordChange = (value) => {
    setPassword(value);

    // Validate the password and set the warning message

    if (!/(?=.*[A-Z])(?=.*[a-z]).{8,}/.test(value)) {
          setPasswordKontrolla('Password must contain at least one uppercase letter and be at least 8 characters long.');
        } else {
          setPasswordKontrolla('');
        }
      };



  const handleSignup = (event) => {
    event.preventDefault();

    // Kontrollo nese pasfordi o mir , nese sosht mes tbohet signup
    
    if (passwordkontrolla) {
      
      return;
    }
    // Krijo objekt mja qu databazes

    const user = { name, email, password };



    axios.post('http://localhost:5000/create', user)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (


    <div className='d-flex vh-100 justify-content-center align-items-center' style={{
         backgroundImage: 'linear-gradient(to right, #1AEAB5 50%, white 50%)',
         backgroundSize: '100% 50%',
         }}>      


          <div className='w-30 bg-white rounded p-3'>
              <form onSubmit={handleSignup}>
                <h2>Sign up</h2>

                <div className='mb-2'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    placeholder='Enter Name'
                    className='form-control'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
          </div>


           <div className='mb-2'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
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
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    required
                  />
                  {passwordkontrolla && <p className='text-danger'>{passwordkontrolla}</p>}
            </div>


            <div className='d-flex justify-content-center align-items-center flex-column'>
              <button className=' w-100 btn  btn-lg' style={{ backgroundColor:' #17D4A4', margin: '10px' }}>Sign UP</button>
              <p>By creating an account you agree  to our Terms of Service and Privacy Policy.</p>
              <Link to='/' className=' w-100 btn  btn-lg' style={{ backgroundColor:' #317C64', margin: '10px' }}>
                Log in
              </Link>
            </div>

            </form>
         </div>
         <Footer/>


    </div>
  );
}

export default CreateUser;
