import * as yup from 'yup';
import FormYup from '../../../components/form/FormYup';
import SubmitButtonYup from '../../../components/form/SubmitButtonYup';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EdituserInfo } from '../../../apis/client/client';

function ChangeMyinfo({ inputEInfo, currentChangeInfo }) {
  const navigete = useNavigate();
  const [anymodal, setAnymodal] = useState(false);
  const [newChange, SetnewChange] = useState('');
  useEffect(() => {
    moutedFunction();
  }, [currentChangeInfo]);

  // console.log(Object.keys(currentChangeInfo));
  const moutedFunction = async () => {
    if (currentChangeInfo) {
      SetnewChange(Object.values(currentChangeInfo)[0]);
    }
  };

  const handleEditSubmit = async (newChangekey, newChangevalue) => {
    const input = { [newChangekey]: newChangevalue };
    // console.log(input);
    const { data } = await EdituserInfo(input);
    console.log(data);
  };
  // const schema = yup.object().shape({
  // phoneNumber: yup
  //   .string()
  //   .required('Phone number is required')
  //   .min(10, 'Phone number must be 10 characters')
  //   .max(10, 'Phone number must be 10 characters'),
  // email: yup
  //   .string()
  //   .required('Email is required')
  //   .email('Email is invalid format'),
  // password: yup.string().required('Password is required'),
  // confirmPassword: yup.string().required('Confirm password is required'),
  // });
  return (
    <div
      ref={inputEInfo}
      id='medium-modal'
      className={`${
        anymodal ? '' : 'hidden'
      } overflow-y-auto overflow-x-hidden fixed m-auto z-40 w-screen bg-gray-600/50 inset-0 md:inset-0 h-screen md:h-screen flex  justify-center`}
      onClick={() => {
        setAnymodal((prev) => !prev);
      }}
    >
      <div className='text-slate-600 p-4 max-w-1/2 w-1/2 h-fit md:h-auto items-center z-50'>
        <div
          className='flex  flex-col  rounded-lg  my-40 shadow items-center'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // console.log({ [Object.keys(currentChangeInfo)]: newChange });
              handleEditSubmit(Object.keys(currentChangeInfo), newChange);
            }}
            className='p-2 flex flex-col z-10 rounded-lg justify-around sm:p-4 mb-2 w-full bg-[#FAFAFA] border-2'
          >
            <p className='mx-2 cursor-default '>
              Edit: {currentChangeInfo ? Object.keys(currentChangeInfo) : ''}
            </p>
            <div className='flex  flex-row'>
              <div className='flex flex-1 '>
                <input
                  name='email'
                  value={newChange}
                  // text={'Confirm password'}
                  className='form-control block w-full mx-2  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  onChange={(e) => {
                    SetnewChange(e.target.value);
                  }}
                />
              </div>
              <div className='flex'>
                <button
                  type='submit'
                  className={
                    'btn btn-primary bg-[#fffff] hover:bg-transparent border-2 w-1/2 text-gray-900 hover:text-gray-900 font-medium h-9'
                  }
                >
                  Confirm
                </button>
                <button
                  className={
                    'btn btn-warning bg-red-500 hover:bg-red-600 border-2 w-1/2 text-gray-900 hover:text-gray-900 font-medium h-9'
                  }
                >
                  Cancle
                </button>
              </div>
            </div>
          </form>

          <div className='Header flex flex-initial flex-row w-full justify-between'></div>
        </div>
      </div>
    </div>
  );
}

export default ChangeMyinfo;
