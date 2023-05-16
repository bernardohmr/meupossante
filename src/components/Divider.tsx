interface IRequest {
  width?: number;
}

export default function Divider({ width }: IRequest) {
  return (
    <div className="my-2">
      <div className={`w-[${width || 100}%] border-b-[1px] border-b-zinc-400 mx-auto`}>
      </div>
    </div>
  )
}
