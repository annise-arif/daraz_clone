import { useParams } from 'react-router-dom';
import JustForYouDataById from '../../API/JustForYouDataById';
import Slider from 'react-slick';
import './ProductDetails.css';

const ProductDetails = () => {
	let { _id } = useParams();
	const service = JustForYouDataById(_id);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
	};

	return (
		<div key={_id} className='single-product-details bg-[#eff0f5]'>
			<div className='grid grid-cols-7 gap-4 justify-center align-middle w-[62%] mx-auto bg-white'>
				<div className='item-galary w-[330px] h-[402] col-span-2'>
					<div className='galary-preview-panel border-b'>
						<div className='galary-preview-panel-content mb-3 h-[330px] w-[330px]'>
							<img src={service[0]?.img} alt='' className='h-full w-full' />
						</div>
					</div>
					<div className='next-slick w-[330px] mt-2 h-auto mb-6'>
						<Slider className='slick-track h-[52px]' {...settings}>
							<div className='slick-item'>
								<img
									className='w-[52px] h-[52px]'
									src='https://static-01.daraz.com.bd/p/160fbb8e37e475aacf4d3a455c15b083.jpg_100x100.jpg_.webp'
									alt='img'
								/>
							</div>
							<div className=''>
								<img
									className='w-[52px] h-[52px]'
									src='https://static-01.daraz.com.bd/p/160fbb8e37e475aacf4d3a455c15b083.jpg_100x100.jpg_.webp'
									alt='img'
								/>
							</div>

							<div>
								<img
									className='w-[52px] h-[52px]'
									src='https://static-01.daraz.com.bd/p/9aff6546cbb73715dd9721a8b0f3b6e4.jpg_100x100.jpg_.webp'
									alt='img'
								/>
							</div>
							<div>
								<img
									className='w-[52px] h-[52px]'
									src='https://static-01.daraz.com.bd/p/e10d57f84e6a9142bb21da8680e9cb62.jpg_100x100.jpg_.webp'
									alt='img'
								/>
							</div>
							<div>
								<img
									className='w-[52px] h-[52px]'
									src='https://static-01.daraz.com.bd/p/cb60775bebe1c161551eda85e050f609.jpg_100x100.jpg_.webp'
									alt='img'
								/>
							</div>
							<div>
								<img
									className='w-[52px] h-[52px]'
									src='https://static-01.daraz.com.bd/p/f41d5942e635e6971d7612f074a8301d.jpg_100x100.jpg_.webp'
									alt='img'
								/>
							</div>
							<div>
								<img
									className='w-[52px] h-[52px]'
									src='https://static-01.daraz.com.bd/p/2013ba09630b038ddc932861334d16e3.jpg_100x100.jpg_.webp'
									alt='img'
								/>
							</div>
						</Slider>
					</div>
				</div>

				<div className='col-span-3'>07</div>
				<div className='col-span-2 bg-orange-400'>06</div>
			</div>
		</div>
	);
};

export default ProductDetails;
