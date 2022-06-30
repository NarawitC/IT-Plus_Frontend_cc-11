import { useEffect, useState } from 'react';
import * as yup from 'yup';
import FormYup from '../../components/form/FormYup';
import InputYup from '../../components/form/InputYup';
import SubmitButtonYup from '../../components/form/SubmitButtonYup';
import { useAuthContext } from '../../contexts/Client/AuthCcontexts';
import { FcNext } from 'react-icons/fc';
function ClientProfilePage() {
  const [PersonalInformation, setPersonalInformation] = useState(null);
  const { user } = useAuthContext();
  const schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .min(10, 'Phone number must be 10 characters')
      .max(10, 'Phone number must be 10 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid format'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().required('Confirm password is required'),
  });
  useEffect(() => {
    if (user) {
      const PersonalInformation = [
        { Firstname: user.firstName },
        { Lastname: user.lastName },
        { Email: user.email },
        { Phone: user.phoneNumber },
        { Adress: user.address },
      ];
      // console.log(user);
      setPersonalInformation(PersonalInformation);
    }
  }, []);
  return (
    <>
      <div className='flex flex-col justify-start w-full '>
        <div className='p-2 sm:p-4 mb-2 w-full bg-[#FAFAFA] border-2'>
          <h3 className='text-lg font-medium mb-2 leading-6 text-gray-900'>
            Personal Information
          </h3>
          <p className='mt-1 text-sm mb-2 text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>
          {PersonalInformation?.map((el, idx) => {
            // console.log(Object.values(el)[0]);
            return (
              <div
                key={idx}
                className='w-full bg-white border-collapse border-2 flex flex-row'
              >
                <p className='mt-1 text-gray-600 py-4 px-8 text-base font-bold md:w-40'>
                  {Object.keys(el)}
                </p>
                <p className='mt-1 flex-1 text-gray-600 py-4 px-2'>
                  {Object.values(el)[0] === null ? (
                    '-'
                  ) : (
                    <>
                      {Object.values(el)}
                      <FcNext
                        color='gray'
                        className='inline ml-4  '
                        onClick={(e) => {
                          console.log(el);
                          console.log('create edit profile function here');
                        }}
                      />
                    </>
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className='p-2 sm:p-4 mb-2 w-full bg-[#FAFAFA] border-2'>
          <h3 className='text-lg font-medium mb-2 leading-6 text-gray-900'>
            Security Information
          </h3>
          <div className='w-full bg-white border-collapse border-2 flex flex-row'>
            <p className='mt-1 text-gray-600 py-4 px-8 text-base font-bold md:w-40'>
              Password
            </p>
            <p className='mt-1 flex-1 text-gray-600 py-4 px-2'>{'*******'}</p>
          </div>
        </div>
        <div className='p-2 sm:p-4 mb-2 w-full bg-[#FAFAFA] border-2'>
          <h3 className='text-lg font-medium mb-2 leading-6 text-gray-900'>
            Promotion Receive
          </h3>
          <div className='w-full bg-white border-collapse border-2 flex flex-row'>
            <p className='mt-1 text-gray-600 py-4 px-8 text-base font-normal'>
              Recive Promotion information form It Plus
            </p>
            <input type='checkbox' className='toggle toggle-primary my-auto' />
          </div>
        </div>

        {/* <InputYup
            name='email'
            text={'Confirm password'}
            className='form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          />
          <InputYup
            name='email'
            text={'Confirm password'}
            className='form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          />
          <InputYup
            name='email'
            text={'Confirm password'}
            className='form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          /> */}
        <FormYup className='p-2 sm:p-4 mb-2 w-full bg-[#FAFAFA] border-2'>
          <InputYup
            name='email'
            text={'Confirm password'}
            className='form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          />
          <SubmitButtonYup
            className={
              'btn btn-primary bg-[#fffff] hover:bg-transparent border-2 w-1/3 text-gray-900 hover:text-gray-900 font-medium h-9'
            }
          >
            Confirm
          </SubmitButtonYup>
          <button
            className={
              'btn btn-warning bg-red-500 hover:bg-red-600 border-2 w-1/3 mx-8 text-gray-900 hover:text-gray-900 font-medium h-9'
            }
          >
            Cancle
          </button>
        </FormYup>
      </div>
    </>
  );
}

export default ClientProfilePage;
