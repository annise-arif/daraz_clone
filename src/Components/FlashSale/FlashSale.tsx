import FLASH_SALE from '../../API/flash_sale';
import Card from './Card';

const FlashSale = () => {
	const time = new Date().toLocaleTimeString();
	console.log(time);

	return (
		<div className='justify-center align-middle w-[63%] mx-auto pb-11'>
			<h3 className='text-2xl text-gray-500 mb-[4px]'>FlashSale</h3>
			<div className='flash-sale bg-white'>
				<div className='on_sale_now flex justify-between'>
					<div className='title_and_ending_time flex py-3 px-5'>
						<small className='text-orange-600 mr-20 text-[14px] font-medium mt-2'>On Sale Now</small>
						<div className='ending_time flex text-[14px]'>
							<span className='mr-5 mt-2'>Ending in</span>
							
							<div className='hour bg-orange-500 w-[36px] text-center pt-2 rounded-sm h-[36px] text-white align-middle justify-center'>
							10
							</div>
							<div className='hour w-[18px] text-center pt-2 rounded-sm h-[36px] text-orange-500 align-middle justify-center'>
							:
							</div>
							<div className='hour bg-orange-500 w-[36px] text-center pt-2 rounded-sm h-[36px] text-white align-middle justify-center'>
							07
							</div>
							<div className='hour w-[18px] text-center pt-2 rounded-sm h-[36px] text-orange-500 align-middle justify-center'>
							:
							</div>
							<div className='hour bg-orange-500 w-[36px] text-center pt-2 rounded-sm h-[36px] text-white align-middle justify-center'>
							45
							</div>
							
						</div>
					</div>
					<button className='border-orange-500 px-2 text-sm text-orange-500 mt-[0.8rem] mr-[0.8rem] h-[36px] border rounded-sm'>
						SHOP MORE
					</button>
				</div>
				<hr />
				<div className='products pb-4 bg-white grid gap-3.5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-cols-max h-auto mx-auto'>
					{FLASH_SALE.map((item) => {
						return <Card key={item.id} item={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default FlashSale;
