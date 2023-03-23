import img4 from '../../assets/img/cardChannel/5d8af600-1012-4d1b-9d9c-095caf0dfc52.png';
import img3 from '../../assets/img/cardChannel/51f58fdb-87aa-48eb-9210-4a2ed75cfc65.png';
import img2 from '../../assets/img/cardChannel/444ad0ea-276f-446e-87fa-316b5c8be869.png';
import img5 from '../../assets/img/cardChannel/267d1f8d-a314-4993-bddf-6c9f9cac1386.png';
import img1 from '../../assets/img/cardChannel/081a6a1e-5c9e-44a9-8f8d-2bdcb76769a2.png';

const CARD_CHANNEL_DATA = [
	{
		id: 1,
		img: img1,
		title: 'Free Dalivery',
	},
	{
		id: 2,
		img: img2,
		title: 'Mart',
	},
	{
		id: 3,
		img: img3,
		title: "Men's Fashion",
	},
	{
		id: 4,
		img: img4,
		title: "Women's Fashion",
	},
	{
		id: 5,
		img: img5,
		title: 'Beauty & Glamour',
	},
];

const CardChannel = () => {
	return (
		<div className='flex justify-center pb-10 pt-1'>
			{CARD_CHANNEL_DATA.map(({ id, img, title }) => {
				return (
					<button
						key={id}
						className='group flex mr-4 bg-white hover:shadow-md w-[14rem] px-[4px] py-1 justify-between rounded-full hover:text-[rgb(218,146,235)]'
					>
						<div className='flex'>
							<img src={img} alt='img' width='32px' className='mr-4' />
							<h3 className='mt-1 text-lg'>{title}</h3>
						</div>
						<span className='hidden group-hover:block material-symbols-outlined mt-1'>
							chevron_right
						</span>
					</button>
				);
			})}
		</div>
	);
};

export default CardChannel;
