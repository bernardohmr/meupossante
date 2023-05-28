import Image from 'next/image';
import Router from 'next/router'

import logo from '@/../public/images/logo.svg'

interface IRequest {
	title: string;
	subtitle: string;
}

export default function DefaultHeader({ title, subtitle }: IRequest) {
	return (
		<div className='p-4 flex items-end'>
			<Image
				className='inline-block mr-6'
				src={logo}
				alt="Logo"
				onClick={() => Router.back()}
			/>
			<div className='inline-block h-full my-auto'>
				<div className='h-full flex flex-col sm:flex-row sm:items-end'>
					<p className='text-black font-semibold sm:text-3xl sm:font-normal'>{title}</p>
					<p className='text-gray-700 sm:text-xl sm:ml-2'>{subtitle}</p>
				</div>
			</div>
		</div>
	)
}
