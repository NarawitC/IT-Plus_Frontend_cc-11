import { useEffect, useRef, useState } from 'react';

import { useAuthContext } from '../../contexts/Client/AuthCcontexts';
import { FcNext } from 'react-icons/fc';
import ChangeMyinfo from './FromInfo/ChangeMyinfo';
function ClientProfilePage() {
  const [PersonalInformation, setPersonalInformation] = useState(null);
  const { user } = useAuthContext();
  const [currentChangeInfo, setcurrentChangeInfo] = useState(null);
  const PersonalInformationkeys = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'address',
  ];
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
  const inputEInfo = useRef();

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
                          inputEInfo.current.click();
                          setcurrentChangeInfo({
                            [PersonalInformationkeys[idx]]:
                              Object.values(el)[0],
                          });
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
        <ChangeMyinfo
          inputEInfo={inputEInfo}
          currentChangeInfo={currentChangeInfo}
        />

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
      </div>
    </>
  );
}

export default ClientProfilePage;
