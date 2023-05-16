interface IRequest {
  feature: string;
  description: string;
}

export default function CarFeaturesItem({ feature, description }: IRequest) {
  return (
    <div className="text-black sm:text-xl lg:text-2xl sm:w-1/3 sm:flex-shrink-0">
      <p className="font-semibold">{feature}</p>
      <p className="font-light tracking-tighter sm:tracking-normal">{description}</p>
    </div>
  )
}
