import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Block({ children, gridPosition = '' }) {
	return <div className={`${gridPosition} bg-[var(--background-secondary)] p-4 rounded-2xl flex flex-col gap-1`}>{children}</div>
}

function SidebarLink({ icon, label = 'No label', href = '/', active = false }) {
	return (
		<Link
			key={href + '-' + label}
			href={href}
			className={`flex gap-4 ${active ? ' bg-[var(--button-bg-active)]' : 'hover:bg-white/5'} items-center rounded-lg p-2 transition`}
		>
			<Image
				src={icon}
				alt='icon'
				className='filter invert'
			/>
			<span className='flex-1'>{label}</span>
		</Link>
	)
}

function SidebarAccount({ icon, label = 'No label', href = '/', active = false }) {
	return (
		<Link
			key={href + '-' + label}
			href={href}
			className={`flex gap-[6px] ${
				active ? ' bg-[var(--button-bg-active)]' : 'hover:bg-white/5'
			} items-center rounded-lg p-2 transition`}
		>
			<Image
				src={icon}
				alt='icon'
				className='rounded-md'
			/>
			<span className='flex-1'>{label}</span>
		</Link>
	)
}

function Separator(label) {
	return (
		<div
			key={'separator-' + label}
			className='flex items-center gap-4 p-4 text-[#6B7280]'
		>
			{label}
			<div className='flex-1 h-[1px] bg-[#6B7280]'></div>
		</div>
	)
}

function Title(label) {
	return (
		<div
			key={'title-' + label}
			className='flex items-center gap-4 p-2 text-[#6B7280]'
		>
			{label}
		</div>
	)
}

export { Block, SidebarLink, SidebarAccount, Separator, Title }
