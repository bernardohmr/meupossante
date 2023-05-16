interface IRequest {
  title: string;
  onClick(): any;
  className?: string;
}

export default function Button({ title, onClick, className }: IRequest) {
  return (
    <div className="w-full h-full">
      <button
        className="w-full h-full rounded-[0.2rem] border-[1px] text-red-900 min-h-[1.3em] border-red-900 hover:bg-red-900 hover:text-white"
        onClick={onClick}
      >
        <span className={"block my-auto text-xs text-center m-2 " + className}>{title}</span>
      </button>
    </div>
  )
}
