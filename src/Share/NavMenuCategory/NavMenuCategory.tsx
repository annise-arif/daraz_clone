import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

const NavMenuCategory = () => {
	const [hovered, setHovered] = useState(false);
	return (
		<div className='bg-white sticky top-[10.3%] z-30'>
			<div className='nave-menu-category w-[60.3%] h-[40px] mx-auto'>
				<div className='w-[200px] h-[40px] pt-[11px]'>
					<a href='' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
						<span className='flex text-[#666666de] text-[14px] align-bottom font-[Roboto-Medium]'>
							Categories
							{hovered ? (
								<span className='w-[16px] h-[16px] mt-[2px] ml-[11px] font-extrabold'>
									<IoChevronUpSharp className='text-[16.8px] text-black' />
								</span>
							) : (
								<span className='w-[16px] h-[16px] mt-[2px] ml-[11px] font-extrabold'>
									<IoChevronDownSharp className='text-[16.8px] text-black' />
								</span>
							)}
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavMenuCategory;
