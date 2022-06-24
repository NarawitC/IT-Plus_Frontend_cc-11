import { Controller, useFormContext } from 'react-hook-form';

function TextAreaYup({ name, text, ...props }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="col d-flex flex-column gap-2">
      <label
        htmlFor={`${text}Input`}
        className="font-text-primary font-weight-500 ms-2"
      >
        {text}
      </label>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <textarea
              rows={5}
              className="form-control"
              value={value}
              onChange={onChange}
              {...props}
              id={`${text}Input`}
            ></textarea>
          );
        }}
        name={name}
      />
      {errors[name] ? (
        <div className="text-danger font-size-8 me-2 align-self-end ">
          {errors[name].message}
          <i className="fa-solid fa-circle-exclamation ms-2 font-size-12"></i>
        </div>
      ) : (
        <div className="text-danger font-size-8 ms-2">&nbsp;</div>
      )}
    </div>
  );
}

export default TextAreaYup;
