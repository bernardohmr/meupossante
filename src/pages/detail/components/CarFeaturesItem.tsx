interface IRequest {
  feature: string;
  description: string;
}

export default function CarFeaturesItem({ feature, description }: IRequest) {
  return (
    <div className="text-black">
      <p className="font-semibold">{feature}</p>
      <p className="text-sm font-light tracking-tighter">{description}</p>
    </div>
  )
}
