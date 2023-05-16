interface IRequest {
  onClick(): any,
  title: string;
}

export default function Button({ onClick, title }: IRequest) {
  return (
    <button
      className="rounded-[0.2rem] border-[1px] min-h-[1.3em] border-red-900 hover:bg-red-900 hover:text-white"
      onClick={onClick}
    >
      <span className="block my-auto text-xs text-center text-red-900 m-2">{title}</span>
    </button>
  )
}
