import Stars from './Stars';

type JUST_FOR_YOU = {
	id: number;
	img: string;
	title: string;
	new_price: string;
	old_price: string;
	purcent: string;
};
const JustForYouCard = ({ items }: any) => {
	return (
		<div className='card mt-2 flash_sale_card w-[11.75rem] rounded-none p-0 m-0 h-[18.140rem] bg-base-100 hover:shadow-[1px_3px_5px_0.6px_#00000024]'>
			<figure>
				<img src={items.img} alt='Shoes' />
			</figure>
			<div className='card-body py-4 px-2'>
				<p className='text-sm text-ellipsis overflow-hidden ...'>{items.title}</p>
				<span className='text-orange-600 text-[18px]'>৳{items.new_price}</span>
				<p className=''>
					<span className='text-[11.5px] font-semibold text-gray-400 line-through mr-1.5'>
						৳{items.old_price}
					</span>
					<span className='text-xs text-gray-900 font-[500]'>{items.purcent}</span>
				</p>
				<div className='card_jfy_ratings flex justify-start'>
					<div className='rating_icons'>
						<Stars stars={items?.stars} reviews={items?.reviews} />
					</div>
					<div className='rating_comments'></div>
				</div>
			</div>
		</div>
	);
};

export default JustForYouCard;
