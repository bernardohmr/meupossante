import Input, { IField } from '@/components/Input'
import Button from '@/components/Button'
import Loader from './Loader';
import { useRef } from 'react';

interface IRequest {
  submitButtonTitle: string;
  onSubmit(data: any): any;
  fields: Array<IField>;
  submitButtonIcon?: any;
  isLoading?: boolean;
  isLoadedWithSuccess?: boolean;
  isLoadedWithError?: boolean;
  submitSuccessMessage?: string;
  submitErrorMessage?: string;
}

export default function Form({
  submitButtonTitle,
  onSubmit,
  fields,
  submitButtonIcon,
  isLoading,
  isLoadedWithSuccess,
  isLoadedWithError,
  submitSuccessMessage,
  submitErrorMessage,
}: IRequest) {
  const refsMap: { [key: string]: any } = {};

  fields
    .forEach(field => refsMap[field.key] = useRef());

  function handleFormSubmit(event) {
    // event.preventDefault();
    const form = event.target;

    handleSubmit();
    form.reset();
  }

  function handleSubmit() {
    const valuesParsed: { [key: string]: any } = {};

    fields.forEach(field => valuesParsed[field.key] = refsMap[field.key]?.current?.value || "")

    onSubmit(valuesParsed)
  }

  return (
    <div className="h-full bg-white w-full">
      <form
        className='h-full max-w-5xl mx-auto'
        onSubmit={handleFormSubmit}
      >
        <div className='[&>*]:mb-6'>
          {fields.map(field => <Input
            key={field.key}
            placeholder={field.placeholder}
            reference={refsMap[field.key]}
            type={field.type || "text"}
            options={field.options}
          />)}
        </div>

        <div className='mx-auto w-1/2 h-10 max-w-xs flex mt-6'>
          {!isLoading && <div className='ml-4 grow'>
            <Button
              title={submitButtonTitle}
              onClick={handleSubmit}
              icon={submitButtonIcon}
            />
          </div>}
          {isLoading && <Loader />}
        </div>

        {isLoadedWithSuccess && !isLoading && <div className='mx-auto my-6 text-black text-center'>{submitSuccessMessage || "Enviado!"}</div>}
        {isLoadedWithError && !isLoading && <div className='mx-auto my-6 text-black text-center'>{submitErrorMessage || "Ops, algo deu errado!"}</div>}
      </form>
    </div>
  )
}
