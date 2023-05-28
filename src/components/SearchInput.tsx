interface IRequest {
  onClick(): any,
  onChange: (event) => any | void;
  onSubmit?: () => any,
  placeholder?: string;
  defaultValue?: string;
}

export default function SearchInput({ onClick, onChange, placeholder, defaultValue, onSubmit, ...rest }: IRequest) {
  return (
    <div className='flex items-center bg-white rounded-md h-full'>
      <div onClick={onClick}>
        <svg
          className="w-4 h-4 mx-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <input
        placeholder={placeholder}
        className='bg-white w-full h-full rounded-md text-gray-700 focus:outline-none'
        title='search'
        defaultValue={defaultValue}
        onChange={onChange}
        onKeyDown={(event) => { if(event.key === "Enter" && onSubmit) onSubmit() }}
      >
      </input>
    </div>
  )
}
