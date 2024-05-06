import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import YoutubeLogo from '@/assets/icons/Youtube-logo.svg'
import SearchIcon from '@/assets/icons/Search.svg'
import CreateIcon from '@/assets/icons/Plus-circle.svg'
import NotificationsIcon from '@/assets/icons/Bell.svg'
import Account from '@/assets/images/account.png'

function Header() {
	return (
		<header className='flex items-stretch justify-between mx-auto mt-10 mb-6 space-x-6 h-14'>
			<Link
				href='/'
				className='flex items-center justify-center w-[200px] bg-[#FF0000] rounded-xl hover:scale-105 transition'
			>
				<Image
					priority
					src={YoutubeLogo}
					alt="Retour à l'accueil"
				/>
			</Link>

			<div className='flex-1 flex bg-[var(--background-secondary)] hover:scale-[103%] color-[var(--text-secondary)] rounded-xl py-1 px-4 space-x-2 transition'>
				<Image
					src={SearchIcon}
					alt='Rechercher'
					className='filter invert'
				/>
				<input
					type='text'
					placeholder='Rechercher'
					className='flex-1 bg-transparent outline-none'
				/>
			</div>
			<div className='w-[200px] flex items-center justify-between bg-[var(--background-secondary)] color-[var(--text-secondary)] rounded-xl'>
				<div className='flex items-center flex-1 justify-evenly'>
					<Image
						src={CreateIcon}
						alt='Créer'
						className='w-6 h-6 transition cursor-pointer filter invert hover:scale-110'
					/>
					<Image
						src={NotificationsIcon}
						alt='Notification'
						className='w-6 h-6 transition cursor-pointer filter invert hover:scale-110'
					/>
				</div>
				<div className='flex h-full transition cursor-pointer aspect-square hover:scale-110'>
					<Image
						src={Account}
						alt='account'
						className='object-contain aspect-square rounded-xl'
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
