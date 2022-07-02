import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../contexts/Admin/AdminContext';

function DevSignIn() {
  const { adminLogin } = useAdminContext();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function HidePassword() {
    let x = document.getElementById('myInput');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

  const handleSubmit = async (e) => {
    try {
      console.log('first');
      e.preventDefault();
      const result = await adminLogin({ employeeId, password });
      console.log(result);
      if (result) {
        navigate('/admin/client');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Sign Up</h1>
            <p className='py-6'>
              NOTICE! Restricted Path for only autorized personal
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Admin</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter User'
                  className='input input-bordered'
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Enter Password'
                  className='input input-bordered'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button onClick={handleSubmit} className='btn btn-primary'>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevSignIn;
