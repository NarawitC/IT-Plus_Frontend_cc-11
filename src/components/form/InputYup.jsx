import { Controller, useFormContext } from 'react-hook-form';

function InputYup({ name, text, ...props }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='col d-flex flex-column gap-1'>
      <label
        htmlFor={`${text}Input`}
        className='font-text-primary font-weight-500 ms-2'
      >
        {text}
      </label>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <input
              className='form-control'
              value={value}
              onChange={onChange}
              {...props}
              id={`${text}Input`}
            ></input>
          );
        }}
        name={name}
      />
      {errors[name] ? (
        <div className='text-red-600 text-sm mt-1 align-self-end '>
          {errors[name].message}
        </div>
      ) : (
        <div className='text-red-600  ms-2'>&nbsp;</div>
      )}
    </div>
  );
}

export default InputYup;
