import NAV_ITEMS from '../../API/constants';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const listClassNames =
	'absolute top-0 bg-white shadow-lg py-[9.5px] w-[12.3rem] h-[21.4rem] text-[13px] text-[#757575]';

const RenderThirdItem = ({ data }: { data: (typeof NAV_ITEMS)[0] }) => {
	return (
		<React.Fragment>
			<li className={`nav-item top-0`}>
				<a
					className='py-[3.8px] pl-[8px] hover:text-[rgb(50,146,170)] flex justify-between hover:bg-[rgb(236,239,241)]'
					href='/'
				>
					{data.title}
				</a>
			</li>
		</React.Fragment>
	);
};

const RenderSecondItem = ({ data }: { data: (typeof NAV_ITEMS)[0] }) => {
	const [hovered, setHovered] = useState(false);
	return (
		<React.Fragment>
			<li
				onMouseOver={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className={`nav-item top-0`}
			>
				<a
					className='py-[3.8px] pl-[8px] hover:text-[rgb(50,146,170)] flex justify-between hover:bg-[rgb(236,239,241)]'
					href='/'
				>
					{data.title}

					{hovered == true && (
						<span className=' text-[rgb(0,126,159)] -mb-2 -mt-[2px] material-symbols-outlined'>
							chevron_right
						</span>
					)}
				</a>
				{hovered == true && (
					<div>
						{data.childrens?.length > 0 && (
							<ul className={twMerge(listClassNames, ['left-[12.3rem]'])}>
								{data.childrens.map((e: any) => {
									return <RenderThirdItem key={e.id} data={e} />;
								})}
							</ul>
						)}
					</div>
				)}
			</li>
		</React.Fragment>
	);
};

const RenderSingleItem = ({ data }: { data: (typeof NAV_ITEMS)[0] }) => {
	return (
		<React.Fragment>
			<li className={`nav-item group top-0`}>
				<a
					className='py-[3.8px] pl-[8px] hover:text-[rgb(50,146,170)] flex justify-between group hover:bg-[rgb(236,239,241)]'
					href='/'
				>
					{data.title}

					<span className='hidden group-hover:block text-[rgb(0,126,159)] -mb-2 -mt-[2px] material-symbols-outlined'>
						chevron_right
					</span>
				</a>
				{data.childrens?.length > 0 && (
					<ul className={twMerge(listClassNames, [' hidden group-hover:block left-[12.3rem]'])}>
						{data.childrens.map((e: any) => {
							return <RenderSecondItem key={e.id} data={e} />;
						})}
					</ul>
				)}
			</li>
		</React.Fragment>
	);
};

const NavItemList = ({ data }: any) => {
	return (
		<ul className={listClassNames}>
			{data.map((e: any) => {
				return <RenderSingleItem key={e.id} data={e} />;
			})}
		</ul>
	);
};

const NavMenu = () => {
	return (
		<div className='relative'>
			<NavItemList data={NAV_ITEMS} />
		</div>
	);
};

export default NavMenu;
