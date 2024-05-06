import React from 'react'
import Image from 'next/image'

function Card({ id, title, picture, accountPicture, accountName, views, date, duration }) {
	return (
		<div
			id={id}
			className='relative flex items-center justify-center h-full rounded-2xl'
		>
			<div className='relative flex flex-col w-full h-full overflow-hidden transition-all hover:shadow-[0_0_30px_30px_rgba(255,255,255,0.03)] cursor-pointer rounded-2xl hover:scale-105 aspect-[7/6]'>
				<div className='absolute flex items-stretch w-full h-full z-1 rounded-2xl'>
					<Image
						src={picture}
						alt='miniature'
						className='object-contain mt-auto blur-xl filter brightness-50'
						fill={true}
						sizes='(max-width: 768px) 100vw, 33vw'
					/>
				</div>
				<div className='relative z-10 flex-1 w-full'>
					<Image
						src={picture}
						alt='miniature'
						className='object-cover h-full rounded-t-2xl'
						fill={true}
						sizes='(max-width: 768px) 100vw, 33vw'
					/>
					<div className='absolute z-10 flex px-[6px] rounded-full bottom-2 right-2 backdrop-blur-3xl bg-black/[30%]'>
						{duration}
					</div>
				</div>
				<div className='relative z-10 flex gap-2 p-3 bg-white/5 h-[80px] rounded-b-2xl'>
					<div className='w-7 h-7 aspect-square'>
						<Image
							src={accountPicture}
							alt='account'
							className='rounded-sm aspect-square max-w-7 max-h-7'
							fill={true}
							sizes='(max-width: 768px) 100vw, 33vw'
						/>
					</div>
					<div className='flex flex-col overflow-hidden w-fit'>
						<div className='text-sm text-white overflow-ellipsis line-clamp-2'>{title}</div>
						<div className='flex items-center gap-1 text-[10px] text-white/50 text-nowrap'>
							<div className=''>{accountName}</div>
							<div className='w-1 h-1 rounded-full bg-white/50' />
							<div>4,6 M de vues</div>
							<div className='w-1 h-1 rounded-full bg-white/50' />
							<div>Il y a 1 m</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
