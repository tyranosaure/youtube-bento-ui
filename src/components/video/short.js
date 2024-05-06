'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import Shorts from '@/assets/icons/Youtube shorts.svg'
import NoMiniature from '@/assets/fake-videos/short-1.png'

function ShortContainer({ gridPosition = '', shorts = [{ title: 'no title', vues: 123000 }], miniature = NoMiniature, href = '/' }) {
	return (
		<Carousel
			orientation='horizontal'
			className={`${gridPosition} flex items-stretch gap-x-6`}
		>
			<div className='w-[80px] flex flex-col justify-between'>
				<Link
					href='/'
					className='transition hover:scale-110'
				>
					<Image
						src={Shorts}
						className='w-full'
						alt='shorts'
					/>
				</Link>
				<CarouselNext className='relative top-0 bottom-0 left-0 right-0 bg-[var(--background-secondary)] w-full h-[90px] rounded-2xl m-0 p-0 translate-y-0 border-0 transition hover:scale-110' />
				<CarouselPrevious className='relative top-0 bottom-0 left-0 right-0 bg-[var(--background-secondary)] w-full h-[90px] rounded-2xl m-0 p-0 translate-y-0 border-0 transition hover:scale-110' />
			</div>
			<CarouselContent
				containerClassProp='h-full flex-1 overflow-x-auto no-scrollbar'
				className='h-full p-0 m-0 translate-x-0 gap-x-[23px]'
			>
				{shorts.map((short, index) => (
					<CarouselItem
						key={index}
						className='relative w-[180px] basis-auto p-0 m-0'
					>
						<Link
							href={href}
							className='relative flex flex-col h-full overflow-hidden transition rounded-xl '
						>
							<Image
								src={miniature}
								alt='miniature'
								className='absolute bottom-0 left-0 z-0 object-contain blur-xl'
							/>
							<Image
								src={miniature}
								alt='miniature'
								className='z-10 flex-1 object-cover'
							/>
							<div className='z-10 p-3'>
								<p className='text-sm overflow-ellipsis line-clamp-2'>{short.title}</p>
								<p className='text-xs text-white/50'>87 k vues</p>
							</div>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}

export default ShortContainer
