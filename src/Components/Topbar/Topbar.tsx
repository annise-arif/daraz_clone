import topbar from '../../API/Topbar';

const Topbar = () => {
	return (
		<div>
			<ul className='flex bg-[#cfcfcf6b] lg:pl-[528px] lg:pr-60 py-1'>
				{topbar.map((item) => (
					<li
						className='text-[11.5px] lg:mr-9 sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'
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
