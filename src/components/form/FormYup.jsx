import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// ------------------------------------------ Yup ------------------------------------------
function FormYup({ onSubmit, defaultValues = {}, children, schema, style }) {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      <form
        className='p-3 py-4 d-flex flex-column gap-4 bg-light1'
        onSubmit={methods.handleSubmit((data) => {
          onSubmit(data);
        })}
        style={style}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default FormYup;
