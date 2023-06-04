import { LegacyRef } from "react";

export interface IField {
  placeholder: string;
  key: string;
  required?: boolean;
  type?: string;
  options?: Array<{
    name: string;
    value: any;
  }>;
}

interface IRequest extends IField {
  reference: LegacyRef<HTMLSelectElement | HTMLInputElement>
}

export default function Input({ placeholder, reference, type, options }: IRequest) {
  const className = 'pl-2 block mx-auto w-4/6 border-[1px] rounded-sm h-9 border-gray-400 max-w-md text-gray-800 appearance-none'

  return (
    <div className="h-full">
     {type === "select" && options?.length
      ? <select
          className={className}
          ref={reference as LegacyRef<HTMLSelectElement>}
      >
        {options.map(opt => <option value={opt.value} key={opt.name}>{opt.name}</option>)}
      </select>
      : <input
        className={className}
        type={type || "text"}
        placeholder={placeholder}
        ref={reference as LegacyRef<HTMLInputElement>}
      />}
    </div>
  )
}
