import NAV_ITEMS from '../../API/constants';
import React, { useState } from 'react';




const RenderSingleItem = ({
	data,
	level,
  }: {
	data: typeof NAV_ITEMS[0];
	level?: number;
  }) => {
	const [hovered, setHovered] = React.useState(false);
  
	return (
	  <React.Fragment>
		<li
		  className={`nav-item group top-0`}
		  onMouseOver={() => setHovered(true)}
		  onMouseLeave={() => setHovered(false)}
		>
		  <a
			className='py-[3.8px] pl-[8px] hover:text-[rgb(50,146,170)] flex justify-between group hover:bg-[rgb(236,239,241)]'
			href='/'
		>
			{data.title}

			<span className='hidden group-hover:block text-[rgb(0,126,159)] -mb-2 -mt-[2px] material-symbols-outlined'>
				chevron_right
			</span>
		</a>
		
		</li>
		{hovered && <NavItemList data={data.childrens ?? ([] as any)} />}
		
	  </React.Fragment>
	);
  };


const NavItemList = ({ data, level = 0, }: any) => {
	
	return (
		<ul
			className='absolute top-0 bg-white shadow-lg py-[9.5px] w-[12.3rem] h-[21.4rem] text-[13px] text-[#757575]'
		>
			{
				data.map((e: any) => {
					return <RenderSingleItem key={e.id} data={e} level={level} />
				})
			}
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
