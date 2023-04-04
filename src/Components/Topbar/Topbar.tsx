import topbar from '../../API/Topbar';

const Topbar = () => {
	return (
		<div className='sm:d-none z-10'>
			<ul className='flex bg-[#ECECEC] lg:pl-[528px] lg:pr-60 py-[0.28rem]'>
				{topbar.map((item) => (
					<li
						className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'
						key={item.id}
					>
						{item.item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Topbar;
