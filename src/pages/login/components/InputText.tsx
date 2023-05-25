export default function InputText({ placeholder }) {
  return (
    <div className="">
     <input
      className='pl-2 block mx-auto w-4/6 mb-2 border-[1px] rounded-sm h-9 border-gray-400 max-w-md'
      type="text"
      placeholder={placeholder}
     />
    </div>
  )
}
