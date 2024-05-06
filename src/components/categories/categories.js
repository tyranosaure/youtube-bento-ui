import React from 'react'
import Link from 'next/link'

function CategoriesContainer({ gridPosition = '', Categories = [{ label: 'Pas de categories', href: '/' }] }) {
	return (
		<div className={`${gridPosition} bg-white/10 p-6 rounded-xl flex gap-x-3 overflow-x-scroll no-scrollbar`}>
			{Categories.map(({ label, href, active }, index) => (
				<Category
					key={index}
					label={label}
					href={href}
					active={active}
				/>
			))}
		</div>
	)
}

function Category({ label = 'Pas de label', href = '/', active = false }) {
	return (
		<Link
			href={href}
			className={`${
				active ? 'bg-[#FF0000]' : 'bg-white/10'
			} px-3 py-[6px] rounded-lg whitespace-nowrap hover:bg-white/50 transition text-xs`}
		>
			{label}
		</Link>
	)
}

export default CategoriesContainer
