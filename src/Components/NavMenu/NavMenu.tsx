import NAV_ITEMS from '../../API/constants';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

type Items = {
	id: number;
	title: string;
	link: string;
	childrens?: Items[];
};

type NavItemListProps = {
	items: Items[];
	className?: string;
	liClassName?: string;
};

const NavItemList = ({ items, className, liClassName }: NavItemListProps) => {
	const [hovered, setHovered] = useState(false);
	return (
		<ul
			className={twMerge([
				'bg-white shadow-lg py-[9.5px] w-[12.3rem] h-[21.4rem] text-[13px] text-[#757575]',
				className,
			])}
		>
			{items.map((item) => (
				<li key={item.id} className={liClassName} >
					<a
						className='py-[3.8px] pl-[8px] hover:text-[rgb(50,146,170)] flex justify-between group hover:bg-[rgb(236,239,241)]'
						href='/'
					>
						{item.title}

						<span className='hidden text-[rgb(0,126,159)] -mb-2 -mt-[2px] group-hover:block material-symbols-outlined'>
							chevron_right
						</span>
					</a>
					{item?.childrens && item?.childrens?.length > 0 && (
						<NavItemList
							items={item.childrens}
							className={'absolute top-0 left-[12.3rem] hidden group-hover:block'}
							liClassName='group'
						/>
					)}
				</li>
			))}
		</ul>
	);
};

const NavMenu = () => {
	return (
		<div className='relative'>
			<NavItemList items={NAV_ITEMS} liClassName='group' />
		</div>
	);
};

export default NavMenu;
