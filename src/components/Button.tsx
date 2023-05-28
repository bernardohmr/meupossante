import Image from 'next/image'

interface IRequest {
  title: string;
  onClick(): any;
  className?: string;
  icon?: any;
}

export default function Button({ title, onClick, className, icon }: IRequest) {
  return (
    <div className="w-full h-full max-w-md mx-auto">
      <button
        className="w-full h-full rounded-[0.2rem] border-[1px] text-red-900 min-h-[1.3em] border-red-900 hover:bg-red-900 hover:text-white"
        onClick={onClick}
      >
        <div className='mx-auto'>
          <span className={"inline-block my-auto text-sm text-center m-2 " + className}>{title}</span>
          {icon && <Image
            className='inline-block max-h-[20px] -mr-4'
            src={icon}
            alt="Ícone botão"
          />}
        </div>
      </button>
    </div>
  )
}
