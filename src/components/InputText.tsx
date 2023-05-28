interface IRequest {
  placeholder: string;
  onChange: (event: any) => any | void;
}

export default function InputText({ placeholder, onChange }: IRequest) {
  return (
    <div className="h-full">
     <input
      className='pl-2 block mx-auto w-4/6 border-[1px] rounded-sm h-9 border-gray-400 max-w-md text-gray-800'
      type="text"
      placeholder={placeholder}
      onChange={onChange}
     />
    </div>
  )
}
