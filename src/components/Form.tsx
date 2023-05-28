import InputText from '@/components/InputText'
import Button from '@/components/Button'

interface IInput{
  key: string;
  value: string;
}

interface IField {
  placeholder: string;
  key: string;
  required?: boolean;
}

interface IRequest {
  submitButtonTitle: string;
  onSubmit(data: Array<IInput>): any;
  fields: Array<IField>;
  submitButtonIcon?: any;
}

export default function Form({
  submitButtonTitle,
  onSubmit,
  fields,
  submitButtonIcon,
}: IRequest) {
  const values: any = {};

  function handleSubmit() {
    const valuesParsed: Array<IInput> = [];

    fields.forEach(field => valuesParsed.push({
      key: field.key,
      value: values[field.key] || "",
    }))

    onSubmit(valuesParsed)
  }

  function handleFieldChange(event: any, key: string) {
    values[key] = event.target.value;
  }

  return (
    <div className="h-full bg-white w-full">
      <div className='h-full max-w-5xl mx-auto'>
        <div className='[&>*]:mb-6 [&>*:nth-child(7)]:mb-0'>
          {fields.map(field => <InputText
            key={field.key}
            placeholder={field.placeholder}
            onChange={(event) => handleFieldChange(event, field.key)}
          />)}
        </div>

        <div className='mx-auto w-1/2 h-10 max-w-xs flex mt-6'>
          <div className='ml-4 grow'>
            <Button
              title={submitButtonTitle}
              onClick={handleSubmit}
              icon={submitButtonIcon}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
