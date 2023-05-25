interface IRequest {
  feature: string;
  description: string;
}

export default function CarFeaturesItem({ feature, description }: IRequest) {
  return (
    <div className="text-black mb-2 sm:text-xl lg:text-2xl sm:w-1/3 sm:flex-shrink-0 sm:mb-4 md:mb-8">
      <p className="font-semibold">{feature}</p>
      <p className="font-light tracking-tighter -mt-1 sm:mt-0 sm:tracking-normal">{description}</p>
    </div>
  )
}
