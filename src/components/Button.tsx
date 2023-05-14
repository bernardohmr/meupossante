interface IRequest {
  onClick(): any,
  title: string;
}

export default function Button({ onClick, title }: IRequest) {
  return (
    <button
      className="rounded-sm border-[1px] border-red-900 hover:bg-red-900 hover:text-white"
      onClick={onClick}
    >
      <span className="text-xs text-center text-red-900 mx-2">{title}</span>
    </button>
  )
}
