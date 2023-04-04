
type cardData = {
	id: number;
	img: string;
	title: string;
	new_price: string;
	old_price: string;
	purcent: string;
}[];
const Card = ({ item }: cardData) => {
	return (
		<div className='card cursor-pointer mt-2 flash_sale_card w-[11.75rem] rounded-none p-0 m-0 h-[18.140rem] bg-base-100 hover:shadow-[1px_3px_5px_0.6px_#00000024]'>
			<figure>
				<img src={item.img} alt='Shoes' />
			</figure>
			<div className='card-body py-4 px-2'>
				<p className='text-sm text-ellipsis overflow-hidden ...'>{item.title}</p>
				<span className='text-orange-600 text-[18px]'>৳{item.new_price}</span>
				<p>
					<span className='text-[11.5px] font-semibold text-gray-400 line-through mr-1.5'>
						৳{item.old_price}
					</span>
					<span className='text-xs text-gray-900 font-[500]'>{item.purcent}</span>
				</p>
			</div>
		</div>
	);
};

export default Card;
